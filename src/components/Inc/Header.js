import React, { useState, useCallback, useEffect } from "react";
import logo from "../../assests/images/2023/01/logo.png";
import arrow from "../../assests/images/2023/01/arrow-c.png";
import { GoChevronDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";
import { Link } from "react-router-dom";
import navIcon from "../../assests/images/nav/icon1.png";
import queryImg from "../../assests/images/07/query-img.png";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { ThreeDots } from "react-loader-spinner";
const Header = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { speciality } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

  // home screen form data post api
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [number, setNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pcode, setPcode] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // State variables for error messages
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setNameError("");
    setPhoneError("");
    setEmailError("");

    // Validation logic
    let isValid = true;

    if (!firstName) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const phoneRegex = /^\d{10,}$/; // Matches 10 or more digits
    if (!number || !number.match(phoneRegex)) {
      setPhoneError("Phone must have at least 10 digits");
      isValid = false;
    }

    const fullName = `${firstName} ${lastName}`;
    if (isValid) {
      // Create the data object to be sent in the API request
      const data = {
        name: fullName,
        file: selectedFile,
        phone_code: pcode,
        phone: number,
        email: email,
        messages: query,
      };

      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/personalized_offer`;
      setIsLoading(true);

      // Make the API call
      axios
        .post(apiEndpoint, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          // Handle the API response here if needed
          console.log(response);
          alert("Questions have been successfully submitted");
          clearFormFields();
          setIsPopupOpen(false)
       
        })
        .catch((error) => {
          // Handle any errors that occurred during the API call
          console.error("Error:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const clearFormFields = () => {
    setFirstName("");
    setLastName("");
    setNumber("");
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

  // scroll

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const header = document.getElementById("header-id");
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  // FOR OFFCANVA

  const [isOffcanvas, setIsOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvas((prevIsOffcanvas) => !prevIsOffcanvas);
  };
  const handleCollapsibleClick = (event) => {
    const clickedCollapsible = event.target.closest(".has-collapsible");
    const allCollapsibles = document.querySelectorAll(".has-collapsible");

    allCollapsibles.forEach((collapsible) => {
      if (collapsible !== clickedCollapsible) {
        collapsible.classList.remove("active");
      }
    });

    clickedCollapsible.classList.toggle("active");
  };

  // for popup form

 

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
  };

  // language translet

  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Step 4: Event handler to update the selected language
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);

    // You can also update other parts of your application based on the selected language here
  };

  // Step 5: Include the external script using useEffect

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://cdn.gtranslate.net/widgets/latest/dropdown.js";
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   // Ensure that the script is loaded before attempting to change the language
  //   script.onload = () => {
  //     // Change the language using the global gtranslateSettings object
  //     if (window.gtranslateSettings) {
  //       window.gtranslateSettings.default_language = selectedLanguage;
  //     }
  //   };

  //   return () => {
  //     // Clean up: remove the script when the component unmounts
  //     document.body.removeChild(script);
  //   };
  // }, [selectedLanguage]);
  return (
    <>
      <header className="header" id="header-id">
        <div className="headerTertiary">
          <Link to="/" target="_self" className="logo-d">
            {" "}
            <img src={logo} alt="Brand Logo" />
          </Link>
          <div className="topnav-right page-header">
            <nav>
              <div className="top-menu-wrapper">
                <ul className="top-menu">
                  <li className="has-dropdown dropdown">
                    <a href="#" className="dropbtn">
                      Treatments
                      <i>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </a>
                    <div className="dropdown-content">
                      <ul>
                        {speciality &&
                          speciality.map((e) => (
                            <li key={e.id}>
                              <Link to={`/speciality/${e.slug}/${e.country}`}>
                                <img
                                  src={`${process.env.REACT_APP_BASE_URL}/speciality/${e.icon}`}
                                  alt="Brand Logo"
                                />
                                {e.menu_name}
                                <span>Medflick</span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>

                  <li className="has-dropdown dropdown">
                    <a href="#" className="dropbtn">
                      Hospitals
                      <i>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </a>
                    <div className="dropdown-content">
                      <ul>
                        {speciality &&
                          speciality.map((e) => (
                            <li key={e.id}>
                              <Link to={`/hospitals/${e.slug}/${e.country}`}>
                                <img
                                  src={`${process.env.REACT_APP_BASE_URL}/speciality/${e.icon}`}
                                  alt="Brand Logo"
                                />
                                {e.name} Hospitals
                                <span>Medflick</span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>

                  <li className="has-dropdown dropdown">
                    <a href="#" className="dropbtn">
                      Doctors
                      <i>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </a>
                    <div className="dropdown-content">
                      <ul>
                        {speciality &&
                          speciality.map((e) => (
                            <li key={e.id}>
                              <Link to={`/doctors/${e.slug}/${e.country}`}>
                                <img
                                  src={`${process.env.REACT_APP_BASE_URL}/speciality/${e.icon}`}
                                  alt="Brand Logo"
                                />
                                {e.name} Doctors
                                <span>Medflick</span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>

                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/question-answer"> Q&A </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="navbar__buttons">
            {/* <Link className="navbar__buttons-login" to="/login">
              Log In
            </Link> */}
            {/* <div className="most-recent">
              <select className="jdgm-sort-dropdown" aria-label="Sort dropdown">
                <option value="select-language">Select Language</option>
                <option value="English" selected>
                  {" "}
                  English
                </option>
              </select>
            </div> */}
            {/* <div className="gtranslate_wrapper">
              <select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                label="Select Language"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="hi">Hindi</option>
                <option value="ar">Arabic</option>
                <option value="gu">Gujarati</option>
                <option value="ta">Tamil</option>
                <option value="mr">Marathi</option>
                <option value="bn">Bengali</option>
              </select>
            </div> */}

            <Link className="qsk-question" to="/question-answer">
              Ask FREE Question <img src={arrow} alt="" />
            </Link>
          </div>
        </div>

        <div className="headerSecondry">
          <div className="header-inner wiki-mk">
            <Link href="index.html" target="_self" className="logo-m">
              {" "}
              <img src={logo} alt="Brand Logo" />
            </Link>

            <nav className="navbar">
              <span className="open-menu" onClick={toggleOffcanvas}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                  <g fill="#444444" fill-rule="evenodd">
                    <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                  </g>
                </svg>
              </span>
              <div className={`menu-wrapper${isOffcanvas ? " offcanvas" : ""}`}>
                <ul className="menu">
                  <li className="menu-block">
                    <span className="close-menu" onClick={toggleOffcanvas}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="#fff"
                          fill-rule="evenodd"
                          d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                        />
                      </svg>
                    </span>
                  </li>

                  <li className="menu-item has-collapsible">
                    <Link to="/" onClick={handleCollapsibleClick}>
                      Treatments
                      <i style={{ marginLeft: "10rem" }}>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </Link>
                    <ul className="menu-child">
                      {speciality &&
                        speciality.map((e) => (
                          <li className="menu-child-item" key={e.id}>
                            <Link
                              to={`/speciality/${e.slug}/${e.country}`}
                              className="dropbtn"
                            >
                              {e.menu_name}
                            </Link>{" "}
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="menu-item has-collapsible">
                    <Link to="/" onClick={handleCollapsibleClick}>
                      Hospitals
                      <i style={{ marginLeft: "11rem" }}>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </Link>
                    <ul className="menu-child">
                      {speciality &&
                        speciality.map((e) => (
                          <li className="menu-child-item" key={e.id}>
                            <Link
                              to={`hospitals/${e.slug}/${e.country}`}
                              className="dropbtn"
                            >
                              {e.name} Hospitals
                            </Link>{" "}
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="menu-item has-collapsible">
                    <Link to="/" onClick={handleCollapsibleClick}>
                      Doctors
                      <i style={{ marginLeft: "11.5rem" }}>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </Link>
                    <ul className="menu-child">
                      {speciality &&
                        speciality.map((e) => (
                          <li className="menu-child-item" key={e.id}>
                            <Link
                              to={`doctors/${e.slug}/${e.country}`}
                              className="dropbtn"
                            >
                              {e.name} Doctors
                            </Link>{" "}
                          </li>
                        ))}
                    </ul>
                  </li>
                  {/* <li className="menu-item has-collapsible">
                    <Link to="/">Testimonials</Link>
                  </li> */}
                  <li className="menu-item has-collapsible">
                    <Link to="/">Book an Appointment</Link>
                  </li>
                  <li className="menu-item" style={{ background: "#ff6800" }}>
                    <Link className="menu-link" style={{ color: "#fff" }}>
                      Quick info
                    </Link>
                  </li>
                  {/* <li className="menu-item">
                    <Link href="careers.html" className="submenu-link">
                      Careers
                    </Link>
                  </li> */}
                  {/* <li className="menu-item">
                    <Link to="/" className="submenu-link">
                      News & Events
                    </Link>
                  </li> */}
                  <li className="menu-item">
                    <Link to="/blogs" className="submenu-link">
                      Blog
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact-us" className="submenu-link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <button class="open-button" onClick={togglePopup}>
        <img src={queryImg} alt="query-img" />
      </button>
      <div class="form-popup" id="myForm" style={popupStyle}>
        <div class="form-container">
          <div style={{ display: "block", textAlign: "center" }}>
            <button type="button" class="btn cancel" onClick={togglePopup}>
              <img src={queryImg} alt="query-img" />
            </button>
          </div>
          <div Class="homeform-left">
            <h2>Get free Personalised Offer</h2>
            <p>
              Share your medical reports and get an exclusive offer tailored to
              your needs, requirements and preferences
            </p>
            <form onSubmit={handleFormSubmit}>
              <div class="home-form">
                <div class="inputbox1">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder=""
                    name="name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={nameError ? Formstyles.errorInput : {}}
                    autoComplete="off"
                  />
                </div>
                <div class="inputbox1">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div class="home-form">
                <div class="inputbox1">
                  <label>Phone Number</label>
                  <div class="phone-form">
                    <div class="phone-box1">
                      <select
                        aria-label="Sort dropdown"
                        class="phone-dropdown"
                        name="phone_code"
                        onChange={(e) => setPcode(e.target.value)}
                      >
                        <option value="">Choose the code</option>
                        <option value="+91">India (+91)</option>
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
                        <option value="387">Bosnia Herzegovina (+387)</option>
                        <option value="267">Botswana (+267)</option>
                        <option value="55">Brazil (+55)</option>
                        <option value="673">Brunei (+673)</option>
                        <option value="359">Bulgaria (+359)</option>
                        <option value="226">Burkina Faso (+226)</option>
                        <option value="257">Burundi (+257)</option>
                        <option value="855">Cambodia (+855)</option>
                      </select>
                    </div>
                    <div class="phone-box2">
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required
                        value={number}
                        onChange={(e) => {
                          const phoneNumber = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                          setNumber(phoneNumber);
                        }}
                        style={phoneError ? Formstyles.errorInput : {}}
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div class="inputbox1">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder=""
                    name="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              <div class="home-form">
                <div class="homequery">
                  <label>Message</label>
                  <textarea
                    class="magbox"
                    type="textarea"
                    name="query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    rows="2"
                    autoComplete="off"
                  ></textarea>
                </div>
              </div>

              <div class="home-form">
                <div class="inputbox1">
                  <div class="home-form">
                    <div class="medical-report-all">
                      <button class="medical-report-file">
                        <img src="images/2023/07/upload-icon1.png" /> Uplod
                        medical report
                      </button>
                      <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="inputbox1">
                  <ReCAPTCHA
                    sitekey="6LcX6-YnAAAAAAjHasYD8EWemgKlDUxZ4ceSo8Eo" // Replace with your reCAPTCHA site key
                    onChange={handleCaptchaChange}
                  />
                </div>
              </div>

              <button type="submit" name="en" class="home-button" disabled={isLoading}>
                {isLoading ? (
                  <ThreeDots
                    height="27"
                    width="80"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ marginLeft: "50rem" }}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  "Submit Now"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
