import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export const SidebarProvider = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({}); // Đảm bảo openSubmenus được khởi tạo

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSubmenu = (menuId) => {
    setOpenSubmenus((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  return (
    <SidebarContext.Provider
      value={{
        sidebarCollapsed,
        sidebarOpen,
        openSubmenus,
        toggleSidebar,
        toggleSidebarOpen,
        toggleSubmenu, 
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
