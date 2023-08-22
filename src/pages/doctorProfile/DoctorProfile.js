import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";

const DoctorProfile = () => {
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
          <div class="midbox-inner  wiki-mk">
            <div class="doctorprofile">
              <div class="doctorprofile-left">
                <div class="doctorprofile-img">
                  <img src="images/2023/05/1.jpg" />
                </div>
                <div class="doctorprofile-head">
                  <h1>Dr. Oleg Goncharov</h1>
                  <div class="department">Oncologist</div>
                  <div class="location">Hyderabad, India</div>
                </div>
              </div>
              <div class="doctorprofile-right">
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
                    <img src="images/2023/05/experience.png" /> Total experience
                  </div>
                  <div class="experience-years">15 Years</div>
                </div>
                <div class="doctor-book-an">
                  <a href="#" class="save-profile">
                    Save Profile <img src="images/2023/05/save.png" />
                  </a>
                  <a href="#" class="book-appointment">
                    Book Appointment <img src="images/2023/05/book.png" />
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

            <div class="expert-profilebox">
              <div class="dr-boxright">
                <div class="doc-profile">
                  <img src="images/2023/05/1.jpg" /> Dr. Oleg Goncharov
                </div>
                <a href="#" class="book-appointment">
                  Book Appointment <img src="images/2023/05/book.png" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="profile-data-section">
          <div class="midbox-inner  wiki-mk">
            <div id="overview" class="reviews-section">
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
                  <a href="#" class="read-mor-reviews">
                    Read More Reviews
                  </a>
                </div>
              </div>
            </div>

            <div id="about" class="profile-data-section">
              <h2>About</h2>
              <p>
                Dr. Avinash Deo is an experienced Neurologist with a thriving
                experience of more than 7 years, who has worked both in Turkey
                and Belgium. He specializes in Memory Disorders, Functional
                Neuroimaging, Epilepsy, Electroencephalography, Headaches and
                Sleep Disorders. He has numerous research papers in national and
                international scientific journals.
              </p>

              <ul>
                <li>7+ years of experience</li>
                <li>
                  Specializes in Memory Disorders, Functional Neuroimaging,
                  Epilepsy, Electroencephalography, Headaches and Sleep
                  Disorders
                </li>
                <li>Worked in Turkey and Belgium</li>
                <li>
                  Numerous research papers in national and international
                  scientific journals
                </li>
              </ul>
            </div>

            <div class="doctor-education">
              <div class="education-box">
                <h2>Education</h2>
                <ul>
                  <li>Medical School: New York Medical College</li>
                  <li>Internship: Mount Sinai Beth Israel</li>
                  <li>Fellowship: University Of California at San Diego</li>
                </ul>
              </div>

              <div class="education-box">
                <h2>Titles and Positions</h2>
                <ul>
                  <li>
                    Assistant Professor of Rehabilitation and Regenerative
                    Medicine at Columbia University Irving Medical Center
                  </li>
                </ul>
              </div>

              <div class="education-box">
                <h2>Hospital Affiliations</h2>
                <ul>
                  <li>
                    New York-Presbyterian / Columbia University Irving Medical
                    Center
                  </li>
                </ul>
              </div>
            </div>

            <div id="specializations" class="profile-data-section">
              <h2>Specialization</h2>
              <div class="medical-box">
                <a href="#" target="_self">
                  Oncology
                </a>
                <a href="#" target="_self">
                  Medical Oncology{" "}
                </a>
              </div>
            </div>

            <div id="services" class="profile-data-section">
              <h2>Services</h2>
              <div class="medical-box">
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

export default DoctorProfile;
