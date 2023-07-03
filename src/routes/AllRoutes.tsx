import { Routes, Route } from "react-router-dom";

// pages
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};
