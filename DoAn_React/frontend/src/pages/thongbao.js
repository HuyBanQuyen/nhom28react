import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/thongbao.css";
const ThongBao = () => {
  const [notifications, setNotifications] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/thongtinnguoidung", { withCredentials: true });
        setUser(response.data.user);
        fetchNotifications(response.data.user.MaNguoiDung);
      } catch (err) {
        console.error("Lỗi khi lấy thông tin người dùng:", err);
        setIsLoading(false);
        navigate("/login");
      }
    };
    fetchUserInfo();
  }, [navigate]);

  const fetchNotifications = async (maNguoiDung) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/thongbao/${maNguoiDung}`);
      setNotifications(response.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Lỗi khi lấy danh sách thông báo:", err);
      setIsLoading(false);
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
          <section  className="banner-canhan">
            <h1>Thông Báo</h1>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <div key={index} className="notification-item-tongbao">
                  <Link to={`/baiviet/${notification.MaCongThuc}`}>
                    <p>{notification.NoiDung}</p>
                    <span>{notification.ThoiGian ? new Date(notification.ThoiGian).toLocaleString() : "Không xác định"}</span>
                  </Link>
                </div>
              ))
            ) : (
              <p>Không có thông báo mới.</p>
            )}
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ThongBao;
