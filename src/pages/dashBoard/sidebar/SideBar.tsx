import React, { Dispatch, SetStateAction } from "react";

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
            <Navigation icon={<CgFeed />} title="Feed" path="/" />
          </li>

          <li>
            <Navigation
              icon={<BsBookmarks />}
              title="Bookmarks"
              path="/bookmark"
            />
          </li>

          <li>
            <Navigation
              icon={<AiOutlineTeam />}
              title="Teams blogs"
              path="/team"
            />
          </li>

          <li>
            <Navigation
              icon={<MdOutlineDrafts />}
              title="Drafts"
              path="/draft"
            />
          </li>

          <li>
            <Navigation
              icon={<MdOutlineAnalytics />}
              title="Analytics"
              path="/analytics"
            />
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
            <Navigation icon={<VscAccount />} title="Account" path="" />
          </li>
          <li>
            <Navigation
              icon={<IoIosNotificationsOutline />}
              title="Notification"
              path=""
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
