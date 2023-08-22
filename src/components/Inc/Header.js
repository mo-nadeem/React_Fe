import React, { useState, useCallback, useEffect } from "react";
import logo from "../../assests/images/2023/01/logo.png";
import arrow from "../../assests/images/2023/01/arrow-c.png";
import { GoChevronDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";
import { Link } from "react-router-dom";
import navIcon from "../../assests/images/nav/icon1.png";
const Header = () => {
  const dispatch = useDispatch();

  const { speciality, treatment } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

  // scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const header = document.getElementById("header-id");
    const sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  // FOR OFFCANVA
  const [isOffcanvas, setIsOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvas((prevIsOffcanvas) => !prevIsOffcanvas);
  };
  const handleCollapsibleClick = (event) => {
    const clickedCollapsible = event.target.closest(".has-collapsible");
    const allCollapsibles = document.querySelectorAll(".has-collapsible");

    allCollapsibles.forEach((collapsible) => {
      if (collapsible !== clickedCollapsible) {
        collapsible.classList.remove("active");
      }
    });

    clickedCollapsible.classList.toggle("active");
  };
  return (
    <>
      <header className="header" id="header-id">
        <div className="headerTertiary">
          <Link to="/" target="_self" className="logo-d">
            {" "}
            <img src={logo} alt="Brand Logo" />
          </Link>
          <div className="topnav-right page-header">
            <nav>
              <div className="top-menu-wrapper">
                <ul className="top-menu">
                  <li className="has-dropdown dropdown">
                    <a href="#" className="dropbtn">
                      Treatments
                      <i>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </a>
                    <div className="dropdown-content">
                      <ul>
                        {speciality &&
                          speciality.map((e) => (
                            <li key={e.id}>
                              <Link to={`/speciality/${e.slug}/${e.country}`}>
                                <img src={navIcon} alt="Brand Logo" />
                                {e.menu_name}
                                <span>Medflick</span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>

                  <li className="has-dropdown dropdown">
                    <a href="#" className="dropbtn">
                      Hospitals
                      <i>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </a>
                    <div className="dropdown-content">
                      <ul>
                        {treatment &&
                          treatment.map((e) => (
                            <li key={e.id}>
                              <a href="#">
                                <img src={navIcon} alt="Brand Logo" />
                                {e.name} Hospitals
                                <span>Medflick</span>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>

                  <li className="has-dropdown dropdown">
                    <a href="#" className="dropbtn">
                      Doctors
                      <i>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </a>
                    <div className="dropdown-content">
                      <ul>
                        {treatment &&
                          treatment.map((e) => (
                            <li key={e.id}>
                              <Link  to={`/doctors/${e.slug}/${e.country}`}>
                                <img src={navIcon} alt="Brand Logo" />
                                {e.name} Doctors
                                <span>Medflick</span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>

                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <a href="#"> Q&A </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="navbar__buttons">
            <Link className="navbar__buttons-login" to="/">
              Log In
            </Link>
            <div className="most-recent">
              <select className="jdgm-sort-dropdown" aria-label="Sort dropdown">
                <option value="select-language">Select Language</option>
                <option value="English" selected>
                  {" "}
                  English
                </option>
              </select>
            </div>

            <Link className="qsk-question" to="/">
              Ask FREE Question <img src={arrow} alt="" />
            </Link>
          </div>
        </div>

        <div className="headerSecondry">
          <div className="header-inner wiki-mk">
            <Link href="index.html" target="_self" className="logo-m">
              {" "}
              <img src={logo} alt="Brand Logo" />
            </Link>

            <nav className="navbar">
              <span className="open-menu" onClick={toggleOffcanvas}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16">
                  <g fill="#444444" fill-rule="evenodd">
                    <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
                  </g>
                </svg>
              </span>
              <div className={`menu-wrapper${isOffcanvas ? " offcanvas" : ""}`}>
                <ul className="menu">
                  <li className="menu-block">
                    <span className="close-menu" onClick={toggleOffcanvas}>
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
                    <Link to="/" onClick={handleCollapsibleClick}>
                      Treatments
                      <i style={{ marginLeft: "10rem" }}>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </Link>
                    <ul className="menu-child">
                      {speciality &&
                        speciality.map((e) => (
                          <li className="menu-child-item" key={e.id}>
                            <Link
                              to={`/speciality/${e.slug}/${e.country}`}
                              className="dropbtn"
                            >
                              {e.name}
                            </Link>{" "}
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="menu-item has-collapsible">
                    <Link to="/" onClick={handleCollapsibleClick}>
                      Hospitals
                      <i style={{ marginLeft: "11rem" }}>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </Link>
                    <ul className="menu-child">
                      {speciality &&
                        speciality.map((e) => (
                          <li className="menu-child-item" key={e.id}>
                            <Link
                              to={`hospitals/speciality/${e.slug}/${e.country}`}
                              className="dropbtn"
                            >
                              {e.name} Hospitals
                            </Link>{" "}
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="menu-item has-collapsible">
                    <Link to="/" onClick={handleCollapsibleClick}>
                      Doctors
                      <i style={{ marginLeft: "11.5rem" }}>
                        <GoChevronDown style={{ fontSize: "22px" }} />
                      </i>
                    </Link>
                    <ul className="menu-child">
                      {speciality &&
                        speciality.map((e) => (
                          <li className="menu-child-item" key={e.id}>
                            <Link
                              to={`doctors/speciality/${e.slug}/${e.country}`}
                              className="dropbtn"
                            >
                              {e.name} Doctors
                            </Link>{" "}
                          </li>
                        ))}
                    </ul>
                  </li>
                  <li className="menu-item has-collapsible">
                    <Link to="/">Testimonials</Link>
                  </li>
                  <li className="menu-item has-collapsible">
                    <Link to="/">Book an Appointment</Link>
                  </li>
                  <li className="menu-item" style={{ background: "#ff6800" }}>
                    <Link className="menu-link" style={{ color: "#fff" }}>
                      Quick info
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="careers.html" className="submenu-link">
                      Careers
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/" className="submenu-link">
                      News & Events
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/" className="submenu-link">
                      Blog
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/" className="submenu-link">
                      Contact Us
                    </Link>
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
