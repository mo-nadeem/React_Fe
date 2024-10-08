import React, { useEffect, useCallback, useState } from "react";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";
import { Link } from "react-router-dom";
import iconImg from "../../assests/images/2023/01/icon-m.png";
import iconImg2 from "../../assests/images/2023/01/arrow-c.png";
import formDoctorImg from "../../assests/images/2023/01/home-q.jpg";
import axios from "axios";
import arrowC from "../../assests/images/2023/01/arrow-w.png";
import complianceImg from "../../assests/images/compliance helpline.png";
import confidentialityImg from "../../assests/images/confidentiality.png";
import transparentImg from "../../assests/images/transparent policie.png";

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

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAgeChange = (e) => {
    // Get the input value from the event
    const inputValue = e.target.value;

    // If the input value is empty or is a number with up to 3 digits, update the state
    if (inputValue === "" || /^\d{0,2}$/.test(inputValue)) {
      setAge(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create the data object to be sent in the API request
    const data = {
      name: name,
      age: age,
      gender: gender,
      askq: query,
    };

    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/askPost`;

    setIsLoading(true);

    // Make the API call
    axios
      .post(apiEndpoint, data)
      .then((response) => {
        // Handle the API response here if needed
        console.log(response);
        alert("questions is susscefull submitted");
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error("Error:", error);
      })
      .finally(() => {
        // Set loading back to false after the API call is complete
        setIsLoading(false);
      });
  };

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
              <h2>Get answers to your health queries.</h2>
              <p>
                Timely Information for Informed Choices. Ask health questions,
                receive expert answers. Empowering you with the insights to make
                informed health decisions.
              </p>
            </div>
            <div className="querieshead-right">
              <Link to="/question-answer" className="queries-ask">
                Ask FREE Question <img src={arrowC} alt="arrow-icon" />
              </Link>
            </div>
          </div>

          <div className="healthcare-professionals">
            {limitedData &&
              limitedData.map((e) => (
                <div className="professionals" key={e.id}>
                  <div className="professionals-box">
                    <img src={iconImg} alt="" />
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
          </div>

          <div className="question-opinion">
            <h2>Have any health queries? </h2>
            <p>
              Engage with our experts. Ask a query and get valuable insights to
              guide your health decisions. Your questions will be answered with
              care and expertise.
            </p>
          </div>

          <div className="questions-form">
            <div className="homeform-left">
              <form onSubmit={handleFormSubmit}>
                <div className="home-form">
                  <div className="inputbox">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="home-form">
                  <div className="inputbox1">
                    <label>Age</label>
                    <input
                      type="text"
                      placeholder=""
                      name="age"
                      value={age}
                      onChange={handleAgeChange}
                      required
                    />
                  </div>

                  <div className="inputbox1">
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
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
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div className="home-form">
                  <button type="submit" name="en" className="home-button">
                    {isLoading ? "Submitting..." : "Submit Now"}{" "}
                    <img src={iconImg2} alt="icon" />
                  </button>
                </div>
              </form>
            </div>
            <div className="homeform-right">
              <img src={formDoctorImg} alt="form-img" />

              <div className="home-drbox">
                <h4>We value your Privacy</h4>

                <ul>
                  <li>
                    <img src={confidentialityImg} alt="icon1" />
                    <h5>Confidentiality</h5>
                  </li>
                  <li>
                    <img src={transparentImg} alt="icon2" />
                    <h5>Transparent Policies</h5>
                  </li>
                  <li>
                    <img src={complianceImg} alt="icon3" />
                    <h5>Compliance Helpline</h5>
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
