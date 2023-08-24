import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import DoctorExpert from "../../components/Home/DoctorExpert";
import Testimonials from "../../components/Home/Testimonials";
import sliperImg from "../../assests/images/02/slider.jpg";
import { useParams } from "react-router-dom";
import arrowImg from "../../assests/images/2023/01/arrow-c.png";
import arrow2Img from "../../assests/images/2023/01/arrow-w.png";
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
            <p>{info.short_description}</p>
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
            <a href="#">
              {" "}
              Ask FREE Question <img src={arrowImg} alt="ask-a-questions" />
            </a>
          </div>
        </section>

        <section id="treatments-section">
          <div className="midbox-inner wiki-mk">
            <h2>
              {info.name} treatments in <span>{info.country}</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
            </p>

            <ul>
              {speciality &&
                speciality.map((e) => (
                  <li key={e.id}>
                    <img src={img1} alt="" />
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
              {/* 
              <li>
                <img src={img2} alt="" />
                <div className="packages-text">
                  <div className="pack-cost">
                    <div className="pack-name">Breast Cancer </div>
                    <div className="cost">$4000</div>
                  </div>
                  <div className="packages-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur elit, sed do eiusmod tempor incididunt ut
                    labore Lorem ipsum dolor sit amet
                  </div>
                  <a href="#">
                    <img
                      src="images/2023/01/pack-arrow.png"
                      className="arrow-link"
                      alt=""
                    />
                  </a>
                </div>
              </li>

              <li>
                <img src={img3} alt="" />
                <div className="packages-text">
                  <div className="pack-cost">
                    <div className="pack-name">Breast Cancer </div>
                    <div className="cost">$4000</div>
                  </div>
                  <div className="packages-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur elit, sed do eiusmod tempor incididunt ut
                    labore Lorem ipsum dolor sit amet
                  </div>
                  <a href="#">
                    <img
                      src="images/2023/01/pack-arrow.png"
                      className="arrow-link"
                      alt=""
                    />
                  </a>
                </div>
              </li>

              <li>
                <img src={img4} alt="" />
                <div className="packages-text">
                  <div className="pack-cost">
                    <div className="pack-name">Radiation Therapy </div>
                    <div className="cost">$4000</div>
                  </div>
                  <div className="packages-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur elit, sed do eiusmod tempor incididunt ut
                    labore Lorem ipsum dolor sit amet
                  </div>
                  <a href="#">
                    <img
                      src="images/2023/01/pack-arrow.png"
                      className="arrow-link"
                      alt=""
                    />
                  </a>
                </div>
              </li>

              <li>
                <img src={img5} alt="" />
                <div className="packages-text">
                  <div className="pack-cost">
                    <div className="pack-name">Chemoterapy </div>
                    <div className="cost">$4000</div>
                  </div>
                  <div className="packages-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur elit, sed do eiusmod tempor incididunt ut
                    labore Lorem ipsum dolor sit amet
                  </div>
                  <a href="#">
                    <img
                      src="images/2023/01/pack-arrow.png"
                      className="arrow-link"
                      alt=""
                    />
                  </a>
                </div>
              </li>

              <li>
                <img src={img6} alt="" />
                <div className="packages-text">
                  <div className="pack-cost">
                    <div className="pack-name">Immunity Therapy </div>
                    <div className="cost">$4000</div>
                  </div>
                  <div className="packages-details">
                    Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur elit, sed do eiusmod tempor incididunt ut
                    labore Lorem ipsum dolor sit amet
                  </div>
                  <a href="#">
                    <img
                      src="images/2023/01/pack-arrow.png"
                      className="arrow-link"
                      alt=""
                    />
                  </a>
                </div>
              </li> */}
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
                <a href="#" className="consultation">
                  {" "}
                  Request a free consultation <img src={arrow2Img} alt="" />
                </a>
                <a href="#" className="contact">
                  {" "}
                  Contact Us <img src={arrowImg} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* doctor section */}
        <DoctorCarousel doctor={doctor} />

        {/* end */}
        {/* Hospital section */}
        <HospitalCarousel hospital={hospital} />

        {/* end */}

        {/* query components */}
        <CategoryQA qa={qa} />

        <Testimonials />
        {/* end */}

        {/* community section */}

        <Community />

        {/* end */}
        {/* Blog Section */}
        <CategoryBlog blog={blog} />
        {/* Blog end */}
      </Homelayout>
    </>
  );
};

export default Category;
