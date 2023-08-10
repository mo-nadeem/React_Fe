import React,{useEffect} from "react";
import $ from "jquery";

const HealthQuerys = () => {
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
        <div class="midbox-inner  wiki-mk">
          <div class="queries-head">
            <div class="querieshead-left">
              <h2>Get answers to Health Queries</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
            </div>
            <div class="querieshead-right">
              <a href="#" class="queries-ask">
                Ask FREE Question{" "}
                <img src="images/2023/01/arrow-w.png" alt="" />
              </a>
            </div>
          </div>

          <div class="healthcare-professionals">
            <div class="professionals animation-element slide-up">
              <div class="professionals-box">
                <img src="images/2023/01/icon-m.png" alt="" />
                <div class="question-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in?{" "}
                </div>
                <div class="question-ans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in, auctor ligula. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                  purus consectetur, interdum felis in, auctor ligula.{" "}
                </div>
              </div>
            </div>

            <div class="professionals animation-element slide-up">
              <div class="professionals-box">
                <img src="images/2023/01/icon-m.png" alt="" />
                <div class="question-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in?{" "}
                </div>
                <div class="question-ans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in, auctor ligula. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                  purus consectetur, interdum felis in, auctor ligula.{" "}
                </div>
              </div>
            </div>

            <div class="professionals animation-element slide-up">
              <div class="professionals-box">
                <img src="images/2023/01/icon-m.png" alt="" />
                <div class="question-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in?{" "}
                </div>
                <div class="question-ans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in, auctor ligula. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                  purus consectetur, interdum felis in, auctor ligula.{" "}
                </div>
              </div>
            </div>

            <div class="professionals animation-element slide-up">
              <div class="professionals-box">
                <img src="images/2023/01/icon-m.png" alt="" />
                <div class="question-box">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in?{" "}
                </div>
                <div class="question-ans">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  sed purus consectetur, interdum felis in, auctor ligula. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                  purus consectetur, interdum felis in, auctor ligula.{" "}
                </div>
              </div>
            </div>
          </div>

          <div class="question-opinion">
            <h2>Have any questions? </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con
            </p>
          </div>

          <div class="questions-form">
            <div class="homeform-left">
              <div class="home-form">
                <div class="inputbox">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder=""
                    name="name"
                    required=""
                   
                  />
                </div>
              </div>

              <div class="home-form">
                <div class="inputbox1">
                  <label>Age</label>
                  <input
                    type="text"
                    placeholder=""
                    name="name"
                    required=""
                    
                  />
                </div>
                <div class="inputbox1">
                  <label>Gender</label>
                  <input
                    type="text"
                    placeholder=""
                    name="name"
                    required=""
                
                  />
                </div>
              </div>

              <div class="home-form">
                <div class="homequery">
                  <label>Your Query</label>
                  <textarea
                    class="magbox"
                    type="textarea"
                    name="query"
                    placeholder=""
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div class="home-form">
                <button type="submit" name="en" class="home-button">
                  {" "}
                  Submit Now <img src="images/2023/01/arrow-c.png" alt="" />
                </button>
              </div>
            </div>
            <div class="homeform-right">
              <img src="images/2023/01/home-q.jpg" alt="" />

              <div class="home-drbox">
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
