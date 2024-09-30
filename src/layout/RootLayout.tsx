import { Outlet } from "react-router-dom";
import "./layout.css";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  return (
    <div className="layout-container">
      <div className="layout-header">
        <Sidebar />
      </div>

      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
