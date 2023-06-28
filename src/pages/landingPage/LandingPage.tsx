//components

import NavBar from "../../components/NavBar";

//routes
import { AllRoutes } from "../../routes/AllRoutes";

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <AllRoutes />
    </div>
  );
};

export default LandingPage;
