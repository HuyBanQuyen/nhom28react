import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import axios from "axios";
import "../assets/css/profile.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avt from "../assets/img/avt.png";

const MonCuaBan = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/api/thongtinnguoidung", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
          fetchUserRecipes(data.user.MaNguoiDung);
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

  const fetchUserRecipes = async (maNguoiDung) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/congthuc/${maNguoiDung}`);
      setRecipes(response.data);
    } catch (err) {
      console.error("Lỗi khi lấy danh sách công thức món ăn:", err);
    }
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
            <div className="title">
              <div className="h1">
                <h1>Các Món Của Bạn</h1>
              </div>
            </div><div className="menu-header">
              <span>
              <strong>{user.TongBaiViet} </strong> Món
              </span>
              <div className="search-bar">
                <input type="text" placeholder="Tìm Món" />
                <button>Tìm</button>
              </div>
            </div>
            
            {recipes.length > 0 ? (
              <div className="column">
                <div className="column-item">
                  <ul>
                    {recipes.map((recipe) => (
                      <li key={recipe.MaCongThuc}>
                        <div className="content">
                          <div className="content-1">
                            <div className="avt-3">
                              <img
                                src={
                                  recipe.Avatar
                                    ? `http://localhost:3001/${recipe.Avatar}`
                                    : avt
                                }
                                alt="Avatar"
                              />
                            </div>
                            <span>{user.HoTen}</span>
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
                          <img
                            src={
                              recipe?.HinhAnhChinh
                                ? `http://localhost:3001/${recipe.HinhAnhChinh}`
                                : avt
                            }
                            alt="HinhAnhChinh"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="no-results">
                <div className="no-results-img">
                  <div className="img">
                    <img
                      src="https://global-web-assets.cpcdn.com/assets/empty_states/no_results-8613ba06d717993e5429d9907d209dc959106472a8a4089424f1b0ccbbcd5fa9.svg"
                      alt="No Results"
                    />
                  </div>
                </div>
                <div className="no-results-text">
                  <div className="no-results-text-p1">
                    <p>Không có món nào.</p>
                  </div>
                  <p>
                    Bạn chưa tạo món nào. Hãy bắt đầu chia sẻ các công thức nấu ăn yêu thích của bạn để giúp các bạn khác nhé!
                  </p>
                </div>
              </div>
            )}
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MonCuaBan;
