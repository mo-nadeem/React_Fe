import React, { useState, useEffect, useRef } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import bookIcon from "../../assests/images/05/book.png";
import doctorIcon from "../../assests/images/05/doctors.png";
import establishIcon from "../../assests/images/05/established.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import profileIcon from "../../assests/images/05/profile.png";
import Select from "react-select";
import { AiTwotoneStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import loadingImg from "../../assests/images/05/loading.png";
import { Helmet } from "react-helmet";
import shareIcon from "../../assests/images/05/share-profile.png";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

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
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const responsiveDoctor = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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

const HospitalProfile = () => {
  const { slug, country } = useParams();
  const [hospitalDetails, setHospitalDetails] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [speciality, setSpeciality] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [rating, setRating] = useState(0);
  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/hospital/${slug}/${country}`)
      .then((response) => {
        setHospitalDetails(response.data.data.hospital_info);
        setGallery(response.data.data.hospital_gallery);
        setSpeciality(response.data.data.speciality);
        setDoctor(response.data.data.doctors);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug, country]);

  // scrolled script
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

  // selected filters
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
    const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/hospital_query`;

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

  // share profile popup
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

  const [isPopupOpen1, setIsPopupOpen1] = useState(false);

  const popupStyle1 = {
    display: isPopupOpen1 ? "block" : "none",
  };
  const togglePopup1 = () => {
    setIsPopupOpen1(!isPopupOpen1);
  };

  const shareHospitalProfile = (hospitalSlug, hospitalCountry) => {
    setSharedHospitalSlug(hospitalSlug);
    setSharedHospitalCountry(hospitalCountry);
    togglePopup1();
  };
  return (
    <>
      <Helmet>
        <title>{hospitalDetails.title}</title>
        <meta name="description" content={hospitalDetails.description} />
        <link
          rel="canonical"
          href={`https://medflick.com/hospital/speciality/${slug}/${country}`}
        />

        <meta property="og:title" content={hospitalDetails.title} />

        <meta property="og:description" content={hospitalDetails.description} />

        <meta
          property="og:url"
          content={`https://medflick.com/hospital/speciality/${slug}/${country}`}
        />

        <meta property="og:type" content="website" />

        <meta property="og:locale" content="en" />

        <meta property="og:site_name" content="Medflick" />
      </Helmet>
      <Homelayout>
        <section id="hospitalprofile-section">
          <div className="midbox-inner  wiki-mk">
            <div className="hospitalprofile">
              <div className="hospitalprofile-left">
                <div className="hospitalprofile-img">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/hospital/${hospitalDetails.icon}`}
                    alt={hospitalDetails.slug}
                  />
                </div>
                <div className="hospitalprofile-head">
                  <h1>{hospitalDetails.name}</h1>
                  <div className="location">{hospitalDetails.location}</div>
                </div>
              </div>
              <div className="hospitalprofile-right">
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
                    <img src={doctorIcon} alt="doctor-icon" /> Doctors
                  </div>
                  <div className="experience-years">{hospitalDetails.doc}</div>
                </div>
                <div className="experience-total">
                  <div className="experience-text">
                    <img src={establishIcon} alt="doctor-icon" /> Established
                  </div>
                  <div className="experience-years">
                    {hospitalDetails.established}
                  </div>
                </div>
                <div className="doctor-book-an">
                  <span
                    className="save-profile"
                    onClick={() =>
                      shareHospitalProfile(
                        hospitalDetails.slug,
                        hospitalDetails.country
                      )
                    }
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
                  <span
                    className="book-appointment"
                    onClick={togglePopup}
                    style={{ cursor: "pointer" }}
                  >
                    Enquire Now <img src={bookIcon} alt="icon" />
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
                <a href="#overview" target="_self">
                  Overview
                </a>
              </li>
              <li>
                <a href="#Search-doctor" target="_self">
                  Search Doctor
                </a>
              </li>
              <li>
                <a href="#gallery" target="_self">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#doctor" target="_self">
                  Doctors
                </a>
              </li>
              <li>
                <a href="#amenitie" target="_self">
                  Amenities
                </a>
              </li>
            </ul>

            <div className="expert-profilebox">
              <div className="hospital-boxright">
                <div className="hos-profile">
                  <div className="hosprofile-img">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/hospital/${hospitalDetails.icon}`}
                      alt={hospitalDetails.name}
                    />
                  </div>{" "}
                  <span>{hospitalDetails.name}</span>
                </div>
                <a href="#" className="book-appointment">
                  Enquire Now <img src={bookIcon} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="profile-data-section">
          <div className="midbox-inner  wiki-mk">
            <div className="reviews-section">
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
                    <p>How likely are you to recommend Dr. Oleg Goncharov?</p>
                    <div className="star-box1">
                      <div>
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
                      </div>
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
                  <a href="#reviews" className="read-mor-reviews">
                    Read More Reviews
                  </a>
                </div>
              </div>
            </div>

            <div id="overview" className="profile-data-section">
              <h2>Overview</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: hospitalDetails.long_description,
                }}
              />
            </div>

            <div id="gallery" className="profile-data-section">
              <h2>Gallery</h2>

              <div className="owl-slider">
                <div id="gallery-list" className="owl-carousel">
                  <Carousel responsive={responsive} arrows={false}>
                    {gallery.map((e) => (
                      <div
                        className="item"
                        key={e.id}
                        style={{ marginRight: "20px" }}
                      >
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}/hospital/${e.icon}`}
                          alt={gallery.name}
                        />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </div>

            <div id="doctor" className="profile-data-section">
              <h2>
                Search Doctor <span>({doctor.length} Doctors)</span>
              </h2>

              <div className="hospital-list-find">
                <div className="hospital-Searchbox">
                  <input
                    type="text"
                    placeholder="Search"
                    name="name"
                    required=""
                  />
                </div>

                <div className="ding">
                  <Select
                    id="wiki"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    isSearchable={true} // Enables search
                    placeholder="Department"
                    maxMenuHeight={150}
                  />
                  {/* <select id="wiki">
                    <option value="none" selected>
                      Department
                    </option>
                  </select> */}
                </div>
                <div className="ding">
                  <Select
                    id="wiki"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    isSearchable={true} // Enables search
                    placeholder=" Location"
                    maxMenuHeight={150}
                  />
                  {/* <select id="wiki1">
                    <option value="none" selected>
                      Location
                    </option>
                  </select> */}
                </div>
                <div className="ding">
                  <Select
                    id="wiki"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    isSearchable={true} // Enables search
                    placeholder="Gender"
                    maxMenuHeight={150}
                  />
                  {/* <select id="wiki2">
                    <option value="none" selected>
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select> */}
                </div>
                <div className="ding">
                  <Select
                    id="wiki"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    isSearchable={true} // Enables search
                    placeholder="Rating.."
                    maxMenuHeight={150}
                  />
                  {/* <select id="wiki3">
                    <option value="none" selected>
                      Rating
                    </option>
                  </select> */}
                </div>
                <div className="ding">
                  <Select
                    id="wiki"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={options}
                    isSearchable={true} // Enables search
                    placeholder="Experience.."
                    maxMenuHeight={150}
                  />
                  {/* <select id="wiki4">
                    <option value="none" selected>
                      Experience
                    </option>
                    <option value="">5 Year's</option>
                    <option value="">10 Year's</option>
                    <option value="">15 Year's</option>
                    <option value="">20 Year's</option>
                    <option value="">20 Year's</option>
                  </select> */}
                </div>

                <div className="refresh-box">
                  <span onClick={handleClearSelection}>
                    <img src={loadingImg} alt="loading-Icon" />
                  </span>
                </div>
              </div>
              {doctor &&
                doctor.map((e) => (
                  <div className="exparts-item-h" key={e.id}>
                    <div className="doctor-item-img">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/doctor/${e.image}`}
                        alt={e.name}
                      />
                    </div>
                    <div className="doctor-item-doc">
                      <h3>
                        {e.prefix} {e.first_name} {e.last_name}
                      </h3>
                      <div className="department-sub">{e.designation}</div>
                      <div className="rating-star">
                        <i className="fa fa-star"></i> 5 (523)
                      </div>
                    </div>
                    <div className="doc-experience">
                      <div className="years-exper">
                        {e.experience_year}+ Years of Experience{" "}
                      </div>
                      <div className="successful-plus">
                        {e.surgery_treatment}+ Successful Surgeries{" "}
                      </div>
                    </div>
                    <div className="day-itembox">
                      {/* <div className="day-exper">Mon - Sat </div>
                      <div className="time-exper">8:00 Am - 9:00 AM </div> */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: e.opd_time,
                        }}
                      />
                    </div>
                    <div className="doctor-item-button">
                      <a href="#" className="book-app">
                        Book Appointment <img src={bookIcon} alt="icons" />
                      </a>
                      <Link to={`/doctor/${e.slug}`} className="view-profile">
                        View Profile <img src={profileIcon} alt="icons" />
                      </Link>
                    </div>
                  </div>
                ))}

              {/* <div className="exparts-item-h">
                <div className="doctor-item-img">
                  <img src="images/2023/05/04/1.jpg" />
                </div>
                <div className="doctor-item-doc">
                  <h3>Doctor Name</h3>
                  <div className="department-sub">
                    Oncologist, Medical Oncologist
                  </div>
                  <div className="rating-star">
                    <i className="fa fa-star"></i> 5 (523)
                  </div>
                </div>
                <div className="doc-experience">
                  <div className="years-exper">5 Years of Experience </div>
                  <div className="successful-plus">500+ Successful Surgeries </div>
                </div>
                <div className="day-itembox">
                  <div className="day-exper">Mon - Sat </div>
                  <div className="time-exper">8:00 Am - 9:00 AM </div>
                </div>
                <div className="doctor-item-button">
                  <a href="#" className="book-app">
                    Book Appointment <img src="images/2023/05/book.png" />
                  </a>
                  <a href="#" className="view-profile">
                    View Profile <img src="images/2023/05/profile.png" />
                  </a>
                </div>
              </div>

              <div className="exparts-item-h">
                <div className="doctor-item-img">
                  <img src="images/2023/05/04/1.jpg" />
                </div>
                <div className="doctor-item-doc">
                  <h3>Doctor Name</h3>
                  <div className="department-sub">
                    Oncologist, Medical Oncologist
                  </div>
                  <div className="rating-star">
                    <i className="fa fa-star"></i> 5 (523)
                  </div>
                </div>
                <div className="doc-experience">
                  <div className="years-exper">5 Years of Experience </div>
                  <div className="successful-plus">500+ Successful Surgeries </div>
                </div>
                <div className="day-itembox">
                  <div className="day-exper">Mon - Sat </div>
                  <div className="time-exper">8:00 Am - 9:00 AM </div>
                </div>
                <div className="doctor-item-button">
                  <a href="#" className="book-app">
                    Book Appointment <img src="images/2023/05/book.png" />
                  </a>
                  <a href="#" className="view-profile">
                    View Profile <img src="images/2023/05/profile.png" />
                  </a>
                </div>
              </div>

              <div className="exparts-item-h">
                <div className="doctor-item-img">
                  <img src="images/2023/05/04/1.jpg" />
                </div>
                <div className="doctor-item-doc">
                  <h3>Doctor Name</h3>
                  <div className="department-sub">
                    Oncologist, Medical Oncologist
                  </div>
                  <div className="rating-star">
                    <i className="fa fa-star"></i> 5 (523)
                  </div>
                </div>
                <div className="doc-experience">
                  <div className="years-exper">5 Years of Experience </div>
                  <div className="successful-plus">500+ Successful Surgeries </div>
                </div>
                <div className="day-itembox">
                  <div className="day-exper">Mon - Sat </div>
                  <div className="time-exper">8:00 Am - 9:00 AM </div>
                </div>
                <div className="doctor-item-button">
                  <a href="#" className="book-app">
                    Book Appointment <img src="images/2023/05/book.png" />
                  </a>
                  <a href="#" className="view-profile">
                    View Profile <img src="images/2023/05/profile.png" />
                  </a>
                </div>
              </div>

              <div className="exparts-item-h">
                <div className="doctor-item-img">
                  <img src="images/2023/05/04/1.jpg" />
                </div>
                <div className="doctor-item-doc">
                  <h3>Doctor Name</h3>
                  <div className="department-sub">
                    Oncologist, Medical Oncologist
                  </div>
                  <div className="rating-star">
                    <i className="fa fa-star"></i> 5 (523)
                  </div>
                </div>
                <div className="doc-experience">
                  <div className="years-exper">5 Years of Experience </div>
                  <div className="successful-plus">500+ Successful Surgeries </div>
                </div>
                <div className="day-itembox">
                  <div className="day-exper">Mon - Sat </div>
                  <div className="time-exper">8:00 Am - 9:00 AM </div>
                </div>
                <div className="doctor-item-button">
                  <a href="#" className="book-app">
                    Book Appointment <img src="images/2023/05/book.png" />
                  </a>
                  <a href="#" className="view-profile">
                    View Profile <img src="images/2023/05/profile.png" />
                  </a>
                </div>
              </div>

              <div className="exparts-item-h">
                <div className="doctor-item-img">
                  <img src="images/2023/05/04/1.jpg" />
                </div>
                <div className="doctor-item-doc">
                  <h3>Doctor Name</h3>
                  <div className="department-sub">
                    Oncologist, Medical Oncologist
                  </div>
                  <div className="rating-star">
                    <i className="fa fa-star"></i> 5 (523)
                  </div>
                </div>
                <div className="doc-experience">
                  <div className="years-exper">5 Years of Experience </div>
                  <div className="successful-plus">500+ Successful Surgeries </div>
                </div>
                <div className="day-itembox">
                  <div className="day-exper">Mon - Sat </div>
                  <div className="time-exper">8:00 Am - 9:00 AM </div>
                </div>
                <div className="doctor-item-button">
                  <a href="#" className="book-app">
                    Book Appointment <img src="images/2023/05/book.png" />
                  </a>
                  <a href="#" className="view-profile">
                    View Profile <img src="images/2023/05/profile.png" />
                  </a>
                </div>
              </div>

              <div className="exparts-item-h">
                <div className="doctor-item-img">
                  <img src="images/2023/05/04/1.jpg" />
                </div>
                <div className="doctor-item-doc">
                  <h3>Doctor Name</h3>
                  <div className="department-sub">
                    Oncologist, Medical Oncologist
                  </div>
                  <div className="rating-star">
                    <i className="fa fa-star"></i> 5 (523)
                  </div>
                </div>
                <div className="doc-experience">
                  <div className="years-exper">5 Years of Experience </div>
                  <div className="successful-plus">500+ Successful Surgeries </div>
                </div>
                <div className="day-itembox">
                  <div className="day-exper">Mon - Sat </div>
                  <div className="time-exper">8:00 Am - 9:00 AM </div>
                </div>
                <div className="doctor-item-button">
                  <a href="#" className="book-app">
                    Book Appointment <img src="images/2023/05/book.png" />
                  </a>
                  <a href="#" className="view-profile">
                    View Profile <img src="images/2023/05/profile.png" />
                  </a>
                </div>
              </div> */}

              <a href="#" className="more-doctors">
                {" "}
                View More Doctors <img src="images/2023/05/more-d.png" />
              </a>
            </div>

            <div id="specialists" className="profile-data-section">
              <h2>Specialists</h2>

              <div className="specialists-item">
                {speciality &&
                  speciality.map((e) => (
                    <div className="specialists-boxitem" key={e.id}>
                      <div className="boxitem">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}/speciality/${e.icon}`}
                          alt="speciality-icons"
                        />
                        <h4>{e.name}</h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div id="amenitie" className="profile-data-section">
              <h2>Amenities</h2>
              {/* <div className="amenities-name">Treatment</div> */}
              <div className="medical-box">
                {hospitalDetails.amenities &&
                  hospitalDetails.amenities
                    .split(",")
                    .map((amenity, index) => (
                      <Link key={index}>{amenity.trim()}</Link>
                    ))}
              </div>

              {/* <div className="amenities-name">Speciality</div>
              <div className="medical-box">
                <a href="#" target="_self">
                  Document legalisation
                </a>
                <a href="#" target="_self">
                  Medical records transfer
                </a>
                <a href="#" target="_self">
                  Online doctor consultation{" "}
                </a>
                <a href="#" target="_self">
                  Pharmacy{" "}
                </a>
                <a href="#" target="_self">
                  Post operative followup{" "}
                </a>
                <a href="#" target="_self">
                  Rehabilitation
                </a>
              </div> */}

              <div className="amenities-name">Food</div>
              <div className="medical-box">
                {hospitalDetails.food &&
                  hospitalDetails.food
                    .split(",")
                    .map((amenity, index) => (
                      <Link key={index}>{amenity.trim()}</Link>
                    ))}
              </div>

              <div className="amenities-name">Language</div>
              <div className="medical-box">
                {hospitalDetails.language_spoken &&
                  hospitalDetails.language_spoken
                    .split(",")
                    .map((amenity, index) => (
                      <Link key={index}>{amenity.trim()}</Link>
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
              <h2>Ask Free Question</h2>
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

export default HospitalProfile;
