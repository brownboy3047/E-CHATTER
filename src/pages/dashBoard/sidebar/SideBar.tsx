import React, { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

//hooks
import { useLogout } from "../../../hooks/useLogout";

import Navigation from "../navigation/Navigation";

//react icons
import { CgFeed } from "react-icons/cg";
import { BsBookmarks } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineDrafts, MdOutlineAnalytics } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { IoIosNotificationsOutline, IoMdClose } from "react-icons/io";

//style
import "./SideBar.css";

type OpenSideProps = {
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
  openSideBar: boolean;
};

const SideBar: React.FC<OpenSideProps> = ({ openSideBar, setOpenSideBar }) => {
  const { logout } = useLogout();
  return (
    <aside className="sidebar" id={openSideBar ? "sidebar_open" : ""}>
      <div
        className="sidebar_close"
        onClick={() => setOpenSideBar(!openSideBar)}
      >
        <IoMdClose />
      </div>
      <h1>CHATTER</h1>
      <div className="overview">
        <h3>Overview</h3>
        <ul>
          <li>
            <NavLink to="/">
              <Navigation icon={<CgFeed />} title="Feed" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/bookmark">
              <Navigation icon={<BsBookmarks />} title="Bookmarks" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/team">
              <Navigation icon={<AiOutlineTeam />} title="Teams blogs" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/draft">
              <Navigation icon={<MdOutlineDrafts />} title="Drafts" />
            </NavLink>
          </li>

          <li>
            <NavLink to="/analytics">
              <Navigation icon={<MdOutlineAnalytics />} title="Analytics" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="trending">
        <div className="trending_head">
          <h3>Trending Tag</h3>
          <BiTrendingUp />
        </div>

        <ul>
          <li>Programming</li>
          <li>Data science</li>
          <li>Technology</li>
          <li>Machine learning</li>
          <li>Politics</li>
          <li>See all</li>
        </ul>
      </div>

      <div className="personal">
        <h3>Personal</h3>

        <ul>
          <li>
            <Navigation icon={<VscAccount />} title="Account" />
          </li>
          <li>
            <Navigation
              icon={<IoIosNotificationsOutline />}
              title="Notification"
            />
          </li>
        </ul>
      </div>
      <button
        className="sidebar_btn
      "
        onClick={logout}
      >
        Logout
      </button>
    </aside>
  );
};

export default SideBar;
