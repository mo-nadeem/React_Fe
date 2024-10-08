import React, { useEffect, useCallback } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import img1 from "../../assests/images/2023/01/08/1.jpg";
import { fetchHome } from "../../Api/action/HomeAction";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1.4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1.4,
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

const Testimonials = () => {
  const dispatch = useDispatch();

  const { testominials } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

  let testominialSection = null;
  if (testominials?.length > 0) {
    testominialSection = (
      <>
        <div className="owl-slider">
          <div id="testimonials">
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay
              autoPlaySpeed={2000}
            >
              {testominials &&
                testominials.map((e) => (
                  <div
                    className="item"
                    style={{ marginRight: "20px" }}
                    key={e.id}
                  >
                    <div className="testimonials-item">
                      {/* <img src={img1} alt="doctor-img" /> */}
                      <video
                        autoPlay
                        loop
                        muted
                        // poster="https://wgrowth.partners/wwpl/ibshospital_site/images/slider1.jpg"
                      >
                        <source src={e.yt_link} type="video/mp4" />
                      </video>

                      <div className="testimonials-text">
                        {/* <h3>Lorem ipsum dolor sit amet</h3>
                        <div className="testimonials-dd">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore Ut
                          enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip
                        </div> */}
                        <h4>- {e.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}

              {/* <div className="item" style={{ marginRight: "20px" }}>
                  <div className="testimonials-item">
                    <img src={img1} />

                    <div className="testimonials-text">
                      <h3>Lorem ipsum dolor sit amet</h3>
                      <div className="testimonials-dd">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip
                      </div>
                      <h4>- Ankit K</h4>
                    </div>
                  </div>
                </div>

                <div className="item" style={{ marginRight: "20px" }}>
                  <div className="testimonials-item">
                    <img src={img1} />

                    <div className="testimonials-text">
                      <h3>Lorem ipsum dolor sit amet</h3>
                      <div className="testimonials-dd">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip
                      </div>
                      <h4>- Ankit K</h4>
                    </div>
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
      <section id="home-testimonials">
        <div className="midbox-inner  wiki-mk">
          <h2>
            Real Stories, Real Impact Voices of <span>Trust</span>
          </h2>
          <p>
            Expert care that speaks for itself. Watch heartfelt stories coming
            directly from those who've benefited from Medflick.
          </p>
          {testominialSection}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
