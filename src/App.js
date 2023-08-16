import React, { useEffect } from "react";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Category from "./pages/Category/Category";

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
        <Route
          exact
          path="/speciality/:slug/:country"
          element={<Category />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
