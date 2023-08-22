import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrowImg from "../../assests/images/2023/01/arrow-c.png";
import { Link } from "react-router-dom";
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
const HospitalCarousel = ({ hospital }) => {
  let hospitalSection = null;
  if (hospital?.length > 0) {
    hospitalSection = (
      <>
        <div className="owl-slider">
          <div id="hospitals-list">
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
            >
              {hospital &&
                hospital.map((e) => (
                  <div
                    className="item"
                    style={{ marginRight: "20px" }}
                    key={e.id}
                  >
                    <div className="hospitals-item">
                      <img src={`${process.env.REACT_APP_BASE_URL}/hospital/${e.home_image}`} alt={e.slug} />
                    </div>
                    <div className="hospitals-text">
                      <h3>{e.name}</h3>
                      {/* <div className="hospitals-sub">{e.short_description}</div> */}
                      {/* <div
                        className="hospitals-sub"
                        dangerouslySetInnerHTML={{
                          __html: e.short_description,
                        }}
                      /> */}
                      <Link to="/#" className="contact-now">
                        Contact Now{" "}
                        <img src={arrowImg} alt="" />
                      </Link>
                    </div>
                  </div>
                ))}

              {/* <div className="item" style={{ marginRight: "20px" }}>
                    <div className="hospitals-item">
                      <img src="images/2023/02/03/2.jpg" />
                    </div>
                    <div className="hospitals-text">
                      <h3>Hospitals Name </h3>
                      <div className="hospitals-sub">
                        Lorem ipsum dolor sit amet
                      </div>
                      <a href="#" className="contact-now">
                        Contact Now{" "}
                        <img src="images/2023/01/arrow-c.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="hospitals-item">
                      <img src="images/2023/02/03/3.jpg" />
                    </div>
                    <div className="hospitals-text">
                      <h3>Hospitals Name </h3>
                      <div className="hospitals-sub">
                        Lorem ipsum dolor sit amet
                      </div>
                      <a href="#" className="contact-now">
                        Contact Now{" "}
                        <img src="images/2023/01/arrow-c.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="hospitals-item">
                      <img src="images/2023/02/03/4.jpg" />
                    </div>
                    <div className="hospitals-text">
                      <h3>Hospitals Name </h3>
                      <div className="hospitals-sub">
                        Lorem ipsum dolor sit amet
                      </div>
                      <a href="#" className="contact-now">
                        Contact Now{" "}
                        <img src="images/2023/01/arrow-c.png" alt="" />
                      </a>
                    </div>
                  </div> */}
            </Carousel>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <section id="hospitals-section">
        <div className="midbox-inner  wiki-mk">
          <h2>
            Hospitals lorem ipsum <span>dolor</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con Duis aute irure
          </p>
          {hospitalSection}
        </div>
      </section>
    </>
  );
};

export default HospitalCarousel;
