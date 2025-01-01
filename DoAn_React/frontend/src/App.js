import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from './assets/js/SidebarContext';
import TrangChu from "./pages/TrangChu";
import BepCaNhan from "./pages/BepCaNhan";
import Suaprofile from "./pages/suaprofile";
import DangNhapDangKy from "./pages/nguoidung";
import ThemMonMoi from "./pages/themonmoi";
import BaiViet from "./pages/baiviet";
import BaoCaoBaiViet from "./pages/baocaobaiviet";
import SuaMon from "./pages/suabaiviet";
import TimKiem from "./pages/timkiem";
import YeuThich from "./pages/yeuthich";
import MonCuaBan from "./pages/moncuaban";
import TatCa from "./pages/tatca";
import TheoDoi from "./pages/theodoi";
import ThongBao from "./pages/thongbao";
import LienHe from "./pages/lienhe";
import Admin from "./page admin/admin";

import AdminLogin from "./page admin/admin_login";
function App() {
  return (
    <SidebarProvider>
      <Router>
      <Routes>
        <Route path="/trangchu" element={<TrangChu />} />
        <Route path="/bepcanhan/:id" element={<BepCaNhan />} />
        <Route path="/suaprofile" element={<Suaprofile />} />
        <Route path="/themmonmoi" element={<ThemMonMoi />} />
        <Route path="/baiviet/:id" element={<BaiViet />} />
        <Route path="/baocaobaiviet/:id" element={<BaoCaoBaiViet />} />
        <Route path="/suabaiviet/:id" element={<SuaMon />} />
        <Route path="/timkiem" element={<TimKiem />} />
        <Route path="/monluu" element={<YeuThich />} />
        <Route path="/moncuaban" element={<MonCuaBan />} />
        <Route path="/tatca" element={<TatCa />} />
        <Route path="/theodoi/:id" element={<TheoDoi />} />
        <Route path="/thongbao" element={<ThongBao />} />
        <Route path="/lienhe" element={<LienHe />} />
        <Route path="/admin" element={<Admin />} />
      
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dangnhap" element={<DangNhapDangKy />} />
        <Route path="*" element={<DangNhapDangKy />} />
      </Routes>
    </Router>
    </SidebarProvider>
    
  );
}

export default App;
