import React, { useState, useEffect, useCallback } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import axios from "axios";
const QuestionAns = () => {
  const dispatch = useDispatch();

  const { qa } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

  // Like mange
  const [likes, setLikes] = useState({});
  const handleLike = (questionId) => {
    // Check if the questionId is already in the state, if not initialize it with 1 like, otherwise increment the like count.
    setLikes((prevLikes) => ({
      ...prevLikes,
      [questionId]: (prevLikes[questionId] || 0) + 1,
    }));
  };
  // Search script
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
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

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const hiddenMenuStyle = {
    display: menuVisible ? "block" : "none",
  };

  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
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
      pname: name,
      phone_code: pcode,
      phone: phone,
      email: email,
      askq: query,
    };

    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/askPost`;

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
        <section id="questions-ans-section">
          <div className="midbox-inner wiki-mk">
            <div className="questions-ans">
              <div className="questions-ans-left">
                <div className="search-suestions">
                  <h1>Search for Questions</h1>

                  <div className="search-medflick">
                    <div className="search-box-medflick">
                      <span>Search Terms:</span>
                      <div className="search-terms">
                        <input
                          type="text"
                          placeholder="Search Medflick"
                          name="name"
                          required=""
                        />
                      </div>
                    </div>
                    <button id="show-hidden-menu" onClick={toggleMenu}>
                      Advanced Search
                      <img
                        className={menuVisible ? "plus1" : "plus"}
                        src="images/2023/07/plus.png"
                        alt=""
                      />
                      <img
                        className={menuVisible ? "plus" : "plus1"}
                        src="images/2023/07/plus1.png"
                        alt=""
                      />
                    </button>
                  </div>

                  <div
                    className={`hidden-menu ${
                      menuVisible ? "visible" : "hidden"
                    }`}
                    style={hiddenMenuStyle}
                  >
                    <div className="search-medflick">
                      <div className="search-box-medflick">
                        <span>Search Terms:</span>
                        <div className="search-terms">
                          <input
                            type="text"
                            placeholder="Search Medflick"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="search-medflick">
                      <div className="search-box-medflick">
                        <span>Date Range:</span>
                        <div className="date-range">
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            name="name"
                            required=""
                          />
                        </div>
                        <div className="date-range1">
                          <span>To:</span>
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="search-button">
                        <button>Search Now</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="search-question">
                  <div className="search-question-left">
                    <div className="ding">
                      {/* <div className="sort">Sort:</div> */}
                      <Select
                        id="wiki"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        options={options}
                        isSearchable={true} // Enables search
                        placeholder=" Most Recent"
                        maxMenuHeight={150}
                      />
                      {/* <select id="wiki">
                        <option value="none" selected>
                          Most Recent
                        </option>
                      </select> */}
                    </div>
                    <div className="ding">
                      {/* <div className="sort">Category:</div> */}
                      <Select
                        id="wiki"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        options={options}
                        isSearchable={true} // Enables search
                        placeholder="Category"
                        maxMenuHeight={150}
                      />
                      {/* <select id="wiki1">
                        <option value="none" selected>
                          Cancer Surgery
                        </option>
                      </select> */}
                    </div>
                  </div>
                  <div className="search-question-right">
                    <span>Have any Questions?</span>
                    <span
                      className="ask-question"
                      data-popup-open="popup-2"
                      onClick={togglePopup}
                      style={{ cursor: "pointer" }}
                    >
                      <img src="images/2023/07/ask.png" alt="" /> Ask Question
                    </span>
                  </div>
                </div>
                {isPopupOpen && (
                  <div
                    className="popup"
                    data-popup="popup-1"
                    style={popupStyle}
                  >
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
                                      <option value="213">
                                        Algeria (+213)
                                      </option>
                                      <option value="376">
                                        Andorra (+376)
                                      </option>
                                      <option value="244">Angola (+244)</option>
                                      <option value="1264">
                                        Anguilla (+1264)
                                      </option>
                                      <option value="1268">
                                        Antigua &amp; Barbuda (+1268)
                                      </option>
                                      <option value="54">
                                        Argentina (+54)
                                      </option>
                                      <option value="374">
                                        Armenia (+374)
                                      </option>
                                      <option value="297">Aruba (+297)</option>
                                      <option value="61">
                                        Australia (+61)
                                      </option>
                                      <option value="43">Austria (+43)</option>
                                      <option value="994">
                                        Azerbaijan (+994)
                                      </option>
                                      <option value="1242">
                                        Bahamas (+1242)
                                      </option>
                                      <option value="973">
                                        Bahrain (+973)
                                      </option>
                                      <option value="880">
                                        Bangladesh (+880)
                                      </option>
                                      <option value="1246">
                                        Barbados (+1246)
                                      </option>
                                      <option value="375">
                                        Belarus (+375)
                                      </option>
                                      <option value="32">Belgium (+32)</option>
                                      <option value="501">Belize (+501)</option>
                                      <option value="229">Benin (+229)</option>
                                      <option value="1441">
                                        Bermuda (+1441)
                                      </option>
                                      <option value="975">Bhutan (+975)</option>
                                      <option value="591">
                                        Bolivia (+591)
                                      </option>
                                      <option value="387">
                                        Bosnia Herzegovina (+387)
                                      </option>
                                      <option value="267">
                                        Botswana (+267)
                                      </option>
                                      <option value="55">Brazil (+55)</option>
                                      <option value="673">Brunei (+673)</option>
                                      <option value="359">
                                        Bulgaria (+359)
                                      </option>
                                      <option value="226">
                                        Burkina Faso (+226)
                                      </option>
                                      <option value="257">
                                        Burundi (+257)
                                      </option>
                                      <option value="855">
                                        Cambodia (+855)
                                      </option>
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

                            <button
                              type="submit"
                              name="en"
                              className="home-button"
                            >
                              {isLoading ? "Submitting..." : "Submit Now"}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
                {qa &&
                  qa.map((e) => (
                    <div className="comments-box" key={e.id}>
                      <div className="comments-profile">
                        {/* <div className="comments-profileimg">
                          <img src="images/2023/07/man.png" />
                        </div> */}
                        {/* <h3>
                          Lorem Ipsum <span>india</span>
                        </h3> */}
                      </div>

                      <h2>Q. {e.short_description}</h2>
                      <div
                        dangerouslySetInnerHTML={{ __html: e.long_description }}
                      />

                      <div className="comments-button">
                        <a
                          className="ask-comments"
                          onClick={() => handleLike(e.id)}
                        >
                          {likes[e.id] ? (
                            <i>
                              <AiTwotoneHeart
                                style={{ color: "red", fontSize: "23px" }}
                              />
                            </i>
                          ) : (
                            <i>
                              <AiOutlineHeart
                                style={{ color: "red", fontSize: "23px" }}
                              />
                            </i>
                          )}
                          Likes {likes[e.id] || 0}
                        </a>
                        <a className="ask-comments" href="#">
                          <i className="fa fa-comments"></i> Comments
                        </a>
                        <a className="ask-comments" href="#">
                          <i className="fa fa-share"></i> Share
                        </a>
                      </div>
                    </div>
                  ))}

                {/* <div className="comments-box">
                  <div className="comments-profile">
                    <div className="comments-profileimg">
                      <img src="images/2023/07/man.png" />
                    </div>
                    <h3>
                      Lorem Ipsum <span>india</span>
                    </h3>
                  </div>

                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore onsectetur adipiscing
                    elit, sed do eiusmod
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, to Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque
                    laudantium unde omnis iste natus error sit voluptatem acc
                  </p>

                  <div className="comments-button">
                    <a className="ask-comments" href="#">
                      <i className="fa fa-heart"></i> Likes
                    </a>
                    <a className="ask-comments" href="#">
                      <i className="fa fa-comments"></i> Comments
                    </a>
                    <a className="ask-comments" href="#">
                      <i className="fa fa-share"></i> Share
                    </a>
                  </div>

                  <div className="comments-box1">
                    <div className="comments-profile">
                      <div className="comments-profileimg">
                        <img src="images/2023/07/wo.png" />
                      </div>
                      <h3>
                        Dr. Lorem Ipsum
                        <div className="comments-dr-yers">
                          20 yrs of experience
                          <span>
                            <img src="images/2023/07/dotted.png" /> General
                            Physician
                          </span>
                        </div>
                      </h3>
                    </div>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, to Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim sed ut perspiciatis unde
                      omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium unde omnis iste natus error sit
                      voluptatem acc
                    </p>

                    <div className="comments-button1">
                      <a className="ask-comments" href="#">
                        <i className="fa fa-heart"></i> Likes
                      </a>
                      <a className="ask-comments" href="#">
                        <i className="fa fa-reply"></i> Reply
                      </a>
                    </div>
                  </div>

                  <a className="more-replies" href="#">
                    <i className="fa fa-comments"></i> View 24 more Replies
                    <i className="fa fa-angle-down"></i>
                  </a>
                </div>

                <div className="comments-box">
                  <div className="comments-profile">
                    <div className="comments-profileimg">
                      <img src="images/2023/07/man.png" />
                    </div>
                    <h3>
                      Lorem Ipsum <span>india</span>
                    </h3>
                  </div>

                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore onsectetur adipiscing
                    elit, sed do eiusmod
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, to Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque
                    laudantium unde omnis iste natus error sit voluptatem acc
                  </p>

                  <div className="comments-button">
                    <a className="ask-comments" href="#">
                      <i className="fa fa-heart"></i> Likes
                    </a>
                    <a className="ask-comments" href="#">
                      <i className="fa fa-comments"></i> Comments
                    </a>
                    <a className="ask-comments" href="#">
                      <i className="fa fa-share"></i> Share
                    </a>
                  </div>
                </div>

                <div className="comments-box">
                  <div className="comments-profile">
                    <div className="comments-profileimg">
                      <img src="images/2023/07/man.png" />
                    </div>
                    <h3>
                      Lorem Ipsum <span>india</span>
                    </h3>
                  </div>

                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore onsectetur adipiscing
                    elit, sed do eiusmod
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, to Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque
                    laudantium unde omnis iste natus error sit voluptatem acc
                  </p>

                  <div className="comments-button">
                    <a className="ask-comments" href="#">
                      <i className="fa fa-heart"></i> Likes
                    </a>
                    <a className="ask-comments" href="#">
                      <i className="fa fa-comments"></i> Comments
                    </a>
                    <a className="ask-comments" href="#">
                      <i className="fa fa-share"></i> Share
                    </a>
                  </div>

                  <div className="comments-box1">
                    <div className="comments-profile">
                      <div className="comments-profileimg">
                        <img src="images/2023/07/wo.png" />
                      </div>
                      <h3>
                        Dr. Lorem Ipsum
                        <div className="comments-dr-yers">
                          20 yrs of experience
                          <span>
                            <img src="images/2023/07/dotted.png" /> General
                            Physician
                          </span>
                        </div>
                      </h3>
                    </div>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, to Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim sed ut perspiciatis unde
                      omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium unde omnis iste natus error sit
                      voluptatem acc
                    </p>

                    <div className="comments-button1">
                      <a className="ask-comments" href="#">
                        <i className="fa fa-heart"></i> Likes
                      </a>
                      <a className="ask-comments" href="#">
                        <i className="fa fa-reply"></i> Reply
                      </a>
                    </div>
                  </div>

                  <div className="comments-box2">
                    <div className="comments-profile">
                      <div className="comments-profileimg">
                        <img src="images/2023/07/man.png" />
                      </div>
                      <h3>Dr. Lorem Ipsum</h3>
                    </div>

                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, to Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim sed ut perspiciatis unde
                      omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium unde omnis iste natus error sit
                      voluptatem acc
                    </p>

                    <div className="comments-button1">
                      <a className="ask-comments" href="#">
                        <i className="fa fa-heart"></i> Likes
                      </a>
                      <a className="ask-comments" href="#">
                        <i className="fa fa-reply"></i> Reply
                      </a>
                    </div>

                    <a className="show-replies" href="#">
                      Show 12 more replies <i className="fa fa-angle-down"></i>
                    </a>
                  </div>

                  <a className="more-replies" href="#">
                    <i className="fa fa-comments"></i> View 24 more Replies
                    <i className="fa fa-angle-down"></i>
                  </a>
                </div>

                <div className="comments-box">
                  <div className="comments-profile">
                    <div className="comments-profileimg">
                      <img src="images/2023/07/man.png" />
                    </div>
                    <h3>
                      Lorem Ipsum <span>india</span>
                    </h3>
                  </div>

                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore onsectetur adipiscing
                    elit, sed do eiusmod
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, to Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt mollit anim sed ut perspiciatis unde omnis
                    iste natus error sit voluptatem accusantium doloremque
                    laudantium unde omnis iste natus error sit voluptatem acc
                  </p>

                  <div className="comments-button">
                    <a className="ask-comments" href="#">
                      <i className="fa fa-heart"></i> Likes
                    </a>
                    <a className="ask-comments" href="#">
                      <i className="fa fa-comments"></i> Comments
                    </a>
                    <a className="ask-comments" href="#">
                      <i className="fa fa-share"></i> Share
                    </a>
                  </div>
                </div> */}
              </div>

              <div className="questions-ans-right">
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

export default QuestionAns;
