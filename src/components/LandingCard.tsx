import React from "react";
import "./LandingCard.css";

type CardProps<T> = {
  children: T;
};

const LandingCard = <T extends React.ReactNode>({ children }: CardProps<T>) => {
  return <div className="landing_card">{children}</div>;
};

export default LandingCard;
