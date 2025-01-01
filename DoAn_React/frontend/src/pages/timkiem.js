import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "../assets/css/profile.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import avt from "../assets/img/avt.png";

const TimKiem = () => {
  const location = useLocation();
  const searchKeyword = location.state?.searchKeyword || "";
  const displayKeyword = location.state?.displayKeyword || "";
  const [searchResults, setSearchResults] = useState([]);
  const [user, setUser] = useState(null);
  const [updatedResults, setUpdatedResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/timkiem?keyword=${searchKeyword}`);
        setSearchResults(response.data);
        setUpdatedResults(response.data);
      } catch (error) {
        console.error("Lỗi khi tìm kiếm món ăn:", error);
      }
    };

    fetchSearchResults();
  }, [searchKeyword]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/thongtinnguoidung", { withCredentials: true });
        setUser(response.data.user);
        updateResultsWithSavedStatus(response.data.user.MaNguoiDung);
      } catch (err) {
        console.error("Lỗi khi lấy thông tin người dùng:", err);
      }
    };

    fetchUserInfo();
  }, [searchResults]);

  const updateResultsWithSavedStatus = async (maNguoiDung) => {
    try {
      const resultsWithSavedStatus = await Promise.all(
        searchResults.map(async (result) => {
          const savedResponse = await axios.get(`http://localhost:3001/api/kiemtra-yeuthich/${maNguoiDung}/${result.MaCongThuc}`);
          return { ...result, isSaved: savedResponse.data.isSaved };
        })
      );
      setUpdatedResults(resultsWithSavedStatus);
    } catch (error) {
      console.error("Lỗi khi kiểm tra trạng thái lưu:", error);
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

  return (
    <div className="main">
      <div className="container">
        <Sidebar />
        <main className="content">
          <Header />
          <section className="banner-canhan">
            <div className="title">
              <div className="h1">
                <h1>Từ Khóa: {displayKeyword}</h1> 
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
                    {updatedResults.map((result) => (
                      <li key={result.MaCongThuc}>
                        <div className="content">
                          <div className="content-1">
                            <div className="avt-3">
                              <img src={result.Avatar ? `http://localhost:3001/${result.Avatar}` : avt} alt="Avatar" />
                            </div>
                            <span>{result.HoTen}</span>
                          </div>
                          <div className="content-2">
                            <div>
                              <Link to={`/baiviet/${result.MaCongThuc}`}>
                                <h1>{result.TenMonAn}</h1>
                              </Link>
                              <p>{result.MoTa}</p>
                            </div>
                          </div>
                          <div className="content-3">
                            <ul>
                              <li>
                                <i className="fa-regular fa-clock"></i>
                                <span>{result.NgayDang}</span>
                              </li>
                              <li>
                                <i className="fa-regular fa-user"></i>
                                <span>1 người</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="photo">
                          {!isOwner(result.MaNguoiDung) && (
                            result.isSaved ? (
                              <div className="icon" onClick={() => handleHuyLuuMon(result.MaCongThuc)}>
                                <i className="fa-solid fa-bookmark"></i>
                              </div>
                            ) : (
                              <div className="icon" onClick={() => handleLuuMon(result.MaCongThuc)}>
                                <i className="fa-regular fa-bookmark"></i>
                              </div>
                            )
                          )}
                          <img src={result?.HinhAnhChinh ? `http://localhost:3001/${result.HinhAnhChinh}` : avt} alt="avatar" />
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
                    <img src="https://global-web-assets.cpcdn.com/assets/empty_states/no_results-8613ba06d717993e5429d9907d209dc959106472a8a4089424f1b0ccbbcd5fa9.svg" alt="No Results" />
                  </div>
                </div>
                <div className="no-results-text">
                  <div className="no-results-text-p1">
                    <p>Không thấy món bạn muốn?</p>
                  </div>
                  <p>Hãy là người đầu tiên chia sẻ cách làm món đó để giúp các bạn khác nhé!</p>
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

export default TimKiem;
