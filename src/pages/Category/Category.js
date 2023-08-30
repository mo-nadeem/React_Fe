import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import DoctorExpert from "../../components/Home/DoctorExpert";
import Testimonials from "../../components/Home/Testimonials";
import { useParams } from "react-router-dom";
import arrowImg from "../../assests/images/2023/01/arrow-c.png";
import axios from "axios";
import DoctorCarousel from "./DoctorCarousel";
import HospitalCarousel from "./HospitalCarousel";
import { Link } from "react-router-dom";
import arrowTrans from "../../assests/images/2023/01/pack-arrow.png";
import { Helmet } from "react-helmet";
import CategoryBlog from "./CategoryBlog";
import Community from "../../components/community/Community";
import CategoryQA from "./CategoryQA";
import DontPay from "../../components/DontPay/DontPay";
import HealthQuerys from "../../components/Home/HealthQuerys";
import Blog from "../../components/Home/Blog";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import manImg from "../../assests/images/07/man.jpg";
import arrowCIcon from "../../assests/images/2023/01/arrow-c.png";
import HelpYou from "../../components/HelpYou/HelpYou";
import ReCAPTCHA from "react-google-recaptcha";
import { ThreeDots } from "react-loader-spinner";
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
const Category = () => {
  const { slug, country } = useParams();
  const [speciality, setSpecliality] = useState([]);
  const [info, setInfo] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [blog, setBlog] = useState([]);
  const [qa, setQa] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/speciality/${slug}/${country}`
      )
      .then((response) => {
        setSpecliality(response.data.data.treatment_list);
        setInfo(response.data.data.speciality_info);
        setDoctor(response.data.data.doctor);
        setHospital(response.data.data.hospitals);
        setBlog(response.data.data.blogs);
        setQa(response.data.data.qa);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug, country]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
  };

  // form query post api
  const [name, setName] = useState("");
  const [pcode, setPcode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

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
    setPcode("");
    setEmail("");
    setQuery("");
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
          clearFormFields();
          setIsPopupOpen(false);
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

  return (
    <>
      <Helmet>
        <title>{info.title}</title>
        <meta name="description" content={info.description} />
        <link
          rel="canonical"
          href={`https://medflick.com/${slug}/${country}`}
        />
        <meta property="og:title" content={info.title} />

        <meta property="og:description" content={info.description} />

        <meta property="og:url" content="https://medflick.com" />

        <meta property="og:type" content="website" />

        <meta property="og:locale" content="en" />

        <meta property="og:site_name" content="Medflick" />
      </Helmet>
      <Homelayout>
        <section id="category-slider">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/speciality/${info.image}`}
            alt="Category"
          />
          <div className="category-slidertext">
            <h1>{info.name}</h1>
            {/* <p>{info.short_description}</p> */}
            <div
              className="doctors-bio"
              dangerouslySetInnerHTML={{
                __html: info.short_description,
              }}
            />
          </div>
        </section>

        <section id="category-marquee">
          <div className="marquee-wrapper">
            <div
              className="marquee"
              style={{
                animationDuration: "21s",
              }}
            >
              <div className="Marquee-tag"> 100+ Surgeries </div>
              <div className="Marquee-tag"> 95% Success Rate </div>
              <div className="Marquee-tag"> 4000+ Top Doctors </div>
              <div className="Marquee-tag"> 1000+ Top Hospital </div>
              <div className="Marquee-tag"> 100+ Surgeries </div>
              <div className="Marquee-tag"> 95% Success Rate </div>
              <div className="Marquee-tag"> 4000+ Top Doctors </div>
              <div className="Marquee-tag"> 1000+ Top Hospital </div>
            </div>
          </div>
        </section>

        <section id="category-mid">
          <div className="midbox-inner  wiki-mk">
            <h2>{info.menu_name}</h2>
            <p>{info.quote}</p>
            <a onClick={togglePopup}>
              Get Cost Estimate <img src={arrowImg} alt="ask-a-questions" />
            </a>
          </div>
        </section>

        <section id="treatments-section">
          <div className="midbox-inner wiki-mk">
            <h2>
              {info.name} treatments in <span>{info.country}</span>
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: info.long_description,
              }}
            />
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
            </p> */}

            <ul>
              {speciality &&
                speciality.map((e) => (
                  <li key={e.id}>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/treatments/${e.home_image}`}
                      alt={e.name}
                    />
                    <Link to={`/treatment/${e.slug}/${e.country}`}>
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">{e.name} </div>
                          <div className="cost">${e.price}</div>
                        </div>
                        <div className="packages-details">
                          {e.short_description.slice(0, 130)}....
                        </div>

                        {/* <div
                          className="packages-details"
                          dangerouslySetInnerHTML={{
                            __html: e.short_description,
                          }}
                        /> */}
                        <a href="#">
                          <img
                            src={arrowTrans}
                            className="arrow-link"
                            alt="arrow"
                          />
                        </a>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
        {/* components section */}

        <DoctorExpert />

        {/* end */}
        {/* How I can Help You */}

        <HelpYou />
        {/* End */}

        {/* Dont pay */}
        <DontPay />

        {/* end */}
        {/* doctor section */}
        <DoctorCarousel doctor={doctor} />

        {/* end */}
        {/* Hospital section */}
        <HospitalCarousel hospital={hospital} />

        {/* end */}

        {/* query components */}
        {/* <CategoryQA qa={qa} /> */}
        <HealthQuerys />

        <Testimonials />
        {/* end */}

        {/* community section */}

        <Community />

        {/* end */}
        {/* Blog Section */}

        <CategoryBlog blog={blog} />
        {/* Blog end */}
      </Homelayout>
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
                      <div
                        className="treatment-form"
                        style={nameError ? Formstyles.errorInput : {}}
                      >
                        <div className="inputbox">
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
                          {nameError && (
                            <span style={Formstyles.errorMessage}>
                              {nameError}
                            </span>
                          )}
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
                                type="tel"
                                placeholder=""
                                name="name"
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
                              {/* {phoneError && (
                              <span style={Formstyles.errorMessage}>
                                {phoneError}
                              </span>
                            )} */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="treatment-form">
                        <div className="inputbox">
                          <label>Email</label>
                          <input
                            type="email"
                            placeholder=""
                            name="name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
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
                            autoComplete="off"
                          ></textarea>
                        </div>
                      </div>
                      <ReCAPTCHA
                        sitekey="6LcX6-YnAAAAAAjHasYD8EWemgKlDUxZ4ceSo8Eo" // Replace with your reCAPTCHA site key
                        onChange={handleCaptchaChange}
                      />
                      <button type="submit" name="en" className="home-button">
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
                        )}
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

export default Category;
