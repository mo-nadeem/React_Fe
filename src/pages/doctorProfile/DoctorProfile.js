import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import experienceIcon from "../../assests/images/05/experience.png";
import saveIcon from "../../assests/images/05/save.png";
import bookIcon from "../../assests/images/05/book.png";

const DoctorProfile = () => {
  const { slug } = useParams();
  const [docotorDetails, setDocotorDetails] = useState([]);
  const [qa, setQa] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/doctor/${slug}`)
      .then((response) => {
        setDocotorDetails(response.data.data.doctor_info);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug]);
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
                    <i className="fa fa-star"></i> Overall rating
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
                  <a href="#" className="save-profile">
                    Save Profile <img src={saveIcon} alt="icon" />
                  </a>
                  <a href="#" className="book-appointment">
                    Book Appointment <img src={bookIcon} alt="icon" />
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
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <span>
                        Based on <a href="#">31 Reviews</a>
                      </span>
                    </div>
                  </div>

                  <div className="star-reviews-box">
                    <div className="leave-review">Leave a review</div>
                    <p>How likely are you to recommend Dr. Oleg Goncharov?</p>
                    <div className="star-box1">
                      <div className="rating">
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
                        <div className="rating__box">
                          <label for="rating-1" className="rating__star">
                            <i className="fa fa-star"></i>
                          </label>
                          <label for="rating-2" className="rating__star">
                            <i className="fa fa-star"></i>
                          </label>
                          <label for="rating-3" className="rating__star">
                            <i className="fa fa-star"></i>
                          </label>
                          <label for="rating-4" className="rating__star">
                            <i className="fa fa-star"></i>
                          </label>
                          <label for="rating-5" className="rating__star">
                            <i className="fa fa-star"></i>
                          </label>
                        </div>
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
                <h2>Education</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: docotorDetails && docotorDetails.qualification,
                  }}
                />
              </div>

              <div className="education-box">
                <h2>Titles and Positions</h2>
                <ul>
                  <li>{docotorDetails.designation}</li>
                </ul>
              </div>

              <div className="education-box">
                <h2>Hospital Affiliations</h2>
                <ul>
                  <li>
                    New York-Presbyterian / Columbia University Irving Medical
                    Center
                  </li>
                </ul>
              </div>
            </div>

            <div id="specializations" className="profile-data-section">
              <h2>Specialization</h2>
              <div className="medical-box">
                <a href="#" target="_self">
                  Oncology
                </a>
                <a href="#" target="_self">
                  Medical Oncology{" "}
                </a>
              </div>
            </div>

            <div id="services" className="profile-data-section">
              <h2>Services</h2>
              <div className="medical-box">
                <a href="#" target="_self">
                  Bone Marrow Transplant
                </a>
                <a href="#" target="_self">
                  Breast Cancer Management{" "}
                </a>
                <a href="#" target="_self">
                  Breast Cancer Treatment{" "}
                </a>
                <a href="#" target="_self">
                  Chemotherapy Of Haematological Malignancies{" "}
                </a>
                <a href="#" target="_self">
                  Cancer Surgery{" "}
                </a>
                <a href="#" target="_self">
                  Chemotherapy Of Solid Tumors{" "}
                </a>
                <a href="#" target="_self">
                  Multiple Myeloma{" "}
                </a>
                <a href="#" target="_self">
                  Picc Line Insertion
                </a>
                <a href="#" target="_self">
                  Prostate Cancer Surgery
                </a>
                <a href="#" target="_self">
                  Prostate Cancer
                </a>
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

export default DoctorProfile;
