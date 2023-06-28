import { Link } from "react-router-dom";
//style
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <Link to="/">
          <h1>CHATTER</h1>
        </Link>
      </div>

      <div className="footer_info">
        <h3>Explore</h3>
        <ul>
          <li>
            <Link to="#">community</Link>
          </li>
          <li>
            <Link to="#">Trending blogs</Link>
          </li>
          <li>
            <Link to="#">Chatter for teams</Link>
          </li>
        </ul>
      </div>

      <div className="footer_info">
        <h3>Support</h3>

        <ul>
          <li>
            <Link to="#">Support docs</Link>
          </li>
          <li>
            <Link to="#">Join slack</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="footer_info">
        <h3>Official blog</h3>

        <ul>
          <li>
            <Link to="#">Official blog</Link>
          </li>
          <li>
            <Link to="#">Engineering blog</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
