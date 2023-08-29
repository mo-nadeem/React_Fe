import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import manImg from "../../assests/images/07/man.jpg";
import arrowCIcon from "../../assests/images/2023/01/arrow-c.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const Section3 = () => {
  // form query post api
  const [name, setName] = useState("");
  const [pcode, setPcode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Create the data object to be sent in the API request
    const data = {
      name: name,
      phone_code: pcode,
      phone: phone,
      email: email,
      messages: query,
    };

    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/free_quote_treatment`;

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

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
  };
  return (
    <>
      <section id="homemid-section">
        <div className="midbox-inner wiki-mk">
          <h2>
            {/* Lorem Ipsum dolor sit velit dolor <span>consect</span> */}
            With you, when you need us the most!
          </h2>
          <p>
            Providing you with every ounce of authentic health information when
            you need it the most.
          </p>
        </div>
      </section>
      <section id="healthcare-section">
        <div className="midbox-inner  wiki-mk">
          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Answers</h2>
              <p>
                Empower your health journey with expert guidance! Engage with
                best doctors, ask questions and get all your queries sorted to
                make an informed decision
              </p>
              <Link className="learn-more" to="/question-answer">
                Learn More <img src="images/2023/01/learn-more.png" />
              </Link>
            </div>
            <div className="healthcare-img">
              <img src="images/2023/01/02/frame-1.jpg" />
            </div>
          </div>

          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Affordable</h2>
              <p>
                Get high-quality healthcare facilities without worrying about
                the cost. Connect with best doctors and top hospitals in India
                for a treatment plan that fit your health needs and budget.
              </p>
              <span className="learn-more" onClick={togglePopup}>
                Learn More <img src="images/2023/01/learn-more.png" />
              </span>
            </div>
            <div className="healthcare-img">
              <img
                className="health-img4"
                src="images/2023/01/02/frame-2.jpg"
              />
            </div>
          </div>

          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Treatment</h2>
              <p>
                Connect with the best doctors, hospitals in India for a
                comprehensive and personalized treatment plan to ensure the best
                recovery for you and your loved ones.
              </p>
              <Link className="learn-more" to="/specialities">
                Learn More <img src="images/2023/01/learn-more.png" />
              </Link>
            </div>
            <div className="healthcare-img">
              <img src="images/2023/01/02/frame-3.jpg" />
              <div className="animation-element slide-up1 in-view">
                <img
                  className="treatment-img"
                  src="images/2023/01/02/frame-3-1.png"
                />
              </div>
            </div>
          </div>

          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Contact</h2>
              <p>
                Count on us for expert health guidance. You are just a step away
                from starting your journey to better health. Get in touch to
                find expert care at affordable prices.
              </p>
              <Link className="learn-more" to="/contact-us">
                Learn More <img src="images/2023/01/learn-more.png" />
              </Link>
            </div>
            <div className="healthcare-img">
              <img
                className="health-img4"
                src="images/2023/01/02/frame-4.jpg"
              />
            </div>
          </div>

          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Find Your Community. Empower Your Knowledge.</h2>
              <p>
                The world's most trusted personalized health community with more
                than 1,00, 000 members that share their journey, experiences and
                health insights. Join your community and get access to make
                informed health decisions.
              </p>
              <Link className="learn-more" to="/question-answer">
                Learn More <img src="images/2023/01/learn-more.png" />
              </Link>
            </div>
            <div className="healthcare-img">
              <img src="images/2023/01/02/frame-5.jpg" />
              <div className="animation-element slide-up1 in-view">
                <img className="dr-img" src="images/2023/01/02/frame-5-1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {isPopupOpen && (
        <div className="popup" data-popup="popup-5" style={popupStyle}>
          <div className="popup-inner5">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="popup-close"
                  data-popup-close="popup-5"
                  data-dismiss="modal"
                  onClick={togglePopup}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="cost-estimate-form">
                <div className="cost-estimate-form-left">
                  <div className="owl-slider">
                    <div id="cost-estimate" className="owl-carousel">
                      <Carousel
                        responsive={responsive}
                        arrows={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1500}
                        showDots={true}
                      >
                        <div className="item">
                          <img src={manImg} />
                          <div className="cost-estimate-box">
                            <div className="cost-estimate-items">
                              <p>
                                {" "}
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscin elit, sed do eiusmod tempor incididunt
                                ut labore consectetur ipsum dolor sit amet,
                                consectetur elit, sed do eiusmod tempor incidid
                                Lorem ipsum dolor sit amet adipiscin elit”{" "}
                              </p>
                              <h3>Ellen Richardson</h3>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <img src={manImg} />
                          <div className="cost-estimate-box">
                            <div className="cost-estimate-items">
                              <p>
                                {" "}
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscin elit, sed do eiusmod tempor incididunt
                                ut labore consectetur ipsum dolor sit amet,
                                consectetur elit, sed do eiusmod tempor incidid
                                Lorem ipsum dolor sit amet adipiscin elit”{" "}
                              </p>
                              <h3>Ellen Richardson</h3>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <img src={manImg} />
                          <div className="cost-estimate-box">
                            <div className="cost-estimate-items">
                              <p>
                                {" "}
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscin elit, sed do eiusmod tempor incididunt
                                ut labore consectetur ipsum dolor sit amet,
                                consectetur elit, sed do eiusmod tempor incidid
                                Lorem ipsum dolor sit amet adipiscin elit”{" "}
                              </p>
                              <h3>Ellen Richardson</h3>
                            </div>
                          </div>
                        </div>

                        <div className="item">
                          <img src={manImg} />
                          <div className="cost-estimate-box">
                            <div className="cost-estimate-items">
                              <p>
                                {" "}
                                “Lorem ipsum dolor sit amet, consectetur
                                adipiscin elit, sed do eiusmod tempor incididunt
                                ut labore consectetur ipsum dolor sit amet,
                                consectetur elit, sed do eiusmod tempor incidid
                                Lorem ipsum dolor sit amet adipiscin elit”{" "}
                              </p>
                              <h3>Ellen Richardson</h3>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>

                <div className="cost-estimate-form-right">
                  <h2> Get Cost Estimate</h2>
                  <div className="treatment-right">
                    <form onSubmit={handleFormSubmit}>
                      <div className="treatment-form">
                        <div className="inputbox">
                          <label>Name</label>
                          <input
                            type="text"
                            placeholder=""
                            name="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="treatment-form">
                        <div className="inputbox">
                          <label>Phone</label>
                          <div className="phone-form">
                            <div className="phone-box1">
                              <select
                                aria-label="Sort dropdown"
                                className="phone-dropdown"
                                value={pcode}
                                onChange={(e) => setPcode(e.target.value)}
                              >
                                <option value="">Choose Code</option>
                                <option value="+91">India (+91)</option>
                                <option value="1">UK (+44)</option>
                                <option value="213">Algeria (+213)</option>
                                <option value="376">Andorra (+376)</option>
                                <option value="244">Angola (+244)</option>
                                <option value="1264">Anguilla (+1264)</option>
                                <option value="1268">
                                  Antigua &amp; Barbuda (+1268)
                                </option>
                                <option value="54">Argentina (+54)</option>
                                <option value="374">Armenia (+374)</option>
                                <option value="297">Aruba (+297)</option>
                                <option value="61">Australia (+61)</option>
                                <option value="43">Austria (+43)</option>
                                <option value="994">Azerbaijan (+994)</option>
                                <option value="1242">Bahamas (+1242)</option>
                                <option value="973">Bahrain (+973)</option>
                                <option value="880">Bangladesh (+880)</option>
                                <option value="1246">Barbados (+1246)</option>
                                <option value="375">Belarus (+375)</option>
                                <option value="32">Belgium (+32)</option>
                                <option value="501">Belize (+501)</option>
                                <option value="229">Benin (+229)</option>
                                <option value="1441">Bermuda (+1441)</option>
                                <option value="975">Bhutan (+975)</option>
                                <option value="591">Bolivia (+591)</option>
                                <option value="387">
                                  Bosnia Herzegovina (+387)
                                </option>
                                <option value="267">Botswana (+267)</option>
                                <option value="55">Brazil (+55)</option>
                                <option value="673">Brunei (+673)</option>
                                <option value="359">Bulgaria (+359)</option>
                                <option value="226">Burkina Faso (+226)</option>
                                <option value="257">Burundi (+257)</option>
                                <option value="855">Cambodia (+855)</option>
                              </select>
                            </div>
                            <div className="phone-box2">
                              <input
                                type="text"
                                placeholder=""
                                name="name"
                                required
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="treatment-form">
                        <div className="inputbox">
                          <label>Email</label>
                          <input
                            type="text"
                            placeholder=""
                            name="name"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="treatment-form">
                        <div className="inputbox">
                          <label>Your Query</label>
                          <textarea
                            className="querybox"
                            type="textarea"
                            name="query"
                            placeholder=""
                            rows="2"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                          ></textarea>
                        </div>
                      </div>

                      <button type="submit" name="en" className="home-button">
                        {" "}
                        {isLoading ? "Submitting..." : "Submit Now"}
                        <img src={arrowCIcon} alt="arrow-Icon" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      )}
    </>
  );
};

export default Section3;
