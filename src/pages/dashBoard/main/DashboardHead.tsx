import React, { Dispatch, SetStateAction } from "react";

//react icon
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

//avatar
import avatar from "../../../assets/avatar.png";

//style
import "./DashboardHead.css";

type OpenSideProps = {
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
  openSideBar: boolean;
};

const DashboardHead: React.FC<OpenSideProps> = ({
  openSideBar,
  setOpenSideBar,
}) => {
  return (
    <div className="main_content">
      <header className="head">
        <div className="head_menu" onClick={() => setOpenSideBar(!openSideBar)}>
          <HiOutlineMenuAlt2 />
        </div>
        <div className="head_search">
          <BiSearch />
          <input type="text" placeholder="Search..." />
        </div>

        <div className="head_profile">
          <div>
            <IoMdNotificationsOutline />
          </div>

          <img src={avatar} alt="avatar" />
        </div>
      </header>
    </div>
  );
};

export default DashboardHead;
