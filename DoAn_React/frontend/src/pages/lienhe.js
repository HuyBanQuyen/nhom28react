import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../assets/css/profile.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LienHe = () => {
  const [formData, setFormData] = useState({
    MaNguoiDung: "",
    TenNguoiDung: "",
    Email: "",
    NoiDung: ""
  });
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false); // Trạng thái để kiểm soát việc hiển thị thông báo
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/thongtinnguoidung", { withCredentials: true });
        setUser(response.data.user);
        setFormData({
          ...formData,
          MaNguoiDung: response.data.user.MaNguoiDung,
          TenNguoiDung: response.data.user.HoTen,
          Email: response.data.user.Email
        });
        setIsLoading(false);
      } catch (err) {
        console.error("Lỗi khi lấy thông tin người dùng:", err);
        setIsLoading(false);
        navigate("/login");
      }
    };
    fetchUserInfo();
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/lienhe", formData);
      setSubmitted(true); // Đặt trạng thái submitted thành true
      // Reset form sau khi gửi thành công
      setFormData({
        ...formData,
        NoiDung: ""
      });
    } catch (error) {
      console.error("Lỗi khi gửi tin nhắn liên hệ:", error);
      alert("Lỗi khi gửi tin nhắn liên hệ");
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
            <div className="feedback-container">
              <h2>Gửi Góp Ý</h2>
              <p>Chúng tôi rất mong nhận được ý kiến của bạn để cải thiện dịch vụ tốt hơn!</p>
              {submitted ? (
                <div className="thank-you-message">
                  <p>Cảm ơn bạn đã gửi góp ý! Admin sẽ sớm phản hồi qua email của bạn.</p>
                </div>
              ) : (
                <form className="feedback-form" onSubmit={handleSubmit}>
                  <label htmlFor="TenNguoiDung">Tên của bạn:</label>
                  <input
                    type="text"
                    id="TenNguoiDung"
                    name="TenNguoiDung"
                    value={formData.TenNguoiDung}
                    onChange={handleChange}
                    placeholder="Nhập tên của bạn"
                    required
                  />

                  <label htmlFor="Email">Email:</label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    placeholder="Nhập email của bạn"
                    required
                  />

                  <label htmlFor="NoiDung">Nội dung góp ý:</label>
                  <textarea
                    id="NoiDung"
                    name="NoiDung"
                    rows="5"
                    value={formData.NoiDung}
                    onChange={handleChange}
                    placeholder="Nhập nội dung góp ý"
                    required
                  ></textarea>

                  <button type="submit" className="submit-btn">Gửi Góp Ý</button>
                </form>
              )}
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default LienHe;
