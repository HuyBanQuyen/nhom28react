import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/css/monmoi.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avt from "../assets/img/avt.png";
import useDropdown from "../assets/js/useDropdownMonmoi";

const SuaMon = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(null); // Để lưu trữ file hình ảnh
  const [imagePreview, setImagePreview] = useState(null); // Để lưu trữ ảnh preview
  const [tenMonAn, setTenMonAn] = useState("");
  const [moTa, setMoTa] = useState("");
  const [nguyenLieuList, setNguyenLieuList] = useState([]); // Để lưu trữ nguyên liệu
  const [huongDanList, setHuongDanList] = useState([]); // Để lưu trữ hướng dẫn

  const navigate = useNavigate();
  const { visibleDropdown, toggleDropdown } = useDropdown([".ingredient-icon"]);

  useEffect(() => {
    fetch("http://localhost:3001/api/thongtinnguoidung", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        } else {
          navigate("/dangnhap");
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
        navigate("/dangnhap");
      });

    axios
      .get(`http://localhost:3001/api/baiviet/${id}`)
      .then((response) => {
        const { baiViet, nguyenLieu, huongDan } = response.data;
        setTenMonAn(baiViet.TenMonAn);
        setMoTa(baiViet.MoTa);

        const updatedNguyenLieu = nguyenLieu.map((nl, index) => ({
          ...nl,
          isFixed: index < nguyenLieu.length,
        }));
        setNguyenLieuList(updatedNguyenLieu);

        // Nhóm các ảnh thuộc cùng một bước lại với nhau
        const groupedHuongDan = huongDan.reduce((acc, curr) => {
          const existingStep = acc.find(step => step.MaHuongDan === curr.MaHuongDan);
          if (existingStep) {
            existingStep.AnhMinhHoa.push(curr);
          } else {
            acc.push({
              MaHuongDan: curr.MaHuongDan,
              BuocSo: curr.BuocSo,
              MoTaBuoc: curr.MoTaBuoc,
              AnhMinhHoa: [curr],
            });
          }
          return acc;
        }, []);
        setHuongDanList(groupedHuongDan);

        setImagePreview(`http://localhost:3001/${baiViet.HinhAnhChinh}`);
      })
      .catch((error) => {
        console.error("Error fetching bài viết:", error);
      });
  }, [id, navigate]);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    const imageUrl = URL.createObjectURL(selectedImage);
    setImagePreview(imageUrl);
  };

  const handleNguyenLieuChange = (index, key, value) => {
    const newNguyenLieuList = [...nguyenLieuList];
    newNguyenLieuList[index][key] = value;
    setNguyenLieuList(newNguyenLieuList);
  };

  const handleAddNguyenLieu = () => {
    setNguyenLieuList([
      ...nguyenLieuList,
      { MaNguyenLieu: null, TenNguyenLieu: "", SoLuong: "" },
    ]);
  };

  const handleRemoveNguyenLieu = (index) => {
    const newNguyenLieuList = nguyenLieuList.filter((_, i) => i !== index);
    setNguyenLieuList(newNguyenLieuList);
  };

  const handleHuongDanChange = (index, key, value) => {
    const newHuongDanList = [...huongDanList];
    newHuongDanList[index][key] = value;
    setHuongDanList(newHuongDanList);
  };

  const handleAddHuongDan = () => {
    setHuongDanList([
      ...huongDanList,
      { MaHuongDan: null, BuocSo: huongDanList.length + 1, MoTaBuoc: "", AnhMinhHoa: [] },
    ]);
  };

  const handleRemoveHuongDan = (index) => {
    const newHuongDanList = huongDanList.filter((_, i) => i !== index);
    setHuongDanList(newHuongDanList);
  };

  const handleAnhMinhHoaChange = (huongDanIndex, anhIndex, file) => {
    const newHuongDanList = [...huongDanList];
    const anhUrl = URL.createObjectURL(file);
    newHuongDanList[huongDanIndex].AnhMinhHoa[anhIndex] = {
      file,
      url: anhUrl,
      oldPath: newHuongDanList[huongDanIndex].AnhMinhHoa[anhIndex]?.DuongDanAnh,
      MaAnh: newHuongDanList[huongDanIndex].AnhMinhHoa[anhIndex]?.MaAnh,
    };
    setHuongDanList(newHuongDanList);
  };

  const handleRemoveAnhMinhHoa = async (huongDanIndex, anhIndex) => {
    const newHuongDanList = [...huongDanList];
    const { MaAnh } = newHuongDanList[huongDanIndex].AnhMinhHoa[anhIndex];
    if (MaAnh) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/xoa-anh/${MaAnh}`);
        alert(response.data.message);
        newHuongDanList[huongDanIndex].AnhMinhHoa[anhIndex].toBeDeleted = true;
        setHuongDanList(newHuongDanList);
      } catch (error) {
        console.error("Lỗi khi xóa ảnh:", error);
        alert("Có lỗi xảy ra khi xóa ảnh");
      }
    } else {
      newHuongDanList[huongDanIndex].AnhMinhHoa.splice(anhIndex, 1);
      setHuongDanList(newHuongDanList);
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    formData.append("tenMonAn", tenMonAn);
    formData.append("moTa", moTa);
    formData.append("nguyenLieu", JSON.stringify(nguyenLieuList));
    formData.append("huongDan", JSON.stringify(
      huongDanList.map((huongDan) => ({
        ...huongDan,
        AnhMinhHoa: huongDan.AnhMinhHoa.map((anh) => ({
          ...anh,
          toBeDeleted: anh.toBeDeleted || false,
        }))
      }))
    ));
    

    huongDanList.forEach((huongDan, huongDanIndex) => {
      huongDan.AnhMinhHoa.forEach((anh, anhIndex) => {
        if (anh.file) {
          formData.append(`huongDan_${huongDan.MaHuongDan}_anh_${anhIndex}`, anh.file);
        }
      });
    });

    axios
      .put(`http://localhost:3001/api/suabaiviet/${id}`, formData)
      .then((response) => {
        alert(response.data.message);
        navigate("/trangchu");
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật món ăn:", error);
        alert("Có lỗi xảy ra khi cập nhật món ăn");
      });
  };

  if (isLoading) {
    return <p>Đang tải thông tin người dùng...</p>;
  }

  return (
    <div className="main">
      <div className="container">
        <Sidebar />
        <main className="content">
          <Header />
          <section className="banner-canhan">
            <div className="section-content">
              <div className="content-1">

              <div className="image-upload">
                  <input
                    type="file"
                    id="recipe-image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="recipe-image" className="image-placeholder">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Ảnh món ăn"
                        className="image-preview"
                      />
                    ) : (
                      <p>Chọn hình ảnh món của bạn</p>
                    )}
                  </label>
                </div>
                <div className="recipe-info">
                  <input
                    type="text"
                    id="recipe-name"
                    placeholder="Tên món"
                    value={tenMonAn}
                    onChange={(e) => setTenMonAn(e.target.value)}
                  />
                  <div className="avartar">
                    <a>
                      <div className="avt">
                        <img
                          src={
                            user?.Avatar
                              ? `http://localhost:3001/${user.Avatar}`
                              : avt
                          }
                          alt="avatar"
                        />
                      </div>
                      <div className="name">
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            {user.HoTen}
                          </span>
                          <span>@{user.TaiKhoan}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <textarea
                    id="recipe-description"
                    placeholder="Mô tả món ăn"
                    value={moTa}
                    onChange={(e) => setMoTa(e.target.value)}
                  />
                </div>
              </div>
              <div className="content-2">
                <div className="nguyenlieu">
                  <h2>Nguyên Liệu</h2>
                  {nguyenLieuList.map((nguyenLieu, index) => (
                    <div className="thanhphan" key={index}>
                      <div className="ration">
                        <div className="ration-title">
                          <span>Số Lượng</span>
                        </div>
                        <input
                          type="text"
                          placeholder="Số lượng"
                          value={nguyenLieu.SoLuong}
                          onChange={(e) =>
                            handleNguyenLieuChange(index, "SoLuong", e.target.value)
                          }
                        />
                      </div>
                      <div className="ingredient-container">
                        <div className="ingredient">
                          <textarea
                            placeholder="Nguyên liệu"
                            maxLength="200"
                            value={nguyenLieu.TenNguyenLieu}
                            onChange={(e) =>
                              handleNguyenLieuChange(index, "TenNguyenLieu", e.target.value)
                            }
                          />
                          {!nguyenLieu.isFixed && (
                            <div className="ingredient-icon" id="ingredient-icon">
                              <i className="fa-solid fa-ellipsis"></i>
                              <div className="dropdown-menu">
                                <button
                                  className="delete-button"
                                  onClick={() => handleRemoveNguyenLieu(index)}
                                >
                                  Xóa nguyên liệu
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="addingredient" onClick={handleAddNguyenLieu}>
                    <span>+ Nguyên liệu</span>
                  </div>
                </div>
                <div className="cacbuoc">
                  <h2>Các Bước</h2>
                  {huongDanList.map((huongDan, index) => (
                    <div className="prepare" key={index}>
                      <div className="prepare-text">
                        <div className="number">{index + 1}</div>
                        <div className="textarea">
                          <textarea
                            placeholder="Mô tả bước"
                            maxLength="200"
                            value={huongDan.MoTaBuoc || ""}
                            onChange={(e) => handleHuongDanChange(index, "MoTaBuoc", e.target.value)}
                          />
                        </div>
                        <div className="prepare-text-icon" id="prepare-text-icon">
                          <i className="fa-solid fa-ellipsis" id="toggleMenu"></i>
                          <div className="cacbuoc-dropdown-menu" id="dropdownMenu">
                            <button className="cacbuoc-delete-button" onClick={() => handleRemoveHuongDan(index)}>
                              Xóa bước
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="image-upload">
                        {huongDan.AnhMinhHoa.map((anh, anhIndex) => (
                          <div key={anhIndex} className="image-wrapper">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleAnhMinhHoaChange(index, anhIndex, e.target.files[0])}
                            />
                            <div className="image-container">
                              {anh.DuongDanAnh && !anh.file && (
                                <img
                                  src={`http://localhost:3001/${anh.DuongDanAnh}`}
                                  alt={`Hình ảnh bước ${index + 1} - ${anhIndex + 1}`}
                                  className="image-preview"
                                />
                              )}
                              <p>{anh.file?.name || anh.DuongDanAnh || "Chưa chọn ảnh"}</p>
                              <button onClick={() => handleRemoveAnhMinhHoa(index, anhIndex)}>Xóa ảnh</button>
                            </div>
                          </div>
                        ))}
                        {huongDan.AnhMinhHoa.length < 3 && (
                          <div className="image-upload-wrapper">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleAnhMinhHoaChange(index, huongDan.AnhMinhHoa.length, e.target.files[0])}
                            />
                            <p>Thêm ảnh</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="addingredient-2" onClick={handleAddHuongDan}>
                    <span>+ Thêm Bước</span>
                  </div>
                </div>
              </div>
              <button className="submit-button" onClick={handleSubmit}>
                Lưu Món Ăn
              </button>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default SuaMon;
