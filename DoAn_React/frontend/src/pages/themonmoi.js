import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/monmoi.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avt from "../assets/img/avt.png";
import useDropdown from "../assets/js/useDropdownMonmoi"; 

const ThemMonMoi = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState(null);  // Để lưu trữ file hình ảnh
  const [imagePreview, setImagePreview] = useState(null); // Để lưu trữ ảnh preview
  const [tenMonAn, setTenMonAn] = useState("");
  const [moTa, setMoTa] = useState(""); 
  const [nguyenLieu, setNguyenLieu] = useState([{ soLuong: "", tenNguyenLieu: "" }]);  // Khởi tạo với một nguyên liệu mặc định
  const [buocHuongDan, setBuocHuongDan] = useState([""]); // State để lưu trữ các bước hướng dẫn
  const [buocHuongDanImages, setBuocHuongDanImages] = useState([[], [], []]); // Mỗi bước có thể có tối đa 3 hình ảnh
  const navigate = useNavigate(); 

  const { visibleDropdown, toggleDropdown } = useDropdown([".ingredient-icon", ".prepare-text-icon"]);
  
 
    useEffect(() => {
        fetch("http://localhost:3001/api/trangthai", {
          method: "GET",
          credentials: "include", 
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.user) {
              setUser (data.user);
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
      }, [navigate]);
      
      const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);  
        const imageUrl = URL.createObjectURL(selectedImage);
        setImagePreview(imageUrl);
      };
      const handleAddNguyenLieu = () => {
        const newNguyenLieu = [...nguyenLieu, { soLuong: "", tenNguyenLieu: "" }];
        setNguyenLieu(newNguyenLieu);
      };
      
      const handleNguyenLieuChange = (index, e) => {
        const updatedNguyenLieu = [...nguyenLieu];  
        updatedNguyenLieu[index] = { 
          ...updatedNguyenLieu[index], 
          [e.target.name]: e.target.value 
        };
        setNguyenLieu(updatedNguyenLieu);
      };
      
      
      const handleRemoveNguyenLieu = (index) => {
        if (index > 0) {
          const updatedNguyenLieu = nguyenLieu.filter((_, i) => i !== index);
          setNguyenLieu(updatedNguyenLieu);
        } else {
          alert("Nguyên liệu gốc không thể bị xóa.");
        }
      };
    
      const handleAddBuoc = () => {
        setBuocHuongDan([...buocHuongDan, ""]); 
        setBuocHuongDanImages([...buocHuongDanImages, []]);
      };
    
      const handleBuocChange = (index, e) => {
        const updatedBuocHuongDan = [...buocHuongDan];
        updatedBuocHuongDan[index] = e.target.value;
        setBuocHuongDan(updatedBuocHuongDan);
      };
     
