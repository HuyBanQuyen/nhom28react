import React, { useState, useEffect } from "react";
import "../assets/css/style2.css";
import axios from "axios"; 
import { useNavigate, Link } from "react-router-dom"; 
import { useSidebarContext } from '../assets/js/SidebarContext'; 

const Sidebar = () => {
  const { sidebarCollapsed, sidebarOpen, openSubmenus, toggleSidebar, toggleSidebarOpen, toggleSubmenu } = useSidebarContext();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate(); 

  // Kiểm tra trạng thái đăng nhập
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/trangthai", {
          withCredentials: true, 
        });
        setIsLoggedIn(response.data.loggedIn); 
      } catch (err) {
        setIsLoggedIn(false); 
      }
    };
    checkLoginStatus();
  }, []);

  return (
    <aside className={`sidebar ${sidebarCollapsed ? "collapsed" : ""} ${sidebarOpen ? "open" : "closed"}`} id="sidebar">
      <div className="sidebar-2">
        <div className="logo">
          <i className="fas fa-utensils icon"></i>
          <h1 className="text">Cooking</h1>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <i className={`fas ${sidebarCollapsed ? "fa-angle-right" : "fa-angle-left"}`}></i>
          </button>
          <button className="toggle-btn-2" onClick={toggleSidebarOpen}>
            <i className={`fas ${sidebarOpen ? "fa-angle-left" : "fa-angle-right"}`}></i>
          </button>
        </div>
        <nav className="menu">
          <ul>
            <li>
              <i className="fas fa-search icon"></i>
              <span><a href="/trangchu" className="text">Tìm kiếm</a></span>
            </li>
            <li className="li-2">
              <i className="fas fa-pen-to-square icon"></i>
              <a href="#" className="text" onClick={(e) => {
                  if (!isLoggedIn) {
                    e.preventDefault(); 
                    alert("Vui lòng đăng nhập để viết món mới!");
                    navigate("/dangnhap"); 
                  }
                }}
              >
                <Link to="/themmonmoi" className="text">Viết món mới</Link>
              </a>
            </li>
            <li>
              <i className="fas fa-gem icon"></i>
              <span><Link to="/thongbao" className="text">Thông Báo</Link></span>
            </li>
            <li className={`submenu-toggle ${openSubmenus["submenu1"] ? "open" : ""}`} onClick={() => toggleSubmenu("submenu1")}>
              <i className="fas fa-book icon"></i>
              <span className="text">Kho Món Ngon Của Bạn</span>
              <i className={`fas arrow ${openSubmenus["submenu1"] ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
              <div className={`submenu ${openSubmenus["submenu1"] ? "open" : ""}`}>
                {isLoggedIn ? (
                  <ul>
                    <li className="li-2">
                      <i className="fas fa-book icon"></i>
                      <Link to="/tatca" className="text">Tất cả</Link>
                    </li>
                    <li className="li-2">
                      <i className="fas fa-bookmark icon"></i>
                      <Link to="/monluu" className="text">Món đã lưu</Link>
                    </li>
                    <li className="li-2">
                      <i className="fas fa-utensils icon"></i>
                      <Link to="/moncuaban" className="text">Món của bạn</Link>
                    </li>
                  </ul>
                ) : (
                  <p className="text">Vui lòng <a href="#">đăng nhập</a> để xem nội dung này.</p>
                )}
              </div>
            </li>
          </ul>
          <p className="text">
            {!isLoggedIn && (
              <>
                Để bắt đầu tạo kho lưu trữ món ngon của riêng bạn, vui lòng  
                <Link to="/dangnhap"> đăng ký</Link> hoặc <Link to="/dangnhap">đăng nhập</Link>.
              </>
            )}
          </p>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
