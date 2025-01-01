import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../assets/css/baiviet.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avt from "../assets/img/avt.png";

const BaiViet = () => {
  const { id } = useParams(); // Lấy ID bài viết từ URL
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
  const [baiViet, setBaiViet] = useState(null);
  const [nguyenLieu, setNguyenLieu] = useState([]);
  const [huongDan, setHuongDan] = useState([]);
  const [isOwner, setIsOwner] = useState(false); // Trạng thái để kiểm tra xem người dùng có phải là chủ bài viết không
  const [user, setUser] = useState(null); // Trạng thái để lưu thông tin người dùng
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [comments, setComments] = useState([]); // Trạng thái để lưu trữ bình luận
  const [newComment, setNewComment] = useState(""); // Trạng thái để lưu trữ bình luận mới
  const [editingComment, setEditingComment] = useState(null); // Trạng thái để lưu trữ bình luận đang sửa
  const [editCommentContent, setEditCommentContent] = useState(""); // Trạng thái để lưu nội dung bình luận đang sửa

  useEffect(() => {
    const fetchBaiViet = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/baiviet/${id}`);
        console.log("Dữ liệu từ API:", response.data);
        if (response.data.baiViet) {
          setBaiViet(response.data.baiViet);
          setNguyenLieu(response.data.nguyenLieu);

          // Nhóm các bước theo BuocSo và thu thập tất cả các ảnh của mỗi bước
          const stepsGrouped = response.data.huongDan.reduce((acc, step) => {
            const { BuocSo, MoTaBuoc, DuongDanAnh } = step;

            if (!acc[BuocSo]) {
              acc[BuocSo] = {
                BuocSo,
                MoTaBuoc,
                DuongDanAnh: []
              };
            }

            // Thêm ảnh vào mảng của bước đó
            if (DuongDanAnh) {
              acc[BuocSo].DuongDanAnh.push(DuongDanAnh);
            }
            return acc;
          }, {});

          // Chuyển đối tượng thành mảng để dễ hiển thị
          setHuongDan(Object.values(stepsGrouped));
          
      
          const currentUser = await axios.get("http://localhost:3001/api/thongtinnguoidung", { withCredentials: true }); 
          setUser(currentUser.data.user); 
          if (currentUser.data.user.MaNguoiDung === response.data.baiViet.MaNguoiDung) { 
            setIsOwner(true); 
          }

          const savedResponse = await axios.get(`http://localhost:3001/api/kiemtra-yeuthich/${currentUser.data.user.MaNguoiDung}/${id}`); 
          setIsSaved(savedResponse.data.isSaved);

          const relatedResponse = await axios.get(`http://localhost:3001/api/congthuc/${response.data.baiViet.MaNguoiDung}`); 
          setRelatedPosts(relatedResponse.data.slice(0, 4));
          
          const commentsResponse = await axios.get(`http://localhost:3001/api/binhluan/${id}`); 
          setComments(commentsResponse.data);
        } else {
          console.error("Không có dữ liệu bài viết");
        }
      } catch (error) {
        console.error("Error fetching bài viết:", error);
      }
    };

    fetchBaiViet();
  }, [id]);

  const handleXoaBaiViet = async () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa món ăn này không?")) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/baiviet/${id}`);
        alert("Xóa món ăn thành công!");
        window.location.href = "/";
      } catch (error) {
        console.error("Lỗi khi xóa món ăn:", error.response ? error.response.data : error.message);
        alert("Xóa món ăn thất bại. Vui lòng thử lại.");
      }
    }
  };

  const handleSuaBaiViet = () => {
    navigate(`/suabaiviet/${id}`);
  };

  const handleLuuMon = async () => {
    if (user && baiViet) {
      try {
        const response = await axios.post("http://localhost:3001/api/themyeuthich", {
          maNguoiDung: user.MaNguoiDung,
          maCongThuc: baiViet.MaCongThuc,
        });
        alert(response.data.message);
        setIsSaved(true); 
      } catch (error) {
        console.error("Lỗi khi lưu món:", error.response ? error.response.data : error.message);
        alert("Lưu món thất bại. Vui lòng thử lại.");
      }
    } else {
      alert("Bạn cần đăng nhập để lưu món.");
    }
  };
  
  const handleHuyLuuMon = async () => {
    if (user && baiViet) {
      try {
        const response = await axios.delete("http://localhost:3001/api/huyyeuthich", {
          data: {
            maNguoiDung: user.MaNguoiDung,
            maCongThuc: baiViet.MaCongThuc,
          },
        });
        alert(response.data.message);
        setIsSaved(false); // Cập nhật trạng thái chưa lưu
      } catch (error) {
        console.error("Lỗi khi hủy lưu món:", error.response ? error.response.data : error.message);
        alert("Hủy lưu món thất bại. Vui lòng thử lại.");
      }
    } else {
      alert("Bạn cần đăng nhập để hủy lưu món.");
    }
  };

  const handleAddComment = async () => {
    if (!newComment) return;
    try {
      const response = await axios.post("http://localhost:3001/api/binhluan", {
        MaCongThuc: baiViet.MaCongThuc,
        MaNguoiDung: user.MaNguoiDung,
        NoiDung: newComment
      });
      alert(response.data.message);
      setNewComment(""); 
      setComments([...comments, { NoiDung: newComment, HoTen: user.HoTen, Avatar: user.Avatar, MaBinhLuan: response.data.MaBinhLuan, MaNguoiDung: user.MaNguoiDung }]); // Update comments state
    } catch (error) {
      console.error("Lỗi khi thêm bình luận:", error.response ? error.response.data : error.message);
      alert("Thêm bình luận thất bại. Vui lòng thử lại.");
    }
  };

  const handleEditComment = (comment) => {
    setEditingComment(comment.MaBinhLuan);
    setEditCommentContent(comment.NoiDung);
  };

  const handleSaveEditComment = async (commentId) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/binhluan/${commentId}`, {
        NoiDung: editCommentContent
      });
      alert(response.data.message);
      setComments(comments.map(comment => comment.MaBinhLuan === commentId ? { ...comment, NoiDung: editCommentContent } : comment)); // Update comments state
      setEditingComment(null); 
      setEditCommentContent(""); 
    } catch (error) {
      console.error("Lỗi khi cập nhật bình luận:", error.response ? error.response.data : error.message);
      alert("Cập nhật bình luận thất bại. Vui lòng thử lại.");
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bình luận này không?")) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/binhluan/${commentId}`);
        alert(response.data.message);
        setComments(comments.filter(comment => comment.MaBinhLuan !== commentId)); 
      } catch (error) {
        console.error("Lỗi khi xóa bình luận:", error.response ? error.response.data : error.message);
        alert("Xóa bình luận thất bại. Vui lòng thử lại.");
      }
    }
  };

  const handleBaoCaoBaiViet = () => { navigate(`/baocaobaiviet/${id}`); };

  if (!baiViet) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main">
      <div className="container">
        <Sidebar />
        <main className="content">
          <Header />
          <section className="banner-baiviet">
            <div className="section-content">
              <div className="content-1">
                <div className="image-upload">
                  <label htmlFor="recipe-image" className="image-placeholder">
                    <img src={baiViet.HinhAnhChinh ? `http://localhost:3001/${baiViet.HinhAnhChinh}` : avt} alt="HinhAnhChinh" />
                  </label>
                </div>
                <div className="recipe-info">
                  <h1>{baiViet.TenMonAn}</h1>
                  <div className="avartar">
                    <a>
                      <div className="avt">
                        <img src={baiViet.Avatar ? `http://localhost:3001/${baiViet.Avatar}` : avt} alt="Avatar" />
                      </div>
                      <div className="name">
                        <span className="ten">{baiViet.HoTen}</span>
                        <span className="id">@{baiViet.TaiKhoan}</span>
                      </div>
                    </a>
                  </div>
                  <p>{baiViet.MoTa}</p>
                  <div className="edit-detele">
                    {!isOwner && (
                      isSaved ? (
                        <div className="save2">
                          <div className="save" id="huysave" onClick={handleHuyLuuMon}>
                            <i className="fa-regular fa-bookmark"></i>
                            <div>
                              <span>Hủy Lưu</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="save" onClick={handleLuuMon}>
                          <i className="fa-regular fa-bookmark"></i>
                          <div>
                            <span>Lưu Món</span>
                          </div>
                        </div>
                      )     
                    )}
                    {!isOwner && (
                      <div className="save" onClick={handleBaoCaoBaiViet}>
                      <i className="fa-regular fa-flag"></i>
                        <div>
                          <span>Báo cáo</span>
                        </div>
                      </div>
                    )}
                    {isOwner && (
                      <div className="save" onClick={handleSuaBaiViet}>
                        <i className="fa-regular fa-pen-to-square"></i>
                        <div>
                          <span>Sửa Món</span>
                        </div>
                      </div>
                    )}
                    {isOwner && (
                      <div className="save" onClick={handleXoaBaiViet}>
                        <i className="fa-regular fa-trash"></i>
                        <div>
                          <span>Xóa Món</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="content-2">
                <div className="nguyenlieu">
                  <div>
                    <h2>Nguyên Liệu</h2>
                  </div>
                  <div className="ration">
                    <div className="ration-title">
                      <span>Khẩu Phần:</span>
                    </div>
                    <div>
                      <span>2 người</span>
                    </div>
                  </div>
                  <div className="ingredient-container">
                    <div className="ingredients">
                      {nguyenLieu.map((nl, index) => (
                        <div key={index} className="textarea">{nl.TenNguyenLieu} - {nl.SoLuong}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="cacbuoc">
                  <div>
                    <h2>Hướng dẫn cách làm</h2>
                  </div>
                  <div className="prepare-container" id="steps-container">
                    {huongDan.map((hd, index) => (
                      <div key={index} className="prepare">
                        <div className="prepare-text">
                          <div className="number">{hd.BuocSo}</div>
                          <div className="textarea">
                            <p>{hd.MoTaBuoc}</p>
                          </div>
                        </div>
                        {hd.DuongDanAnh.length > 0 && (
                          <div className="prepare-image">
                            {hd.DuongDanAnh.map((image, imgIndex) => (
                              <div key={imgIndex} className="image-upload-container">
                                <div className="image-preview" id="image-preview-1-1"></div>
                                <label htmlFor="image-upload-1-1" className="image-upload-label no-trash" id="upload-label-1-1">
                                  <img src={`http://localhost:3001/${image}`} alt={`Bước ${hd.BuocSo} - ảnh ${imgIndex + 1}`} />
                                </label>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <hr />
              <div className="content-3">
                <h1>Viết Bởi</h1>
                <div className="column-baiviet">
                  <div className="column-item-baiviet" onClick={() => navigate(`/bepcanhan/${baiViet.MaNguoiDung}`)} >
                    <div className="content-1-baiviet">
                      <div className="avt-3-baiviet">
                        <img src={baiViet.Avatar ? `http://localhost:3001/${baiViet.Avatar}` : avt} alt="HinhAnhChinh" />
                      </div>
                    </div>
                    <div className="content-2-baiviet">
                      <div className="item">
                          <h1>{baiViet.HoTen}</h1>
                        <p>@{baiViet.TaiKhoan}</p>
                        <p>{baiViet.DiaChiKh}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>{baiViet.MoTa}</p>
              </div>
              <hr />
              <div className="content-4-baiviet">
                <div className="content-4-baiviet-1">
                  <div>
                    <h1>Các món khác cùng tác giả</h1>
                  </div>
                  <div>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
                <div className="content-4-baiviet-2">
                  <ul className="ul-baiviet">
                    {relatedPosts.map((post, index) => (
                      <li key={index} className="li-baiviet" onClick={() => navigate(`/baiviet/${post.MaCongThuc}`)}>
                        <div className="khung">
                          <img src={post.HinhAnhChinh ? `http://localhost:3001/${post.HinhAnhChinh}` : avt} alt="HinhAnhChinh" />
                        </div>                  
                          <p>{post.TenMonAn}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr />
              <div className="content-5-baiviet">
                <h2>Bình luận</h2>
                <div className="comment-section">
                  <div className="add-comment">
                    <textarea
                      placeholder="Thêm bình luận của bạn..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    ></textarea>
                    <button onClick={handleAddComment}>Gửi</button>
                  </div>
                  {comments.map((comment, index) => (
                    <div key={index} className="comment" onClick={() => navigate(`/bepcanhan/${comment.MaNguoiDung}`)} >
                      <div className="comment-avatar">
                        <img  src={comment.Avatar ? `http://localhost:3001/${comment.Avatar}` : avt} alt="Avatar" />
                      </div>
                      <div className="comment-content">
                        <h5 >{comment.HoTen}</h5>
                        {editingComment === comment.MaBinhLuan ? (
                          <>
                            <textarea
                              value={editCommentContent}
                              onChange={(e) => setEditCommentContent(e.target.value)}
                            ></textarea>
                            <button onClick={() => handleSaveEditComment(comment.MaBinhLuan)}>Lưu</button>
                            <button onClick={() => setEditingComment(null)}>Hủy</button>
                          </>
                        ) : (
                          <p>{comment.NoiDung}</p>
                        )}
                      </div>
                      {user && user.MaNguoiDung === comment.MaNguoiDung && (
                        <div className="comment-actions">
                          <button onClick={() => handleEditComment(comment)}>Sửa</button>
                          <button onClick={() => handleDeleteComment(comment.MaBinhLuan)}>Xóa</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default BaiViet;



