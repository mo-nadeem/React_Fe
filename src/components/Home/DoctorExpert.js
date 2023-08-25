import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import img1 from "../../assests/images/2023/01/04/1.jpg";
import img2 from "../../assests/images/2023/01/04/2.jpg";
import img3 from "../../assests/images/2023/01/04/3.jpg";

const responsiveHospital = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3.3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DoctorExpert = () => {
  return (
    <>
      <section id="expert-section">
        <div className="midbox-inner wiki-mk">
          <div className="expert-boxtop">
            <div className="go-text">
              <h2>MedTalk</h2>
              <h4 style={{color:"#fff"}}>
                Watch authentic medical information with up-to-the-minute
                advancements, techniques, and patient-centered approaches coming
                directly from India's top rated doctors/ surgeons/ experts and
                take control of your health decision-making.
              </h4>
            </div>
            <div className="go-text1">
              <h3>2000+</h3>
              <span>Patients</span>
            </div>
          </div>

          <div className="owl-slider">
            <div id="experience">
              <Carousel
                responsive={responsiveHospital}
                autoPlaySpeed={1000}
                arrows={false}
                infinite={true}
              >
                <div className="item" style={{ marginRight: "20px" }}>
                  <div className="item-experience">
                    <img src={img1} alt="doctor-expert" />
                  </div>
                  <div className="experience-text">
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                    </h3>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className="item" style={{ marginRight: "20px" }}>
                  <div className="item-experience">
                    <img src={img2} alt="doctor-expert" />
                  </div>
                  <div className="experience-text">
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                    </h3>
                    <p>Lorem ipsum</p>
                  </div>
                </div>

                <div className="item" style={{ marginRight: "20px" }}>
                  <div className="item-experience">
                    <img src={img3} alt="doctor-expert" />
                  </div>
                  <div className="experience-text">
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                    </h3>
                    <p>Lorem ipsum</p>
                  </div>
                </div>

                <div className="item" style={{ marginRight: "20px" }}>
                  <div className="item-experience">
                    <img src={img3} alt="doctor-expert" />
                  </div>
                  <div className="experience-text">
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
                    </h3>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>

          <Link className="see-more" to="/">
            View more expert video{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default DoctorExpert;
