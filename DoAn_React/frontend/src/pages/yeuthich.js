import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../assets/css/profile.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avt from "../assets/img/avt.png";

const YeuThich = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [updatedResults, setUpdatedResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/thongtinnguoidung", { withCredentials: true });
        setUser(response.data.user);
        fetchSavedRecipes(response.data.user.MaNguoiDung);
      } catch (err) {
        console.error("Lỗi khi lấy thông tin người dùng:", err);
        setIsLoading(false);
        navigate("/login");
      }
    };

    fetchUserInfo();
  }, [navigate]);

  const fetchSavedRecipes = async (maNguoiDung) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/monluu/${maNguoiDung}`);
      const resultsWithSavedStatus = await Promise.all(
        response.data.map(async (recipe) => {
          const savedResponse = await axios.get(`http://localhost:3001/api/kiemtra-yeuthich/${maNguoiDung}/${recipe.MaCongThuc}`);
          return { ...recipe, isSaved: savedResponse.data.isSaved };
        })
      );
      setSavedRecipes(response.data);
      setUpdatedResults(resultsWithSavedStatus);
      setIsLoading(false);
    } catch (err) {
      console.error("Lỗi khi lấy danh sách món đã lưu:", err);
      setIsLoading(false);
    }
  };

  const handleLuuMon = async (maCongThuc) => {
    if (user) {
      try {
        const response = await axios.post("http://localhost:3001/api/themyeuthich", {
          maNguoiDung: user.MaNguoiDung,
          maCongThuc,
        });
        alert(response.data.message);
        updateSavedState(maCongThuc, true);
      } catch (error) {
        console.error("Lỗi khi lưu món:", error.response ? error.response.data : error.message);
        alert("Lưu món thất bại. Vui lòng thử lại.");
      }
    } else {
      alert("Bạn cần đăng nhập để lưu món.");
    }
  };

  const handleHuyLuuMon = async (maCongThuc) => {
    if (user) {
      try {
        const response = await axios.delete("http://localhost:3001/api/huyyeuthich", {
          data: {
            maNguoiDung: user.MaNguoiDung,
            maCongThuc,
          },
        });
        alert(response.data.message);
        updateSavedState(maCongThuc, false);
      } catch (error) {
        console.error("Lỗi khi hủy lưu món:", error.response ? error.response.data : error.message);
        alert("Hủy lưu món thất bại. Vui lòng thử lại.");
      }
    } else {
      alert("Bạn cần đăng nhập để hủy lưu món.");
    }
  };

  const updateSavedState = (maCongThuc, isSaved) => {
    const updated = updatedResults.map((result) => {
      if (result.MaCongThuc === maCongThuc) {
        return { ...result, isSaved };
      }
      return result;
    });
    setUpdatedResults(updated);
  };

  const isOwner = (maNguoiDung) => user && user.MaNguoiDung === maNguoiDung;

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
                <h1>Các Món Đã Lưu</h1>
              </div>
            </div>
            <div className="menu-header">
              <span>
                <strong>{updatedResults.length}</strong> Món
              </span>
              <div className="search-bar">
                <input type="text" placeholder="Tìm Món" />
                <button>Tìm</button>
              </div>
            </div>
            {updatedResults.length > 0 ? (
              <div className="column">
                <div className="column-item">
                  <ul>
                    {updatedResults.map((recipe) => (
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
                            <span>{recipe.HoTen}</span>
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
                          {!isOwner(recipe.MaNguoiDung) && (
                            recipe.isSaved ? (
                              <div className="icon" onClick={() => handleHuyLuuMon(recipe.MaCongThuc)}>
                                <i className="fa-solid fa-bookmark"></i>
                              </div>
                            ) : (
                              <div className="icon" onClick={() => handleLuuMon(recipe.MaCongThuc)}>
                                <i className="fa-regular fa-bookmark"></i>
                              </div>
                            )
                          )}
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
                    <p>Không có món nào đã lưu.</p>
                  </div>
                  <p>
                    Bạn chưa lưu món nào. Hãy bắt đầu lưu các món ăn yêu thích
                    để dễ dàng tìm lại sau!
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

export default YeuThich;
