import React, { useState, useEffect } from "react";
import "../assets/css/admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import avt from "../assets/img/avt.png";
import Modal from "./Modal"; 

const Admin = () => {
  const [dashboardData, setDashboardData] = useState({
    totalPosts: 0,
    totalUsers: 0,
    totalContacts: 0,
    totalReports: 0,
  });

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [reports, setReports] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [isModalOpen, setModalOpen] = useState(false); 
  const navigate = useNavigate();

  
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("http://localhost:3001/admin/trangthai", { withCredentials: true });
        if (!response.data.loggedIn) {
          navigate("/admin-login");
        }
      } catch (error) {
        console.error("Lỗi khi kiểm tra trạng thái đăng nhập:", error);
        navigate("/admin-login");
      }
    };

    checkLoginStatus();
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const postResponse = await axios.get("http://localhost:3001/admin/congthuc");
      const userResponse = await axios.get("http://localhost:3001/admin/nguoidung");
      const contactResponse = await axios.get("http://localhost:3001/admin/lienhe");
      const reportResponse = await axios.get("http://localhost:3001/admin/baocaobaiviet");

      setDashboardData({
        totalPosts: postResponse.data.total,
        totalUsers: userResponse.data.total,
        totalContacts: contactResponse.data.length,
        totalReports: reportResponse.data.length,
      });

      setPosts(postResponse.data.recipes);
      setUsers(userResponse.data.users);
      setContacts(contactResponse.data);
      setReports(reportResponse.data); 
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/baiviet/${id}`);
        if (response.status === 200) {
          alert("Xóa bài viết thành công.");
          setPosts(posts.filter((post) => post.MaCongThuc !== id));
        }
      } catch (error) {
        console.error("Lỗi khi xóa bài viết:", error);
        alert("Lỗi khi xóa bài viết.");
      }
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      try {
        const response = await axios.delete(`http://localhost:3001/api/nguoidung/${id}`);
        if (response.status === 200) {
          alert("Xóa người dùng thành công.");
          setUsers(users.filter((user) => user.MaNguoiDung !== id));
        }
      } catch (error) {
        console.error("Lỗi khi xóa người dùng:", error);
        alert("Lỗi khi xóa người dùng.");
      }
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/admin/dangxuat", {}, { withCredentials: true });
      navigate("/admin-login");
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
      alert("Đăng xuất thất bại. Vui lòng thử lại.");
    }
  };

  const handleViewUserDetail = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/nguoidung/${id}`);
      setSelectedUser(response.data); 
      setModalOpen(true); 
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      alert("Lỗi khi lấy dữ liệu người dùng.");
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar-admin">
        <div className="logo-admin">
          <h1>Admin</h1>
        </div>
        <nav className="menu-admin">
          <a href="#dashboard" className="active">🏠 Dashboard</a>
          <a href="#posts">📝 Quản lý bài viết</a>
          <a href="#users">👥 Người dùng</a>
          <a href="#contacts">📩 Liên hệ</a>
          <a href="#reports">📊 Báo cáo</a>
          <a href="#logout" onClick={handleLogout}>🔓 Đăng xuất</a>
        </nav>
      </aside>

      <main className="content-admin">
        <header className="header-admin">
          <h2>Quản trị</h2>
          <div className="admin-info">
            <span>Chào, Admin</span>
            <img src={avt} alt="avatar" />
          </div>
        </header>

        <section id="dashboard" className="dashboard">
          <h3>Tổng quan</h3>
          <div className="overview">
            <div className="card">
              <h4>Bài viết</h4>
              <p>{dashboardData.totalPosts}</p>
            </div>
            <div className="card">
              <h4>Người dùng</h4>
              <p>{dashboardData.totalUsers}</p>
            </div>
            <div className="card">
              <h4>Liên hệ mới</h4>
              <p>{dashboardData.totalContacts}</p>
            </div>
            <div className="card">
              <h4>Báo cáo bài viết</h4>
              <p>{dashboardData.totalReports}</p>
            </div>
          </div>
        </section>

        <section id="posts" className="management">
          <div className="section-header">
            <h3>Quản lý bài viết</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã bài viết</th>
                <th>Tiêu đề</th>
                <th>Tác giả</th>
                <th>Ngày đăng</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={post.MaCongThuc}>
                  <td>{index + 1}</td>
                  <td>{post.MaCongThuc}</td>
                  <td>{post.TenMonAn}</td>
                  <td>{post.MaNguoiDung}</td>
                  <td>{new Date(post.NgayDang).toLocaleDateString()}</td>
                  <td>
                    <button className="btn small edit" onClick={() => navigate(`/baiviet/${post.MaCongThuc}`)}>xem chi tiết</button>
                    <button className="btn small danger" onClick={() => handleDeletePost(post.MaCongThuc)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="users" className="management">
          <div className="section-header">
            <h3>Quản lý người dùng</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã người dùng</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Ngày đăng ký</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.MaNguoiDung}>
                  <td>{index + 1}</td>
                  <td>{user.MaNguoiDung}</td>
                  <td>{user.HoTen}</td>
                  <td>{user.Email}</td>
                  <td>{new Date(user.NgaySinh).toLocaleDateString()}</td>
                  <td>
                    <button className="btn small edit" onClick={() => handleViewUserDetail(user.MaNguoiDung)}>xem chi tiết</button>
                    <button className="btn small danger" onClick={() => handleDeleteUser(user.MaNguoiDung)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="contacts" className="management">
          <div className="section-header">
            <h3>Liên hệ từ người dùng</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Mã người dùng</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Tin nhắn</th>
                <th>Ngày gửi</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact.MaLienHe}>
                  <td>{index + 1}</td>
                  <td>{contact.MaNguoiDung}</td>
                  <td>{contact.TenNguoiDung}</td>
                  <td>{contact.Email}</td>
                  <td>{contact.NoiDung}</td>
                  <td>{new Date(contact.NgayLienHe).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="reports" className="management">
          <div className="section-header">
            <h3>Báo cáo bài viết</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Bài viết</th>
                <th>Bài viết bị báo cáo</th>
                <th>Người báo cáo</th>
                <th>Lý do</th>
                <th>Ngày báo cáo</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={report.MaBaoCao}>
                  <td>{index + 1}</td>
                  <td>{report.TenMonAn}</td>
                  <td>{report.MaCongThuc}</td>
                  <td>{report.TenNguoiDung}</td>
                  <td>{report.LyDo}</td>
                  <td>{new Date(report.NgayBaoCao).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="settings" className="management">
          <div className="section-header">
            <h3>Cài đặt</h3>
          </div>
         
        </section>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        {selectedUser && (
          <>
            <div className="user-detail-container">
              <h2>Chi Tiết Người Dùng</h2>
              <div className="user-info">
                <p><strong>Họ tên:</strong> {selectedUser.user.HoTen}</p>
                <p><strong>Email:</strong> {selectedUser.user.Email}</p>
                <p><strong>Ngày đăng ký:</strong> {new Date(selectedUser.user.NgaySinh).toLocaleDateString()}</p>
                <p><strong>Số bài viết:</strong> {selectedUser.userPosts.length}</p>
                <p><strong>Số bình luận:</strong> {selectedUser.userComments.length}</p>
                <p><strong>Số báo cáo:</strong> {selectedUser.userReports.length}</p>
                <p><strong>Số liên hệ:</strong> {selectedUser.userContacts.length}</p>
              </div>

              <div className="user-section">
                <h3>Bài Viết</h3>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tiêu đề</th>
                      <th>Tác giả</th>
                      <th>Ngày đăng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUser.userPosts.map((post, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{post.TenMonAn}</td>
                        <td>{post.TacGia}</td>
                        <td>{new Date(post.NgayDang).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="user-section">
                <h3>Bình Luận</h3>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nội dung</th>
                      <th>Ngày bình luận</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUser.userComments.map((comment, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{comment.NoiDung}</td>
                        <td>{new Date(comment.NgayBinhLuan).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="user-section">
                <h3>Báo Cáo</h3>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Mã bài viết</th>
                      <th>Bài viết</th>
                      <th>Người báo cáo</th>
                      <th>Lý do</th>
                      <th>Ngày báo cáo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUser.userReports.map((report, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{report.MaCongThuc}</td>
                        <td>{report.TenMonAn}</td>
                        <td>{report.TenNguoiDung}</td>
                        <td>{report.LyDo}</td>
                        <td>{new Date(report.NgayBaoCao).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="user-section">
                <h3>Liên Hệ</h3>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tên</th>
                      <th>Email</th>
                      <th>Tin nhắn</th>
                      <th>Ngày gửi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedUser.userContacts.map((contact, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{contact.TenNguoiDung}</td>
                        <td>{contact.Email}</td>
                        <td>{contact.NoiDung}</td>
                        <td>{new Date(contact.NgayLienHe).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Admin;
