import React, { useEffect, useCallback, useState } from "react";
import { CgFacebook } from "react-icons/cg";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";
import { GoChevronDown } from "react-icons/go";
import logo from "../../assests/images/2023/01/logo.png";
import arrowImg from "../../assests/images/2023/01/arrow-c.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const dispatch = useDispatch();

  const { speciality } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

  const [isAboutVisible, setIsAboutVisible] = useState(false);

  // Function to toggle the visibility of the list
  const toggleAbout = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  // const contentStyle = {
  //   display: isOpen ? "none" : "block",
  // };

  // active in active
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (event) => {
    const button = event.currentTarget;
    const targetFooterbox = button.nextElementSibling;

    // Close all open windows
    document.querySelectorAll(".footerbox").forEach((footerbox) => {
      if (footerbox !== targetFooterbox) {
        footerbox.style.display = "none";
      }
    });

    // Toggle this window open/close
    targetFooterbox.style.display =
      targetFooterbox.style.display === "block" ? "none" : "block";

    // Set the active button
    setActiveButton(button);
  };
  return (
    <>
      <footer>
        <div className="midbox-inner wiki-mk">
          <div className="footer-logo">
            <div className="footer-logobox">
              <a href="index.html" target="_self">
                <img src={logo} alt="Brand Logo" />
              </a>
            </div>
            <div className="footer-customer">
              <h2>24X7 Support:</h2>
              <p>
                Beyond Boundaries, Around the Clock Healthcare knows no
                boundaries, and neither does our support. Medflick's 24/7
                availability ensures that whether you're at home or halfway
                across the world, we're here to provide the guidance you need.
              </p>
              <a href="#">
                Contact us <img src={arrowImg} alt="" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-navbox">
              <h4
                className={`but ${activeButton === "button1" ? "active" : ""}`}
                onClick={handleButtonClick}
              >
                Medflick{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>

              <ul className="footerbox">
                <li>
                  <Link to="/about-us" target="_self">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" target="_self">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" target="_self">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    For Doctors
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbox">
              <h4
                className={`but ${activeButton === "button2" ? "active" : ""}`}
                onClick={handleButtonClick}
              >
                Treatments
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul className="footerbox">
                {speciality &&
                  speciality.map((e) => (
                    <Link to={`/speciality/${e.slug}/${e.country}`} key={e.id}>
                      <li>{e.name}</li>
                    </Link>
                  ))}
              </ul>
            </div>
            <div className="footer-navbox">
              <h4
                className={`but ${activeButton === "button3" ? "active" : ""}`}
                onClick={handleButtonClick}
              >
                Quick Links{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul className="footerbox">
                <li>
                  <a href="#" target="_self">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Q&A
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Request a free quote
                  </a>
                </li>
                {/* <li>
                  <a href="#" target="_self">
                    Non Proident{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Anim ipsum
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="footer-navbox">
              <h4
                className={`but ${activeButton === "button4" ? "active" : ""}`}
                onClick={handleButtonClick}
              >
                Watch
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul className="footerbox">
                <li>
                  <a href="#" target="_self">
                    Expert Videos
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Technological Updates
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbox">
              <h4
                className={`but ${activeButton === "button5" ? "active" : ""}`}
                onClick={handleButtonClick}
              >
                Support
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul className="footerbox">
                <li>
                  <a href="#" target="_self">
                    Write to us
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="copyright">
            <div className="wiki">
              <ul>
                <li>
                  <a href="#" target="_black">
                    <CgFacebook style={{ fontSize: "20px" }} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_black">
                    <AiOutlineTwitter style={{ fontSize: "20px" }} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_black">
                    <AiFillYoutube style={{ fontSize: "20px" }} />
                  </a>
                </li>
                <li>
                  <a href="#" target="_black">
                    <AiOutlineInstagram style={{ fontSize: "20px" }} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="wh">
              © Medflick, 2023. All rights reserved. |
              <a href="#" target="_black">
                Privacy Policy
              </a>{" "}
              |
              <a href="#" target="_black">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
