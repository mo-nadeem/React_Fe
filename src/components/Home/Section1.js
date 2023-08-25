import React from "react";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <>
      <section id="slider-section">
        <div className="video-slider">
          <video
            id="bgVideo"
            autoPlay
            loop
            muted
            poster="https://wgrowth.partners/wwpl/ibshospital_site/images/slider1.jpg"
          >
            <source src="images/2023/01/medflick.mp4" type="video/mp4" />
          </video>

          <video
            id="bgVideo1"
            autoPlay
            loop
            muted
            poster="https://wgrowth.partners/wwpl/ibshospital_site/images/slider1.jpg"
          >
            <source src="/images/2023/01/medflick-m.mp4" type="video/mp4" />
          </video>

          <div className="ababslider-text">
            <h1 className="cs-heading">
              {" "}
              Inspiring
              <br /> Better Health
            </h1>
            <h2 className="cs-heading1">
              Your Path to informed health decisions.<br/> Trusted health information
              when you need<br/>  it most.
            </h2>
            <div className="home-topnav">
              <Link to="/specialities" className="home-nav-left">
                Explore Now
                <img src="images/2023/01/arrow-c.png" alt="" />
              </Link>
              <Link to="/query" className="home-nav-right">
                Free Treatment Plan{" "}
                <img src="images/2023/01/arrow-w.png" alt="" />
              </Link>
            </div>
          </div>

          <div className="ababslider-rightext">
            Over 2000+ patients helped. Compassionate care, affordable
            treatments.
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
