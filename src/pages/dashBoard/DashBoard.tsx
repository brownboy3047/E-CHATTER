import { useState } from "react";

import SideBar from "./sidebar/SideBar";
import DashboardHead from "./main/DashboardHead";

//style
import "./DashBoard.css";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="dashboard">
      <SideBar openSideBar={openSidebar} setOpenSideBar={setOpenSidebar} />
      <div className="dashboard_right">
        <DashboardHead
          openSideBar={openSidebar}
          setOpenSideBar={setOpenSidebar}
        />

        <div className="dashboard_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
