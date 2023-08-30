import React, { useState, useEffect, useRef } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import axios from "axios";
import { useParams } from "react-router-dom";
import icon1 from "../../assests/images/04/icon2.png";
import icon2 from "../../assests/images/04/icon1.png";
import arrowIcon from "../../assests/images/2023/01/arrow-c.png";
import arrowW from "../../assests/images/2023/01/arrow-w.png";
import arrowC from "../../assests/images/2023/01/arrow-c.png";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { ThreeDots } from "react-loader-spinner";
import arrowCIcon from "../../assests/images/2023/01/arrow-c.png";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blogDetails, setBlogDetails] = useState([]);
  const [relatedBlog, setRelatedBlog] = useState([]);
  const [relatedArticles, setRelatedArticles] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/blog/${slug}`)
      .then((response) => {
        setBlogDetails(response.data.data.blog_info);
        setRelatedBlog(response.data.data.related_blog);
        setRelatedArticles(response.data.data.related_article);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const transplantNav1Ref = useRef(null);
  const transplantNav2Ref = useRef(null);

  // Assistance form post

  const [name1, setName1] = useState("");
  const [pcode1, setPcode1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [email1, setEmail1] = useState("");
  const [query1, setQuery1] = useState("");

  const [isLoading1, setIsLoading1] = useState(false);

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
  return (
    <>
      <Homelayout>
        <section id="blog-slider">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/blog/${blogDetails.image}`}
            alt="Category"
          />
          <div className="blog-slidertext">
            <h1>{blogDetails.name}</h1>
            <div className="blog-datebox">
              <div className="by-box">
                <img src={icon1} alt="icon-blog" /> By - Lilly Williams
              </div>
              <div className="updated-box">
                <img src={icon2} alt="icon-blog" /> Updated on 12th June 023
              </div>
            </div>
          </div>
        </section>

        <section id="blog-mid">
          <div className="midbox-inner  wiki-mk">
            <div className="blog-findox">
              <div className="blog-leftbox">
                <div className="blog-nav">
                  <h3>Table of Content</h3>
                  <ul>
                    {blogDetails.heading1 && (
                      <li>
                        <a
                          onClick={() =>
                            transplantNav1Ref.current.scrollIntoView({
                              behavior: "smooth",
                            })
                          }
                          className="active"
                        >
                          {blogDetails.heading1}
                        </a>
                      </li>
                    )}
                    {blogDetails.heading2 && (
                      <li>
                        <a
                          onClick={() => scrollToSection("transplant-nav2")}
                          target="_self"
                        >
                          {blogDetails.heading2}
                        </a>
                      </li>
                    )}
                    {blogDetails.heading3 && (
                      <li>
                        <a
                          onClick={() => scrollToSection("transplant-nav3")}
                          target="_self"
                        >
                          {blogDetails.heading3}
                        </a>
                      </li>
                    )}
                    {blogDetails.heading4 && (
                      <li>
                        <a
                          onClick={() => scrollToSection("transplant-nav4")}
                          target="_self"
                        >
                          {blogDetails.heading4}
                        </a>
                      </li>
                    )}
                    {blogDetails.heading5 && (
                      <li>
                        <a
                          onClick={() => scrollToSection("transplant-nav5")}
                          target="_self"
                        >
                          {blogDetails.heading5}
                        </a>
                      </li>
                    )}
                    {blogDetails.heading6 && (
                      <li>
                        <a
                          onClick={() => scrollToSection("transplant-nav6")}
                          target="_self"
                        >
                          {blogDetails.heading6}
                        </a>
                      </li>
                    )}
                    {blogDetails.heading7 && (
                      <li>
                        <a
                          onClick={() => scrollToSection("transplant-nav7")}
                          target="_self"
                        >
                          {blogDetails.heading7}
                        </a>
                      </li>
                    )}
                    {blogDetails.heading8 && (
                      <li>
                        <a
                          onClick={() => scrollToSection("transplant-nav8")}
                          target="_self"
                        >
                          {blogDetails.heading8}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="talk-doctor">
                  Talk to a Doctor
                  <a className="free-quote" href="#">
                    View Doctors Listing
                    <img src={arrowC} alt="arrow-icon" />
                  </a>
                </div>

                <div className="articles-box">
                  Related Articles
                  <ul>
                    {relatedArticles.map((e) => (
                      <li key={e.id}>
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}/blog/${e.icon}`}
                          alt="blog-related"
                        />
                        <Link to={`/blog/${e.slug}`}>{e.name}</Link>
                      </li>
                    ))}
                    {/* <li>
                      <img src={relatedImg} alt="blog-related" /> Lorem ipsum
                      dolor sit amet lorem aliquia ex
                    </li>
                    <li>
                      <img src={relatedImg} alt="blog-related" /> Lorem ipsum
                      dolor sit amet lorem aliquia ex
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="treatment-midbox">
                <div
                  className="heading1"
                  id="transplant-nav1"
                  ref={transplantNav1Ref}
                >
                  <h2>{blogDetails.heading1}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogDetails && blogDetails.long_description,
                    }}
                  />
                </div>
                <div className="heading2" id="transplant-nav2">
                  <h2>{blogDetails.heading2}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogDetails && blogDetails.long_description2,
                    }}
                  />
                </div>
                <div className="heading3" id="transplant-nav3">
                  <h2>{blogDetails.heading3}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogDetails && blogDetails.long_description3,
                    }}
                  />
                </div>
                <div className="heading4" id="transplant-nav4">
                  <h2>{blogDetails.heading4}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogDetails && blogDetails.long_description4,
                    }}
                  />
                </div>
                <div className="heading5" id="transplant-nav5">
                  <h2>{blogDetails.heading5}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogDetails && blogDetails.long_description5,
                    }}
                  />
                </div>
                <div className="heading6" id="transplant-nav6">
                  <h2>{blogDetails.heading6}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogDetails && blogDetails.long_description6,
                    }}
                  />
                </div>
                <div className="heading7" id="transplant-nav6">
                  <h2>{blogDetails.heading7}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogDetails && blogDetails.long_description7,
                    }}
                  />
                </div>
                <div className="heading8" id="transplant-nav8">
                  <h2>{blogDetails.heading8}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogDetails && blogDetails.long_description8,
                    }}
                  />
                </div>

                {/* <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.{" "}
                  <strong>Nulla Lorem mollit cupidatat irure.</strong> Laborum
                  magna nulla duis ullamco cillum dolor. Voluptate exercitation
                  incididunt aliquip deserunt.
                </p>

                <h6>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Nulla Lorem
                  mollit cupidatat irure. Laborum magna nulla duis ullamco
                  cillum dolor.
                </h6>

                <img src="images/2023/04/bg1.jpg" />

                <h5>Amet minim mollit non deserunt ullamco</h5>

                <h2>Amet minim mollit non deserunt ullamco</h2>

                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Nulla Lorem
                  mollit cupidatat irure.{" "}
                  <strong>Laborum magna nulla duis</strong> ullamco cillum
                  dolor. Voluptate exercitation incididunt aliquip deserunt.
                </p>

                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.{" "}
                  <strong>Nulla Lorem mollit cupidatat irure.</strong> Laborum
                  magna nulla duis ullamco cillum dolor. Voluptate exercitation
                  incididunt aliquip deserunt.
                </p>

                <img src="images/2023/04/bg2.jpg" />

                <h5>Amet minim mollit non deserunt ullamco</h5>

                <h2>Amet minim mollit non deserunt ullamco</h2>

                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi. Nulla Lorem
                  mollit cupidatat irure.{" "}
                  <strong>Laborum magna nulla duis</strong> ullamco cillum
                  dolor. Voluptate exercitation incididunt aliquip deserunt.
                </p>

                <p>
                  Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                  Sunt qui esse pariatur duis deserunt mollit dolore cillum
                  minim tempor enim. Elit aute irure tempor cupidatat incididunt
                  sint deserunt ut voluptate aute id deserunt nisi.{" "}
                  <strong>Nulla Lorem mollit cupidatat irure.</strong> Laborum
                  magna nulla duis ullamco cillum dolor. Voluptate exercitation
                  incididunt aliquip deserunt.
                </p> */}
              </div>

              <div className="blog-rightbox">
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
        <section id="related-blog">
          <div className="midbox-inner  wiki-mk">
            <div className="blog-content">
              <div className="blog-cont-left">
                <h2>
                  Related <span>Content</span>
                </h2>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia
                </p>
              </div>
              <div className="blog-cont-right">
                <a href="#" className="view-blog">
                  {" "}
                  View All <img src={arrowIcon} alt="" />
                </a>
              </div>
            </div>

            <ul>
              {relatedBlog.map((e) => (
                <li key={e.id}>
                  <img
                    src={`${process.env.REACT_APP_BASE_URL}/blog/${e.icon}`}
                    alt={e.name}
                  />
                  <Link to={`/blog/${e.slug}`}>
                    <h3>{e.name}</h3>
                  </Link>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: e.short_description,
                    }}
                  />
                  {/* <div className="symptoms-nav">
                    <a href="#" target="_self">
                      Lorem Ipsum
                    </a>
                    <a href="#" target="_self">
                      Lorem Ipsum
                    </a>
                    <a href="#" target="_self">
                      Exceptur{" "}
                    </a>
                  </div> */}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="newslette-section">
          <div className="midbox-inner  wiki-mk">
            <div className="newslette-box">
              <div className="newslette-left">
                <h2>Sign up to our Newsletter</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim minim
                </p>
              </div>
              <div className="newslette-right">
                <div className="latest-news">
                  <input
                    className="latest-newsbox"
                    type="text"
                    placeholder="Email address"
                    name="name"
                    required=""
                  />
                  <button type="submit" name="en" className="news-button">
                    Sign Up <img src={arrowW} alt="" />
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

export default BlogDetails;
