import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category/Category";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/speciality/:slug/:country" element={<Category />}></Route>
      </Routes>
    </>
  );
}

export default App;
