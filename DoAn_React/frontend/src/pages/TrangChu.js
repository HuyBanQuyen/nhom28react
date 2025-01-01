import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style2.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bn1 from '../assets/img/bn1.jpg';
import bn2 from '../assets/img/bn2.jpg';
import bn3 from '../assets/img/bn3.jpg';
import bn4 from '../assets/img/bn4.jpg';

const TrangChu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const banners = [
    { id: 1, src: bn1, alt: "Banner 1" },
    { id: 2, src: bn2, alt: "Banner 2" },
    { id: 3, src: bn3, alt: "Banner 3" },
    { id: 4, src: bn4, alt: "Banner 4" },
  ];

  const navigate = useNavigate();

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const handleItemClick = (keyword, displayKeyword) => {
    navigate("/timkiem", { state: { searchKeyword: keyword, displayKeyword } });
    const handleItemClick = (keywords, displayKeyword) => {
      const keywordArray = keywords.split(',').map(kw => kw.trim()).join('|'); 
      navigate("/timkiem", { state: { searchKeyword: keywordArray, displayKeyword } });
    };
      };

  return (
    <div className="main">
      <div className="container">
        <Sidebar />
        <main className="content">
          <Header />
          <section className="banner">
            <div className="banner-text">
              <div className="list" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {banners.map((banner, index) => (
                  <div key={banner.id} className={`item ${index === activeIndex ? "active" : ""}`}>
                    <img src={banner.src} alt={banner.alt} />
                  </div>
                ))}
              </div>
              <div className="button">
                <button onClick={prevSlide}>{"<"}</button>
                <button onClick={nextSlide}>{">"}</button>
              </div>
              <ul className="dots">
                {banners.map((_, index) => (
                  <li key={index} className={index === activeIndex ? "active" : ""} onClick={() => setActiveIndex(index)}></li>
                ))}
              </ul>
            </div>
            <div className="column-1">
              <h1>Bạn muốn nấu gì cho hôm nay nào</h1>
              <div className="grid-container">
                <div className="grid-item" id="heo" onClick={() => handleItemClick("thịt heo", "Thịt Heo")}>Thịt Heo</div>
                <div className="grid-item" id="ga" onClick={() => handleItemClick("thịt gà", "Thịt Gà")}>Thịt Gà</div>
                <div className="grid-item" id="bo" onClick={() => handleItemClick("thịt bò", "Thịt Bò")}>Thịt Bò</div>
                <div className="grid-item" id="ca" onClick={() => handleItemClick("cá", "Cá")}>Cá</div>
                <div className="grid-item" id="trung" onClick={() => handleItemClick("trứng", "Trứng")}>Trứng</div>
                <div className="grid-item" id="canh" onClick={() => handleItemClick("canh", "Các món canh")}>Các món canh</div>
                <div className="grid-item" id="trangmieng" onClick={() => handleItemClick("bánh|kem|chè|Sương Sáo|Crème Brûlée|Pudding|Sữa|socola", "Tráng miệng")}>Tráng miệng</div>
                <div className="grid-item" id="tom" onClick={() => handleItemClick("tôm", "Tôm")}>Tôm</div>
              </div>
            </div>

          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default TrangChu;
