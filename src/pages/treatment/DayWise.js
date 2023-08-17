import React, { useState } from "react";
import img1 from "../../assests/images/02/02/1.jpg";
import arrowIcon from "../../assests/images/2023/01/arrow-c.png"
import { Link } from "react-router-dom";

const DayWise = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);

  const handleQuestionClick = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };
  const contentItems = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet 1",
      text: "Content for button 1",
      image: img1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet 2",
      text: "Content for button 2",
      image: img1,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet 3",
      text: "Content for button 3",
      image: img1,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet 4",
      text: "Content for button 4",
      image: img1,
    },
  ];
  return (
    <>
      <section id="day-section">
        <div className="midbox-inner  wiki-mk">
          <div className="day-section">
            <div className="day-left">
              <h2>Daywise lorem ipsum dolor sit amet</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commo
              </p>
              <Link to="/">
                {" "}
                Ask FREE Question{" "}
                <img src={arrowIcon} alt="" />
              </Link>
            </div>

            <div className="day-right">
              {contentItems.map((e, index) => (
                <div
                  key={e.id}
                  className={`question ${
                    activeQuestion === index ? "active" : ""
                  }`}
                  onClick={() => handleQuestionClick(index)}
                >
                  <span>Day 1 </span>
                  <h5>{e.title}</h5>
                  <div
                    className={`arrow ${
                      activeQuestion === index ? "arrow-active" : ""
                    }`}
                  ></div>
                  {activeQuestion === index && (
                    <div className="answer" style={{ display: "block" }}>
                      <p>{e.text}</p>
                      <img src={e.image} alt="" />
                    </div>
                  )} 
                  {/* <div
                      className={`question ${
                        activeContent === e.id ? "active" : ""
                      }`}
                      style={{ display: "block" }}
                    >
                      
                    </div> */}
                </div>
              ))}

              {/* <div className="question">
                  <span>Day 2 </span>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <div className="arrow"></div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore Ut enim ad minim
                      veniam, quis nostru exercitation ullamco laboris nisi ut
                      aliquip{" "}
                    </p>
                    <img src="images/2023/03/day.jpg" alt="" />
                  </div>
                </div>

                <div className="question">
                  <span>Day 3 </span>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <div className="arrow"></div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore Ut enim ad minim
                      veniam, quis nostru exercitation ullamco laboris nisi ut
                      aliquip{" "}
                    </p>
                    <img src="images/2023/03/day.jpg" alt="" />
                  </div>
                </div>

                <div className="question">
                  <span>Day 4 </span>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <div className="arrow"></div>
                  <div className="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore Ut enim ad minim
                      veniam, quis nostru exercitation ullamco laboris nisi ut
                      aliquip{" "}
                    </p>
                    <img src="images/2023/03/day.jpg" alt="" />
                  </div>
                </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DayWise;
