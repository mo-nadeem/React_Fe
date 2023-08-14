import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";

const HospitalSection = () => {
  const dispatch = useDispatch();

  const { hospital } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);
  return (
    <>
      <section id="hospital-section">
        <div className="marquee-wrapper">
          <div
            className="marquee"
            style={{
              animationDuration: "11s",
            }}
          >
            {hospital.map((e) => (
              <div className="Marquee-tag" key={e.id}>
                <img
                  className="dr-img"
                  src={`${process.env.REACT_APP_BASE_URL}/hospital/${e.home_image}`}
                  alt={e.slug}
                />{" "}
              </div>
            ))}
            <div className="Marquee-tag">
              <img className="dr-img" src="images/2023/01/03/2.png" />{" "}
            </div>
            <div className="Marquee-tag">
              <img className="dr-img" src="images/2023/01/03/3.png" />{" "}
            </div>
            <div className="Marquee-tag">
              <img className="dr-img" src="images/2023/01/03/4.png" />{" "}
            </div>
            <div className="Marquee-tag">
              <img className="dr-img" src="images/2023/01/03/5.png" />{" "}
            </div>
            <div className="Marquee-tag">
              <img className="dr-img" src="images/2023/01/03/6.png" />{" "}
            </div>
            <div className="Marquee-tag">
              <img className="dr-img" src="images/2023/01/03/7.png" />{" "}
            </div>
            <div className="Marquee-tag">
              <img className="dr-img" src="images/2023/01/03/8.png" />{" "}
            </div>
            <div className="Marquee-tag">
              <img className="dr-img" src="images/2023/01/03/9.png" />{" "}
            </div>
            <div className="Marquee-tag">
              <img className="dr-img" src="images/2023/01/03/10.png" />{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HospitalSection;
