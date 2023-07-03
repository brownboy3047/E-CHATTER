import React from "react";

import "./Navigation.css";

type IconProps = {
  icon: React.ReactNode;
  title: string;
};

const Navigation: React.FC<IconProps> = ({ icon, title }) => {
  return (
    <nav className="navigation">
      <p title={title}>{icon}</p>

      <p className="navigation_title">{title}</p>
    </nav>
  );
};

export default Navigation;
