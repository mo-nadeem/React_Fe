import React, { useEffect, useCallback } from "react";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";

const HealthQuerys = () => {
  const dispatch = useDispatch();

  const { qa } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);
  const limitedData = qa?.slice(0, 4) ?? [];

  // for animation
  useEffect(() => {
    const $animation_elements = $(".animation-element");
    const $window = $(window);

    function check_if_in_view() {
      const window_height = $window.height();
      const window_top_position = $window.scrollTop();
      const window_bottom_position = window_top_position + window_height;

      $animation_elements.each(function () {
        const $element = $(this);
        const element_height = $element.outerHeight();
        const element_top_position = $element.offset().top;
        const element_bottom_position = element_top_position + element_height;

        // Check to see if this current container is within viewport
        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          $element.addClass("in-view");
        } else {
          $element.removeClass("in-view");
        }
      });
    }

    $window.on("scroll resize", check_if_in_view);
    $window.trigger("scroll");

    return () => {
      $window.off("scroll resize", check_if_in_view);
    };
  }, []);
  return (
    <>
      <section id="health-queries">
        <div className="midbox-inner  wiki-mk">
          <div className="queries-head">
            <div className="querieshead-left">
              <h2>Get answers to Health Queries</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
            </div>
            <div className="querieshead-right">
              <a href="#" className="queries-ask">
                Ask FREE Question{" "}
                <img src="images/2023/01/arrow-w.png" alt="" />
              </a>
            </div>
          </div>

          <div className="healthcare-professionals">
            {limitedData &&
              limitedData.map((e) => (
                <div
                  className="professionals animation-element slide-up"
                  key={e.id}
                >
                  <div className="professionals-box">
                    <img src="images/2023/01/icon-m.png" alt="" />
                    <div className="question-box">Q. {e.short_description}</div>
                    {/* <div className="question-ans">
                    Q. {e.long_desc}
                    </div> */}
                    <div
                      className="question-ans"
                      dangerouslySetInnerHTML={{ __html: e.long_description }}
                    />
                  </div>
                </div>
              ))}

            {/* <div className="professionals animation-element slide-up">
              <div className="professionals-box">
                <img src="images/2023/01/icon-m.png" alt="" />
                <div className="question-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in?{" "}
                </div>
                <div className="question-ans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in, auctor ligula. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                  purus consectetur, interdum felis in, auctor ligula.{" "}
                </div>
              </div>
            </div>

            <div className="professionals animation-element slide-up">
              <div className="professionals-box">
                <img src="images/2023/01/icon-m.png" alt="" />
                <div className="question-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in?{" "}
                </div>
                <div className="question-ans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in, auctor ligula. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                  purus consectetur, interdum felis in, auctor ligula.{" "}
                </div>
              </div>
            </div>

            <div className="professionals animation-element slide-up">
              <div className="professionals-box">
                <img src="images/2023/01/icon-m.png" alt="" />
                <div className="question-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in?{" "}
                </div>
                <div className="question-ans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in, auctor ligula. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                  purus consectetur, interdum felis in, auctor ligula.{" "}
                </div>
              </div>
            </div> */}
          </div>

          <div className="question-opinion">
            <h2>Have any questions? </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con
            </p>
          </div>

          <div className="questions-form">
            <div className="homeform-left">
              <div className="home-form">
                <div className="inputbox">
                  <label>Name</label>
                  <input type="text" placeholder="" name="name" required="" />
                </div>
              </div>

              <div className="home-form">
                <div className="inputbox1">
                  <label>Age</label>
                  <input type="text" placeholder="" name="name" required="" />
                </div>

                <div className="inputbox1">
                  <label>Gender</label>
                  <input type="text" placeholder="" name="name" required="" />
                </div>
              </div>

              <div className="home-form">
                <div className="homequery">
                  <label>Your Query</label>
                  <textarea
                    className="magbox"
                    type="textarea"
                    name="query"
                    placeholder=""
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div className="home-form">
                <button type="submit" name="en" className="home-button">
                  {" "}
                  Submit Now <img src="images/2023/01/arrow-c.png" alt="" />
                </button>
              </div>
            </div>
            <div className="homeform-right">
              <img src="images/2023/01/home-q.jpg" alt="" />

              <div className="home-drbox">
                <h4>We value your Privacy</h4>

                <ul>
                  <li>
                    <img src="images/2023/01/home-icon3.png" alt="" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                  <li>
                    <img src="images/2023/01/home-icon2.png" alt="" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                  <li>
                    <img src="images/2023/01/home-icon1.png" alt="" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthQuerys;
