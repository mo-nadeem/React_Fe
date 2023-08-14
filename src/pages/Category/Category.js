import React, { useState } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import DoctorExpert from "../../components/Home/DoctorExpert";
import Testimonials from "../../components/Home/Testimonials";
import Blog from "../../components/Home/Blog";
import sliperImg from "../../assests/images/02/slider.jpg";
import DoctorSection from "../../components/Home/DoctorSection";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HealthQuerys from "../../components/Home/HealthQuerys";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3.3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.3,
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

const Category = () => {
  const [activeContent, setActiveContent] = useState(1); // Initialize as null

  const handleContentClick = (contentNumber) => {
    setActiveContent(activeContent === contentNumber ? null : contentNumber); // Toggle content visibility
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
      <Homelayout>
        <section id="category-slider">
          <img src={sliperImg} alt="Category" />
          <div className="category-slidertext">
            <h1>Cancer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do
              eiusmod tempor incididunt ut labore consectetur ipsum dolor sit
              amet, consectetur elit, sed do eiusmod tempor incidid Lorem ipsum
              dolor sit amet adipiscin elit, sed do eiusmod tempor lorem ipsum
              dolor amet, consectetur adipiscin elit, sed
            </p>
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
            <h2>
              Lorem ipsum adipscing <span>dolor</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
              orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation
            </p>
            <a href="#">
              {" "}
              Ask FREE Question <img src="images/2023/01/arrow-c.png" alt="" />
            </a>
          </div>
        </section>

        <section id="treatments-section">
          <div className="midbox-inner wiki-mk">
            <h2>
              Cancer treatments in <span>India</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
            </p>

            <ul>
              <li>
                <img src="images/2023/02/01/1.jpg" alt="" />
                <div className="packages-text">
                  <div className="pack-cost">
                    <div className="pack-name">Cancer Surgery </div>
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
                <img src="images/2023/02/01/2.jpg" alt="" />
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
                <img src="images/2023/02/01/3.jpg" alt="" />
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
                <img src="images/2023/02/01/4.jpg" alt="" />
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
                <img src="images/2023/02/01/5.jpg" alt="" />
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
                <img src="images/2023/02/01/6.jpg" alt="" />
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
              </li>
            </ul>
          </div>
        </section>
        {/* components section */}
        <DoctorExpert />
        {/* end */}
        <section id="help-you">
          <div className="midbox-inner  wiki-mk">
            <img
              src="images/2023/02/logo.png"
              className="logo-med"
              alt="Brand Logo"
            />
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
                  Request a free consultation{" "}
                  <img src="images/2023/01/arrow-w.png" alt="" />
                </a>
                <a href="#" className="contact">
                  {" "}
                  Contact Us <img src="images/2023/01/arrow-c.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* doctor section */}
        <DoctorSection />
        {/* end */}

        <section id="hospitals-section">
          <div className="midbox-inner  wiki-mk">
            <h2>
              Hospitals lorem ipsum <span>dolor</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con Duis aute irure
            </p>

            <div className="owl-slider">
              <div id="hospitals-list">
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                >
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="hospitals-item">
                      <img src="images/2023/02/03/1.jpg" />
                    </div>
                    <div className="hospitals-text">
                      <h3>Hospitals Name </h3>
                      <div className="hospitals-sub">
                        Lorem ipsum dolor sit amet
                      </div>
                      <a href="#" className="contact-now">
                        Contact Now{" "}
                        <img src="images/2023/01/arrow-c.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="hospitals-item">
                      <img src="images/2023/02/03/2.jpg" />
                    </div>
                    <div className="hospitals-text">
                      <h3>Hospitals Name </h3>
                      <div className="hospitals-sub">
                        Lorem ipsum dolor sit amet
                      </div>
                      <a href="#" className="contact-now">
                        Contact Now{" "}
                        <img src="images/2023/01/arrow-c.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="hospitals-item">
                      <img src="images/2023/02/03/3.jpg" />
                    </div>
                    <div className="hospitals-text">
                      <h3>Hospitals Name </h3>
                      <div className="hospitals-sub">
                        Lorem ipsum dolor sit amet
                      </div>
                      <a href="#" className="contact-now">
                        Contact Now{" "}
                        <img src="images/2023/01/arrow-c.png" alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="hospitals-item">
                      <img src="images/2023/02/03/4.jpg" />
                    </div>
                    <div className="hospitals-text">
                      <h3>Hospitals Name </h3>
                      <div className="hospitals-sub">
                        Lorem ipsum dolor sit amet
                      </div>
                      <a href="#" className="contact-now">
                        Contact Now{" "}
                        <img src="images/2023/01/arrow-c.png" alt="" />
                      </a>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        {/* components */}
        <HealthQuerys />

        <Testimonials />
        {/* end */}

        <section id="community-section">
          <div className="midbox-inner  wiki-mk">
            <div className="community-pro">
              <img
                className="community-img"
                src="images/2023/02/community.jpg"
              />
              <div className="community-box">
                <h3>Join our Community!</h3>
                <p>
                  Lorem ipsum dolor amet, consecte adipiscing elit, sed do
                  eiusmod tempor incididunt ut enim ad minim veniam, quis Lorem
                  ipsum dolor amet, consecte adipiscing elit, sed do eiusmod
                  tempor incididunt ut enim ad minim veniam, quis tempor
                  incididunt
                </p>
                <a className="more-img" href="#">
                  Lorem Ipsum <img src="images/2023/02/Vector 85.png" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Blog />
      </Homelayout>
    </>
  );
};

export default Category;
