import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../assets/css/profile.css";
import "../assets/css/follow.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avt from "../assets/img/avt.png";

const TheoDoi = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [nguoiDuocTheoDoi, setNguoiDuocTheoDoi] = useState([]);
  const [nguoiTheoDoi, setNguoiTheoDoi] = useState([]);
  const [showDuocTheoDoi, setShowDuocTheoDoi] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/user/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    const fetchUserRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/congthuc/${id}`);
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching user recipes:", error);
      }
    };
  
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/trangthai", {
          withCredentials: true,
        });
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
          setCurrentUser(response.data.user);
          checkFollowingStatus(response.data.user.MaNguoiDung, id);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };
  
    const checkFollowingStatus = async (NguoiTheoDoi, NguoiDuocTheoDoi) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/kiemtratheodoi/${NguoiTheoDoi}/${NguoiDuocTheoDoi}`);
        setIsFollowing(response.data.isFollowing);
      } catch (error) {
        console.error("Error checking following status:", error);
      }
    };
  
    const fetchNguoiDuocTheoDoi = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/nguoiduoctheodoi/${id}`);
        console.log(response.data); // Kiểm tra dữ liệu trả về từ API
        setNguoiDuocTheoDoi(response.data);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };
  
    const fetchNguoiTheoDoi = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/nguoitheodoi/${id}`);
        console.log(response.data); // Kiểm tra dữ liệu trả về từ API
        setNguoiTheoDoi(response.data);
      } catch (error) {
        console.error("Error fetching followings:", error);
      }
    };
  
    fetchUserData();
    fetchUserRecipes();
    checkLoginStatus();
    fetchNguoiDuocTheoDoi();
    fetchNguoiTheoDoi();
  }, [id]);
  

  const handleFollow = async () => {
    try {
      await axios.post("http://localhost:3001/api/theodoi", {
        NguoiTheoDoi: currentUser.MaNguoiDung,
        NguoiDuocTheoDoi: id,
      });
      setIsFollowing(true);
      setUserData((prevUserData) => ({
        ...prevUserData,
        SoTheoDoi: prevUserData.SoTheoDoi + 1,
      }));
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await axios.delete("http://localhost:3001/api/huytheodoi", {
        data: {
          NguoiTheoDoi: currentUser.MaNguoiDung,
          NguoiDuocTheoDoi: id,
        },
      });
      setIsFollowing(false);
      setUserData((prevUserData) => ({
        ...prevUserData,
        SoTheoDoi: prevUserData.SoTheoDoi - 1,
      }));
    } catch (error) {
      console.error("Error unfollowing user:", error);
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="main">
      <div className="container">
        <Sidebar />
        <main className="content">
          <Header />
          <section className="banner-canhan">
            <div className="profile">
              <div className="profile-user">
                <div className="item-1">
                  <div className="avt">
                    <img src={userData?.Avatar ? `http://localhost:3001/${userData.Avatar}` : avt} alt="avatar" />
                  </div>
                  <div className="text">
                    <div>
                      <a className="Name">{userData.HoTen}</a>
                    </div>
                    <div>
                      <a>@{userData.TaiKhoan}</a>
                    </div>
                  </div>
                </div>
                <div className="item-2">
                  <div className="follow" onClick={() => setShowDuocTheoDoi(true)} >
                    <span className="number">{userData.SoTheoDoi}</span>
                    <span> Người quan tâm </span>
                  </div>
                  <div className="friend" onClick={() => setShowDuocTheoDoi(false)}>
                    <span className="number">{userData.SoDangTheoDoi}</span>
                    <span> Bạn bếp </span>
                  </div>
                </div>
                <div>
                  <p>{userData.MoTa}</p>
                </div>
                <div className="item-3">
                  <div className="text">
                    {isLoggedIn && currentUser?.MaNguoiDung === parseInt(id) ? (
                      <a href={`/suaprofile`}>Sửa thông tin cá nhân</a>
                    ) : isFollowing ? (
                      <button  className="button" onClick={handleUnfollow}>Hủy Kết Bạn Bếp</button>
                    ) : (
                      <button className="button" onClick={handleFollow}>Kết Bạn Bếp</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="title">
              <div className="h1">
                <h1>{showDuocTheoDoi ? "Người quan tâm" : "Bạn bếp"}</h1>
              </div>
            </div>
            <div className="menu-header">
              <span>
                <strong>{showDuocTheoDoi ? nguoiDuocTheoDoi.length : nguoiTheoDoi.length}</strong> {showDuocTheoDoi ? "Người quan tâm" : "Bạn"  }
              </span>
              <div className="search-bar">
                <input type="text" placeholder="Tìm Món" />
                <button>Tìm</button>
              </div>
            </div>
            <div className="column">
              <div className="column-item-follow">
                <ul>
                  {showDuocTheoDoi ? (
                    nguoiDuocTheoDoi.map((nguoi, index) => (
                      <li key={index}>
                        <div className="content-follow">
                          <div className="content-1-follow">
                            <div className="avt-3">
                              <img src={nguoi.Avatar ? `http://localhost:3001/${nguoi.Avatar}` : avt} alt="avatar" />
                            </div>
                            <div className="span">
                              <span className="name">{nguoi.HoTen}</span>
                              <span>@{nguoi.TaiKhoan}</span>
                              <span>{nguoi.SoMon} món</span>
                            </div>
                          </div>
                          <div className="content-2">
                            <div>
                              <p></p>
                            </div>
                          </div>
                        </div>
                        <div className="photo-follow">
                        <Link to={`/bepcanhan/${nguoi.MaNguoiDung}`}> <button className="button"><span>Xem Trang Cá Nhân</span></button> </Link>
                        </div>
                      </li>
                    ))
                  ) : (
                    nguoiTheoDoi.map((nguoi, index) => (
                      <li key={index}>
                        <div className="content-follow">
                          <div className="content-1-follow">
                            <div className="avt-3">
                              <img src={nguoi.Avatar ? `http://localhost:3001/${nguoi.Avatar}` : avt} alt="avatar" />
                            </div>
                            <div className="span">
                            <span className="name">{nguoi.HoTen}</span>
                              <span>@{nguoi.TaiKhoan}</span>
                              <span>{nguoi.SoMon} món</span>
                            </div>
                          </div>
                          <div className="content-2">
                            <div>
                              <p></p>
                            </div>
                          </div>
                        </div>
                        <div className="photo-follow">
                        <Link to={`/bepcanhan/${nguoi.MaNguoiDung}`}> <button className="button"><span>Xem Trang Cá Nhân</span></button> </Link>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default TheoDoi;
