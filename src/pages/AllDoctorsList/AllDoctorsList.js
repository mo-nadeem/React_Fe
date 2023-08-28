import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import axios from "axios";
import bookIcon from "../../assests/images/05/book.png";
import profileIcon from "../../assests/images/05/profile.png";
import shareIcon from "../../assests/images/05/share-profile.png";
import arrowCIcon from "../../assests/images/2023/01/arrow-c.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import loadingImg from "../../assests/images/05/loading.png";

const AllDoctorsList = () => {
  const [doctor, setDoctor] = useState([]);
  const [doctorList, setDoctorList] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [location, setLocation] = useState([]);
  const [showFilteredDoctors, setShowFilteredDoctors] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/doctors`)
      .then((response) => {
        setDoctor(response.data.data.doctors);

        const doctorsData = response.data.data.doctors;

        // Check if doctorsData is available and not empty
        if (doctorsData && doctorsData.length > 0) {
          // Extract unique locations from the doctorsData
          const uniqueLocations = Array.from(
            new Set(doctorsData.map((doctor) => doctor.location))
          );

          // Create options array with value and label properties
          const locationOptions = uniqueLocations.map((loc) => ({
            value: loc,
            label: loc,
          }));

          setLocation(locationOptions);
        } else {
          console.error("No doctor data found in the API response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // searching query

  useEffect(() => {
    // Create the API URL with filters
    const apiUrl = `${process.env.REACT_APP_BASE_URL}/api/doctors?${
      selectedLocation
        ? `location=${encodeURIComponent(selectedLocation.value)}`
        : ""
    }${
      selectedGender
        ? `&gender=${encodeURIComponent(selectedGender.value)}`
        : ""
    }`;

    // Fetch the filtered data
    axios
      .get(apiUrl)
      .then((response) => {
        setDoctorList(response.data.data.doctors);
      })
      .catch((error) => {
        console.error("Error fetching filtered data:", error);
      });
  }, [selectedLocation, selectedGender]);

  console.log(doctorList);

  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    { value: "date", label: "Date" },
    { value: "elderberry", label: "Elderberry" },
  ];

  const gender = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "other" },
  ];

  const handleSelectLocation = (selectedLocation) => {
    setSelectedLocation(selectedLocation);
  };
  const handleSelectgenderChange = (selectedGender) => {
    setSelectedGender(selectedGender);
  };

  const handleClearSelection = () => {
    setSelectedLocation(null);
    setSelectedGender(null); // Clear the selected option
  };

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
              Doctors <span>({doctor.length} Results)</span>
            </h2>
            <div className="doctors-list-find">
              <div className="ding">
                <Select
                  id="wiki"
                  value={selectedLocation}
                  onChange={handleSelectLocation}
                  options={location}
                  isSearchable={true} // Enables search
                  placeholder=" Location"
                  maxMenuHeight={150}
                />
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
              </div>
              {/* <div className="ding">
                <Select
                  id="wiki"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                  isSearchable={true} // Enables search
                  placeholder="Rating"
                  maxMenuHeight={150}
                />
              </div> */}
              {/* <div className="ding">
                <Select
                  id="wiki"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                  isSearchable={true} // Enables search
                  placeholder="Experience"
                  maxMenuHeight={150}
                />
              </div> */}
              {/* <div className="ding">
                <Select
                  id="wiki"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                  isSearchable={true} // Enables search
                  placeholder="Hospital"
                  maxMenuHeight={150}
                />
              </div> */}

              <div className="refresh-box">
                <span onClick={handleClearSelection}>
                  <img src={loadingImg} alt="icon" />
                </span>
              </div>
            </div>
            <div className="doctor-midbox">
              <div className="doctor-midbox-left">
                {doctor &&
                  doctor.map((e) => (
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
                        <a href="#" className="book-app">
                          Book Appointment <img src={bookIcon} alt="icon" />
                        </a>
                        <Link to={`/doctor/${e.slug}`} className="view-profile">
                          View Profile <img src={profileIcon} alt="icon" />
                        </Link>
                        <a href="#" className="share-profile">
                          Share Profile <img src={shareIcon} alt="icon" />
                        </a>

                        <div className="doc-Hospital">
                          {e.location}

                          <img
                            src={`${process.env.REACT_APP_BASE_URL}/hospital/${e.hospitalicon}`}
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="doctor-midbox-right">
                <div className="treatment-right">
                  <h2>Need Assistance?</h2>

                  <div className="treatment-form">
                    <div className="inputbox">
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
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
                        <div className="phone-box2">
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

                  <div className="treatment-form">
                    <div className="inputbox">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
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
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" name="en" className="home-button">
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

export default AllDoctorsList;
