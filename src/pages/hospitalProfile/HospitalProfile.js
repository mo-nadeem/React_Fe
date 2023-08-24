import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import saveIcon from "../../assests/images/05/save.png";
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
  return (
    <>
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
                    <i className="fa fa-star"></i> Overall rating
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
                  <a href="#" className="save-profile">
                    Save Profile <img src={saveIcon} alt="icon" />
                  </a>
                  <a href="#" className="book-appointment">
                    Enquire Now <img src={bookIcon} alt="icon" />
                  </a>
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
                              <i><AiOutlineStar /></i>
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
                  <a href="#">
                    <img src="images/2023/05/loading.png" />
                  </a>
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
                        <img src="images/2023/05/07/1.png" />
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

            <div id="reviews" className="profile-data-section">
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
            </div>
          </div>
        </section>
      </Homelayout>
    </>
  );
};

export default HospitalProfile;
