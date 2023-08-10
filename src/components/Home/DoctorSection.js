import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
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

const DoctorSection = () => {
  return (
    <>
      <section id="doctors-section">
        <div class="midbox-inner  wiki-mk">
          <h2>
            Doctors lorem ipsum <span>dolor</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con Duis aute irure
          </p>

          <div class="owl-slider">
            <div id="doctors-list">
              <Carousel
                responsive={responsive}
                arrows={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
              >
                <div class="item" style={{ marginRight: "20px" }}>
                  <div class="doctors-item">
                    <img src="images/2023/01/06/1.jpg" />
                  </div>
                  <div class="doctors-text">
                    <h3>Doctor Name </h3>
                    <div class="doctors-sub">Lorem ipsum dolor sit amet</div>
                    <div class="doctors-bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip
                    </div>
                    <a href="#" class="contact-now">
                      Contact Now{" "}
                      <img src="images/2023/01/arrow-c.png" alt="" />
                    </a>
                  </div>
                </div>

                <div class="item" style={{ marginRight: "20px" }}>
                  <div class="doctors-item">
                    <img src="images/2023/01/06/2.jpg" />
                  </div>
                  <div class="doctors-text">
                    <h3>Doctor Name </h3>
                    <div class="doctors-sub">Lorem ipsum dolor sit amet</div>
                    <div class="doctors-bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip
                    </div>
                    <a href="#" class="contact-now">
                      Contact Now{" "}
                      <img src="images/2023/01/arrow-c.png" alt="" />
                    </a>
                  </div>
                </div>

                <div class="item" style={{ marginRight: "20px" }}>
                  <div class="doctors-item">
                    <img src="images/2023/01/06/3.jpg" />
                  </div>
                  <div class="doctors-text">
                    <h3>Doctor Name </h3>
                    <div class="doctors-sub">Lorem ipsum dolor sit amet</div>
                    <div class="doctors-bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip
                    </div>
                    <a href="#" class="contact-now">
                      Contact Now{" "}
                      <img src="images/2023/01/arrow-c.png" alt="" />
                    </a>
                  </div>
                </div>

                <div class="item" style={{ marginRight: "20px" }}>
                  <div class="doctors-item">
                    <img src="images/2023/01/06/2.jpg" />
                  </div>
                  <div class="doctors-text">
                    <h3>Doctor Name </h3>
                    <div class="doctors-sub">Lorem ipsum dolor sit amet</div>
                    <div class="doctors-bio">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip
                    </div>
                    <a href="#" class="contact-now">
                      Contact Now{" "}
                      <img src="images/2023/01/arrow-c.png" alt="" />
                    </a>
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

export default DoctorSection;
