import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import bookIcon from "../../assests/images/05/book.png";
import profileIcon from "../../assests/images/05/profile.png";
import shareIcon from "../../assests/images/05/share-profile.png";
import arrowCIcon from "../../assests/images/2023/01/arrow-c.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import loadingImg from "../../assests/images/05/loading.png";
import socialImg from "../../assests/images/08/1.png";

const DoctorList = () => {
  const { slug, country } = useParams();
  const [doctor, setDoctor] = useState([]);
  const [hospitalIcon, setHospitalIcon] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/doctors/${slug}/${country}`) // Replace with your API endpoint
      .then((response) => {
        setDoctor(response.data.doctors_list.doctors_list);
        setHospitalIcon(response.data.doctors_list.hospital_image);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug, country]);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
  ];

  const gender = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
    { value: "other", label: "other" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleSelectgenderChange = (selectedGender) => {
    setSelectedGender(selectedGender);
  };

  const handleClearSelection = () => {
    setSelectedOption(null);
    setSelectedGender(null); // Clear the selected option
  };

  //  Search filteration top

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  useEffect(() => {
    // Filter the 'doctors' based on the 'searchQuery'
    const filtered = doctor.filter((doctor) => {
      const fullName = `${doctor.first_name} ${doctor.last_name}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredDoctors(filtered);
  }, [doctor, searchQuery]);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
  };

  // form query post api
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
  
  return (
    <>
      <Homelayout>
        <section id="find-doctors">
          <div className="midbox-inner  wiki-mk">
            <div className="find-doctor-box">
              <h1>Find Doctors</h1>

              <div className="find-box">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search Doctor"
                    name="name"
                    required=""
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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

        <section id="find-doctors-list">
          <div className="midbox-inner  wiki-mk">
            <h2>
              Medflick Assured Doctors <span>({doctor.length} Results)</span>
            </h2>
            <div className="doctors-list-find">
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
                      Delhi
                    </option>
                  </select> */}
              </div>
              <div className="ding">
                <Select
                  id="wiki"
                  value={selectedGender}
                  onChange={handleSelectgenderChange}
                  options={gender}
                  isSearchable={true} // Enables search
                  placeholder="Gender"
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
              <div className="ding">
                <Select
                  id="wiki"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                  isSearchable={true} // Enables search
                  placeholder="Rating"
                  maxMenuHeight={150}
                />
                {/* <select id="wiki2">
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
                  placeholder="Experience"
                  maxMenuHeight={150}
                />
                {/* <select id="wiki3">
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
              <div className="ding">
                <Select
                  id="wiki"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                  isSearchable={true} // Enables search
                  placeholder="Hospital"
                  maxMenuHeight={150}
                />
                {/* <select id="wiki4">
                  <option value="none" selected>
                    Hospital
                  </option>
                </select> */}
              </div>

              <div className="refresh-box">
                <span onClick={handleClearSelection}>
                  <img src={loadingImg} alt="icon" />
                </span>
              </div>
            </div>

            <div className="doctor-midbox">
              <div className="doctor-midbox-left">
                {doctor &&
                  doctor.map((e) => {
                    const matchedHospital = hospitalIcon?.find(
                      (hospital) => String(hospital.id) === e.hospital_id
                    );
                    return (
                      <div className="doctor-item-list" key={e.id}>
                        <div className="doctor-item-img">
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}/doctor/${e.image}`}
                            alt={e.slug}
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

                          <div className="doc-experience">
                            <div className="years-exper">
                              {e.experience_year}+ Years of Experience{" "}
                            </div>
                            <div className="successful-plus">
                              {e.surgery_treatment}+ Successful Surgeries{" "}
                            </div>
                          </div>
                        </div>
                        <div className="doctor-item-button">
                          <Link to="/query" className="book-app">
                            Book Appointment <img src={bookIcon} alt="icon" />
                          </Link>
                          <Link
                            to={`/doctor/${e.slug}`}
                            className="view-profile"
                          >
                            View Profile <img src={profileIcon} alt="icon" />
                          </Link>
                          <span
                            onClick={togglePopup}
                            style={{ cursor: "pointer" }}
                            className="share-profile"
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
                                      <a href="#">
                                        <img src={socialImg} alt="" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <img
                                          src="images/2023/08/2.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <img
                                          src="images/2023/08/3.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <img
                                          src="images/2023/08/4.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <img
                                          src="images/2023/08/5.png"
                                          alt=""
                                        />
                                      </a>
                                    </li>
                                  </ul>

                                  <div class="share-link">
                                    <input
                                      type="text"
                                      placeholder="www.medflick.com/share/hospital"
                                      name="name"
                                      required=""
                                    />
                                    <button
                                      type="submit"
                                      name="en"
                                      class="copy-link"
                                    >
                                      Copy Link
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="doc-Hospital">
                            {e.location}
                            {matchedHospital && (
                              <img
                                src={`${process.env.REACT_APP_BASE_URL}/hospital/${matchedHospital.icon}`}
                                alt="icon"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="doctor-midbox-right">
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

export default DoctorList;
