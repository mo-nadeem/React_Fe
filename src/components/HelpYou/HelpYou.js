import React, { useState } from "react";
import img1 from "../../assests/images/02/01/1.jpg";
import img2 from "../../assests/images/02/01/2.jpg";
import img3 from "../../assests/images/02/01/3.jpg";
import img4 from "../../assests/images/02/01/4.jpg";
import Brandlogoimg from "../../assests/images/02/logo.png";

const HelpYou = () => {
  const [activeContent, setActiveContent] = useState(1); // Initialize as null

  const handleContentClick = (contentNumber) => {
    setActiveContent(activeContent === contentNumber ? null : contentNumber); // Toggle content visibility
  };

  const contentItems = [
    {
      id: 1,
      title: "Empowering Your Health-Care Choices",
      text: "Your health is priceless, and we understand that making informed decisions can be tough. That's where Medflick comes in – your trusted partner on the journey to good health. We provide reliable healthcare information, connect you with India’s best doctors, top rated hospitals and provide you the best treatment options.",
      image: img1,
    },
    {
      id: 2,
      title: "Finding Answers Together",
      text: "Know you're never alone. Our expert team is here to guide you at every step in making informed health decisions. Whether it's diagnosis, treatment options, or symptoms, latest updates in medical advancements, we're dedicated to providing informed answers. Your inquiries are our priority, offering clarity and comfort for your health concerns.",
      image: img2,
    },
    {
      id: 3,
      title: "Compassionate Support",
      text: "Searching for medical information can bring about anxiety and fear. Your concerns matter: we're here to offer peace through knowledge. More than a portal, we're your healthcare companions, committed to supporting you.",
      image: img3,
    },
    {
      id: 4,
      title: "Medflick Assurity",
      text: "We accompany you throughout your health journey, right from diagnosis to connect you with the best doctors, access to the top rated hospitals and providing complete assistance in your treatments at an optimal cost.",
      image: img4,
    },
  ];
  return (
    <>
      <section id="help-you">
        <div className="midbox-inner  wiki-mk">
          <img src={Brandlogoimg} className="logo-med" alt="Brand Logo" />
          <h2>How can we help you?</h2>

          <div className="we-help-box">
            <div className="we-help-left">
              <div className="button-wrap">
                {contentItems.map((item) => (
                  <div
                    className={`button ${
                      activeContent === item.id ? "active" : ""
                    }`}
                    key={item.id}
                  >
                    <div
                      className="arrow-icon"
                      onClick={() => handleContentClick(item.id)}
                    />
                    <h3 onClick={() => handleContentClick(item.id)}>
                      {item.title}
                    </h3>
                    {activeContent === item.id && ( // Render text and image only when activeContent matches item.id
                      <React.Fragment>
                        <p>{item.text}</p>
                      </React.Fragment>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="we-help-right">
              <div className="content">
                {contentItems.map((item) => (
                  <div
                    className={`content-${item.id} ${
                      activeContent === item.id ? "active" : ""
                    }`}
                    key={item.id}
                  >
                    <img src={item.image} alt={`Content ${item.id}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpYou;
