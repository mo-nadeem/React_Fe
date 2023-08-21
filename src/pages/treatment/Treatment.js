import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DoctorExpert from "../../components/Home/DoctorExpert";
import FAQ from "../../components/Home/FAQ";
import NavSection from "./NavSection";
import DayWise from "./DayWise";
import hoemImg from "../../assests/images/03/1.jpg";
import hoemImg2 from "../../assests/images/03/2.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import pricingImg from "../../assests/images/03/01/1.jpg";
import pricingImg1 from "../../assests/images/03/01/2.jpg";
import pricingImg2 from "../../assests/images/03/01/3.jpg";
import pricingImg3 from "../../assests/images/03/01/4.jpg";
import icon from "../../assests/images/03/line-icon.png";
import icon1 from "../../assests/images/03/line-icon1.png";
import icon2 from "../../assests/images/03/line-icon2.png";
import arrowIcon from "../../assests/images/2023/01/arrow-c.png";
import logo from "../../assests/images/02/logo.png";
import qaIcon from "../../assests/images/2023/01/arrow-w.png";
import communityImg from "../../assests/images/02/community.jpg";
import vectorIcon from "../../assests/images/02/Vector 85.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import TreatmentBlog from "./TreatmentBlog";
import TreatmentQA from "./TreatmentQA";
const responsiveHospital = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Treatment = () => {
  const { slug, country } = useParams();
  const [info, setInfo] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [hospital, setHospital] = useState([]);
  const [blog, setBlog] = useState([]);
  const [qa, setQa] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/treatment/${slug}/${country}`)
      .then((response) => {
        setInfo(response.data.treateDetailsbyCountry.treateDetailsbyCountry);
        setDoctor(response.data.treateDetailsbyCountry.doctors);
        setHospital(response.data.treateDetailsbyCountry.hospitals);
        setBlog(response.data.treateDetailsbyCountry.blogs);
        setQa(response.data.treateDetailsbyCountry.qa);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug, country]);

  // for active and non active section
  const [activeContent, setActiveContent] = useState(1);

  const handleContentClick = (contentNumber) => {
    setActiveContent(activeContent === contentNumber ? null : contentNumber);
  };

  const contentItems = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet 1",
      text: "Content for button 1",
      image: "images/2023/02/02/1.jpg",
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

  return (
    <>
      <Helmet>
        <title>{info && info.title}</title>
        <meta name="description" content={info && info.description} />
        <link
          rel="canonical"
          href={`https://medflick.com/treatment/${slug}/${country}`}
        />
        <meta property="og:title" content={info && info.title} />

        <meta property="og:description" content={info && info.description} />

        <meta
          property="og:url"
          content={`https://medflick.com/treatment/${slug}/${country}`}
        />

        <meta property="og:type" content="website" />

        <meta property="og:locale" content="en" />

        <meta property="og:site_name" content="Medflick" />
      </Helmet>
      <Homelayout>
        <section id="treatment-section">
          <div className="midbox-inner wiki-mk">
            <div className="treatment-top">
              <div className="treatment-headtext">
                <h1>{info && info.name}</h1>
                <p>Avg Price: $1000 - $3000</p>
              </div>
              <div className="treatment-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation dolor sit
              </div>
            </div>
          </div>
        </section>

        <section id="treatment-banner">
          <div className="treatment-bannerimg">
            <img src={hoemImg} />
            <img src={hoemImg2} />
          </div>
          <div className="midbox-inner  wiki-mk">
            <div className="treatment-headbox">
              <div className="treatment-left">
                <ul>
                  <li>
                    <h2>Chemotherapy</h2> <p>Treatment Type</p>
                  </li>
                  <li>
                    <h2>3-6 Months</h2> <p>Treatment Time</p>
                  </li>
                  <li>
                    <h2>6-8 Weeks</h2> <p>Recovery Time</p>
                  </li>
                  <li>
                    <h2>2-7 Days</h2> <p>Hospitalization Days</p>
                  </li>
                  <li>
                    <h2>84.5 - 95.1%</h2> <p>Success Rate</p>
                  </li>
                </ul>
              </div>
              <div className="treatment-right">
                <h2>Get a free quote</h2>

                <div className="treatment-form">
                  <div className="inputbox">
                    <label>Name</label>
                    <input type="text" placeholder="" name="name" required="" />
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
                          <option value="387">Bosnia Herzegovina (+387)</option>
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
                    <input type="text" placeholder="" name="name" required="" />
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
                  {" "}
                  Submit Now <img src={arrowIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="health-city">
          <div className="midbox-inner  wiki-mk">
            <h2>
              {/* Lorem Ipsum dolor <span>Pricing</span> */}
              {info && info.menu_name}
            </h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
            </p> */}
            <div
              dangerouslySetInnerHTML={{
                __html: info && info.short_description,
              }}
            />

            <div className="owl-slider">
              <div id="city-list">
                <Carousel
                  responsive={responsiveHospital}
                  arrows={false}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  infinite={true}
                >
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="city-item">
                      <img src={pricingImg} />
                      <div className="city-box">
                        <h3>Delhi</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon1} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon2} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="city-item">
                      <img src={pricingImg1} />
                      <div className="city-box">
                        <h3>Mumbai</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon1} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon2} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="city-item">
                      <img src={pricingImg2} />
                      <div className="city-box">
                        <h3>Chennai</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon1} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon2} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="city-item">
                      <img src={pricingImg3} />
                      <div className="city-box">
                        <h3>Hyderabad</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon1} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src={icon2} />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <div className="item" style={{ marginRight: "20px" }}>
                    <div className="city-item">
                      <img src="images/2023/03/01/3.jpg" />
                      <div className="city-box">
                        <h3>Chennai</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon1.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon2.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section className="treatment-marquee" id="category-marquee">
          <div className="marquee-wrapper">
            <div className="marquee" style={{ animationDuration: "21s" }}>
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

        {/* Nav section */}
        <NavSection doctor={doctor} hospital={hospital} />

        {/* End */}

        <section id="pay-section">
          <div className="midbox-inner  wiki-mk">
            <div className="pay-box">
              <div className="medflick-payleft">
                <h2>You don’t pay Medflick</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim minim
                </p>
              </div>
              <div className="medflick-payright">
                <Link to="/" className="consultation">
                  {" "}
                  Request a free consultation <img src={qaIcon} alt="" />
                </Link>
                <Link to="/" className="contact">
                  {" "}
                  Contact Us <img src={arrowIcon} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Day Wise  */}

        <DayWise />

        {/* End */}

        {/* doctor expert */}
        <DoctorExpert />

        {/* end */}

        <section id="help-you">
          <div className="midbox-inner  wiki-mk">
            <img src={logo} className="logo-med" alt="Brand Logo" />
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
        {/* Treatment QA */}
        <TreatmentQA qa={qa} />

        {/* End */}

        <section id="community-section">
          <div className="midbox-inner  wiki-mk">
            <div className="community-pro">
              <img className="community-img" src={communityImg} />
              <div className="community-box">
                <h3>Join our Community!</h3>
                <p>
                  Lorem ipsum dolor amet, consecte adipiscing elit, sed do
                  eiusmod tempor incididunt ut enim ad minim veniam, quis Lorem
                  ipsum dolor amet, consecte adipiscing elit, sed do eiusmod
                  tempor incididunt ut enim ad minim veniam, quis tempor
                  incididunt
                </p>
                <Link className="more-img" to="/">
                  Lorem Ipsum <img src={vectorIcon} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <FAQ />

        {/*FAQ end */}

        {/* Blog */}

        <TreatmentBlog blog={blog} />

        {/*Blog end */}
      </Homelayout>
    </>
  );
};

export default Treatment;
