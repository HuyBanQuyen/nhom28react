import { useState, useEffect } from "react";

const useDropdown = () => {
  const [hienThiDropdown, setHienThiDropdown] = useState(false);

  // Toggle trạng thái dropdown
  const chuyenTrangThaiDropdown = (event) => {
    event.stopPropagation(); // Ngăn sự kiện lan ra ngoài
    setHienThiDropdown(!hienThiDropdown);
  };
  
  // Ẩn dropdown
  const anDropdown = () => {
    setHienThiDropdown(false);
  };

  // Lắng nghe sự kiện click bên ngoài dropdown
  useEffect(() => {
    const xuLyClickNgoai = (event) => {
      const phanTuDropdown = document.querySelector("#dropdown");
      const phanTuAvatar = document.querySelector(".avt");

      if (
        phanTuDropdown &&
        !phanTuDropdown.contains(event.target) &&
        phanTuAvatar &&
        !phanTuAvatar.contains(event.target)
      ) {
        anDropdown();
      }
    };

    document.addEventListener("click", xuLyClickNgoai);
    return () => {
      document.removeEventListener("click", xuLyClickNgoai);
    };
  }, []);

  return {
    hienThiDropdown,
    chuyenTrangThaiDropdown,
    anDropdown,
  };
};

export default useDropdown;
