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
import ConsultationForm from "./pages/ConsultationForm/ConsultationForm";
import AllHospitalList from "./pages/AllHospitalList/AllHospitalList";
import AllDoctorsList from "./pages/AllDoctorsList/AllDoctorsList";
import AllSpecialitesList from "./pages/AllSpecialitesList/AllSpecialitesList";

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
        <Route path="/question-answer" element={<QuestionAns />}></Route>
        <Route path="/query" element={<QueryForm />}></Route>
        <Route path="/free-consultation" element={<ConsultationForm />}></Route>
        <Route path="/hospitals" element={<AllHospitalList />}></Route>
        <Route path="/doctors" element={<AllDoctorsList />}></Route>
        <Route path="/specialities" element={<AllSpecialitesList />}></Route>
        <Route
          path="/hospitals/:slug/:country"
          element={<HospitalList />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
