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
            <h1 className="cs-heading"> Watch, Learn & Choose wisely </h1>
            <h2 className="cs-heading1">
              Empowering Health through Video Learning: Your Path to Informed
              Choices. Trusted health information when you need it most.
            </h2>
            <div className="home-topnav">
              <Link to="/" className="home-nav-left">
                Ask FREE Question{" "}
                <img src="images/2023/01/arrow-c.png" alt="" />
              </Link>
              <Link to="/" className="home-nav-right">
                Treatments Lorem <img src="images/2023/01/arrow-w.png" alt="" />
              </Link>
            </div>
          </div>

          <div className="ababslider-rightext">
            Over 24,000 patients helped. Compassionate care, affordable
            treatments.
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
