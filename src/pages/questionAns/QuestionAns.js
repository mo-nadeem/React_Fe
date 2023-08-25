import React, { useState } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import Select from "react-select";

const QuestionAns = () => {
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

  return (
    <>
      <Homelayout>
        <section id="questions-ans-section">
          <div class="midbox-inner wiki-mk">
            <div class="questions-ans">
              <div class="questions-ans-left">
                <div class="search-suestions">
                  <h1>Search for Questions</h1>

                  <div class="search-medflick">
                    <div class="search-box-medflick">
                      <span>Search Terms:</span>
                      <div class="search-terms">
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
                    <div class="search-medflick">
                      <div class="search-box-medflick">
                        <span>Search Terms:</span>
                        <div class="search-terms">
                          <input
                            type="text"
                            placeholder="Search Medflick"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                    </div>

                    <div class="search-medflick">
                      <div class="search-box-medflick">
                        <span>Date Range:</span>
                        <div class="date-range">
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            name="name"
                            required=""
                          />
                        </div>
                        <div class="date-range1">
                          <span>To:</span>
                          <input
                            type="text"
                            placeholder="DD/MM/YYYY"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>

                      <div class="search-button">
                        <button>Search Now</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="search-question">
                  <div class="search-question-left">
                    <div class="ding">
                      {/* <div class="sort">Sort:</div> */}
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
                    <div class="ding">
                      {/* <div class="sort">Category:</div> */}
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
                  <div class="search-question-right">
                    <span>Have any Questions?</span>
                    <span
                      class="ask-question"
                      data-popup-open="popup-2"
                      onClick={togglePopup}
                      style={{cursor:"pointer"}}
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

                        <div className="treatment-right">
                          <div className="treatment-form">
                            <div className="inputbox">
                              <label>Full Name</label>
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
                              <label>Phone Number</label>
                              <div className="phone-form">
                                <div className="phone-box1">
                                  <select
                                    aria-label="Sort dropdown"
                                    className="phone-dropdown"
                                  >
                                    <option value="">Choose Code</option>
                                    <option value="1">UK (+44)</option>
                                    <option value="213">Algeria (+213)</option>
                                    {/* ... Other options ... */}
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
                              <label>Email Address</label>
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

                          <div className="treatment-form">
                            <div className="medical-report-wrapper">
                              <button className="medical-report">
                                <img src="images/2023/07/upload-icon1.png" />{" "}
                                Upload medical report
                              </button>
                              <input type="file" name="file" />
                            </div>
                          </div>

                          <button
                            type="submit"
                            name="en"
                            className="home-button"
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div class="comments-box">
                  <div class="comments-profile">
                    <div class="comments-profileimg">
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

                  <div class="comments-button">
                    <a class="ask-comments" href="#">
                      <i class="fa fa-heart"></i> Likes
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-comments"></i> Comments
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-share"></i> Share
                    </a>
                  </div>
                </div>

                <div class="comments-box">
                  <div class="comments-profile">
                    <div class="comments-profileimg">
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

                  <div class="comments-button">
                    <a class="ask-comments" href="#">
                      <i class="fa fa-heart"></i> Likes
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-comments"></i> Comments
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-share"></i> Share
                    </a>
                  </div>

                  <div class="comments-box1">
                    <div class="comments-profile">
                      <div class="comments-profileimg">
                        <img src="images/2023/07/wo.png" />
                      </div>
                      <h3>
                        Dr. Lorem Ipsum
                        <div class="comments-dr-yers">
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

                    <div class="comments-button1">
                      <a class="ask-comments" href="#">
                        <i class="fa fa-heart"></i> Likes
                      </a>
                      <a class="ask-comments" href="#">
                        <i class="fa fa-reply"></i> Reply
                      </a>
                    </div>
                  </div>

                  <a class="more-replies" href="#">
                    <i class="fa fa-comments"></i> View 24 more Replies
                    <i class="fa fa-angle-down"></i>
                  </a>
                </div>

                <div class="comments-box">
                  <div class="comments-profile">
                    <div class="comments-profileimg">
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

                  <div class="comments-button">
                    <a class="ask-comments" href="#">
                      <i class="fa fa-heart"></i> Likes
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-comments"></i> Comments
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-share"></i> Share
                    </a>
                  </div>
                </div>

                <div class="comments-box">
                  <div class="comments-profile">
                    <div class="comments-profileimg">
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

                  <div class="comments-button">
                    <a class="ask-comments" href="#">
                      <i class="fa fa-heart"></i> Likes
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-comments"></i> Comments
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-share"></i> Share
                    </a>
                  </div>

                  <div class="comments-box1">
                    <div class="comments-profile">
                      <div class="comments-profileimg">
                        <img src="images/2023/07/wo.png" />
                      </div>
                      <h3>
                        Dr. Lorem Ipsum
                        <div class="comments-dr-yers">
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

                    <div class="comments-button1">
                      <a class="ask-comments" href="#">
                        <i class="fa fa-heart"></i> Likes
                      </a>
                      <a class="ask-comments" href="#">
                        <i class="fa fa-reply"></i> Reply
                      </a>
                    </div>
                  </div>

                  <div class="comments-box2">
                    <div class="comments-profile">
                      <div class="comments-profileimg">
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

                    <div class="comments-button1">
                      <a class="ask-comments" href="#">
                        <i class="fa fa-heart"></i> Likes
                      </a>
                      <a class="ask-comments" href="#">
                        <i class="fa fa-reply"></i> Reply
                      </a>
                    </div>

                    <a class="show-replies" href="#">
                      Show 12 more replies <i class="fa fa-angle-down"></i>
                    </a>
                  </div>

                  <a class="more-replies" href="#">
                    <i class="fa fa-comments"></i> View 24 more Replies
                    <i class="fa fa-angle-down"></i>
                  </a>
                </div>

                <div class="comments-box">
                  <div class="comments-profile">
                    <div class="comments-profileimg">
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

                  <div class="comments-button">
                    <a class="ask-comments" href="#">
                      <i class="fa fa-heart"></i> Likes
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-comments"></i> Comments
                    </a>
                    <a class="ask-comments" href="#">
                      <i class="fa fa-share"></i> Share
                    </a>
                  </div>
                </div>
              </div>

              <div class="questions-ans-right">
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
