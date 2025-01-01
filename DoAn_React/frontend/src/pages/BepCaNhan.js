import React, { useState, useEffect } from "react";
import { useParams,useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../assets/css/profile.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avt from "../assets/img/avt.png";

const BepCaNhan = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

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

    fetchUserData();
    fetchUserRecipes();
    checkLoginStatus();
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
                <div className="item-2" onClick={() => navigate(`/theodoi/${userData.MaNguoiDung}`)}>
                
                  <div className="friend">
                    <span className="number">{userData.SoDangTheoDoi}</span>
                    <span> Bạn bếp</span>
                  </div>
                  <div className="follow">
                    <span className="number">{userData.SoTheoDoi}</span>
                    <span> Người quan tâm</span>
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
                <h1>Kho món ăn</h1>
              </div>
            </div>
            <div className="menu-header">
              <span>
                <strong>{userData.TongBaiViet}</strong> Món
              </span>
              <div className="search-bar">
                <input type="text" placeholder="Tìm Món" />
                <button>Tìm</button>
              </div>
            </div>
            <div className="column">
              <div className="column-item">
                <ul>
                  {recipes.map((recipe) => (
                    <li key={recipe.MaCongThuc}>
                      <div className="content">
                        <div className="content-1">
                          <div className="avt-3">
                            <img src={userData?.Avatar ? `http://localhost:3001/${userData.Avatar}` : avt} alt="avatar" />
                          </div>
                          <span>{userData.HoTen}</span>
                        </div>
                        <div className="content-2">
                          <div>
                            <Link to={`/baiviet/${recipe.MaCongThuc}`}>
                              <h1>{recipe.TenMonAn}</h1>
                            </Link>
                            <p>{recipe.MoTa}</p>
                          </div>
                        </div>
                        <div className="content-3">
                          <ul>
                            <li>
                              <i className="fa-regular fa-clock"></i>
                              <span>{recipe.NgayDang}</span>
                            </li>
                            <li>
                              <i className="fa-regular fa-user"></i>
                              <span>1 người</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="photo">
                        <div className="icon">
                          <i className="fa-solid fa-bookmark"></i>
                        </div>
                        <img src={recipe?.HinhAnhChinh ? `http://localhost:3001/${recipe.HinhAnhChinh}` : avt} alt="avatar" />
                      </div>
                    </li>
                  ))}
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

export default BepCaNhan;
