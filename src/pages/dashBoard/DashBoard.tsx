import SideBar from "./sidebar/SideBar";
import MainContent from "./main/MainContent";

//style
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default DashBoard;
