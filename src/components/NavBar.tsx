import { Link } from "react-router-dom";
import { useState } from "react";

//react icon
import { ImMenu } from "react-icons/im";
import { RxCross1 } from "react-icons/rx";

// style
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav_bar">
      <div className="nav_bar_logo">
        <Link to="/">
          <h1>CHATTER</h1>
        </Link>
      </div>

      <div className="nav_bar_menu" onClick={() => setShowMenu(!showMenu)}>
        <ImMenu />
      </div>

      <div className="nav_bar_links" id={showMenu ? "nav_bar_links" : ""}>
        <div className="nav_bar_cross" onClick={() => setShowMenu(!showMenu)}>
          <RxCross1 />
        </div>

        <div className="nav_bar_page">
          <Link to="/home">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact us</Link>
        </div>

        <div className="nav_bar_btn">
          <Link to="/register" className="btn_one">
            Log in
          </Link>

          <Link to="/register" className="btn_two">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
