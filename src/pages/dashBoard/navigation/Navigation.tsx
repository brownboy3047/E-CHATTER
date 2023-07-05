import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

type IconProps = {
  icon: React.ReactNode;
  title: string;
  path: string;
};

const Navigation: React.FC<IconProps> = ({ icon, title, path }) => {
  return (
    <nav className="navigation">
      <NavLink to={path}>
        <p title={title}>{icon}</p>

        <p className="navigation_title">{title}</p>
      </NavLink>
    </nav>
  );
};

export default Navigation;
