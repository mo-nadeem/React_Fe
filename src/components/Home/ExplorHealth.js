import React, { useState } from "react";

const ExplorHealth = () => {
  const [activeTab, setActiveTab] = useState("wiki-1"); // Initial active tab

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <section id="explore-health">
        <div className="midbox-inner  wiki-mk">
          <div className="home-treatment">
            <h4>Treatments</h4>

            <div className="tab">
              <button
                className={`tablinks ${activeTab === "wiki-1" ? "active" : ""}`}
                onMouseOver={() => handleTabChange("wiki-1")}
              >
                Dental{" "}
                <img src="images/2023/01/treatments-arrow.png" alt="Arrow" />
              </button>
              <button
                className={`tablinks ${activeTab === "wiki-2" ? "active" : ""}`}
                onMouseOver={() => handleTabChange("wiki-2")}
              >
                Kidney Transplant{" "}
                <img src="images/2023/01/treatments-arrow.png" alt="Arrow" />
              </button>
              <button
                className={`tablinks ${activeTab === "wiki-3" ? "active" : ""}`}
                onMouseOver={() => handleTabChange("wiki-3")}
              >
                Heart Surgery
                <img src="images/2023/01/treatments-arrow.png" />
              </button>
              <button
                className={`tablinks ${activeTab === "wiki-4" ? "active" : ""}`}
                onMouseOver={() => handleTabChange("wiki-4")}
              >
                Cancer <img src="images/2023/01/treatments-arrow.png" />
              </button>
              <button
                className="tablinks"
                onmouseover="openCity(event, 'wiki-5')"
              >
                IVF Treatment <img src="images/2023/01/treatments-arrow.png" />
              </button>
              <button
                className="tablinks"
                onmouseover="openCity(event, 'wiki-6')"
              >
                Orthopedic
                <img src="images/2023/01/treatments-arrow.png" />
              </button>
            </div>

            <div
              className={`tab tab1 ${activeTab === "wiki-1" ? "active" : ""}`}
            >
              <button
                className={`tablinks ${activeTab === "wiki-1" ? "active" : ""}`}
                onMouseOver={() => handleTabChange("wiki-1")}
                style={{ display: activeTab === "wiki-1" ? "none" : "block" }}
              >
                Dental{" "}
                <img src="images/2023/01/treatments-arrow.png" alt="Arrow" />
              </button>
            </div>
            <div
              id="wiki-1"
              className={`tabcontent ${activeTab === "wiki-1" ? "active" : ""}`}
              style={{ display: activeTab === "wiki-1" ? "block" : "none" }}
            >
              <div className="explore-pro">
                <img
                  className="pd-img3"
                  src="images/2023/01/05/01.jpg"
                  alt="Dental"
                />
                <div className="explore-box ex-pro">
                  <h3>Ut enim admi sit veniam quis nostrud</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in, auctor
                    ligula. Lorem ipsum dolor sit amet.
                  </p>
                  <a className="more-img" href="#">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="tab tab1">
              <button
                className={`tab tab1 ${activeTab === "wiki-2" ? "active" : ""}`}
                onMouseOver={() => handleTabChange("wiki-2")}
              >
                Kidney Transplant{" "}
                <img src="images/2023/01/treatments-arrow.png" />
              </button>
            </div>
            <div
              id="wiki-2"
              className={`tabcontent ${activeTab === "wiki-2" ? "active" : ""}`}
            >
              <div className="explore-pro">
                <img className="pd-img3" src="images/2023/01/05/02.jpg" />
                <div className="explore-box ex-pro">
                  <h3>We love all skin types</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in, auctor
                    ligula. Lorem ipsum dolor sit amet.
                  </p>
                  <a className="more-img" href="#">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="tab tab1">
              <button
                className={`tab tab1 ${activeTab === "wiki-3" ? "active" : ""}`}
                onMouseOver={() => handleTabChange("wiki-3")}
              >
                Heart Surgery <img src="images/2023/01/treatments-arrow.png" />
              </button>
            </div>
            <div
              id="wiki-3"
              className={`tabcontent ${activeTab === "wiki-3" ? "active" : ""}`}
            >
              <div className="explore-pro">
                <img className="pd-img3" src="images/2023/01/05/03.jpg" />
                <div className="explore-box">
                  <h3>Lose weight with the Body Program</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in, auctor
                    ligula. Lorem ipsum dolor sit amet.
                  </p>
                  <a className="more-img" href="#">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="tab tab1">
              <button
                className={`tab tab1 ${activeTab === "wiki-4" ? "active" : ""}`}
                onMouseOver={() => handleTabChange("wiki-4")}
              >
                Cancer <img src="images/2023/01/treatments-arrow.png" />
              </button>
            </div>
            <div
              id="wiki-4"
              className={`tabcontent ${activeTab === "wiki-4" ? "active" : ""}`}
            >
              <div className="explore-pro">
                <img className="pd-img3" src="images/2023/01/05/04.jpg" />
                <div className="explore-box ex-pro">
                  <h3>Plan for Your Future</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in, auctor
                    ligula. Lorem ipsum dolor sit amet.
                  </p>
                  <a className="more-img" href="#">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="tab tab1">
              <button
                className="tablinks"
                onmouseover="openCity(event, 'wiki-5')"
              >
                IVF Treatment <img src="images/2023/01/treatments-arrow.png" />
              </button>
            </div>
            <div id="wiki-5" className="tabcontent">
              <div className="explore-pro">
                <img className="pd-img3" src="images/2023/01/05/05.jpg" />
                <div className="explore-box ex-pro">
                  <h3>Plan for Your Future</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in, auctor
                    ligula. Lorem ipsum dolor sit amet.
                  </p>
                  <a className="more-img" href="#">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="tab tab1">
              <button
                className="tablinks"
                onmouseover="openCity(event, 'wiki-6')"
              >
                Orthopedic <img src="images/2023/01/treatments-arrow.png" />
              </button>
            </div>
            <div id="wiki-6" className="tabcontent">
              <div className="explore-pro">
                <img className="pd-img3" src="images/2023/01/05/06.jpg" />
                <div className="explore-box">
                  <h3>Plan for Your Future</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in, auctor
                    ligula. Lorem ipsum dolor sit amet.
                  </p>
                  <a className="more-img" href="#">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </div>

            <a className="view-all" href="#">
              View All
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExplorHealth;
