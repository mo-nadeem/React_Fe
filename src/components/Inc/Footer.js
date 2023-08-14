import React from "react";
import { CgFacebook } from "react-icons/cg";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="midbox-inner  wiki-mk">
          <div className="footer-logo">
            <div className="footer-logobox">
              <a href="index.html" target="_self">
                {" "}
                <img src="images/2023/01/logo.png" alt="Brand Logo" />
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
                {" "}
                Contact us <img src="images/2023/01/arrow-c.png" alt="" />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-navbox">
              <h4>About</h4>
              <ul>
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
              <h4>Lorem</h4>
              <ul>
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
              <h4>Quick Links</h4>
              <ul>
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
              <h4>Company</h4>
              <ul>
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
              <h4>Help & Support</h4>
              <ul>
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
              © Medflick, 2023. All rights reserved. |{" "}
              <a href="#" target="_black">
                Privacy Policy
              </a>{" "}
              |{" "}
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
