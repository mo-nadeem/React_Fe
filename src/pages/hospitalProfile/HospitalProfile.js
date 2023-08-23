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
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/hospital/${slug}/${country}`)
      .then((response) => {
        setHospitalDetails(response.data.data.hospital_info);
        setGallery(response.data.data.hospital_gallery);
        setSpeciality(response.data.data.speciality);
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
  return (
    <>
      <Homelayout>
        <section id="hospitalprofile-section">
          <div class="midbox-inner  wiki-mk">
            <div class="hospitalprofile">
              <div class="hospitalprofile-left">
                <div class="hospitalprofile-img">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/hospital/${hospitalDetails.icon}`}
                    alt={hospitalDetails.slug}
                  />
                </div>
                <div class="hospitalprofile-head">
                  <h1>{hospitalDetails.name}</h1>
                  <div class="location">{hospitalDetails.location}</div>
                </div>
              </div>
              <div class="hospitalprofile-right">
                <div class="rating-Overall">
                  <div class="rating-box">
                    <i class="fa fa-star"></i> Overall rating
                  </div>
                  <div class="rating-no">4.90</div>
                  <a href="#" class="verified-link">
                    1,650 verified reviews
                  </a>
                </div>
                <div class="experience-total">
                  <div class="experience-text">
                    <img src={doctorIcon} alt="doctor-icon" /> Doctors
                  </div>
                  <div class="experience-years">{hospitalDetails.doc}</div>
                </div>
                <div class="experience-total">
                  <div class="experience-text">
                    <img src={establishIcon} alt="doctor-icon" /> Established
                  </div>
                  <div class="experience-years">
                    {hospitalDetails.established}
                  </div>
                </div>
                <div class="doctor-book-an">
                  <a href="#" class="save-profile">
                    Save Profile <img src={saveIcon} alt="icon" />
                  </a>
                  <a href="#" class="book-appointment">
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
                <a href="#reviews" target="_self" class="active">
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

            <div class="expert-profilebox">
              <div class="hospital-boxright">
                <div class="hos-profile">
                  <div class="hosprofile-img">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/hospital/${hospitalDetails.icon}`}
                      alt={hospitalDetails.name}
                    />
                  </div>{" "}
                  <span>{hospitalDetails.name}</span>
                </div>
                <a href="#" class="book-appointment">
                  Enquire Now <img src={bookIcon} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="profile-data-section">
          <div class="midbox-inner  wiki-mk">
            <div class="reviews-section">
              <div class="overall-rating">
                <div class="overall-rating-left">
                  <h3>Overall Rating</h3>
                  <div class="star-rating">
                    <div class="rating-nobox">5.00</div>
                    <div class="star-rating-box">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span>
                        Based on <a href="#">31 Reviews</a>
                      </span>
                    </div>
                  </div>

                  <div class="star-reviews-box">
                    <div class="leave-review">Leave a review</div>
                    <p>How likely are you to recommend Dr. Oleg Goncharov?</p>
                    <div class="star-box1">
                      <div class="rating">
                        <input
                          type="radio"
                          name="rating"
                          id="rating-1"
                          value="1"
                        />
                        <input
                          type="radio"
                          name="rating"
                          id="rating-2"
                          value="2"
                        />
                        <input
                          type="radio"
                          name="rating"
                          id="rating-3"
                          value="3"
                        />
                        <input
                          type="radio"
                          name="rating"
                          id="rating-4"
                          value="4"
                        />
                        <input
                          type="radio"
                          name="rating"
                          id="rating-5"
                          value="5"
                        />
                        <div class="rating__box">
                          <label for="rating-1" class="rating__star">
                            <i class="fa fa-star"></i>
                          </label>
                          <label for="rating-2" class="rating__star">
                            <i class="fa fa-star"></i>
                          </label>
                          <label for="rating-3" class="rating__star">
                            <i class="fa fa-star"></i>
                          </label>
                          <label for="rating-4" class="rating__star">
                            <i class="fa fa-star"></i>
                          </label>
                          <label for="rating-5" class="rating__star">
                            <i class="fa fa-star"></i>
                          </label>
                        </div>
                      </div>
                      <div class="star-box2">(Select a Rating)</div>
                    </div>
                  </div>
                </div>

                <div class="overall-rating-right">
                  <h3>Recent Reviews</h3>

                  <div class="reviews-top-box">
                    <p class="more">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitati.
                    </p>
                    <div class="name-month-box">
                      Name
                      <div class="month-box">
                        <span></span>1 Month Ago
                      </div>
                    </div>
                  </div>

                  <div class="reviews-top-box">
                    <p class="more">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitati.
                    </p>
                    <div class="name-month-box">
                      Name
                      <div class="month-box">
                        <span></span>1 Month Ago
                      </div>
                    </div>
                  </div>
                  <a href="#reviews" class="read-mor-reviews">
                    Read More Reviews
                  </a>
                </div>
              </div>
            </div>

            <div id="overview" class="profile-data-section">
              <h2>Overview</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: hospitalDetails.long_description,
                }}
              />
            </div>

            <div id="gallery" class="profile-data-section">
              <h2>Gallery</h2>

              <div class="owl-slider">
                <div id="gallery-list" class="owl-carousel">
                  <Carousel responsive={responsive} arrows={false}>
                    {gallery.map((e) => (
                      <div
                        class="item"
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

            <div id="Search-doctor" class="profile-data-section">
              <h2>Search Doctor</h2>

              <div class="search-doctor">
                <div class="select-department">
                  <div class="ding">
                    <div className=""></div>
                    <select id="wiki">
                      <option value="none" selected>
                        Search by Department
                      </option>
                      <option value="">Neurology</option>
                      <option value="">Neurosurgery</option>
                      <option value="">Neuromodulation</option>
                      <option value="">Orthopedics</option>
                      <option value="">Spine Surgeries</option>
                    </select>
                  </div>
                </div>

                <div class="select-doctor">
                  <div class="ding">
                    <select id="wiki1">
                      <option value="none" selected>
                        Select by Doctor
                      </option>
                      <option value=""> Dr. Sachin Kandhari</option>
                      <option value=""> Dr. Dewaker Sharma</option>
                      <option value=""> Dr. Pervez Ahmed Khan</option>
                      <option value=""> Dr. Vikas Gupta</option>
                      <option value=""> Dr. Kishan Raj</option>
                    </select>
                  </div>
                </div>

                <div class="search-box">
                  <button type="submit" name="en" class="search-now">
                    Search Now
                  </button>
                </div>
              </div>
            </div>

            <div id="doctor" class="profile-data-section">
              <h2>Doctors</h2>

              <div class="owl-slider">
                <div id="doctors-list-hospital" class="owl-carousel">
                  <Carousel responsive={responsiveDoctor} arrows={false}>
                    <div class="item">
                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="doctors-hospital-item">
                        <div class="doctors-box-item">
                          <div class="doctor-img">
                            <img src="images/2023/05/1.jpg" />
                          </div>
                          <div class="doctorprofile-head">
                            Dr. Oleg Goncharov
                            <div class="department">
                              Spine and Pain Specialist
                            </div>
                          </div>
                        </div>
                        <div class="doctors-day-time">
                          <div class="daybox">
                            <div class="day-box"> Mon-Sat </div>
                            <div class="time-box">
                              8:00 AM- 9:00 AM, 4:00 PM- 6:00 PM{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctors-time-boox">
                          <div class="daybox">
                            <a href="#" class="save-profile">
                              Save Profile
                            </a>
                            <a href="#" class="book-appointment">
                              Enquire Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>

              <a href="#" class="more-doctors">
                {" "}
                View More Doctors <img src="images/2023/05/more-d.png" />
              </a>
            </div>

            <div id="amenitie" class="profile-data-section">
              <h2>Amenities</h2>
              {/* <div class="amenities-name">Treatment</div> */}
              <div class="medical-box">
                {hospitalDetails.amenities &&
                  hospitalDetails.amenities
                    .split(",")
                    .map((amenity, index) => (
                      <Link key={index}>{amenity.trim()}</Link>
                    ))}
              </div>

              {/* <div class="amenities-name">Speciality</div>
              <div class="medical-box">
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

              <div class="amenities-name">Food</div>
              <div class="medical-box">
                {hospitalDetails.food &&
                  hospitalDetails.food
                    .split(",")
                    .map((amenity, index) => (
                      <Link key={index}>{amenity.trim()}</Link>
                    ))}
              </div>

              <div class="amenities-name">Language</div>
              <div class="medical-box">
                {hospitalDetails.language_spoken &&
                  hospitalDetails.language_spoken
                    .split(",")
                    .map((amenity, index) => (
                      <Link key={index}>{amenity.trim()}</Link>
                    ))}
              </div>
            </div>
            <div id="amenitie" class="profile-data-section">
              <h2>Speciality</h2>

              {/* <div class="amenities-name">Speciality</div> */}
              <div class="medical-box">
                {speciality &&
                  speciality.map((e) => <Link key={e.id}>{e.name}</Link>)}
              </div>
            </div>

            <div id="reviews" class="profile-data-section">
              <h2>Reviews</h2>
              <div class="most-reviews">
                <select class="reviews-dropdown " aria-label="Sort dropdown">
                  <option value="select-language">Most Relevant</option>
                  <option value=""> Oncology</option>
                  <option value=""> Medical Oncology</option>
                </select>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <div class="reviews-top-box">
                <div class="star-rating-box">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <p>
                  Been going here for 7 years. Dr Oleg is great and the staff is
                  fantastic. Druity is the best hygienist I’ve ever had.
                </p>
                <div class="name-month-box">
                  Patient Name
                  <div class="month-box">
                    <span></span>1 Month Ago
                  </div>
                </div>
              </div>

              <a href="#" class="read-mor-reviews">
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
