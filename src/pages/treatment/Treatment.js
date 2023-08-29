import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DoctorExpert from "../../components/Home/DoctorExpert";
import NavSection from "./NavSection";
import DayWise from "./DayWise";
import { useParams } from "react-router-dom";
import axios from "axios";
import icon from "../../assests/images/03/line-icon.png";
import icon1 from "../../assests/images/03/line-icon1.png";
import icon2 from "../../assests/images/03/line-icon2.png";
import arrowIcon from "../../assests/images/2023/01/arrow-c.png";
import { Helmet } from "react-helmet";
import TreatmentBlog from "./TreatmentBlog";
import TreatmentQA from "./TreatmentQA";
import Community from "../../components/community/Community";
import TreatmentFAQ from "./TreatmentFAQ";
import DontPay from "../../components/DontPay/DontPay";
import HelpYou from "../../components/HelpYou/HelpYou";
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
  const [qa, setQa] = useState([]);
  const [cost, setCost] = useState([]);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/treatment/${slug}/${country}`)
      .then((response) => {
        setInfo(response.data.treateDetailsbyCountry.treateDetailsbyCountry);
        setDoctor(response.data.treateDetailsbyCountry.doctors);
        setHospital(response.data.treateDetailsbyCountry.hospitals);
        setBlog(response.data.treateDetailsbyCountry.blogs);
        setQa(response.data.treateDetailsbyCountry.qa);
        setCost(response.data.treateDetailsbyCountry.treatment_cost_comparison);
        setFaq(response.data.treateDetailsbyCountry.faqs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug, country]);

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
      // messages: query,
    };

    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
    const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/free_quote_treatment`;

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
                <p>Avg Price: {info.special_price}</p>
              </div>
              <div className="treatment-subtext">{info.quote}</div>
            </div>
          </div>
        </section>

        <section id="treatment-banner">
          <div className="treatment-bannerimg">
            <img
              src={`${process.env.REACT_APP_BASE_URL}/treatments/${info.image}`}
              width="50%"
              style={{ width: "50%" }}
            />
            <img
              src={`${process.env.REACT_APP_BASE_URL}/treatments/${info.image}`}
              width="50%"
              style={{ width: "50%" }}
            />
            {/* <img src={hoemImg2} /> */}
            {/* <img src={hoemImg2} /> */}
          </div>
          <div className="midbox-inner  wiki-mk">
            <div className="treatment-headbox">
              <div className="treatment-left">
                <ul>
                  <li>
                    <h2>{info.treatment_type_name}</h2> <p>Treatment Type</p>
                  </li>
                  <li>
                    <h2>{info.treatment_time}</h2> <p>Treatment Time</p>
                  </li>
                  <li>
                    <h2>{info.recovery_time}</h2> <p>Recovery Time</p>
                  </li>
                  <li>
                    <h2>{info.hospitalization_days}</h2>{" "}
                    <p>Hospitalization Days</p>
                  </li>
                  <li>
                    <h2>{info.success_rate}</h2> <p>Success Rate</p>
                  </li>
                </ul>
              </div>
              <div className="treatment-right">
                <h2>Get a free quote</h2>
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
                        value={email}
                        onChange={(e) => setQuery(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" name="en" className="home-button">
                    {" "}
                    {isLoading ? "Submitting..." : "Submit Now"}{" "}
                    <img src={arrowIcon} alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="health-city">
          <div className="midbox-inner  wiki-mk">
            <h2>{info && info.menu_name}</h2>

            <div className="owl-slider">
              <div id="city-list">
                <Carousel
                  responsive={responsiveHospital}
                  arrows={false}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  infinite={true}
                >
                  {cost.map((e) => (
                    <div
                      className="item"
                      style={{ marginRight: "20px" }}
                      key={e.id}
                    >
                      <div className="city-item">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL}/treatments/${e.icon}`}
                        />
                        <div className="city-box">
                          <h3>{e.name}</h3>
                          <ul>
                            <li>
                              <h4>$ {e.lowest_cost}</h4>
                              <img src={icon} />
                              <h5>Lowest Cost (Approx)</h5>
                            </li>
                            <li>
                              <h4>$ {e.average_cost}</h4>
                              <img src={icon1} />
                              <h5>Average Cost (Approx)</h5>
                            </li>
                            <li>
                              <h4>$ {e.highest_cost}</h4>
                              <img src={icon2} />
                              <h5>Highest Cost (Approx)</h5>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
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
        <NavSection doctor={doctor} hospital={hospital} info={info} />

        {/* End */}

        {/* Dont pay section */}
        <DontPay />

        {/* end */}
        {/* Day Wise  */}

        <DayWise />

        {/* End */}

        {/* doctor expert */}
        <DoctorExpert />

        {/* end */}

        {/* How I can help You */}
        <HelpYou />
        {/* End */}
        {/* Treatment QA */}
        <TreatmentQA qa={qa} />

        {/* End */}

        {/* community section */}
        <Community />

        {/* end */}

        {/* FAQ section */}
        <TreatmentFAQ faq={faq} />

        {/*FAQ end */}

        {/* Blog */}

        <TreatmentBlog blog={blog} />

        {/*Blog end */}
      </Homelayout>
    </>
  );
};

export default Treatment;
