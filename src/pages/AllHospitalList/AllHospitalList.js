import React, { useState, useEffect,useRef } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import bookIcon from "../../assests/images/05/book.png";
import profileIcon from "../../assests/images/05/profile.png";
import shareIcon from "../../assests/images/05/share-profile.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import iconImg from "../../assests/images/05/loc.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import loadingImg from "../../assests/images/05/loading.png";
import arrowCIcon from "../../assests/images/2023/01/arrow-c.png";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import ReCAPTCHA from "react-google-recaptcha";
import { AiTwotoneStar } from "react-icons/ai";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const AllHospitalList = () => {
  const [hospital, setHospital] = useState([]);

  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/hospitals`)
      .then((response) => {
        setHospital(response.data.data.hospital);
        setImages(response.data.hospital_list.hospital_gallery);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleClearSelection = () => {
    setSelectedOption(null);
  };

  // form submitting and validation of form

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Reset error messages
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
      const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/hospital_query`;

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

  const clearFormFields = () => {
    setName("");
    setPhone("");
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

  // Share profile
  const [sharedHospitalSlug, setSharedHospitalSlug] = useState("");
  const [sharedHospitalCountry, setSharedHospitalCountry] = useState("");

  const inputRef = useRef(null);

  const copyToClipboard = () => {
    // Select the text inside the input field
    inputRef.current.select();
    inputRef.current.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    inputRef.current.setSelectionRange(0, 0);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const shareHospitalProfile = (hospitalSlug, hospitalCountry) => {
    setSharedHospitalSlug(hospitalSlug);
    setSharedHospitalCountry(hospitalCountry);
    togglePopup();
  };
  return (
    <>
      <Homelayout>
        <section id="find-doctors">
          <div class="midbox-inner  wiki-mk">
            <div class="find-doctor-box">
              <h1>Find Hospitals</h1>

              <div class="find-box">
                <div class="search-box">
                  <input
                    type="text"
                    placeholder="Search Doctor"
                    name="name"
                    required=""
                  />
                </div>
                <div class="location-box">
                  <input
                    type="text"
                    placeholder="Any Location"
                    name="name"
                    required=""
                  />
                </div>
                <button type="submit" name="en" class="find-doctor">
                  Find Doctor
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="find-hospital-list">
          <div class="midbox-inner  wiki-mk">
            <h2>
              Hospital <span>({hospital.length} Results)</span>
            </h2>
            <div class="hospital-list-find">
              <div class="ding">
                <Select
                  id="wiki"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                  isSearchable={true} // Enables search
                  placeholder=" Location"
                  maxMenuHeight={150}
                />
                {/* <select id="wiki">
                  <option value="none" selected>
                    Location
                  </option>
                </select> */}
              </div>
              <div class="ding">
                <Select
                  id="wiki"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                  isSearchable={true} // Enables search
                  placeholder=" Rating"
                  maxMenuHeight={150}
                />
                {/* <select id="wiki1">
                  <option value="none" selected>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </select> */}
              </div>
              {/* <div class="ding">
                <select id="wiki2">
                  <option value="none" selected>
                    Rating
                  </option>
                </select>
              </div>
              <div class="ding">
                <select id="wiki3">
                  <option value="none" selected>
                    Experience
                  </option>
                  <option value="">5 Year's</option>
                  <option value="">10 Year's</option>
                  <option value="">15 Year's</option>
                  <option value="">20 Year's</option>
                  <option value="">20 Year's</option>
                </select>
              </div>
              <div class="ding">
                <select id="wiki4">
                  <option value="none" selected>
                    Hospital
                  </option>
                </select>
              </div> */}

              <div class="refresh-box-hospital">
                <a onClick={handleClearSelection} href="#">
                  <img
                    src={loadingImg}
                    alt="changes"
                    style={{ width: "68%" }}
                  />
                </a>
              </div>
            </div>

            <div class="hospital-midbox">
              <div class="hospital-midbox-left">
                {/* {hospital.map((e) => (
                  <div class="hospital-item-list" key={e.id}>
                    <div class="hospital-item-img">
                      <div class="tabs_wrapper">
                        <div class="tabs_container">
                          {images.map((image) => (
                            <div
                              key={image.id}
                              className={`tab_content ${
                                activeImage === image.src ? "active" : ""
                              }`}
                              data-tab={image.id}
                            >
                              <img
                                src={image.src}
                                onClick={() => handleImageClick(image.src)}
                                alt="Hospital"
                              />
                            </div>
                          ))}
                        </div>

                        <ul class="tabs tab-h">
                          {images.map((image) => (
                            <li
                              key={image.id}
                              className={
                                activeImage === image.src ? "active" : ""
                              }
                              id={image.id}
                            >
                              <img
                                src={image.src}
                                onClick={() => handleImageClick(image.src)}
                                alt="Hospital"
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div class="hospital-item-doc">
                      <h3>{e.name}</h3>
                      <div class="department-sub">
                        Oncologist, Medical Oncologist
                      </div>
                      <div class="rating-star">
                        <i class="fa fa-star"></i> 5 (523)
                      </div>

                      <div class="ho-docimg">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                      </div>

                      <div class="hos-no">
                        <strong>Doctors:</strong> {e.doc}
                      </div>
                      <div class="hos-no">
                        <strong>Beds:</strong> {e.bed}
                      </div>
                      <div class="hos-no">
                        <strong>Ambulances:</strong> {e.ambulance}
                      </div>
                    </div>
                    <div class="hospital-item-button">
                      <a href="#" class="book-app">
                        Book Appointment <img src={bookIcon} />
                      </a>
                      <a href="#" class="view-profile">
                        View Profile <img src={profileIcon} />
                      </a>
                      <a href="#" class="share-profile">
                        Share Profile <img src={shareIcon} />
                      </a>

                      <div class="hospital-location-box">
                        22 W 15TH ST <br />
                        New York, NY 10011
                        <img src="images/2023/05/loc.png" />
                      </div>
                    </div>
                  </div>
                ))} */}
                {hospital.map((hospital) => {
                  // Filter gallery items that match the current hospital's id
                  const galleryImages = images.filter(
                    (gallery) => gallery.hospital_id === String(hospital.id)
                  );

                  return (
                    <div class="hospital-item-list">
                      <div class="hospital-item-img">
                        <div class="tabs_wrapper">
                          <div class="tabs_container">
                            <Carousel
                              swipeable={true}
                              centerMode={false}
                              infiniteLoop={true}
                              showArrows={false}
                              autoPlay={true}
                            >
                              <div
                                data-hash="one"
                                key={hospital.id}
                                style={{ border: "1px solid #464646" }}
                              >
                                <img
                                  src={`${process.env.REACT_APP_BASE_URL}/hospital/${hospital.image}`}
                                  alt={hospital.name}
                                  width="100%"
                                />
                              </div>

                              {galleryImages.map((e) => (
                                <div
                                  className="activeImage"
                                  data-hash="two"
                                  key={e.id}
                                >
                                  <img
                                    src={`${process.env.REACT_APP_BASE_URL}/hospital/${e.icon}`}
                                    alt="name"
                                    width="50%"
                                  />
                                </div>
                              ))}
                            </Carousel>
                          </div>
                        </div>
                      </div>
                      <div class="hospital-item-doc">
                        <h3>{hospital.name}</h3>
                        <div class="department-sub">
                          Oncologist, Medical Oncologist
                        </div>
                        <div className="rating-star">
                          5{" "}
                          <i>
                            <AiTwotoneStar />
                          </i>{" "}
                          (523)
                        </div>

                        <div class="ho-docimg">
                          {hospital.nabl && (
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}/hospital/${hospital.nabl}`}
                            />
                          )}
                          {hospital.nabh && (
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}/hospital/${hospital.nabh}`}
                            />
                          )}
                          {hospital.jci && (
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}/hospital/${hospital.jci}`}
                            />
                          )}
                        </div>

                        <div class="hos-no">
                          <strong>Doctors:</strong> {hospital.doc}
                        </div>
                        <div class="hos-no">
                          <strong>Beds:</strong> {hospital.bed}
                        </div>
                        <div class="hos-no">
                          <strong>Ambulances:</strong> {hospital.ambulance}
                        </div>
                      </div>
                      <div class="hospital-item-button">
                        <Link to="/query" class="book-app">
                          Book Appointment <img src={bookIcon} alt="icon" />
                        </Link>
                        <Link
                          to={`/hospital/${hospital.slug}/${hospital.country}`}
                          class="view-profile"
                        >
                          View Profile <img src={profileIcon} alt="icon" />
                        </Link>
                        <span
                          className="share-profile"
                          onClick={() =>
                            shareHospitalProfile(
                              hospital.slug,
                              hospital.country
                            )
                          }
                          style={{ cursor: "pointer" }}
                        >
                          Share Profile <img src={shareIcon} alt="icon" />
                        </span>
                        {isPopupOpen && (
                          <div
                            class="popup"
                            data-popup="popup-3"
                            style={popupStyle}
                          >
                            <div class="popup-inner3">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button
                                    type="button"
                                    class="popup-close"
                                    data-popup-close="popup-3"
                                    data-dismiss="modal"
                                    onClick={togglePopup}
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <h2>Share Link</h2>
                                <p>Share this hospital with others via...</p>
                                <ul>
                                  <li>
                                    <FacebookShareButton
                                      url={`${window.location.origin}/hospital/${sharedHospitalSlug}/${sharedHospitalCountry}`}
                                    >
                                      <FacebookIcon size={50} round />
                                    </FacebookShareButton>
                                  </li>
                                  <li>
                                    <TwitterShareButton
                                      url={`${window.location.origin}/hospital/${sharedHospitalSlug}/${sharedHospitalCountry}`}
                                    >
                                      <TwitterIcon size={50} round />
                                    </TwitterShareButton>
                                  </li>
                                  <li>
                                    <WhatsappShareButton
                                      url={`${window.location.origin}/hospital/${sharedHospitalSlug}/${sharedHospitalCountry}`}
                                    >
                                      <WhatsappIcon size={50} round />
                                    </WhatsappShareButton>
                                  </li>
                                </ul>

                                <div class="share-link">
                                  <input
                                    type="text"
                                    placeholder="www.medflick.com/share/hospital"
                                    name="name"
                                    required=""
                                    value={`${window.location.origin}/hospital/${sharedHospitalSlug}/${sharedHospitalCountry}`}
                                    ref={inputRef}
                                  />
                                  <button
                                    type="submit"
                                    name="en"
                                    class="copy-link"
                                    onClick={copyToClipboard}
                                  >
                                    Copy Link
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div class="hospital-location-box">
                          {hospital.location}
                          <img src={iconImg} alt="icon" />
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* <div class="hospital-item-list">
                  <div class="hospital-item-img">
                    <div class="tabs_wrapper">
                      <div class="tabs_container">
                        <div class="tab_content active" data-tab="tab7">
                          <img src="images/2023/05/06/1.jpg" />
                        </div>
                        <div class="tab_content" data-tab="tab8">
                          <img src="images/2023/05/06/2.jpg" />
                        </div>
                        <div class="tab_content" data-tab="tab9">
                          <img src="images/2023/05/06/3.jpg" />
                        </div>
                      </div>

                      <ul class="tabs tab-h">
                        <li class="active" id="tab7">
                          <img src="images/2023/05/06/1.jpg" />{" "}
                        </li>
                        <li id="tab8">
                          <img src="images/2023/05/06/2.jpg" />
                        </li>
                        <li id="tab9">
                          <img src="images/2023/05/06/3.jpg" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="hospital-item-doc">
                    <h3>Hospital Name</h3>
                    <div class="department-sub">
                      Oncologist, Medical Oncologist
                    </div>
                    <div class="rating-star">
                      <i class="fa fa-star"></i> 5 (523)
                    </div>

                    <div class="ho-docimg">
                      <img src="images/2023/05/05/1.jpg" />
                      <img src="images/2023/05/05/2.jpg" />
                      <img src="images/2023/05/05/3.jpg" />
                    </div>

                    <div class="hos-no">
                      <strong>Doctors:</strong> 300
                    </div>
                    <div class="hos-no">
                      <strong>Beds:</strong> 560
                    </div>
                    <div class="hos-no">
                      <strong>Ambulances:</strong> 560{" "}
                    </div>
                  </div>
                  <div class="hospital-item-button">
                    <a href="#" class="book-app">
                      Book Appointment <img src="images/2023/05/book.png" />
                    </a>
                    <a href="#" class="view-profile">
                      View Profile <img src="images/2023/05/profile.png" />
                    </a>
                    <a href="#" class="share-profile">
                      Share Profile{" "}
                      <img src="images/2023/05/share-profile.png" />
                    </a>

                    <div class="hospital-location-box">
                      22 W 15TH ST <br />
                      New York, NY 10011
                      <img src="images/2023/05/loc.png" />
                    </div>
                  </div>
                </div>

                <div class="hospital-item-list">
                  <div class="hospital-item-img">
                    <div class="tabs_wrapper">
                      <div class="tabs_container">
                        <div class="tab_content active" data-tab="tab10">
                          <img src="images/2023/05/06/1.jpg" />
                        </div>
                        <div class="tab_content" data-tab="tab11">
                          <img src="images/2023/05/06/2.jpg" />
                        </div>
                        <div class="tab_content" data-tab="tab12">
                          <img src="images/2023/05/06/3.jpg" />
                        </div>
                      </div>

                      <ul class="tabs tab-h">
                        <li class="active" id="tab10">
                          <img src="images/2023/05/06/1.jpg" />{" "}
                        </li>
                        <li id="tab11">
                          <img src="images/2023/05/06/2.jpg" />
                        </li>
                        <li id="tab12">
                          <img src="images/2023/05/06/3.jpg" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="hospital-item-doc">
                    <h3>Hospital Name</h3>
                    <div class="department-sub">
                      Oncologist, Medical Oncologist
                    </div>
                    <div class="rating-star">
                      <i class="fa fa-star"></i> 5 (523)
                    </div>

                    <div class="ho-docimg">
                      <img src="images/2023/05/05/1.jpg" />
                      <img src="images/2023/05/05/2.jpg" />
                      <img src="images/2023/05/05/3.jpg" />
                    </div>

                    <div class="hos-no">
                      <strong>Doctors:</strong> 300
                    </div>
                    <div class="hos-no">
                      <strong>Beds:</strong> 560
                    </div>
                    <div class="hos-no">
                      <strong>Ambulances:</strong> 560{" "}
                    </div>
                  </div>
                  <div class="hospital-item-button">
                    <a href="#" class="book-app">
                      Book Appointment <img src="images/2023/05/book.png" />
                    </a>
                    <a href="#" class="view-profile">
                      View Profile <img src="images/2023/05/profile.png" />
                    </a>
                    <a href="#" class="share-profile">
                      Share Profile{" "}
                      <img src="images/2023/05/share-profile.png" />
                    </a>

                    <div class="hospital-location-box">
                      22 W 15TH ST <br />
                      New York, NY 10011
                      <img src="images/2023/05/loc.png" />
                    </div>
                  </div>
                </div> */}
              </div>

              <div class="hospital-midbox-right">
                <div class="treatment-right">
                  <h2>Need Assistance?</h2>

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
                    <button
                      type="submit"
                      name="en"
                      className="home-button"
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
                      )}
                      <img src={arrowCIcon} alt="arrow-Icon" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Homelayout>
    </>
  );
};

export default AllHospitalList;
