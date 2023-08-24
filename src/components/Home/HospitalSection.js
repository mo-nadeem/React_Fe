import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";
import { Link } from "react-router-dom";

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
            {hospital &&
              hospital.map((e) => (
                <div className="Marquee-tag" key={e.id}>
                  <Link to={`/hospital/${e.slug}/${e.country}`}>
                    <img
                      className="dr-img"
                      src={`${process.env.REACT_APP_BASE_URL}/hospital/${e.icon}`}
                      alt={e.slug}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HospitalSection;
