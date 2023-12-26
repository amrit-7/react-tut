import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="main-wrapper">
      <div className="topbar">
        <Navbar />
      </div>
      <div className="content" style={{ minHeight: "84vh" }}>
        <Outlet />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
