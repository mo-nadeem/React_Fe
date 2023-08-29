import React, { useCallback, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import doctorImg from "../../assests/images/05/doctors-v.jpg";
import { fetchHome } from "../../Api/action/HomeAction";
import { useDispatch, useSelector } from "react-redux";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const DoctorVideo = () => {
  const dispatch = useDispatch();

  const { video } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

  let doctorVideoSection = null;
  if (video?.length > 0) {
    doctorVideoSection = (
      <>
        <div className="owl-slider">
          <div id="experience">
            <Carousel
              responsive={responsive}
              autoPlaySpeed={1500}
              arrows={false}
              infinite={true}
              autoPlay={true}
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
      <div id="services" class="profile-data-section">
        <h2>Doctors video</h2>

        {doctorVideoSection}
      </div>
    </>
  );
};

export default DoctorVideo;
