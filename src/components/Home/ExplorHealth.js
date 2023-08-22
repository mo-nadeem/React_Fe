import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fetchHome } from "../../Api/action/HomeAction";
import arrowImg from "../../assests/images/2023/01/treatments-arrow.png"

const ExplorHealth = () => {
  const dispatch = useDispatch();

  const { treatment } = useSelector((state) => state.data);

  const fetchHomedata = useCallback(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  useEffect(() => {
    fetchHomedata();
  }, [fetchHomedata]);

  const [activeTab, setActiveTab] = useState("bone-marrow-transplant"); // Initial active tab

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const navigation = treatment || [];
  const filteredSpecialities = navigation.find(
    (speciality) => speciality.featured === "1"
  );

  return (
    <>
      <section id="explore-health">
        <div className="midbox-inner  wiki-mk">
          <div className="home-treatment">
            <h4>Treatments</h4>

            <div className="tab">
        
                  <button
                    className={`tablinks ${
                      activeTab === filteredSpecialities && filteredSpecialities.slug ? "active" : ""
                    }`}
                    onMouseOver={() => handleTabChange(filteredSpecialities.slug)}
                    key={filteredSpecialities && filteredSpecialities.id}
                  >
                    {filteredSpecialities && filteredSpecialities.name}
                    <img
                      src={arrowImg}
                      alt="Arrow"
                    />
                  </button>
           
              {/* <button
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
              <button className="tablinks">
                IVF Treatment <img src="images/2023/01/treatments-arrow.png" />
              </button>
              <button className="tablinks">
                Orthopedic
                <img src="images/2023/01/treatments-arrow.png" />
              </button> */}
            </div>

            {/* <div className="tab tab1">
              <button
                className={`tablinks ${activeTab === "wiki-1" ? "active" : ""}`}
                onMouseOver={() => handleTabChange("wiki-1")}
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
                  <Link className="more-img" to="/">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div> */}
           
                <div className="tab tab1">
                  <button
                    className={`tab tab1 ${
                      activeTab === filteredSpecialities && filteredSpecialities.slug ? "active" : ""
                    }`}
                    onMouseOver={() => handleTabChange(filteredSpecialities.slug)}
                  >
                    {filteredSpecialities && filteredSpecialities.name}
                    <img src="images/2023/01/treatments-arrow.png" />
                  </button>
                </div>
       
                <div
                  id={filteredSpecialities && filteredSpecialities.id}
                  className={`tabcontent ${
                    activeTab === filteredSpecialities && filteredSpecialities.slug ? "active" : ""
                  }`}
                  key={filteredSpecialities && filteredSpecialities.slug}
                >
                  <div className="explore-pro">
                    <img className="pd-img3" src="images/2023/01/05/02.jpg" />
                    <div className="explore-box ex-pro">
                      <h3>{filteredSpecialities && filteredSpecialities.name}</h3>
                      <p>
                        {filteredSpecialities && filteredSpecialities.short_description}
                      </p>
                      <Link className="more-img" to="/">
                        {" "}
                        <i className="fa fa-arrow-right"></i>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
        
            {/* 
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
                  <Link className="more-img" to="/">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </Link>
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
                  <Link className="more-img" to="/">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="tab tab1">
              <button className="tablinks">
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
                  <Link className="more-img" to="/">
                    {" "}
                    <i className="fa fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div className="tab tab1">
              <button className="tablinks">
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
                  <Link className="more-img" to="/">
                    <i>
                      <BsArrowRight />
                    </i>
                  </Link>
                </div>
              </div>
            </div> */}

            <Link className="view-all" to="/">
              View All
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExplorHealth;
