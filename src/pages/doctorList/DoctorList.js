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

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleClearSelection = () => {
    setSelectedOption(null); // Clear the selected option
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

  return (
    <>
      <Homelayout>
        <section id="find-doctors">
          <div class="midbox-inner  wiki-mk">
            <div class="find-doctor-box">
              <h1>Find Doctors</h1>

              <div class="find-box">
                <div class="search-box">
                  <input
                    type="text"
                    placeholder="Search Doctor"
                    name="name"
                    required=""
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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

        <section id="find-doctors-list">
          <div class="midbox-inner  wiki-mk">
            <h2>
              Doctors <span>({doctor.length} Results)</span>
            </h2>
            <div class="doctors-list-find">
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
                      Delhi
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
              <div class="ding">
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
              <div class="ding">
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
              <div class="ding">
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

              <div class="refresh-box">
                <span onClick={handleClearSelection}>
                  <img src={loadingImg} alt="icon" />
                </span>
              </div>
            </div>

            <div class="doctor-midbox">
              <div class="doctor-midbox-left">
                {doctor &&
                  doctor.map((e) => {
                    // Find the hospital that matches the doctor's hospital_id
                    const matchedHospital = hospitalIcon?.find(
                      (hospital) => String(hospital.id) === e.hospital_id
                    );
                    return (
                      <div class="doctor-item-list" key={e.id}>
                        <div class="doctor-item-img">
                          <img
                            src={`${process.env.REACT_APP_BASE_URL}/doctor/${e.image}`}
                            alt={e.slug}
                          />
                        </div>
                        <div class="doctor-item-doc">
                          <h3>
                            {e.prefix} {e.first_name} {e.last_name}
                          </h3>
                          <div class="department-sub">{e.designation}</div>
                          <div class="rating-star">
                            <i class="fa fa-star"></i> 5 (523)
                          </div>

                          <div class="doc-experience">
                            <div class="years-exper">
                              {e.experience_year}+ Years of Experience{" "}
                            </div>
                            <div class="successful-plus">
                              {e.surgery_treatment}+ Successful Surgeries{" "}
                            </div>
                          </div>
                        </div>
                        <div class="doctor-item-button">
                          <a href="#" class="book-app">
                            Book Appointment <img src={bookIcon} alt="icon" />
                          </a>
                          <Link to={`/doctor/${e.slug}`} class="view-profile">
                            View Profile <img src={profileIcon} alt="icon" />
                          </Link>
                          <a href="#" class="share-profile">
                            Share Profile <img src={shareIcon} alt="icon" />
                          </a>

                          <div class="doc-Hospital">
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

              <div class="doctor-midbox-right">
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
                    Submit Now <img src={arrowCIcon} alt="arrow-Icon" />
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

export default DoctorList;
