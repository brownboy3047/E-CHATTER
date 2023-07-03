//react icon
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

//avatar
import avatar from "../../../assets/avatar.png";

//style
import "./DashboardHead.css";

const DashboardHead = () => {
  return (
    <div className="main_content">
      <header className="head">
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
