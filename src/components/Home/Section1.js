import React from "react";

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
            autoplay
            loop
            muted
            poster="https://wgrowth.partners/wwpl/ibshospital_site/images/slider1.jpg"
          >
            <source src="/images/2023/01/medflick-m.mp4" type="video/mp4" />
          </video>

          <div className="ababslider-text">
            <h1 className="cs-heading"> Expert Healthcare </h1>
            <h2 className="cs-heading1">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con
            </h2>
            <div className="home-topnav">
              <a href="#" className="home-nav-left">
                Ask FREE Question{" "}
                <img src="images/2023/01/arrow-c.png" alt="" />
              </a>
              <a href="#" className="home-nav-right">
                Treatments Lorem <img src="images/2023/01/arrow-w.png" alt="" />
              </a>
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
