import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrowIcon from "../../assests/images/2023/01/arrow-c.png";
import consultentImg from "../../assests/images/03/free-consultation.jpg";
import learnMore from "../../assests/images/2023/01/learn-more.png";
import treatmentImg from "../../assests/images/03/treatment-form.jpg";
import icon1 from "../../assests/images/03/02/1.png";
import icon2 from "../../assests/images/03/02/2.png";
import icon3 from "../../assests/images/03/02/3.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import ReCAPTCHA from "react-google-recaptcha";

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
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const NavSection = ({ doctor, hospital, info }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // form submitting

  const [name, setName] = useState("");
  const [pcode, setPcode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // State variables for error messages
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };
  const clearFormFields = () => {
    setName("");
    setPhone("");
    setEmail("");
  };

  const Formstyles = {
    errorInput: {
      border: "2px solid red",
    },
    errorMessage: {
      color: "red",
      fontSize: "0.85rem",
      marginTop: "0.25rem",
    },
    loadingMessage: {
      fontSize: "1.2rem",
      color: "#333",
      marginTop: "1rem",
    },
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setNameError("");
    setPhoneError("");
    setEmailError("");

    // Validation logic
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const phoneRegex = /^\d{10,}$/; // Matches 10 or more digits
    if (!phone || !phone.match(phoneRegex)) {
      setPhoneError("Phone must have at least 10 digits");
      isValid = false;
    }

    if (isValid) {
      // Create the data object to be sent in the API request
      const data = {
        name: name,
        phone_code: pcode,
        phone: phone,
        email: email,
        // messages: query,
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
          clearFormFields();
        })
        .catch((error) => {
          // Handle any errors that occurred during the API call
          console.error("Error:", error);
        })
        .finally(() => {
          // Set loading back to false after the API call is complete
          setIsLoading(false);
        });
    }
  };

  // form 2 post request
  const [name1, setName1] = useState("");
  const [pcode1, setPcode1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [email1, setEmail1] = useState("");
  const [isLoading1, setIsLoading1] = useState(false);

  const [nameError1, setNameError1] = useState("");
  const [phoneError1, setPhoneError1] = useState("");
  const [emailError1, setEmailError1] = useState("");
  const [captchaValue1, setCaptchaValue1] = useState(null);

  const handleCaptchaChange1 = (value) => {
    setCaptchaValue1(value);
  };

  const clearFormFields1 = () => {
    setName1("");
    setPhone1("");
    setEmail1("");
    setPcode1("");
  };

  const handleFormSubmit1 = (event) => {
    event.preventDefault();

    setNameError1("");
    setPhoneError1("");
    setEmailError1("");

    // Validation logic
    let isValid = true;

    if (!name1) {
      setNameError1("Name is required");
      isValid = false;
    }
    if (!captchaValue1) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const phoneRegex = /^\d{10,}$/; // Matches 10 or more digits
    if (!phone1 || !phone1.match(phoneRegex)) {
      setPhoneError1("Phone must have at least 10 digits");
      isValid = false;
    }

    if (isValid) {
      // Create the data object to be sent in the API request
      const data = {
        name: name1,
        phone_code: pcode1,
        phone: phone1,
        email: email1,
        // messages: query,
      };

      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/free_quote_treatment`;

      setIsLoading1(true);

      // Make the API call
      axios
        .post(apiEndpoint, data)
        .then((response) => {
          // Handle the API response here if needed
          console.log(response);
          alert("questions is susscefull submitted");
          clearFormFields1();
        })
        .catch((error) => {
          // Handle any errors that occurred during the API call
          console.error("Error:", error);
        })
        .finally(() => {
          // Set loading back to false after the API call is complete
          setIsLoading1(false);
        });
    }
  };

  return (
    <>
      <section id="treatment-mid">
        <div className="midbox-inner  wiki-mk">
          <div className="treatment-findox">
            <div className="treatment-leftbox">
              <ul>
                <li>
                  <a
                    target="_self"
                    onClick={() => scrollToSection("transplant-nav1")}
                    className="active"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  {info.head_brief && (
                    <a onClick={() => scrollToSection("transplant-nav2")}>
                      {info.head_brief}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_needed && (
                    <a onClick={() => scrollToSection("transplant-nav3")}>
                      {info.head_needed}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_types && (
                    <a
                      onClick={() => scrollToSection("transplant-nav4")}
                      target="_self"
                    >
                      {info.head_types}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_complications && (
                    <a
                      onClick={() => scrollToSection("transplant-nav7")}
                      target="_self"
                    >
                      {info.head_complications}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_post_procedure && (
                    <a
                      onClick={() => scrollToSection("transplant-nav8")}
                      target="_self"
                    >
                      {info.head_post_procedure}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_life_after && (
                    <a
                      onClick={() => scrollToSection("transplant-nav9")}
                      target="_self"
                    >
                      {info.head_life_after}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_success_ate && (
                    <a
                      onClick={() => scrollToSection("transplant-nav10")}
                      target="_self"
                    >
                      {info.head_success_ate}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_analysis_and_comparision && (
                    <a
                      onClick={() => scrollToSection("transplant-nav11")}
                      target="_self"
                    >
                      {info.head_analysis_and_comparision}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_domestic && (
                    <a
                      onClick={() => scrollToSection("transplant-nav12")}
                      target="_self"
                    >
                      {info.head_domestic}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_pre_evalution && (
                    <a
                      onClick={() => scrollToSection("transplant-nav21")}
                      target="_self"
                    >
                      {info.head_pre_evalution}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_international && (
                    <a
                      onClick={() => scrollToSection("transplant-nav13")}
                      target="_self"
                    >
                      {info.head_international}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_how_treatment && (
                    <a
                      onClick={() => scrollToSection("transplant-nav31")}
                      target="_self"
                    >
                      {info.head_how_treatment}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_cost_influencing && (
                    <a
                      onClick={() => scrollToSection("transplant-nav14")}
                      target="_self"
                    >
                      {info.head_cost_influencing}
                    </a>
                  )}
                </li>
                <li>
                  {info.head_our_service && (
                    <a
                      onClick={() => scrollToSection("transplant-nav15")}
                      target="_self"
                    >
                      {info.head_our_service}
                    </a>
                  )}
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav16")}
                    target="_self"
                  >
                    Doctors
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav17")}
                    target="_self"
                  >
                    Hospitals
                  </a>
                </li>
              </ul>
            </div>

            <div className="treatment-midbox">
              <div className="treatmen-overview" id="transplant-nav1">
                <h2>Overview</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: info && info.long_description,
                  }}
                />
              </div>
              {info.head_brief && (
                <div className="treatmen-midnav" id="transplant-nav2">
                  <h2>{info.head_brief}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.brief,
                    }}
                  />

                  <div className="consultation-box">
                    <p>Plan with the best</p>
                    <Link
                      className="consultation-button"
                      to="/free-consultation"
                    >
                      Book a Free Consultation <img src={learnMore} />
                    </Link>
                  </div>
                </div>
              )}

              {/* {info.head_needed && (
                <div className="treatmen-midnav" id="transplant-nav3">
                  <h2>{info.head_needed}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.brief,
                    }}
                  />
                </div>
              )} */}

              <div className="treatment-mid-form">
                <img src={treatmentImg} />

                <div className="assistance-form">
                  <h3>Provide your details</h3>
                  {/* <p>Our Health Experts will get back to you shortly</p> */}
                  <form onSubmit={handleFormSubmit1}>
                    <div className="assistance-box">
                      <div className="input-box1">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder=""
                          name="name"
                          required
                          value={name1}
                          onChange={(e) => setName1(e.target.value)}
                          autoComplete="off"
                          style={nameError1 ? Formstyles.errorInput : {}}
                        />
                      </div>
                    </div>

                    <div className="assistance-box">
                      <div className="inputbox">
                        <label>Phone</label>
                        <div className="phone-box">
                          <div className="phone-box3">
                            <select
                              aria-label="Sort dropdown"
                              className="phone-dropdown"
                              value={pcode1}
                              onChange={(e) => setPcode1(e.target.value)}
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
                          <div className="phone-box4">
                            <input
                              type="text"
                              placeholder=""
                              name="name"
                              required
                              value={phone1}
                              onChange={(e) => {
                                const phoneNumber = e.target.value.replace(
                                  /\D/g,
                                  ""
                                ); // Remove non-numeric characters
                                setPhone1(phoneNumber);
                              }}
                              style={phoneError1 ? Formstyles.errorInput : {}}
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="assistance-box">
                      <div className="input-box1">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder=""
                          name="name"
                          required
                          value={email1}
                          onChange={(e) => setEmail1(e.target.value)}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <ReCAPTCHA
                      sitekey="6LcX6-YnAAAAAAjHasYD8EWemgKlDUxZ4ceSo8Eo" // Replace with your reCAPTCHA site key
                      onChange={handleCaptchaChange1}
                    />

                    <div className="assistance-box">
                      <button
                        type="submit"
                        name="en"
                        className="submit-now"
                        disabled={isLoading1}
                      >
                        {" "}
                        {isLoading1 ? (
                          <ThreeDots
                            height="27"
                            width="80"
                            radius="9"
                            color="#ffffff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                          />
                        ) : (
                          "Submit Now"
                        )}{" "}
                        <img src={arrowIcon} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {info.head_types && (
                <div className="treatmen-midnav box-need" id="transplant-nav4">
                  <h2>{info.head_types}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.treatment_types,
                    }}
                  />

                  <div className="consultation-box1">
                    <Link className="free-quote" to="/query">
                      Get a free quote <img src={arrowIcon} />
                    </Link>

                    <a
                      className="view-hospitals"
                      onClick={() => scrollToSection("transplant-nav17")}
                    >
                      View Hospitals
                    </a>

                    <a
                      className="view-doctors"
                      onClick={() => scrollToSection("transplant-nav16")}
                    >
                      View Doctors
                    </a>
                  </div>
                </div>
              )}
              {info.head_pre_evalution && (
                <div className="treatmen-midnav" id="transplant-nav21">
                  <h2>{info.head_pre_evalution}</h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.evalution,
                    }}
                  />
                  <div className="consultation-box">
                    <p>Plan your wellness journey with confidence</p>
                    <Link
                      className="consultation-button"
                      to="/free-consultation"
                    >
                      Book a Free Consultation <img src={learnMore} />
                    </Link>
                  </div>
                </div>
              )}
              {info.head_how_treatment && (
                <div className="treatmen-midnav" id="transplant-nav31">
                  <h2>{info.head_how_treatment}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.how_treatment,
                    }}
                  />

                  <div className="consultation-box1">
                    <Link className="free-quote" to="/query">
                      Get a free quote <img src={arrowIcon} />
                    </Link>
                    <a
                      className="view-hospitals"
                      onClick={() => scrollToSection("transplant-nav17")}
                    >
                      View Hospitals
                    </a>
                    <a
                      className="view-doctors"
                      onClick={() => scrollToSection("transplant-nav16")}
                    >
                      View Doctors
                    </a>
                  </div>
                </div>
              )}
              {info.head_complications && (
                <div className="treatmen-midnav" id="transplant-nav7">
                  <h2>{info.head_complications}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.complications,
                    }}
                  />
                </div>
              )}

              <div className="treatment-mid-form">
                <img src={treatmentImg} />

                <div className="assistance-form">
                  <h3>Provide your details</h3>
                  {/* <p>Our Health Experts will get back to you shortly</p> */}

                  <form onSubmit={handleFormSubmit}>
                    <div className="assistance-box">
                      <div className="input-box1">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder=""
                          name="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          autoComplete="off"
                          style={nameError ? Formstyles.errorInput : {}}
                        />
                      </div>
                    </div>

                    <div className="assistance-box">
                      <div className="inputbox">
                        <label>Phone</label>
                        <div className="phone-box">
                          <div className="phone-box3">
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
                          <div className="phone-box4">
                            <input
                              type="text"
                              placeholder=""
                              name="name"
                              required
                              value={phone}
                              onChange={(e) => {
                                const phoneNumber = e.target.value.replace(
                                  /\D/g,
                                  ""
                                ); // Remove non-numeric characters
                                setPhone(phoneNumber);
                              }}
                              style={phoneError ? Formstyles.errorInput : {}}
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="assistance-box">
                      <div className="input-box1">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder=""
                          name="name"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <ReCAPTCHA
                      sitekey="6LcX6-YnAAAAAAjHasYD8EWemgKlDUxZ4ceSo8Eo" // Replace with your reCAPTCHA site key
                      onChange={handleCaptchaChange}
                    />

                    <div className="assistance-box">
                      <button
                        type="submit"
                        name="en"
                        className="submit-now"
                        disabled={isLoading}
                      >
                        {" "}
                        {isLoading ? (
                          <ThreeDots
                            height="27"
                            width="80"
                            radius="9"
                            color="#ffffff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                          />
                        ) : (
                          "Submit Now"
                        )}{" "}
                        <img src={arrowIcon} alt="" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {info.head_post_procedure && (
                <div className="treatmen-midnav" id="transplant-nav8">
                  <h2>{info.head_post_procedure}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.post_procedure,
                    }}
                  />

                  <div className="consultation-box2">
                    <p>
                      The journey doesn't end here We'll stay connected
                      throughout your recovery.
                    </p>
                    <Link
                      className="consultation-button"
                      to="/free-consultation"
                    >
                      Book a Free Consultation <img src={learnMore} />
                    </Link>
                  </div>
                </div>
              )}
              {info.head_life_after && (
                <div className="treatmen-midnav" id="transplant-nav9">
                  <h2>{info.head_life_after}</h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.life_after,
                    }}
                  />
                </div>
              )}
              {info.head_success_ate && (
                <div className="treatmen-midnav" id="transplant-nav10">
                  <h2>{info.head_success_ate}</h2>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.success_ate,
                    }}
                  />

                  <div className="consultation-box1">
                    <Link className="free-quote" to="/query">
                      Get a free quote <img src={arrowIcon} />
                    </Link>
                    <a
                      className="view-hospitals"
                      onClick={() => scrollToSection("transplant-nav17")}
                    >
                      View Hospitals
                    </a>
                    <a
                      className="view-doctors"
                      onClick={() => scrollToSection("transplant-nav16")}
                    >
                      View Doctors
                    </a>
                  </div>
                </div>
              )}
              {info.head_analysis_and_comparision && (
                <div className="treatmen-midnav" id="transplant-nav11">
                  <h2>{info.head_analysis_and_comparision}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.analysis_and_comparision,
                    }}
                  />
                </div>
              )}
              {/* 
              <div className="treatmen-midnav" id="transplant-nav12">
                <h2>Domestic Cost Comparison</h2>
                <p>
                  Breakdown of the cost of liver transplant in 6 major countries
                </p>

                <div className="cost-boxmid">
                  <div className="cost-list">
                    <div className="name-city">Delhi</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Bangalore</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Mumbai</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Pune</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Chennai</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Hyderabad</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav13">
                <h2>international cost</h2>
                <p>
                  Breakdown of the cost of liver transplant in 6 major countries
                </p>

                <div className="cost-boxmid">
                  <div className="cost-list">
                    <div className="name-city">India</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">South Africa</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Singapore</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">United Kingdom</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Germany</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">USA</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>
                </div>

                <div className="consultation-box">
                  <p>Lorem ipsum dolor sit amet quis</p>
                  <a className="consultation-button" href="#">
                    Book a Free Consultation <img src={learnMore} />
                  </a>
                </div>
              </div> */}
              {info.head_cost_influencing && (
                <div className="treatmen-midnav" id="transplant-nav14">
                  <h2>{info.head_cost_influencing}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.cost_influencing,
                    }}
                  />
                </div>
              )}
              {info.head_our_service && (
                <div className="treatmen-midnav" id="transplant-nav15">
                  <h2>{info.head_our_service}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: info && info.our_service,
                    }}
                  />
                </div>
              )}

              <div className="treatmen-midnav" id="transplant-nav16">
                <h2>Doctors</h2>
                <p>
                  Fostering expertise backed by commitment, resilience and years
                  of experience, we connect you to a wide network of India’s
                  best doctors
                </p>

                <div className="owl-slider">
                  <div id="doctors-treatment" className="owl-carousel">
                    <Carousel
                      responsive={responsive}
                      arrows={false}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={1500}
                    >
                      {doctor.map((e) => (
                        <div
                          className="item"
                          style={{ marginRight: "20px" }}
                          key={e.id}
                        >
                          <div className="doctors-treatment">
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}/doctor/${e.image}`}
                              alt={e.slug}
                            />
                            <div className="doctors-treat">
                              <h3>
                                {e.prefix} {e.first_name} {e.last_name}
                              </h3>
                              <div className="doctors-sub">{e.designation}</div>
                              <Link
                                to={`/doctor/${e.slug}`}
                                className="contact-now"
                              >
                                Contact Now{" "}
                                <img src={arrowIcon} alt="arrow-icon" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div className="treatment-view">
                  <Link className="viewmore" to="/doctors">
                    View more{" "}
                  </Link>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav17">
                <h2>Hospitals</h2>
                <p>
                  Explore the most advanced, reputable and trusted hospitals in
                  India, offering the highest levels of clinical and surgical
                  excellence
                </p>

                <div className="owl-slider">
                  <div id="hospitals-treatment">
                    <Carousel
                      responsive={responsive}
                      arrows={false}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={1500}
                    >
                      {hospital.map((e) => (
                        <div
                          className="item"
                          style={{ marginRight: "20px" }}
                          key={e.id}
                        >
                          <div className="hospitals-treatment">
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}/hospital/${e.home_image}`}
                              alt={e.slug}
                            />
                            <div className="hospitals-treat">
                              <h3 style={{ textAlign: "left" }}>{e.name}</h3>
                              {/* <div className="hospitals-sub">
                                Lorem ipsum dolor sit amet
                              </div> */}
                              <Link
                                to={`/hospital/${e.slug}/${e.country}`}
                                className="contact-now"
                              >
                                Contact Now <img src={arrowIcon} alt="" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div className="treatment-view">
                  <Link className="viewmore" to="/hospitals">
                    View more{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="treatment-rightbox">
              <div className="free-consultation">
                <img src={consultentImg} />
                <h3>Book a free Consultation with Highly Qualified Doctors</h3>
                <a href="#">
                  {" "}
                  Contact us <img src={arrowIcon} alt="arrow" />
                </a>
              </div>

              <div className="navbox">
                <img src={icon1} />
                <Link to="/hospitals">
                  <h4>Hospitals</h4>
                </Link>
                <p>Medflick Assured Hospitals</p>
              </div>

              <div className="navbox">
                <img src={icon2} />
                <Link to="/doctors">
                  <h4>Doctors</h4>
                </Link>
                <p>Medflick Assured Doctors </p>
              </div>

              <div className="navbox">
                <img src={icon3} />
                <Link to="/question-answer">
                  <h4> Q&A </h4>
                </Link>
                <p>Access MedFlick-verified information</p>
              </div>

              <div className="symptomsbox">
                <h4>Symptoms</h4>

                <ul>
                  {info.symptoms &&
                    info.symptoms.split(",").map((amenity, index) => (
                      <li key={index}>
                        <Link>{amenity.trim()}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavSection;