const handleBuocImageChange = (stepIndex, imageIndex, e) => {
  const selectedImage = e.target.files[0];
  const updatedImages = [...buocHuongDanImages];
  if (!updatedImages[stepIndex]) {
    updatedImages[stepIndex] = [];
  }

  if (updatedImages[stepIndex].length < 3) {
    updatedImages[stepIndex][imageIndex] = selectedImage; 
    setBuocHuongDanImages(updatedImages);
  } else {
    alert("Bạn chỉ có thể tải lên tối đa 3 hình ảnh cho mỗi bước.");
  }
};
      const handleRemoveBuoc = (index) => {
        if (index > 0) {
          const updatedBuocHuongDan = buocHuongDan.filter((_, i) => i !== index);
          setBuocHuongDan(updatedBuocHuongDan);
        } else {
          alert("Bước đầu tiên không thể bị xóa.");
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!tenMonAn.trim()) {
          alert("Tên món ăn là bắt buộc.");
          return;
        }
      
        if (!moTa.trim()) {
          alert("Mô tả món ăn là bắt buộc.");
          return;
        }
        for (let i = 0; i < nguyenLieu.length; i++) {
          const item = nguyenLieu[i];
          if (!item.soLuong.trim() || !item.tenNguyenLieu.trim()) {
            alert(`Nguyên liệu số ${i + 1} chưa được nhập đầy đủ.`);
            return;
          }
        }
        for (let i = 0; i < buocHuongDan.length; i++) {
          const buoc = buocHuongDan[i];
          if (!buoc.trim()) {
            alert(`Bước hướng dẫn số ${i + 1} chưa được nhập mô tả.`);
            return;
          }
        }
      
        const formData = new FormData();
        formData.append("image", image);
        formData.append("tenMonAn", tenMonAn);
        formData.append("moTa", moTa);
        formData.append("maNguoiDung", user.MaNguoiDung);
        formData.append("nguyenLieu", JSON.stringify(nguyenLieu));
        formData.append("buocHuongDan", JSON.stringify(buocHuongDan));

        buocHuongDanImages.forEach((stepImages, stepIndex) => {
          stepImages.forEach((img, imgIndex) => {
            if (img) {
              formData.append(`buocImages_${stepIndex}_${imgIndex}`, img); // Thêm ảnh vào formData với key cụ thể
            }
          });
        });
      
        axios
          .post("http://localhost:3001/api/themmon", formData)
          .then((response) => {
            const { idCongThuc } = response.data;
      
            
            nguyenLieu.forEach((nguyenLieuItem) => {
              axios.post("http://localhost:3001/api/themnguyenlieu", {
                tenNguyenLieu: nguyenLieuItem.tenNguyenLieu,
                soLuong: nguyenLieuItem.soLuong,
                maCongThuc: idCongThuc
              }).catch((err) => {
                console.error("Lỗi khi thêm nguyên liệu", err);
              });
            });
      
            alert(response.data.message);
            navigate("/trangchu");
          })
          .catch((error) => {
            console.error("Lỗi khi thêm món ăn:", error);
            alert("Có lỗi xảy ra khi thêm món ăn");
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
                  <input type="file" id="recipe-image" accept="image/*" onChange={handleImageChange} />
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
                    placeholder="Tên món: Món canh bí ngon nhất nhà mình"
                    value={tenMonAn}
                    onChange={(e) => setTenMonAn(e.target.value)}
                  />

                  <div className="avartar">
                    <a>
                     <div className="avt">
                        <img src={user.Avatar ? `http://localhost:3001/${user.Avatar}` : avt} alt="Avatar" />
                      </div>
                      <div className="name">
                        <div>
                          <span style={{ fontWeight: "bold" }}>{user.HoTen}</span>
                          <span>@{user.TaiKhoan}</span>
                        </div>
                      </div>
                    </a>
                  </div>

                  <textarea
                    id="recipe-description"
                    placeholder="Hãy chia sẻ với mọi người về món này của bạn nhé..."
                    value={moTa}
                    onChange={(e) => setMoTa(e.target.value)}
                  />
                </div>
              </div>

              <div className="content-2">
                  <div className="nguyenlieu">
                    <h2>Nguyên Liệu</h2>
 
                    {nguyenLieu.length > 0 ? (
                      nguyenLieu.map((item, index) => (
                      <div key={index} className="thanhphan">
                        <div className="ration">
                          <div className="ration-title">
                            <span>Số Lượng</span>
                          </div>
                            <input
                            type="text"
                            placeholder="2 quả"
                            name="soLuong"
                            value={item.soLuong}
                            onChange={(e) => handleNguyenLieuChange(index, e)} 
                          />
                        </div>

                        <div className="ingredient-container">
                          <div className="ingredient">
                            <textarea
                              placeholder="Trứng gà"
                              maxLength="200"
                              name="tenNguyenLieu"
                              value={item.tenNguyenLieu}
                              onChange={(e) => handleNguyenLieuChange(index, e)}
                            />
                            {index >= 0 && (  
                              <div className="ingredient-icon" id="ingredient-icon"  onClick={() => toggleDropdown(`ingredient-${index}`)}>
                                <i className="fa-solid fa-ellipsis"></i>
                                {visibleDropdown === `ingredient-${index}` && (
                                <div className="dropdown  -menu">
                                  <button
                                    className="delete-button"
                                    onClick={() => handleRemoveNguyenLieu(index)}
                                  >
                                    Xóa nguyên liệu
                                  </button>
                                </div>
                              )}
                              </div>
                            )}

                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>Không có nguyên liệu nào</p>  
                  )}
                 
                  <div className="addingredient">
                    <span onClick={handleAddNguyenLieu}>+ Nguyên liệu</span>
                  </div>
                </div>

                <div className="cacbuoc">
                  <h2>Các Bước</h2>
                  {buocHuongDan.map((buoc, index) => (
                  <div key={index} className="prepare-container" id="steps-container">
                    <div className="prepare">
                      <div className="prepare-text">
                        <div className="number">{index + 1}</div>
                        <div className="textarea">
                        <textarea
                              placeholder="Mô tả bước"
                              maxLength="200"
                              value={buoc}
                              onChange={(e) => handleBuocChange(index, e)} 
                            />
                        </div>
                        <div className="prepare-text-icon" id="prepare-text-icon">
                          <i className="fa-solid fa-ellipsis" id="toggleMenu"></i>
                          {index > 0 && (
                          <div className="cacbuoc-dropdown-menu" id="dropdownMenu">
                            <button className="cacbuoc-delete-button"  onClick={() => handleRemoveBuoc(index)}>Xóa bước</button>
                          </div>
                        )}
                        </div>
                      </div>

                      <div className="prepare-image">
                      {[0, 1, 2].map((imgIndex) => (
                        <div className="image-upload-container" key={imgIndex}>
                          <div className="image-preview">
                            {buocHuongDanImages[index][imgIndex] && (
                              <img src={URL.createObjectURL(buocHuongDanImages[index][imgIndex])} alt={`Bước ${index + 1} - Ảnh ${imgIndex + 1}`} />
                            )}
                          </div>
                          <label className="image-upload-label">
                            <input type="file" accept="image/*" onChange={(e) => handleBuocImageChange(index, imgIndex, e)} />
                            <i className="fa-solid fa-camera"></i>
                          </label>
                        </div>
                      ))}
                    </div>
                    </div>
                  </div>
                ))}
                  <div className="addingredient-2">
                  <span onClick={handleAddBuoc}>+ Thêm Bước</span>
                  </div>
                </div>
              </div>
            </div>

            <button className="submit-button" onClick={handleSubmit}>Lưu Món Ăn</button>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ThemMonMoi;
