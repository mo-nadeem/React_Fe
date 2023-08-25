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
import HospitalList from "./pages/hospitalLiST/HospitalList";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import QuestionAns from "./pages/questionAns/QuestionAns";
import QueryForm from "./pages/QueryForm/QueryForm";

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
        <Route path="/doctor/:slug" element={<DoctorProfile />}></Route>
        <Route
          path="/hospital/:slug/:country"
          element={<HospitalProfile />}
        ></Route>
        <Route path="/doctors/:slug/:country" element={<DoctorList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/question-ans" element={<QuestionAns />}></Route>
        <Route path="/query" element={<QueryForm />}></Route>
        <Route
          path="/hospitals/:slug/:country"
          element={<HospitalList />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
