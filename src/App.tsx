import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//Hook
import { useAuthContext } from "./hooks/useAuthContext";

//pages
import LandingPage from "./pages/landingPage/LandingPage";
import SignUp from "./pages/signup/SignUp";
import DashBoard from "./pages/dashBoard/DashBoard";

//components
import Footer from "./components/Footer";

//Dashboard main components
import Feed from "./pages/dashBoard/main/main_components/Feed";
import BookMark from "./pages/dashBoard/main/main_components/BookMark";
import TeamsBlog from "./pages/dashBoard/main/main_components/TeamsBlog";
import Drafts from "./pages/dashBoard/main/main_components/Drafts";
import Analytics from "./pages/dashBoard/main/main_components/Analytics";

//style
import "./App.css";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="app">
      <BrowserRouter>
        {!user && <LandingPage />}

        <Routes>
          <Route
            path="/register"
            element={!user ? <SignUp /> : <Navigate to={"/"} />}
          />

          {authIsReady && (
            <Route
              path="/"
              element={user ? <DashBoard /> : <Navigate to={"/register"} />}
            >
              <Route path="/" element={<Feed />} />
              <Route path="/bookmark" element={<BookMark />} />
              <Route path="/team" element={<TeamsBlog />} />
              <Route path="/draft" element={<Drafts />} />
              <Route path="/analytics" element={<Analytics />} />
            </Route>
          )}
        </Routes>

        {!user && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
