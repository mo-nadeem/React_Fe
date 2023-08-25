import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const About = () => {
  return (
    <>
      <section id="home-about">
        <div className="midbox-inner  wiki-mk">
          <div className="homeabout-box">
            <div className="homeabout-left">
              <h2>
                Your Health, <span>Our Purpose</span>
              </h2>
              <p>
                From diagnosis to recovery, our commitment is to provide you
                with the highest level of care. Welcome to Medflick, where your
                health comes first. Our approach is built on four pillars -
                Commitment, Trust, Excellence, and Quality Standards, that drive
                us to exceed boundaries for your well-being.
              </p>
              <Link to="/question-answer">
                {" "}
                Ask FREE Question{" "}
                <img src="images/2023/01/arrow-c.png" alt="" />
              </Link>
            </div>
            <div className="homeabout-right">
              <Carousel
                responsive={responsive}
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={1500}
                infinite={true}
                showDots={true}
              >
                <div className="about-showbox">
                  <img src="images/2023/01/09/1.jpg" />
                  <div className="about-med">
                    <h3>Clinical Excellence</h3>
                    <p>
                      We strive to convert distant medical possibilities to
                      current procedures, aiding our patients We are committed
                      to fulfilling health aspirations of citizens across the
                      globe.
                    </p>
                  </div>
                </div>
                <div className="about-showbox">
                  <img src="images/2023/01/09/2.jpg" />
                  <div className="about-med">
                    <h3>Clinical Excellence</h3>
                    <p>
                      We strive to convert distant medical possibilities to
                      current procedures, aiding our patients We are committed
                      to fulfilling health aspirations of citizens across the
                      globe.
                    </p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
