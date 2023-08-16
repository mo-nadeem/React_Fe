import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
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

const HealthPackage = () => {
  const [activePackage, setActivePackage] = useState("packages1"); // Initial active package category

  const handlePackageClick = (packageId) => {
    setActivePackage(packageId);
  };
  return (
    <>
      <section id="health-packages">
        <div className="midbox-inner  wiki-mk">
          <h2>Treatment Packages</h2>

          <div className="health-tab">
            <button
              className={`packageslinks ${
                activePackage === "packages1" ? "active" : ""
              }`}
              onClick={() => handlePackageClick("packages1")}
              id="defaultOpen"
            >
              {" "}
              Cancer{" "}
            </button>
            <button
              className={`packageslinks ${
                activePackage === "packages2" ? "active" : ""
              }`}
              onClick={() => handlePackageClick("packages2")}
            >
              {" "}
              Heart Surgery
            </button>
            <button
              className={`packageslinks ${
                activePackage === "packages3" ? "active" : ""
              }`}
              onClick={() => handlePackageClick("packages3")}
            >
              {" "}
              IVF Treatment{" "}
            </button>
            <button
              className={`packageslinks ${
                activePackage === "packages4" ? "active" : ""
              }`}
              onClick={() => handlePackageClick("packages4")}
            >
              {" "}
              Neuromodulation{" "}
            </button>
          </div>

          <div
            id="packages1"
            className={`packagesbox ${
              activePackage === "packages1" ? "active" : ""
            }`}
            style={{
              display: activePackage === "packages1" ? "block" : "none",
            }}
          >
            <div className="owl-slider">
              <div id="packages-1" className="owl-carousel">
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                >
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/01/1.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">Breast Cancer </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/01/2.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">Cancer Surgery </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/01/3.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">Radiation Therapy </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/01/2.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">Breast Cancer </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div
            id="packages2"
            className={`packagesbox ${
              activePackage === "packages2" ? "active" : ""
            }`}
            style={{
              display: activePackage === "packages2" ? "block" : "none",
            }}
          >
            <div className="owl-slider">
              <div id="packages-2">
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                >
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/02/1.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name"> Heart Surgery </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/02/2.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name"> Heart Surgery </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/02/3.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name"> Heart Surgery</div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/02/2.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name"> Heart Surgery </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div
            id="packages3"
            className={`packagesbox ${
              activePackage === "packages3" ? "active" : ""
            }`}
            style={{
              display: activePackage === "packages3" ? "block" : "none",
            }}
          >
            <div className="owl-slider">
              <div id="packages-3">
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                >
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/03/1.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">IVF Treatment </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/03/2.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name"> IVF Treatment </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/03/3.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name"> IVF Treatment </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/02/2.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name"> IVF Treatment </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          <div
            id="packages4"
            className={`packagesbox ${
              activePackage === "packages4" ? "active" : ""
            }`}
            style={{
              display: activePackage === "packages4" ? "block" : "none",
            }}
          >
            <div className="owl-slider">
              <div id="packages-4">
                <Carousel
                  responsive={responsive}
                  arrows={false}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                >
                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/04/1.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">Neuromodulation </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/04/2.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">Neuromodulation </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/04/3.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">Neuromodulation </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={{ marginRight: "20px" }}>
                    <div className="packages-item">
                      <img src="images/2023/01/07/04/2.jpg" />
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">Neuromodulation </div>
                          <div className="cost">$4000</div>
                        </div>
                        <div className="packages-details">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                        <Link to="/">
                          <img
                            src="images/2023/01/pack-arrow.png"
                            className="arrow-link"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthPackage;
