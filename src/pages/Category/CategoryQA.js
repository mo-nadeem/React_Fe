import React from 'react'
import { Link } from "react-router-dom";
import iconImg from "../../assests/images/2023/01/icon-m.png";
import iconImg2 from "../../assests/images/2023/01/arrow-c.png";
import img1 from "../../assests/images/2023/01/home-icon1.png";
import img2 from "../../assests/images/2023/01/home-icon2.png";
import img3 from "../../assests/images/2023/01/home-icon2.png";
import formDoctorImg from "../../assests/images/2023/01/home-q.jpg";
import arrowC from "../../assests/images/2023/01/arrow-w.png"

const CategoryQA = ({qa}) => {
  return (  
    <>
     <section id="health-queries">
        <div className="midbox-inner  wiki-mk">
          <div className="queries-head">
            <div className="querieshead-left">
              <h2>Get answers to Health Queries</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip
              </p>
            </div>
            <div className="querieshead-right">
              <Link to="/" className="queries-ask">
                Ask FREE Question{" "}
                <img src={arrowC} alt="arrow-icon" />
              </Link>
            </div>
          </div>

          <div className="healthcare-professionals">
            {qa &&
              qa.map((e) => (
                <div className="professionals" key={e.id}>
                  <div className="professionals-box">
                    <img src={iconImg} alt="" />
                    <div className="question-box">Q. {e.short_description}</div>
                    {/* <div className="question-ans">
                    Q. {e.long_desc}
                    </div> */}
                    <div
                      className="question-ans"
                      dangerouslySetInnerHTML={{ __html: e.long_description }}
                    />
                  </div>
                </div>
              ))}
          </div>

          <div className="question-opinion">
            <h2>Have any questions? </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              con
            </p>
          </div>

          <div className="questions-form">
            <div className="homeform-left">
              <div className="home-form">
                <div className="inputbox">
                  <label>Name</label>
                  <input type="text" placeholder="" name="name" required="" />
                </div>  
              </div>

              <div className="home-form">
                <div className="inputbox1">
                  <label>Age</label>
                  <input type="text" placeholder="" name="name" required="" />
                </div>

                <div className="inputbox1">
                  <label>Gender</label>
                  <input type="text" placeholder="" name="name" required="" />
                </div>
              </div>

              <div className="home-form">
                <div className="homequery">
                  <label>Your Query</label>
                  <textarea
                    className="magbox"
                    type="textarea"
                    name="query"
                    placeholder=""
                    rows="2"
                  ></textarea>
                </div>
              </div>

              <div className="home-form">
                <button type="submit" name="en" className="home-button">
                  {" "}
                  Submit Now <img src={iconImg2} alt="icon" />
                </button>
              </div>
            </div>
            <div className="homeform-right">
              <img src={formDoctorImg} alt="form-img" />

              <div className="home-drbox">
                <h4>We value your Privacy</h4>

                <ul>
                  <li>
                    <img src={img3} alt="icon1" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                  <li>
                    <img src={img2} alt="icon2" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                  <li>
                    <img src={img1} alt="icon3" />
                    <h5>Lorem ipsum dolor sitconsec</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryQA