import React from "react";
import Header from "../Inc/Header";
import Footer from "../Inc/Footer";

const Homelayout = ({ children }) => {
  return (
    <>
      <main>
        <Header></Header>
        {children}
        <Footer></Footer>
      </main>
    </>
  );
};

export default Homelayout;
