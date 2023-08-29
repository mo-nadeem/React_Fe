import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import axios from "axios";
import { useParams } from "react-router-dom";
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
import { Helmet } from "react-helmet";
import { AiTwotoneStar } from "react-icons/ai";

const HospitalList = () => {
  const { slug, country } = useParams();
  const [hospital, setHospital] = useState([]);
  const [info, setInfo] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/hospitals/${slug}/${country}`)
      .then((response) => {
        setHospital(response.data.hospital_list.hospital_list);
        setImages(response.data.hospital_list.hospital_gallery);
        setInfo(response.data.hospital_list.specility_name);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug, country]);

  const [showNotFoundMessage, setShowNotFoundMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNotFoundMessage(true);
    }, 2000);
  }, []);

  // const handleImageClick = (imageSrc) => {
  //   setActiveImage(imageSrc);
  // };
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

  // form submitting

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
  return (
    <>
      <Helmet>
        {info.hos_title ? (
          <title>{info.hos_title}</title>
        ) : (
          showNotFoundMessage && <title>null</title>
        )}
        {info.hos_description ? (
          <meta name="description" content={info.hos_description} />
        ) : (
          <meta name="description" content="null" />
        )}
        <link
          rel="canonical"
          href={`https://medflick.com/hospitals/speciality/${slug}/${country}`}
        />
        <meta property="og:title" content={info.hos_title} />

        <meta property="og:description" content={info.hos_description} />

        <meta
          property="og:url"
          content={`https://medflick.com/hospitals/speciality/${slug}/${country}`}
        />

        <meta property="og:type" content="website" />

        <meta property="og:locale" content="en" />

        <meta property="og:site_name" content="Medflick" />
      </Helmet>
      <Homelayout>
        <section id="find-doctors">
          <div className="midbox-inner  wiki-mk">
            <div className="find-doctor-box">
              <h1>Find Hospitals</h1>

              <div className="find-box">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search Hospital"
                    name="name"
                    required=""
                  />
                </div>
                <div className="location-box">
                  <input
                    type="text"
                    placeholder="Any Location"
                    name="name"
                    required=""
                  />
                </div>
                <button type="submit" name="en" className="find-doctor">
                  Find Doctor
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="find-hospital-list">
          <div className="midbox-inner  wiki-mk">
            <h2>
              Medflick Assured Hospitals In India{" "}
              <span>({hospital.length} Results)</span>
            </h2>
            <div className="hospital-list-find">
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
                {/* <select id="wiki">
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

              <div className="refresh-box-hospital">
                <a onClick={handleClearSelection} href="#">
                  <img
                    src={loadingImg}
                    alt="changes"
                    style={{ width: "68%" }}
                  />
                </a>
              </div>
            </div>

            <div className="hospital-midbox">
              <div className="hospital-midbox-left">
                {hospital.map((hospital) => {
                  // Filter gallery items that match the current hospital's id
                  const galleryImages = images.filter(
                    (gallery) => gallery.hospital_id === String(hospital.id)
                  );

                  return (
                    <div className="hospital-item-list">
                      <div className="hospital-item-img">
                        <div className="tabs_wrapper">
                          <div className="tabs_container">
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
                      <div className="hospital-item-doc">
                        <h3>{hospital.name}</h3>
                        <div className="department-sub">
                          Oncologist, Medical Oncologist
                        </div>
                        <div className="rating-star">
                          <i>
                            <AiTwotoneStar />
                          </i>{" "}
                          5 (523)
                        </div>

                        <div className="ho-docimg">
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

                        <div className="hos-no">
                          <strong>Doctors:</strong> {hospital.doc}
                        </div>
                        <div className="hos-no">
                          <strong>Beds:</strong> {hospital.bed}
                        </div>
                        <div className="hos-no">
                          <strong>Ambulances:</strong> {hospital.ambulance}
                        </div>
                      </div>
                      <div className="hospital-item-button">
                        <Link to="/query" className="book-app">
                          Book Appointment <img src={bookIcon} alt="icon" />
                        </Link>
                        <Link
                          to={`/hospital/${hospital.slug}/${hospital.country}`}
                          className="view-profile"
                        >
                          View Profile <img src={profileIcon} alt="icon" />
                        </Link>
                        <Link className="share-profile">
                          Share Profile <img src={shareIcon} alt="icon" />
                        </Link>

                        <div className="hospital-location-box">
                          {hospital.address}
                          <img src={iconImg} alt="icon" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="hospital-midbox-right">
                <div className="treatment-right">
                  <h2>Need Assistance?</h2>
                  <form onSubmit={handleFormSubmit}>
                    <div className="treatment-form">
                      <div className="inputbox">
                        <label>Name</label>
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
                        <label>Email</label>
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

                    <button type="submit" name="en" className="home-button">
                      {" "}
                      {isLoading ? "Submitting..." : "Submit Now"}
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

export default HospitalList;
