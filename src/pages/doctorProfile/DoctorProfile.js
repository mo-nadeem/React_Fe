import React, { useState, useEffect, useRef } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import experienceIcon from "../../assests/images/05/experience.png";
import shareIcon from "../../assests/images/05/share-profile.png";
import bookIcon from "../../assests/images/05/book.png";
import { AiTwotoneStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import icon1 from "../../assests/images/05/01/1.png";
import icon2 from "../../assests/images/05/01/2.png";
import icon3 from "../../assests/images/05/01/3.png";
import DoctorVideo from "./DoctorVideo";
import { Helmet } from "react-helmet";
import { AiOutlineStar } from "react-icons/ai";
import DoctorExpert from "../../components/Home/DoctorExpert";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const DoctorProfile = () => {
  const { slug } = useParams();
  const [docotorDetails, setDocotorDetails] = useState([]);
  const [qa, setQa] = useState([]);
  const [treament, setTreament] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [sharedDoctorSlug, setSharedDoctorSlug] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/doctor/${slug}`)
      .then((response) => {
        setDocotorDetails(response.data.data.doctor_info);
        setTreament(response.data.data.treatments);
        setHospitals(response.data.data.hospital);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug]);

  // for rating

  const [rating, setRating] = useState(0);
  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  // scrolled screen script
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // form popup post method
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
    const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/doctor_query`;

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

  // form popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
  };

  // share profile popup
  const [isPopupOpen1, setIsPopupOpen1] = useState(false);

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

  const popupStyle1 = {
    display: isPopupOpen1 ? "block" : "none",
  };
  const togglePopup1 = () => {
    setIsPopupOpen1(!isPopupOpen1);
  };

  const shareDoctorProfile = (doctorSlug) => {
    setSharedDoctorSlug(doctorSlug);
    togglePopup1();
  };
  return (
    <>
      <Helmet>
        {treament.map((e) => (
          <title>
            {" "}
            {docotorDetails.prefix} {docotorDetails.first_name}{" "}
            {docotorDetails.last_name} | Best {e.name} in{" "}
            {docotorDetails.location}, India | Medflick
          </title>
        ))}
        {/* <title>{docotorDetails && docotorDetails.title}</title> */}
        <meta
          name="description"
          content={docotorDetails && docotorDetails.description}
        />
        <link rel="canonical" href={`https://medflick.com/doctor/${slug}`} />
        <meta
          property="og:title"
          content={docotorDetails && docotorDetails.title}
        />

        <meta
          property="og:description"
          content={docotorDetails && docotorDetails.description}
        />
        <meta
          property="og:url"
          content={`https://medflick.com/doctor/${slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Medflick" />
      </Helmet>
      <Homelayout>
        <section id="doctorprofile-section">
          <div className="midbox-inner  wiki-mk">
            <div className="doctorprofile">
              <div className="doctorprofile-left">
                <div className="doctorprofile-img">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/doctor/${docotorDetails.image}`}
                    alt={docotorDetails.slug}
                  />
                </div>
                <div className="doctorprofile-head">
                  <h1>
                    {docotorDetails.prefix} {docotorDetails.first_name}{" "}
                    {docotorDetails.last_name}
                  </h1>
                  <div className="department">{docotorDetails.designation}</div>
                  <div className="location">{docotorDetails.location}</div>
                </div>
              </div>
              <div className="doctorprofile-right">
                <div className="rating-Overall">
                  <div className="rating-box">
                    <i>
                      <AiTwotoneStar />
                    </i>{" "}
                    Overall rating
                  </div>
                  <div className="rating-no">4.90</div>
                  <a href="#" className="verified-link">
                    1,650 verified reviews
                  </a>
                </div>
                <div className="experience-total">
                  <div className="experience-text">
                    <img src={experienceIcon} alt="icon" /> Total experience
                  </div>
                  <div className="experience-years">
                    {docotorDetails.experience_year}+ Years
                  </div>
                </div>
                <div className="doctor-book-an">
                  <span
                    className="save-profile"
                    onClick={() => shareDoctorProfile(docotorDetails.slug)}
                    style={{ cursor: "pointer" }}
                  >
                    Share Profile <img src={shareIcon} alt="icon" />
                  </span>
                  {isPopupOpen1 && (
                    <div class="popup" data-popup="popup-3" style={popupStyle1}>
                      <div class="popup-inner3">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button
                              type="button"
                              class="popup-close"
                              data-popup-close="popup-3"
                              data-dismiss="modal"
                              onClick={togglePopup1}
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <h2>Share Link</h2>
                          <p>Share this hospital with others via...</p>
                          <ul>
                            <li>
                              <FacebookShareButton
                                url={`${window.location.origin}/doctor/${sharedDoctorSlug}`}
                              >
                                <FacebookIcon size={50} round />
                              </FacebookShareButton>
                            </li>
                            <li>
                              <TwitterShareButton
                                url={`${window.location.origin}/doctor/${sharedDoctorSlug}`}
                              >
                                <TwitterIcon size={50} round />
                              </TwitterShareButton>
                            </li>
                            <li>
                              <WhatsappShareButton
                                url={`${window.location.origin}/doctor/${sharedDoctorSlug}`}
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
                              value={`${window.location.origin}/doctor/${sharedDoctorSlug}`}
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

                  <span
                    className="book-appointment"
                    onClick={togglePopup}
                    style={{ cursor: "pointer" }}
                  >
                    Book Appointment <img src={bookIcon} alt="icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="profile-link" className={isScrolled ? "sticky-p" : ""}>
          <div
            className={`midbox-inner  wiki-mk ${
              isScrolled ? "visible-title" : ""
            }`}
          >
            <ul>
              <li>
                <a href="#reviews" target="_self" className="active">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#about" target="_self">
                  About
                </a>
              </li>
              <li>
                <a href="#specializations" target="_self">
                  Specializations
                </a>
              </li>
              <li>
                <a href="#services" target="_self">
                  Services
                </a>
              </li>
            </ul>

            <div className="expert-profilebox">
              <div className="dr-boxright">
                <div className="doc-profile">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/doctor/${docotorDetails.image}`}
                  />{" "}
                  {docotorDetails.prefix} {docotorDetails.first_name}{" "}
                  {docotorDetails.last_name}
                </div>
                <a href="#" className="book-appointment">
                  Book Appointment <img src={bookIcon} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="profile-data-section">
          <div className="midbox-inner  wiki-mk">
            <div id="overview" className="reviews-section">
              <div className="overall-rating">
                <div className="overall-rating-left">
                  <h3>Overall Rating</h3>
                  <div className="star-rating">
                    <div className="rating-nobox">5.00</div>
                    <div className="star-rating-box">
                      <i>
                        <AiTwotoneStar />
                      </i>
                      <i>
                        <AiTwotoneStar />
                      </i>
                      <i>
                        <AiTwotoneStar />
                      </i>
                      <i>
                        <AiTwotoneStar />
                      </i>
                      <i>
                        <AiTwotoneStar />
                      </i>
                      <span>
                        Based on <a href="#">31 Reviews</a>
                      </span>
                    </div>
                  </div>

                  <div className="star-reviews-box">
                    <div className="leave-review">Leave a review</div>
                    {/* <input /> */}
                    <p>How likely are you to recommend Dr. Oleg Goncharov?</p>
                    <div className="star-box1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          onClick={() => handleRatingClick(star)}
                          style={{
                            fontSize: "3rem",
                            cursor: "pointer",
                            color: "#ff6800",
                          }}
                        >
                          {star <= rating ? (
                            <i>
                              <AiTwotoneStar />
                            </i>
                          ) : (
                            <i>
                              <AiOutlineStar />
                            </i>
                          )}
                        </span>
                      ))}
                      <div className="star-box2">(Select a Rating)</div>
                    </div>
                  </div>
                </div>

                <div className="overall-rating-right">
                  <h3>Recent Reviews</h3>

                  <div className="reviews-top-box">
                    <p className="more">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitati.
                    </p>
                    <div className="name-month-box">
                      Name
                      <div className="month-box">
                        <span></span>1 Month Ago
                      </div>
                    </div>
                  </div>

                  <div className="reviews-top-box">
                    <p className="more">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitati.
                    </p>
                    <div className="name-month-box">
                      Name
                      <div className="month-box">
                        <span></span>1 Month Ago
                      </div>
                    </div>
                  </div>
                  <a href="#" className="read-mor-reviews">
                    Read More Reviews
                  </a>
                </div>
              </div>
            </div>

            <div id="about" className="profile-data-section">
              <h2>About</h2>

              <div
                dangerouslySetInnerHTML={{
                  __html: docotorDetails && docotorDetails.long_description,
                }}
              />
            </div>

            <div className="doctor-education">
              <div className="education-box">
                <h2>
                  <img src={icon1} alt="icon" />
                  Education
                </h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: docotorDetails && docotorDetails.qualification,
                  }}
                />
              </div>

              <div className="education-box">
                <h2>
                  <img src={icon2} alt="icon" />
                  Titles and Positions
                </h2>
                <ul>
                  <li>{docotorDetails.designation}</li>
                </ul>
              </div>

              <div className="education-box">
                <h2>
                  <img src={icon3} alt="icon" />
                  Hospital Affiliations
                </h2>
                <ul>
                  {hospitals.map((e) => (
                    <li key={e.id}>{e.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Doctor video section */}
            <DoctorVideo />

            {/* End */}
            {docotorDetails.specialization && (
              <div id="specializations" className="profile-data-section">
                <h2>Specialization</h2>
                <div className="medical-box">
                  {docotorDetails.specialization &&
                    docotorDetails.specialization
                      .split(",")
                      .map((amenity, index) => (
                        <Link key={index}>{amenity.trim()}</Link>
                      ))}
                </div>
              </div>
            )}

            <div id="services" className="profile-data-section">
              <h2>Services</h2>
              <div className="medical-box">
                {treament.map((e) => (
                  <a href="#" target="_self" key={e.id}>
                    {e.name}
                  </a>
                ))}
              </div>
            </div>

            {/* <div id="reviews" className="profile-data-section">
              <h2>Reviews</h2>
              <div className="most-reviews">
                <select
                  className="reviews-dropdown "
                  aria-label="Sort dropdown"
                >
                  <option value="select-language">Most Relevant</option>
                  <option value=""> Oncology</option>
                  <option value=""> Medical Oncology</option>
                </select>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star">
                    <AiTwotoneStar />
                  </i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div className="reviews-top-box">
                <div className="star-rating-box">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div className="name-month-box">
                  Patient Name
                  <div className="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <a href="#" className="read-mor-reviews">
                Read More Reviews
              </a>
            </div> */}
          </div>
        </section>
      </Homelayout>

      {isPopupOpen && (
        <div className="popup" data-popup="popup-1" style={popupStyle}>
          <div className="popup-inner2">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="popup-close"
                  data-popup-close="popup-1"
                  data-dismiss="modal"
                  onClick={togglePopup}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <h2> Book Appointment</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="treatment-right">
                  <div className="treatment-form">
                    <div className="inputbox">
                      <label>Full Name</label>
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
                      <label>Phone Number</label>
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
                            {/* ... Other options ... */}
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
                      <label>Email Address</label>
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

                  {/* <div className="treatment-form">
                            <div className="medical-report-wrapper">
                              <button className="medical-report">
                                <img src="images/2023/07/upload-icon1.png" />{" "}
                                Upload medical report
                              </button>
                              <input type="file" name="file" />
                            </div>
                          </div> */}

                  <button type="submit" name="en" className="home-button">
                    {isLoading ? "Submitting..." : "Submit Now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorProfile;
