import React from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import DoctorExpert from "../../components/Home/DoctorExpert";
import Testimonials from "../../components/Home/Testimonials";
import Blog from "../../components/Home/Blog";

const Category = () => {
  return (
    <>
      <Homelayout>
        <DoctorExpert />
        <Testimonials />
        <Blog />
      </Homelayout>
    </>
  );
};

export default Category;
