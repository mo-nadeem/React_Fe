import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import DoctorExpert from "../../components/Home/DoctorExpert";
import Testimonials from "../../components/Home/Testimonials";
import { useParams } from "react-router-dom";
import arrowImg from "../../assests/images/2023/01/arrow-c.png";
import img1 from "../../assests/images/02/01/1.jpg";
import axios from "axios";
import DoctorCarousel from "./DoctorCarousel";
import HospitalCarousel from "./HospitalCarousel";
import { Link } from "react-router-dom";
import Brandlogoimg from "../../assests/images/02/logo.png";
import arrowTrans from "../../assests/images/2023/01/pack-arrow.png";
import { Helmet } from "react-helmet";
import CategoryBlog from "./CategoryBlog";
import Community from "../../components/community/Community";
import CategoryQA from "./CategoryQA";
import DontPay from "../../components/DontPay/DontPay";
import HealthQuerys from "../../components/Home/HealthQuerys";
import Blog from "../../components/Home/Blog";

const Category = () => {
  const { slug, country } = useParams();
  const [speciality, setSpecliality] = useState([]);
  const [info, setInfo] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [blog, setBlog] = useState([]);
  const [qa, setQa] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/speciality/${slug}/${country}`
      )
      .then((response) => {
        setSpecliality(response.data.data.treatment_list);
        setInfo(response.data.data.speciality_info);
        setDoctor(response.data.data.doctor);
        setHospital(response.data.data.hospitals);
        setBlog(response.data.data.blogs);
        setQa(response.data.data.qa);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug, country]);

  const [activeContent, setActiveContent] = useState(1); // Initialize as null

  const handleContentClick = (contentNumber) => {
    setActiveContent(activeContent === contentNumber ? null : contentNumber); // Toggle content visibility
  };

  const contentItems = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet 1",
      text: "Content for button 1",
      image: img1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet 2",
      text: "Content for button 2",
      image: "images/2023/02/02/2.jpg",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet 3",
      text: "Content for button 3",
      image: "images/2023/02/02/3.jpg",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet 4",
      text: "Content for button 4",
      image: "images/2023/02/02/4.jpg",
    },
  ];


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
  };
  return (
    <>
      <Helmet>
        <title>{info.title}</title>
        <meta name="description" content={info.description} />
        <link
          rel="canonical"
          href={`https://medflick.com/${slug}/${country}`}
        />
        <meta property="og:title" content={info.title} />

        <meta property="og:description" content={info.description} />

        <meta property="og:url" content="https://medflick.com" />

        <meta property="og:type" content="website" />

        <meta property="og:locale" content="en" />

        <meta property="og:site_name" content="Medflick" />
      </Helmet>
      <Homelayout>
        <section id="category-slider">
          <img
            src={`${process.env.REACT_APP_BASE_URL}/speciality/${info.image}`}
            alt="Category"
          />
          <div className="category-slidertext">
            <h1>{info.name}</h1>
            {/* <p>{info.short_description}</p> */}
            <div
              className="doctors-bio"
              dangerouslySetInnerHTML={{
                __html: info.short_description,
              }}
            />
          </div>
        </section>

        <section id="category-marquee">
          <div className="marquee-wrapper">
            <div
              className="marquee"
              style={{
                animationDuration: "21s",
              }}
            >
              <div className="Marquee-tag"> 100+ Surgeries </div>
              <div className="Marquee-tag"> 95% Success Rate </div>
              <div className="Marquee-tag"> 4000+ Top Doctors </div>
              <div className="Marquee-tag"> 1000+ Top Hospital </div>
              <div className="Marquee-tag"> 100+ Surgeries </div>
              <div className="Marquee-tag"> 95% Success Rate </div>
              <div className="Marquee-tag"> 4000+ Top Doctors </div>
              <div className="Marquee-tag"> 1000+ Top Hospital </div>
            </div>
          </div>
        </section>

        <section id="category-mid">
          <div className="midbox-inner  wiki-mk">
            <h2>{info.menu_name}</h2>
            <p>{info.quote}</p>
            <span onClick={togglePopup}>
              {" "}
              Get Cost Estimate <img src={arrowImg} alt="ask-a-questions" />
            </span>
          </div>
        </section>

        <section id="treatments-section">
          <div className="midbox-inner wiki-mk">
            <h2>
              {info.name} treatments in <span>{info.country}</span>
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: info.long_description,
              }}
            />
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
            </p> */}

            <ul>
              {speciality &&
                speciality.map((e) => (
                  <li key={e.id}>
                    <img
                      src={`${process.env.REACT_APP_BASE_URL}/treatments/${e.home_image}`}
                      alt={e.name}
                    />
                    <Link to={`/treatment/${e.slug}/${e.country}`}>
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">{e.name} </div>
                          <div className="cost">${e.price}</div>
                        </div>
                        <div className="packages-details">
                          {e.short_description.slice(0, 130)}....
                        </div>

                        {/* <div
                          className="packages-details"
                          dangerouslySetInnerHTML={{
                            __html: e.short_description,
                          }}
                        /> */}
                        <a href="#">
                          <img
                            src={arrowTrans}
                            className="arrow-link"
                            alt="arrow"
                          />
                        </a>
                      </div>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
        {/* components section */}
        <DoctorExpert />
        {/* end */}
        <section id="help-you">
          <div className="midbox-inner  wiki-mk">
            <img src={Brandlogoimg} className="logo-med" alt="Brand Logo" />
            <h2>How can we help you?</h2>

            <div className="we-help-box">
              <div className="we-help-left">
                <div className="button-wrap">
                  {contentItems.map((item) => (
                    <div
                      className={`button ${
                        activeContent === item.id ? "active" : ""
                      }`}
                      key={item.id}
                    >
                      <div
                        className="arrow-icon"
                        onClick={() => handleContentClick(item.id)}
                      />
                      <h3 onClick={() => handleContentClick(item.id)}>
                        {item.title}
                      </h3>
                      {activeContent === item.id && ( // Render text and image only when activeContent matches item.id
                        <React.Fragment>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore Ut
                            enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo con
                            duis aute irure orem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore Ut enim
                          </p>
                        </React.Fragment>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="we-help-right">
                <div className="content">
                  {contentItems.map((item) => (
                    <div
                      className={`content-${item.id} ${
                        activeContent === item.id ? "active" : ""
                      }`}
                      key={item.id}
                    >
                      <img src={item.image} alt={`Content ${item.id}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dont pay */}
        <DontPay />

        {/* end */}
        {/* doctor section */}
        <DoctorCarousel doctor={doctor} />

        {/* end */}
        {/* Hospital section */}
        <HospitalCarousel hospital={hospital} />

        {/* end */}

        {/* query components */}
        {/* <CategoryQA qa={qa} /> */}
        <HealthQuerys />

        <Testimonials />
        {/* end */}

        {/* community section */}

        <Community />

        {/* end */}
        {/* Blog Section */}

        <CategoryBlog blog={blog} />
        {/* Blog end */}
      </Homelayout>

      <div class="popup" data-popup="popup-5">
        <div class="popup-inner5">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="popup-close"
                data-popup-close="popup-5"
                data-dismiss="modal"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div Class="cost-estimate-form">
              <div Class="cost-estimate-form-left">
                <div class="owl-slider">
                  <div id="cost-estimate" class="owl-carousel">
                    <div class="item">
                      <img src="images/2023/07/man.jpg" />
                      <div class="cost-estimate-box">
                        <div Class="cost-estimate-items">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consectetur adipiscin
                            elit, sed do eiusmod tempor incididunt ut labore
                            consectetur ipsum dolor sit amet, consectetur elit,
                            sed do eiusmod tempor incidid Lorem ipsum dolor sit
                            amet adipiscin elit”{" "}
                          </p>
                          <h3>Ellen Richardson</h3>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <img src="images/2023/07/man.jpg" />
                      <div class="cost-estimate-box">
                        <div Class="cost-estimate-items">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consectetur adipiscin
                            elit, sed do eiusmod tempor incididunt ut labore
                            consectetur ipsum dolor sit amet, consectetur elit,
                            sed do eiusmod tempor incidid Lorem ipsum dolor sit
                            amet adipiscin elit”{" "}
                          </p>
                          <h3>Ellen Richardson</h3>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <img src="images/2023/07/man.jpg" />
                      <div class="cost-estimate-box">
                        <div Class="cost-estimate-items">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consectetur adipiscin
                            elit, sed do eiusmod tempor incididunt ut labore
                            consectetur ipsum dolor sit amet, consectetur elit,
                            sed do eiusmod tempor incidid Lorem ipsum dolor sit
                            amet adipiscin elit”{" "}
                          </p>
                          <h3>Ellen Richardson</h3>
                        </div>
                      </div>
                    </div>

                    <div class="item">
                      <img src="images/2023/07/man.jpg" />
                      <div class="cost-estimate-box">
                        <div Class="cost-estimate-items">
                          <p>
                            {" "}
                            “Lorem ipsum dolor sit amet, consectetur adipiscin
                            elit, sed do eiusmod tempor incididunt ut labore
                            consectetur ipsum dolor sit amet, consectetur elit,
                            sed do eiusmod tempor incidid Lorem ipsum dolor sit
                            amet adipiscin elit”{" "}
                          </p>
                          <h3>Ellen Richardson</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div Class="cost-estimate-form-right">
                <h2> Get Cost Estimate</h2>
                <div class="treatment-right">
                  <div class="treatment-form">
                    <div class="inputbox">
                      <label>Full Name</label>
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
                      <label>Phone Number</label>
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
                      <label>Email Address</label>
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
                    Continue{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Category;
