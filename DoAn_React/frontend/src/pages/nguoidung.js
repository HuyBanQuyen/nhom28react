import React, { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import "../assets/css/dangnhap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function DangNhapDangKy() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: "", account:"", password: "", name: "",phone: "", });
  const navigate = useNavigate();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/trangthai", { withCredentials: true });
        if (response.data.loggedIn) {
          navigate("/trangchu"); 
        }
      } catch (err) {
        console.error("Error checking login status:", err);
      }
    };
    checkLoginStatus();
  }, [navigate]);
  const handleSignUpClick = () => setIsSignUp(true);
  const handleSignInClick = () => setIsSignUp(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gọi API Đăng Ký
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/dangky", {
        email: formData.email,
        account: formData.account,
        password: formData.password,
        name: formData.name,
        phone: formData.phone
      });
      
      alert(response.data.message);
      setFormData({ email: "", account:"", password: "", name: "", phone: "" });
    } catch (err) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        console.error("Lỗi đăng ký:", err);
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
      }
    }
  };
  
  // Gọi API Đăng Nhập
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/dangnhap", {
        account: formData.account,
        password: formData.password,
      } ,{ withCredentials: true });
      alert(response.data.message);
      navigate("/trangchu");
    } catch (err) {
      if (err.response && err.response.data.message) {
        alert(err.response.data.message);
      }else{
         console.error("Đăng nhập thất bại:", err);
      alert("Đăng nhập thất bại!");
      }
    }
  };

  return (
    <div className="Formnguoidung">
      <h2>Sign in/up Form</h2>
      <div className={`container ${isSignUp ? "right-panel-active" : ""}`}>
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Tạo tài khoản</h1>
            <div className="social-container">
              <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>hoặc dùng email để đăng ký</span>
            <input type="text" name="name" placeholder="Họ tên" value={formData.name}  onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email"  value={formData.email}  onChange={handleInputChange} />
            <input type="text" name="account" placeholder="Tên đăng nhập" value={formData.account}  onChange={handleInputChange} />
            <input type="text" name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleInputChange}/>
            <input type="password" name="password" placeholder="Mật khẩu" value={formData.password}   onChange={handleInputChange} />
            <button type="submit">Đăng Ký</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Đăng nhập</h1>
            <div className="social-container">
              <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
            <span>hoặc dùng tài khoản của bạn</span>
            <input type="text" name="account" placeholder="Tên đăng nhập" onChange={handleInputChange} />
            <input type="password" name="password" placeholder="Mật khẩu" onChange={handleInputChange} />
            <button type="submit">Đăng Nhập</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng trở lại!</h1>
              <p>Để kết nối với chúng tôi, vui lòng đăng nhập</p>
              <button className="ghost" onClick={handleSignInClick}>Đăng Nhập</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Xin chào, bạn!</h1>
              <p>Nhập thông tin và bắt đầu hành trình cùng chúng tôi</p>
              <button className="ghost" onClick={handleSignUpClick}>Đăng Ký</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DangNhapDangKy;
