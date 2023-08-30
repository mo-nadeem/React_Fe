import React, { useState, useEffect, useCallback, useRef } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";
import { AiOutlineHeart } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import arrowCIcon from "../../assests/images/2023/01/arrow-c.png";
import { FaComments } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import axios from "axios";
import { Helmet } from "react-helmet";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import ReCAPTCHA from "react-google-recaptcha";
import { ThreeDots } from "react-loader-spinner";

const QuestionAns = () => {
  const dispatch = useDispatch();

  const { qa, navigationheader } = useSelector((state) => state.data);

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

  // filter selected script

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

  // Advance search options

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const hiddenMenuStyle = {
    display: menuVisible ? "block" : "none",
  };

  // form popup scripts
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
  };

  const Formstyles = {
    errorInput: {
      border: "2px solid red",
    },
    errorMessage: {
      color: "red",
      fontSize: "0.85rem",
      marginTop: "0.25rem",
    },
    loadingMessage: {
      fontSize: "1.2rem",
      color: "#333",
      marginTop: "1rem",
    },
  };

  // form popup post method

  const [name, setName] = useState("");
  const [pcode, setPcode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // State variables for error messages
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const clearFormFields = () => {
    setName("");
    setPhone("");
    setEmail("");
    setQuery("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setNameError("");
    setPhoneError("");
    setEmailError("");

    // Validation logic
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const phoneRegex = /^\d{10,}$/; // Matches 10 or more digits
    if (!phone || !phone.match(phoneRegex)) {
      setPhoneError("Phone must have at least 10 digits");
      isValid = false;
    }

    if (isValid) {
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
          clearFormFields();
          setIsPopupOpen(false);
        })
        .catch((error) => {
          // Handle any errors that occurred during the API call
          console.error("Error:", error);
        })
        .finally(() => {
          // Set loading back to false after the API call is complete
          setIsLoading(false);
        });
    }
  };

  // Assistance form post

  const [name1, setName1] = useState("");
  const [pcode1, setPcode1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [email1, setEmail1] = useState("");
  const [query1, setQuery1] = useState("");

  const [isLoading1, setIsLoading1] = useState(false);
  // State variables for error messages
  const [nameError1, setNameError1] = useState("");
  const [phoneError1, setPhoneError1] = useState("");
  const [emailError1, setEmailError1] = useState("");
  const [captchaValue1, setCaptchaValue1] = useState(null);

  const handleCaptchaChange1 = (value) => {
    setCaptchaValue1(value);
  };

  const clearFormFields1 = () => {
    setName1("");
    setPhone1("");
    setEmail1("");
    setQuery1("");
  };

  const handleFormSubmit1 = (event) => {

    event.preventDefault();
    
    setNameError1("");
    setPhoneError1("");
    setEmailError1("");

    // Validation logic
    let isValid = true;

    if (!name1) {
      setNameError1("Name is required");
      isValid = false;
    }
    if (!captchaValue1) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const phoneRegex = /^\d{10,}$/; // Matches 10 or more digits
    if (!phone1 || !phone1.match(phoneRegex)) {
      setPhoneError1("Phone must have at least 10 digits");
      isValid = false;
    }
    if (isValid) {
      // Create the data object to be sent in the API request
      const data = {
        name: name1,
        phone_code: pcode1,
        phone: phone1,
        email: email1,
        messages: query1,
      };

      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/free_consultants`;

      setIsLoading1(true);

      // Make the API call
      axios
        .post(apiEndpoint, data)
        .then((response) => {
          // Handle the API response here if needed
          console.log(response);
          alert("questions is susscefull submitted");
          clearFormFields1();
        })
        .catch((error) => {
          // Handle any errors that occurred during the API call
          console.error("Error:", error);
        })
        .finally(() => {
          // Set loading back to false after the API call is complete
          setIsLoading1(false);
        });
    }
  };

  // for title and descriptions

  const navigation = navigationheader || [];
  const itemWithId13 = navigation.find((e) => e.id === 14);

  //  for share a pages
  const inputRef = useRef(null);

  const copyToClipboard = () => {
    // Select the text inside the input field
    inputRef.current.select();
    inputRef.current.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text
    inputRef.current.setSelectionRange(0, 0);
  };
  const [isPopupOpenShare, setIsPopupOpenShare] = useState(false);

  const togglePopupShare = () => {
    setIsPopupOpenShare(!isPopupOpenShare);
  };
  const popupStyleShare = {
    display: isPopupOpenShare ? "block" : "none",
  };

  return (
    <>
      <Helmet>
        <title>{itemWithId13.title}</title>
        <meta name="description" content={itemWithId13.description} />

        <meta property="og:title" content={itemWithId13.title} />

        <meta property="og:description" content={itemWithId13.description} />

        <meta
          property="og:url"
          content="https://medflick.com/question-answer"
        />

        <meta property="og:type" content="website" />

        <meta property="og:locale" content="en" />

        <meta property="og:site_name" content="Medflick" />

        <link rel="canonical" href={`https://medflick.com/question-answer`} />
      </Helmet>
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
                    {/* <button id="show-hidden-menu" onClick={toggleMenu}>
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
                    </button> */}
                  </div>

                  {/* <div
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
                  </div> */}
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
                          <div
                            className="treatment-form"
                            style={nameError ? Formstyles.errorInput : {}}
                          >
                            <div className="inputbox">
                              <label>Name</label>
                              <input
                                type="text"
                                placeholder=""
                                name="name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="off"
                                style={nameError ? Formstyles.errorInput : {}}
                              />
                              {nameError && (
                                <span style={Formstyles.errorMessage}>
                                  {nameError}
                                </span>
                              )}
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
                                    <option value="1264">
                                      Anguilla (+1264)
                                    </option>
                                    <option value="1268">
                                      Antigua &amp; Barbuda (+1268)
                                    </option>
                                    <option value="54">Argentina (+54)</option>
                                    <option value="374">Armenia (+374)</option>
                                    <option value="297">Aruba (+297)</option>
                                    <option value="61">Australia (+61)</option>
                                    <option value="43">Austria (+43)</option>
                                    <option value="994">
                                      Azerbaijan (+994)
                                    </option>
                                    <option value="1242">
                                      Bahamas (+1242)
                                    </option>
                                    <option value="973">Bahrain (+973)</option>
                                    <option value="880">
                                      Bangladesh (+880)
                                    </option>
                                    <option value="1246">
                                      Barbados (+1246)
                                    </option>
                                    <option value="375">Belarus (+375)</option>
                                    <option value="32">Belgium (+32)</option>
                                    <option value="501">Belize (+501)</option>
                                    <option value="229">Benin (+229)</option>
                                    <option value="1441">
                                      Bermuda (+1441)
                                    </option>
                                    <option value="975">Bhutan (+975)</option>
                                    <option value="591">Bolivia (+591)</option>
                                    <option value="387">
                                      Bosnia Herzegovina (+387)
                                    </option>
                                    <option value="267">Botswana (+267)</option>
                                    <option value="55">Brazil (+55)</option>
                                    <option value="673">Brunei (+673)</option>
                                    <option value="359">Bulgaria (+359)</option>
                                    <option value="226">
                                      Burkina Faso (+226)
                                    </option>
                                    <option value="257">Burundi (+257)</option>
                                    <option value="855">Cambodia (+855)</option>
                                  </select>
                                </div>
                                <div className="phone-box2">
                                  <input
                                    type="tel"
                                    placeholder=""
                                    name="name"
                                    value={phone}
                                    onChange={(e) => {
                                      const phoneNumber =
                                        e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                                      setPhone(phoneNumber);
                                    }}
                                    style={
                                      phoneError ? Formstyles.errorInput : {}
                                    }
                                    autoComplete="off"
                                  />
                                  {/* {phoneError && (
                              <span style={Formstyles.errorMessage}>
                                {phoneError}
                              </span>
                            )} */}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="treatment-form">
                            <div className="inputbox">
                              <label>Email</label>
                              <input
                                type="email"
                                placeholder=""
                                name="name"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="off"
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
                                autoComplete="off"
                              ></textarea>
                            </div>
                          </div>
                          <ReCAPTCHA
                            sitekey="6LcX6-YnAAAAAAjHasYD8EWemgKlDUxZ4ceSo8Eo" // Replace with your reCAPTCHA site key
                            onChange={handleCaptchaChange}
                          />
                          <button
                            type="submit"
                            name="en"
                            className="home-button"
                          >
                            {" "}
                            {isLoading ? (
                              <ThreeDots
                                height="27"
                                width="80"
                                radius="9"
                                color="#ffffff"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                              />
                            ) : (
                              "Submit Now"
                            )}
                            <img src={arrowCIcon} alt="arrow-Icon" />
                          </button>
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
                          <i>
                            <FaComments />
                          </i>{" "}
                          Comments
                        </a>
                        <span
                          className="ask-comments"
                          onClick={togglePopupShare}
                          style={{ cursor: "pointer" }}
                        >
                          <i>
                            <IoIosShareAlt />
                          </i>{" "}
                          Share
                        </span>
                        {isPopupOpenShare && (
                          <div
                            class="popup"
                            data-popup="popup-3"
                            style={popupStyleShare}
                          >
                            <div class="popup-inner3">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <button
                                    type="button"
                                    class="popup-close"
                                    data-popup-close="popup-3"
                                    data-dismiss="modal"
                                    onClick={togglePopupShare}
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <h2>Share Link</h2>
                                <p>Share this hospital with others via...</p>
                                <ul>
                                  <li>
                                    <FacebookShareButton
                                      url={`${window.location.origin}/question-answer`}
                                    >
                                      <FacebookIcon size={50} round />
                                    </FacebookShareButton>
                                  </li>
                                  <li>
                                    <TwitterShareButton
                                      url={`${window.location.origin}/question-answer`}
                                    >
                                      <TwitterIcon size={50} round />
                                    </TwitterShareButton>
                                  </li>
                                  <li>
                                    <WhatsappShareButton
                                      url={`${window.location.origin}/question-answer`}
                                    >
                                      <WhatsappIcon size={50} round />
                                    </WhatsappShareButton>
                                  </li>
                                </ul>

                                <div class="share-link">
                                  <input
                                    type="text"
                                    placeholder="www.medflick.com/share/hospital"
                                    name="name"
                                    required=""
                                    value={`${window.location.origin}/question-answer`}
                                    ref={inputRef}
                                  />
                                  <button
                                    type="submit"
                                    name="en"
                                    class="copy-link"
                                    onClick={copyToClipboard}
                                  >
                                    Copy Link
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
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

                  <form onSubmit={handleFormSubmit1}>
                    <div className="treatment-form">
                      <div className="inputbox">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder=""
                          name="name"
                          required
                          value={name1}
                          onChange={(e) => setName1(e.target.value)}
                          autoComplete="off"
                          style={nameError1 ? Formstyles.errorInput : {}}
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
                              value={pcode1}
                              onChange={(e) => setPcode1(e.target.value)}
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
                              value={phone1}
                              onChange={(e) => {
                                const phoneNumber = e.target.value.replace(
                                  /\D/g,
                                  ""
                                ); // Remove non-numeric characters
                                setPhone1(phoneNumber);
                              }}
                              style={phoneError1 ? Formstyles.errorInput : {}}
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="treatment-form">
                      <div className="inputbox">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder=""
                          name="name"
                          required
                          value={email1}
                          onChange={(e) => setEmail1(e.target.value)}
                          autoComplete="off"
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
                          value={query1}
                          onChange={(e) => setQuery1(e.target.value)}
                          autoComplete="off"
                        ></textarea>
                      </div>
                    </div>
                    <ReCAPTCHA
                      sitekey="6LcX6-YnAAAAAAjHasYD8EWemgKlDUxZ4ceSo8Eo" // Replace with your reCAPTCHA site key
                      onChange={handleCaptchaChange1}
                    />

                    <button type="submit" name="en" className="home-button">
                      {" "}
                      {isLoading1 ? (
                        <ThreeDots
                          height="27"
                          width="80"
                          radius="9"
                          color="#ffffff"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClassName=""
                          visible={true}
                        />
                      ) : (
                        "Submit Now"
                      )}
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

export default QuestionAns;
