import React from "react";
import comunityImg from "../../assests/images/02/community.jpg";
import vectorImg from "../../assests/images/02/Vector 85.png";
import { Link } from "react-router-dom";
const Community = () => {
  return (
    <>
      <section id="community-section">
        <div className="midbox-inner  wiki-mk">
          <div className="community-pro">
            <img className="community-img" src={comunityImg} alt="changes" />
            <div className="community-box">
              <h3>Find Your Community. Empower Your Knowledge.</h3>
              <p>
                The world's most trusted personalized health community with more
                than 1,00, 000 members that share their journey, experiences and
                health insights. Join your community and get access to make
                informed health decisions.
              </p>
              <Link className="more-img" to="/question-answer">
                Explore <img src={vectorImg} alt="icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
