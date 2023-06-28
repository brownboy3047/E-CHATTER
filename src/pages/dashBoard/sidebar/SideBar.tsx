import { useLogout } from "../../../hooks/useLogout";

import Navigation from "../navigation/Navigation";

//react icons
import { CgFeed } from "react-icons/cg";
import { BsBookmarks } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineDrafts, MdOutlineAnalytics } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { IoIosNotificationsOutline } from "react-icons/io";

//style
import "./SideBar.css";

const SideBar = () => {
  const { logout } = useLogout();
  return (
    <aside className="sidebar">
      <h1>CHATTER</h1>
      <div className="overview">
        <h3>Overview</h3>
        <ul>
          <li>
            <Navigation icon={<CgFeed />} title="Feed" />
          </li>

          <li>
            <Navigation icon={<BsBookmarks />} title="Bookmarks" />
          </li>

          <li>
            <Navigation icon={<AiOutlineTeam />} title="Teams blogs" />
          </li>

          <li>
            <Navigation icon={<MdOutlineDrafts />} title="Drafts" />
          </li>

          <li>
            <Navigation icon={<MdOutlineAnalytics />} title="Analytics" />
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
      <button className="sidebar_btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
};

export default SideBar;
