import React, { useEffect, useState } from "react";
import { useNavigate ,link} from 'react-router-dom';
import axios from "axios";
import "../assets/css/profile.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avtuser from "../assets/img/avt_user.png";

const Suaprofile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/api/thongtinnguoidung", {
      method: "GET",
      credentials: "include", 
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          setUser (data.user);
        } else {
          navigate("/login");  
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
        navigate("/login");
      });
  }, [navigate]);

  const handleUpdate = () => {
  fetch("http://localhost:3001/api/capnhatthongtin", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      HoTen: user.HoTen,
      Email: user.Email,
      DiachiKH: user.DiachiKH,
      MoTa: user.MoTa,
      Avatar: user.Avatar,
    }),
    credentials: "include",
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    localStorage.setItem('userInfo', JSON.stringify({
      HoTen: user.HoTen,
      Email: user.Email,
      DiachiKH: user.DiachiKH,
      MoTa: user.MoTa,
      Avatar: user.Avatar, 
    }));
      fetch("http://localhost:3001/api/thongtinnguoidung", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.user) {
            setUser(data.user); 
            
          }
          navigate("/bepcanhan");
        })
        .catch((error) => {
          console.error("Error fetching updated user data:", error);
        });
    })
    .catch((error) => {
      console.error("Error updating user data:", error);
      alert("Cập nhật thông tin thất bại!");
    });
};
const handleAvatarUpload = (e) => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);

    axios.post('http://localhost:3001/api/upload-avatar', formData, { 
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
    .then((response) => {
      alert(response.data.message);
      setUser((prevUser) => ({
        ...prevUser,
        Avatar: response.data.avatar,
      }));
    })
    .catch((error) => {
      console.error("Error uploading avatar:", error);
      alert("Tải ảnh thất bại!");
    });
  };

  const handleAvatarDelete = () => {
    axios.delete('http://localhost:3001/api/delete-avatar', { withCredentials: true })
      .then((response) => {
        alert(response.data.message);
        setUser((prevUser) => ({
          ...prevUser,
          Avatar: null,
        }));
      })
      .catch((error) => {
        console.error("Error deleting avatar:", error);
        alert("Xóa ảnh thất bại!");
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
            {user ? (
              <div className="profile-container">
                <div className="profile-header">
                  <div className="profile-image">
                    <img src={user.Avatar || avtuser} alt="avatar" />
                    <div className="edit-buttons">
                      <label className="edit">
                        Edit
                        <input type="file" onChange={handleAvatarUpload} style={{ display: 'none' }} />
                      </label>
                      <button className="delete" onClick={handleAvatarDelete}>Delete</button>
                    </div>
                  </div>
                  <div className="profile-info">
                    <label for="name">Tên</label>
                    <input
                      type="text"
                      id="name"
                      value={user.HoTen}
                      onChange={(e) => setUser({ ...user, HoTen: e.target.value })}
                    />
                    <label for="id">ID Cookpad</label>
                    <input
                      type="text"
                      id="id"
                      disabled
                      value={user.TaiKhoan}
                    />
                    <label for="email">E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      value={user.Email}
                      onChange={(e) => setUser({ ...user, Email: e.target.value })}
                    />
                    <label for="origin">Đến từ</label>
                    <input
                      type="text"
                      id="origin"
                      value={user.DiachiKH}
                      onChange={(e) => setUser({ ...user, DiachiKH: e.target.value })}
                    />
                    <label for="bio">Tự giới thiệu về bạn và niềm vui nấu nướng của bạn</label>
                    <textarea
                      id="bio"
                      rows="4"
                      value={user.MoTa}
                      onChange={(e) => setUser({ ...user, MoTa: e.target.value })}
                    />
                  </div>
                </div>
                <div className="profile-actions">
                  <button className="update-btn" onClick={handleUpdate}>Cập nhật</button>
                  <button onClick={() => navigate("/bepcanhan")} className="cancel-btn">Bỏ qua</button>
                </div>
              </div>
            ) : (
              <p>Thông tin người dùng không khả dụng.</p>
            )}
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Suaprofile;
