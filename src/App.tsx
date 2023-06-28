import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useAuthContext } from "./hooks/useAuthContext";

//pages
import LandingPage from "./pages/landingPage/LandingPage";
import SignUp from "./pages/signup/SignUp";
import DashBoard from "./pages/dashBoard/DashBoard";

//components
import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
// import { AllRoutes } from "./routes/AllRoutes";

import "./App.css";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="app">
      <BrowserRouter>
        {/* <DashBoard /> */}
        {!user && <LandingPage />}

        <Routes>
          <Route
            path="/register"
            element={!user ? <SignUp /> : <Navigate to={"/dashboard"} />}
          />

          {authIsReady && (
            <Route
              path="/dashboard"
              element={user ? <DashBoard /> : <Navigate to={"/register"} />}
            />
          )}
        </Routes>
        {!user && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
