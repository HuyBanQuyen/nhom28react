import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/dangnhap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Tên đăng nhập và mật khẩu không được để trống!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/admin/dangnhap",
        { username, password }, { withCredentials: true } );
      if (response.data.message === "Đăng nhập thành công!") {
        navigate("/admin"); 
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
    }
  };

  return (
    <div className="Formnguoidung">
      <div className="container">
        <div className="form-container sign-in-container">
          <form id="loginForm" onSubmit={handleLogin}>
            <h1>Đăng nhập</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="social-container">
              <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>hoặc dùng tài khoản của bạn</span>
            <input 
              type="text" 
              id="username" 
              name="username" 
              placeholder="Tên đăng nhập" 
              value={username}  
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password} 
              placeholder="Mật khẩu" 
              onChange={(e) => setPassword(e.target.value)} 
              required  
            />
            <button type="submit">Đăng Nhập</button>
          </form>
        </div>
    
        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng trở lại!</h1>
              <p>Để kết nối với chúng tôi, vui lòng đăng nhập</p>
              <button className="ghost">Đăng Nhập</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Xin chào Admin!</h1>
              <p>Nhập thông tin và bắt đầu hành trình quản lý hệ thống nào</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
