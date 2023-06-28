import { Routes, Route } from "react-router-dom";

// pages
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

// import PageNotFound from "../components/PageNotFound";
// import SignUp from "../pages/signup/SignUp";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
        {/* <Route path="register" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
};
