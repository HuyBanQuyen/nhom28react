import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import "../assets/css/style2.css";
import useDropdown from "../assets/js/useDropdownHeader";
import { useSidebarContext } from '../assets/js/SidebarContext'; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import avt from "../assets/img/avt.png";
import axios from "axios";

const Header = () => {
  const { hienThiDropdown, chuyenTrangThaiDropdown } = useDropdown();
  const { toggleSidebarOpen } = useSidebarContext(); 
  const navigate = useNavigate(); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  
  // Kiểm tra trạng thái đăng nhập
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/trangthai", {
          withCredentials: true,
        });
        if (response.data.loggedIn) {
          setIsLoggedIn(true);
          setUserInfo(response.data.user);
          localStorage.setItem('userInfo', JSON.stringify(response.data.user)); // Lưu thông tin vào localStorage
        } else {
          setIsLoggedIn(false);
          setUserInfo(null);
          localStorage.removeItem('userInfo');
        }
      } catch (err) {
        console.error("Lỗi kiểm tra trạng thái đăng nhập:", err);
        setIsLoggedIn(false);
        setUserInfo(null);
        localStorage.removeItem('userInfo');
      }
    };
  
    checkLoginStatus(); // Kiểm tra trạng thái đăng nhập từ server
  }, []);
  
 const handleLogout = async () => {
  try {
    const response = await axios.post("http://localhost:3001/api/dangxuat", {}, { withCredentials: true });
    alert(response.data.message);
    setIsLoggedIn(false);
    setUserInfo(null);
    localStorage.removeItem('userInfo'); // Xóa thông tin người dùng trong localStorage
    navigate("/dangnhap");
  } catch (err) {
    console.error("Đăng xuất thất bại:", err);
    alert("Có lỗi xảy ra khi đăng xuất!");
  }
};

const handleSearch = () => {
  navigate("/timkiem", { 
    state: { searchKeyword: searchKeyword, displayKeyword: searchKeyword } 
  });
};

const handleKeyPress = (e) => { 
  if (e.key === 'Enter') { 
    handleSearch(); 
  } 
};

return (
  <header className="top-bar">
    <div className="toggle">
      <button className="toggle-btn" id="topbarToggleBtn" onClick={toggleSidebarOpen}>
        <i className="fas fa-angle-left"></i>
      </button>
    </div>
    <div className="search">
      <input 
        type="text" 
        placeholder="Tìm tên món hay nguyên liệu" 
        value={searchKeyword} 
        onChange={(e) => setSearchKeyword(e.target.value)} 
        onKeyPress={handleKeyPress}
      />
      <button className="search-btn" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>  
    <div className="buttons">
      {isLoggedIn ? (
        <div className="buttons-2">
         
          <div id="avartar">
            <div className="avt" onClick={chuyenTrangThaiDropdown}>
              <img src={userInfo?.Avatar ? `http://localhost:3001/${userInfo.Avatar}` : avt} alt="avatar" />
            </div>
            <div className={`dropdown-content ${hienThiDropdown ? "show" : ""}`} id="dropdown">
              <div className="avartar-2">
                <div className="avt-2">
                  <img src={userInfo?.Avatar ? `http://localhost:3001/${userInfo.Avatar}` : avt} alt="avatar" />
                </div>
                <div className="avartar-2-text">
                  <div>
                    <a>{userInfo?.HoTen || "Người dùng"}</a>
                  </div>
                  <div>
                    <a>@{userInfo?.TaiKhoan || "Tài khoản"}</a>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <div>
                    <i className="fa-regular fa-user"></i>
                  </div>
                  <Link to={`/bepcanhan/${userInfo.MaNguoiDung}`}>Bếp cá nhân</Link>
                </li>
                <li>
                  <div>
                    <i className="fas fa-regular fa-gear icon"></i>
                  </div>
                  <span>Cài đặt</span>
                </li>
                <li>
                  <div>
                    <i className="fa-regular fa-paper-plane"></i>
                  </div>
                  <Link to={`/lienhe`}>Gửi góp ý</Link>
                </li>
              </ul>
              <div className="dropdown-content-end">
                <div className="dropdown-content-end-icon">
                  <i className="fa-solid fa-right-from-bracket"></i>
                </div>
                <div
                  className="dropdown-content-end-text"
                  onClick={handleLogout}
                >
                  <span>Đăng xuất</span>
                </div>
              </div>
            </div>
          </div>
          <div className="note">
            <div className="icon" onClick={() => navigate("/themmonmoi")}>
              <i className="fas fa-pen-to-square icon"></i>
            </div>
            <div>
              <a onClick={() => navigate("/themmonmoi")}>Viết món mới</a>
            </div>
          </div>
        </div>
      ) : (
        <div className="buttons-login">
          <button onClick={() => navigate("/dangnhap")}>Đăng nhập</button>
        </div>
      )}
    </div>
  </header>
);
};

export default Header;
