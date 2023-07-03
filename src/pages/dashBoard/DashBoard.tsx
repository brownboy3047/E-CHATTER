import SideBar from "./sidebar/SideBar";
import DashboardHead from "./main/DashboardHead";

//style
import "./DashBoard.css";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard_right">
        <DashboardHead />

        <div className="dashboard_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
