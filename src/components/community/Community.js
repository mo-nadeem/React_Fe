import React from 'react'
import comunityImg from "../../assests/images/02/community.jpg";
import vectorImg from "../../assests/images/02/Vector 85.png";
const Community = () => {
  return (
    <>
      <section id="community-section">
          <div className="midbox-inner  wiki-mk">
            <div className="community-pro">
              <img className="community-img" src={comunityImg} alt="changes" />
              <div className="community-box">
                <h3>Join our Community!</h3>
                <p>
                  Lorem ipsum dolor amet, consecte adipiscing elit, sed do
                  eiusmod tempor incididunt ut enim ad minim veniam, quis Lorem
                  ipsum dolor amet, consecte adipiscing elit, sed do eiusmod
                  tempor incididunt ut enim ad minim veniam, quis tempor
                  incididunt
                </p>
                <a className="more-img" href="#">
                  Lorem Ipsum <img src={vectorImg} alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Community