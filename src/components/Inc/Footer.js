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

  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    if (window.innerWidth <= 767) {
      setIsOpen(!isOpen);
    }
  };
  // const contentStyle = {
  //   display: isOpen ? "none" : "block",
  // };
  return (
    <>
      <footer>
        <div class="midbox-inner wiki-mk">
          <div class="footer-logo">
            <div class="footer-logobox">
              <a href="index.html" target="_self">
                <img src="images/2023/01/logo.png" alt="Brand Logo" />
              </a>
            </div>
            <div class="footer-customer">
              <h2>24/7 Support</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id es Lorem ipsum dolor sit
                amet, consectetur
              </p>
              <a href="#">
                Contact us <img src="images/2023/01/arrow-c.png" alt="" />
              </a>
            </div>
          </div>

          <div class="footer-links">
            <div class="footer-navbox">
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
            <div class="footer-navbox">
              <h4 class="but">
                Lorem{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul class="footerbox">
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
            <div class="footer-navbox">
              <h4 class="but">
                Quick Links{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul class="footerbox">
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
            <div class="footer-navbox">
              <h4 class="but">
                Company{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul class="footerbox">
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
            <div class="footer-navbox">
              <h4 class="but">
                Help & Support{" "}
                <i className="fotter-icon">
                  <GoChevronDown style={{ fontSize: "22px" }} />
                </i>
              </h4>
              <ul class="footerbox">
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

          <div class="copyright">
            <div class="wiki">
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
            <div class="wh">
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
