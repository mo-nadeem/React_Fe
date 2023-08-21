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
              <h2>24/7 Support</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id es Lorem ipsum dolor sit
                amet, consectetur
              </p>
              <a href="#">
                Contact us <img src={arrowImg} alt="" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-navbox">
              <h4 className="but">
                About{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              
                <ul className="footerbox">
                  <li>
                    <a href="#" target="_self">
                      Lorem Ipsum
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Dolor Sit
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Exceptur{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Occaecat sint{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Non Proident{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Anim ipsum
                    </a>
                  </li>
                </ul>
          
            </div>
            <div className="footer-navbox">
              <h4 className="but">
                Lorem{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul className="footerbox">
                <li>
                  <a href="#" target="_self">
                    Lorem Ipsum
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Dolor Sit
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Exceptur{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Occaecat sint{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Non Proident{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Anim ipsum
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbox">
              <h4 className="but">
                Quick Links{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul className="footerbox">
                <li>
                  <a href="#" target="_self">
                    Lorem Ipsum
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Dolor Sit
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Exceptur{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Occaecat sint{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Non Proident{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Anim ipsum
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbox">
              <h4 className="but">
                Company{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul className="footerbox">
                <li>
                  <a href="#" target="_self">
                    Lorem Ipsum
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Dolor Sit
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Exceptur{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Occaecat sint{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Non Proident{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Anim ipsum
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-navbox">
              <h4 className="but">
                Help & Support{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul className="footerbox">
                <li>
                  <a href="#" target="_self">
                    Lorem Ipsum
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Dolor Sit
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Exceptur{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Occaecat sint{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Non Proident{" "}
                  </a>
                </li>
                <li>
                  <a href="#" target="_self">
                    Anim ipsum
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
