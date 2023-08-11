import React from "react";

const About = () => {
  return (
    <>
      <section id="home-about">
        <div className="midbox-inner  wiki-mk">
          <div className="homeabout-box">
            <div className="homeabout-left">
              <h2>
                We push the limits of what's possible for{" "}
                <span>our patients</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commo
              </p>
              <a href="#">
                {" "}
                Ask FREE Question{" "}
                <img src="images/2023/01/arrow-c.png" alt="" />
              </a>
            </div>
            <div className="homeabout-right">
              <div className="about-showbox">
                <img src="images/2023/01/09/1.jpg" />
                <div className="about-med">
                  <h3>Clinical Excellence</h3>
                  <p>
                    We strive to convert distant medical possibilities to
                    current procedures, aiding our patients We are committed to
                    fulfilling health aspirations of citizens across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
