import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import img1 from "../../assests/images/05/05/1.jpg";
import img2 from "../../assests/images/05/05/2.jpg";
import img3 from "../../assests/images/05/05/3.jpg";
import bookIcon from "../../assests/images/05/book.png";
import profileIcon from "../../assests/images/05/profile.png";
import shareIcon from "../../assests/images/05/share-profile.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import iconImg from "../../assests/images/05/loc.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import loadingImg from "../../assests/images/05/loading.png";

const HospitalList = () => {
  const { slug, country } = useParams();
  const [hospital, setHospital] = useState([]);
  const [info, setInfo] = useState([]);
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/hospitals/${slug}/${country}`)
      .then((response) => {
        setHospital(response.data.hospital_list.hospital_list);
        setInfo(response.data.hospital_list.treatment_name);
        setImages(response.data.hospital_list.hospital_gallery);
        if (response.data.hospital_list.hospital_gallery.length > 0) {
          setActiveImage(
            `${process.env.REACT_APP_BASE_URL}/hospital/${response.data.hospital_list.hospital_gallery[0].icon}`
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug, country]);

  // const handleImageClick = (imageSrc) => {
  //   setActiveImage(imageSrc);
  // };
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
    // Add more options as needed
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleClearSelection = () => {
    setSelectedOption(null); // Clear the selected option
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

              <div class="refresh-box">
                <a onClick={handleClearSelection} href="#">
                  <img src={loadingImg} alt="changes" />
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
                                  className=" activeImage"
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
                        <div class="rating-star">
                          <i class="fa fa-star"></i> 5 (523)
                        </div>

                        <div class="ho-docimg">
                          <img src={img1} />
                          <img src={img2} />
                          <img src={img3} />
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
                        <a href="#" class="book-app">
                          Book Appointment <img src={bookIcon} alt="icon" />
                        </a>
                        <Link
                          to={`/hospital/${hospital.slug}/${hospital.country}`}
                          class="view-profile"
                        >
                          View Profile <img src={profileIcon} alt="icon" />
                        </Link>
                        <Link class="share-profile">
                          Share Profile <img src={shareIcon} alt="icon" />
                        </Link>

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

                  <div class="treatment-form">
                    <div class="inputbox">
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                  </div>

                  <div class="treatment-form">
                    <div class="inputbox">
                      <label>Phone</label>
                      <div class="phone-form">
                        <div class="phone-box1">
                          <select
                            aria-label="Sort dropdown"
                            class="phone-dropdown"
                          >
                            <option value="">Choose Code</option>
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
                        <div class="phone-box2">
                          <input
                            type="text"
                            placeholder=""
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="treatment-form">
                    <div class="inputbox">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                  </div>

                  <div class="treatment-form">
                    <div class="inputbox">
                      <label>Your Query</label>
                      <textarea
                        class="querybox"
                        type="textarea"
                        name="query"
                        placeholder=""
                        rows="2"
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" name="en" class="home-button">
                    {" "}
                    Submit Now <img src="images/2023/01/arrow-c.png" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Homelayout>
    </>
  );
};

export default HospitalList;
