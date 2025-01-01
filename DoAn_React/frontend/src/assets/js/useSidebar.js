import { useState } from "react";

const useSidebar = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); 
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [openSubmenus, setOpenSubmenus] = useState({}); 

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Toggle submenu
  const toggleSubmenu = (menuId) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  // Toggle sidebar for small screens
  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return {
    sidebarCollapsed,
    sidebarOpen,
    openSubmenus,
    toggleSidebar,
    toggleSubmenu,
    toggleSidebarOpen,
  };
};

export default useSidebar;
