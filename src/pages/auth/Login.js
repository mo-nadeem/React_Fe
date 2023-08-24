import React from "react";
import img1 from "../../assests/images/2023/01/home-icon3.png"
import Dimg from "../../assests/images/07/1.jpg"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section id="login-section">
        <div className="login-mid login-mk">
          <div className="login-box">
            <div className="login-box-left login-img-d">
              <img src={Dimg} alt="" />
              <div className="home-drbox">
                <h4>We value your Privacy</h4>
                <ul>
                  <li>
                    <img src={img1} alt="" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                  <li>
                    <img src="images/2023/01/home-icon2.png" alt="" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                  <li>
                    <img src="images/2023/01/home-icon1.png" alt="" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                </ul>
              </div>
            </div>
            <div className="login-box-right">
              <img
                src="images/2023/02/logo.png"
                className="logo-login"
                alt="Brand Logo"
              />
              <h1>Welcome Medflick</h1>
              <p>Lorem ipsum dolor sit amet quis alenquen</p>
              <div className="inputbox">
                <label>Email Address</label>
                <input type="text" placeholder="" name="name" required="" />
              </div>
              <div className="inputbox">
                <label>Password</label>
                <input type="password" placeholder="" name="name" required="" />
              </div>
              <button type="submit" name="en" className="login-button">
                Log In
              </button>
              <div className="account-box">
                Don't have an account? <Link to="/sign-up">Sign Up</Link>
              </div>
            </div>
            <div className="login-box-left login-img">
              <img src="images/2023/07/1.jpg" alt="" />
              <div className="home-drbox">
                <h4>We value your Privacy</h4>
                <ul>
                  <li>
                    <img src="images/2023/01/home-icon3.png" alt="" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                  <li>
                    <img src="images/2023/01/home-icon2.png" alt="" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                  <li>
                    <img src="images/2023/01/home-icon1.png" alt="" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
