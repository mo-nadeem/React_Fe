import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <section id="login-section">
        <div class="login-mid  login-mk">
          <div class="login-box">
            <div class="sign-up-left login-img-d">
              <img
                src="images/2023/02/logo.png"
                class="sign-up-login"
                alt="Brand Logo"
              />
              <h2>Let us help you run sit amet lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                consectetur
              </p>

              <div class="signup-testimonials">
                <img src="images/2023/07/do.png" class="img-do" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur
                </p>

                <div class="signup-profile">
                  <div class="signupprofile-img">
                    <img src="images/2023/01/icon-m.png" />
                  </div>
                  <h3>
                    Lorem ipsum dolor <span>india</span>
                  </h3>
                </div>
              </div>
            </div>

            <div class="login-box-right">
              <h1>Join Medflick</h1>
              <p>Lorem ipsum dolor sit amet quis alenquen</p>

              <div class="inputbox">
                <label>Full Name</label>
                <input type="text" placeholder="" name="name" required="" />
              </div>

              <div class="inputbox">
                <label>Email Address</label>
                <input type="text" placeholder="" name="name" required="" />
              </div>

              <div class="inputbox">
                <label>Password</label>
                <input type="password" placeholder="" name="name" required="" />
              </div>

              <button type="submit" name="en" class="login-button">
                {" "}
                Create Account{" "}
              </button>

              <div class="account-box">
                Have an account? <Link to="/login"> Log In </Link>
              </div>
            </div>

            <div class="sign-up-left sign-up-leftbox">
              <img
                src="images/2023/02/logo.png"
                class="sign-up-login"
                alt="Brand Logo"
              />
              <h2>Let us help you run sit amet lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipicing elit, sed do
                eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
                consectetur
              </p>

              <div class="signup-testimonials">
                <img src="images/2023/07/do.png" class="img-do" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur
                </p>

                <div class="signup-profile">
                  <div class="signupprofile-img">
                    <img src="images/2023/01/icon-m.png" />
                  </div>
                  <h3>
                    Lorem ipsum dolor <span>india</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
