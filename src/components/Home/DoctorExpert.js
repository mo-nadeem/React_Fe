import React, { useEffect, useCallback } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";

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
  const dispatch = useDispatch();

  const { video } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

  console.log(video);

  let doctorVideoSection = null;
  if (video?.length > 0) {
    doctorVideoSection = (
      <>
        <div className="owl-slider">
          <div id="experience">
            <Carousel
              responsive={responsiveHospital}
              autoPlaySpeed={1000}
              arrows={false}
              infinite={true}
            >
              {video &&
                video.map((e) => (
                  <div
                    className="item"
                    style={{ marginRight: "20px" }}
                    key={e.id}
                  >
                    <div className="item-experience">
                      {/* <img src={img1} alt="doctor-expert" /> */}
                      <video
                        autoPlay
                        loop
                        muted
                        // poster="https://wgrowth.partners/wwpl/ibshospital_site/images/slider1.jpg"
                      >
                        <source src={e.teaser} type="video/mp4" />
                      </video>
                    </div>
                    <div className="experience-text">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: e.short_description,
                        }}
                      />
                      <p>{e.name}</p>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <section id="expert-section">
        <div className="midbox-inner wiki-mk">
          <div className="expert-boxtop">
            <div className="go-text">
              <h2>MedTalk</h2>
              <h4 style={{ color: "#fff" }}>
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
          {doctorVideoSection}

          <Link className="see-more" to="/">
            View more expert video{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default DoctorExpert;
