import React from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import img1 from "../../assests/images/02/01/1.jpg";
import { Link } from "react-router-dom";
import arrowTrans from "../../assests/images/2023/01/pack-arrow.png";

const AllSpecialitesList = () => {
  return (
    <>
      <Homelayout>
        <section id="treatments-section">
          <div className="midbox-inner wiki-mk">
            {/* <h2>
              {info.name} treatments in <span>{info.country}</span>
            </h2> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
            </p>

            <ul>
              {/* {speciality &&
                speciality.map((e) => (
                  <li key={e.id}>
                    <img src={img1} alt="" />
                    <Link to={`/treatment/${e.slug}/${e.country}`}>
                      <div className="packages-text">
                        <div className="pack-cost">
                          <div className="pack-name">{e.name} </div>
                          <div className="cost">${e.price}</div>
                        </div>
                        <div className="packages-details">
                          {e.short_description.slice(0, 130)}....
                        </div>

                   
                        <a href="#">
                          <img
                            src={arrowTrans}
                            className="arrow-link"
                            alt="arrow"
                          />
                        </a>
                      </div>
                    </Link>
                  </li>
                ))} */}
              {/* 
              <li>
                <img src={img2} alt="" />
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
                <img src={img3} alt="" />
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
                <img src={img4} alt="" />
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
                <img src={img5} alt="" />
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
                <img src={img6} alt="" />
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
              </li> */}
            </ul>
          </div>
        </section>
      </Homelayout>
    </>
  );
};

export default AllSpecialitesList;
