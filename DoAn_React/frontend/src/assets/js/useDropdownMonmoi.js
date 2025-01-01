import { useState, useEffect } from "react";

const useDropdown = (targetClassNames) => {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setVisibleDropdown((prev) => (prev === id ? null : id));
  };

  // Đóng dropdown khi nhấn ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutside = !targetClassNames.some(className => 
        event.target.closest(className)
      );
      if (isOutside) {
        setVisibleDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [targetClassNames]);

  return { visibleDropdown, toggleDropdown };
};

export default useDropdown;
