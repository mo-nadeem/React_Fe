import React from "react";
import logo from "../../assests/images/2023/01/logo.png";
import arrow from "../../assests/images/2023/01/arrow-c.png"
import { GoChevronDown } from "react-icons/go";

const Header = () => {
  return (
    <>
      <header className="header" id="header-id">
        <div className="headerTertiary">
          <a href="index.html" target="_self" className="logo-d">
            {" "}
            <img src={logo} alt="Brand Logo" />
          </a>
          <div className="topnav-right page-header">
            <nav>
              <div className="top-menu-wrapper">
                <ul className="top-menu">
                  <li className="has-dropdown" style={{ display: "block" }}>
                    <a href="">
                      Treatments
                      <i>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </a>
                    <ul className="sub-menu">
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Organ Transplantation{" "}
                        </a>{" "}
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Neuromodulation{" "}
                        </a>{" "}
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Cancer Treatment
                        </a>{" "}
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Cardiac Surgery{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="has-dropdown" style={{ display: "block" }}>
                    <a href="">
                      Hospitals
                      <i>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </a>
                    <ul className="sub-menu">
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Organ Transplantation{" "}
                        </a>{" "}
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Neuromodulation{" "}
                        </a>{" "}
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Cancer Treatment
                        </a>{" "}
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Cardiac Surgery{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </li>

                  <li className="has-dropdown" style={{ display: "block" }}>
                    <a href="">
                      Doctors
                      <i>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </a>
                    <ul className="sub-menu">
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Organ Transplantation{" "}
                        </a>{" "}
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Neuromodulation{" "}
                        </a>{" "}
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Cancer Treatment
                        </a>{" "}
                      </li>
                      <li className="dropdown">
                        <a href="#" className="dropbtn">
                          Cardiac Surgery{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#"> Q&A </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="navbar__buttons">
            <a className="navbar__buttons-login" href="#">
              Log In
            </a>
            <div className="most-recent">
              <select className="jdgm-sort-dropdown" aria-label="Sort dropdown">
                <option value="select-language">Select Language</option>
                <option value="English" selected>
                  {" "}
                  English
                </option>
              </select>
            </div>

            <a className="qsk-question" href="#">
              Ask FREE Question <img src={arrow} alt="" />
            </a>
          </div>
        </div>

        <div className="headerSecondry">
          <div className="header-inner wiki-mk">
            <a href="index.html" target="_self" className="logo-m">
              {" "}
              <img src={logo} alt="Brand Logo" />
            </a>

            <nav className="navbar">
              <span className="open-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                  <g fill="#444444" fill-rule="evenodd">
                    <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                  </g>
                </svg>
              </span>
              <div className="menu-wrapper">
                <ul className="menu">
                  <li className="menu-block">
                    <span className="close-menu">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                      >
                        <path
                          fill="#fff"
                          fill-rule="evenodd"
                          d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z"
                        />
                      </svg>
                    </span>
                  </li>

                  <li className="menu-item has-collapsible">
                    <a href="#">
                      <span></span> Treatments
                    </a>
                    <ul className="menu-child">
                      <li className="menu-child-item">
                        <a href="#">Organ Transplantation </a>
                      </li>
                      <li className="menu-child-item">
                        <a href="#">Neuromodulation </a>
                      </li>
                      <li className="menu-child-item">
                        <a href="#">Cancer Treatment </a>
                      </li>
                      <li className="menu-child-item">
                        <a href="#">Cardiac Surgery </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-collapsible">
                    <a href="#">
                      <span></span> Hospitals
                    </a>
                    <ul className="menu-child">
                      <li className="menu-child-item">
                        <a href="#">Organ Transplantation </a>
                      </li>
                      <li className="menu-child-item">
                        <a href="#">Neuromodulation </a>
                      </li>
                      <li className="menu-child-item">
                        <a href="#">Cancer Treatment </a>
                      </li>
                      <li className="menu-child-item">
                        <a href="#">Cardiac Surgery </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-collapsible">
                    <a href="#">
                      <span></span> Doctors
                    </a>
                    <ul className="menu-child">
                      <li className="menu-child-item">
                        <a href="#">Organ Transplantation </a>
                      </li>
                      <li className="menu-child-item">
                        <a href="#">Neuromodulation </a>
                      </li>
                      <li className="menu-child-item">
                        <a href="#">Cancer Treatment </a>
                      </li>
                      <li className="menu-child-item">
                        <a href="#">Cardiac Surgery </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item has-collapsible">
                    <a href="#">Testimonials</a>
                  </li>
                  <li className="menu-item has-collapsible">
                    <a href="#">Book an Appointment</a>
                  </li>
                  <li className="menu-item" style={{ background: "#ff6800" }}>
                    <a className="menu-link" style={{ color: "#fff" }}>
                      Quick info
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="careers.html" className="submenu-link">
                      Careers
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="submenu-link">
                      News & Events
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="submenu-link">
                      Blog
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#" className="submenu-link">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
