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

  return (
    <>
      <div id="services" class="profile-data-section">
        <h2>Doctors video</h2>

        <div class="owl-slider">
          <div id="doctors-video">
            <Carousel
              responsive={responsive}
              arrows={false}
              autoPlay={true}
              autoPlaySpeed={1500}
            >
              <div class="item" style={{ marginLeft: "20px" }}>
                <div class="item-doctors">
                  <img src={doctorImg} alt="doctor-img" />
                  <div class="doctorsvideo-text">
                    <h3>
                      " Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt "
                    </h3>
                  </div>
                </div>
              </div>

              <div class="item" style={{ marginLeft: "20px" }}>
                <div class="item-doctors">
                  <img src={doctorImg} />
                  <div class="doctorsvideo-text">
                    <h3>
                      " Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt "
                    </h3>
                  </div>
                </div>
              </div>

              <div class="item" style={{ marginLeft: "20px" }}>
                <div class="item-doctors">
                  <img src={doctorImg} />
                  <div class="doctorsvideo-text">
                    <h3>
                      " Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt "
                    </h3>
                  </div>
                </div>
              </div>

              <div class="item" style={{ marginLeft: "20px" }}>
                <div class="item-doctors">
                  <img src={doctorImg} />
                  <div class="doctorsvideo-text">
                    <h3>
                      " Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt "
                    </h3>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorVideo;
