import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/profile.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BaoCaoBaiViet = () => {
  const { id } = useParams(); 
  const [lyDo, setLyDo] = useState(""); 
  const [submitted, setSubmitted] = useState(false); 
  const navigate = useNavigate(); 

  const handleBaoCao = async () => {
    if (!lyDo) {
      alert("Vui lòng nhập lý do báo cáo.");
      return;
    }

    try {
      const currentUser = await axios.get("http://localhost:3001/api/thongtinnguoidung", { withCredentials: true });
      const maNguoiDung = currentUser.data.user.MaNguoiDung;

      const response = await axios.post("http://localhost:3001/api/baocaobaiviet", {
        MaCongThuc: id,
        MaNguoiDung: maNguoiDung,
        LyDo: lyDo,
      });
      
      alert(response.data.message);
      setSubmitted(true);
    } catch (error) {
      console.error("Lỗi khi báo cáo bài viết:", error.response ? error.response.data : error.message);
      alert("Báo cáo bài viết thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="main">
      <div className="container">
        <Sidebar />
        <main className="content">
          <Header />
          <section className="banner-canhan">
            <div className="feedback-container">
              <h2>Báo Cáo Bài Viết</h2>
              <p>Vui lòng chỉ báo cáo nếu cách làm món này có chứa quảng cáo, ảnh khoả thân, ngôn từ kích động thù địch hoặc nội dung không liên quan. Admin sẽ xem xét trong thời gian ngắn nhất.</p>
              {submitted ? (
                <div className="thank-you-message">
                  <p>Cảm ơn bạn đã gửi báo cáo! Admin sẽ sớm xem xét và phản hồi qua email của bạn.</p>
                  <button onClick={() => navigate(`/baiviet/${id}`)} className="submit-btn">Quay lại bài viết</button>
                </div>
              ) : (
                <form className="feedback-form" onSubmit={(e) => { e.preventDefault(); handleBaoCao(); }}>
                  <label htmlFor="LyDo">Lý do báo cáo:</label>
                  <textarea
                    id="LyDo"
                    name="LyDo"
                    rows="5"
                    value={lyDo}
                    onChange={(e) => setLyDo(e.target.value)}
                    placeholder="Nhập lý do báo cáo"
                    required
                  ></textarea>

                  <button type="submit" className="submit-btn">Gửi Báo Cáo</button>
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

export default BaoCaoBaiViet;
