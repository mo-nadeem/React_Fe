import React, { useEffect } from "react";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Category from "./pages/Category/Category";
import Treatment from "./pages/treatment/Treatment";
import BlogDetails from "./pages/blog/BlogDetails";
import BlogList from "./pages/blogList/BlogList";
import DoctorProfile from "./pages/doctorProfile/DoctorProfile";
import HospitalProfile from "./pages/hospitalProfile/HospitalProfile";
import DoctorList from "./pages/doctorList/DoctorList";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/speciality/:slug/:country" element={<Category />}></Route>
        <Route path="/treatment/:slug/:country" element={<Treatment />}></Route>
        <Route path="/blog/:slug" element={<BlogDetails />}></Route>
        <Route path="/blogs" element={<BlogList />}></Route>
        <Route path="/doctor-profile" element={<DoctorProfile />}></Route>
        <Route path="/hospital-profile" element={<HospitalProfile />}></Route>
        <Route path="/doctors" element={<DoctorList />}></Route>
      </Routes>
    </>
  );
}

export default App;
