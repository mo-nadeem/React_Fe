import React from "react";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <>
      <section id="homemid-section">
        <div className="midbox-inner wiki-mk">
          <h2>
            {/* Lorem Ipsum dolor sit velit dolor <span>consect</span> */}
            With you, when you need us the most!
          </h2>
          <p>
            Providing you with every ounce of authentic health information when
            you need it the most.
          </p>
        </div>
      </section>
      <section id="healthcare-section">
        <div className="midbox-inner  wiki-mk">
          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Answers</h2>
              <p>
                Empower your health journey with expert guidance! Engage with
                best doctors, ask questions and get all your queries sorted to
                make an informed decision
              </p>
              <Link className="learn-more" to="/">
                Learn More <img src="images/2023/01/learn-more.png" />
              </Link>
            </div>
            <div className="healthcare-img">
              <img src="images/2023/01/02/frame-1.jpg" />
            </div>
          </div>

          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Affordable</h2>
              <p>
                Get high-quality healthcare facilities without worrying about
                the cost. Connect with best doctors and top hospitals in India
                for a treatment plan that fit your health needs and budget.
              </p>
              <Link className="learn-more" to="/">
                Learn More <img src="images/2023/01/learn-more.png" />
              </Link>
            </div>
            <div className="healthcare-img">
              <img
                className="health-img4"
                src="images/2023/01/02/frame-2.jpg"
              />
            </div>
          </div>

          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Treatment</h2>
              <p>
                Connect with the best doctors, hospitals in India for a
                comprehensive and personalized treatment plan to ensure the best
                recovery for you and your loved ones.
              </p>
              <Link className="learn-more" to="/">
                Learn More <img src="images/2023/01/learn-more.png" />
              </Link>
            </div>
            <div className="healthcare-img">
              <img src="images/2023/01/02/frame-3.jpg" />
              <div className="animation-element slide-up1 in-view">
                <img
                  className="treatment-img"
                  src="images/2023/01/02/frame-3-1.png"
                />
              </div>
            </div>
          </div>

          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Contact</h2>
              <p>
                Count on us for expert health guidance. You are just a step away
                from starting your journey to better health. Get in touch to
                find expert care at affordable prices.
              </p>
              <Link className="learn-more" to="/">
                Learn More <img src="images/2023/01/learn-more.png" />
              </Link>
            </div>
            <div className="healthcare-img">
              <img
                className="health-img4"
                src="images/2023/01/02/frame-4.jpg"
              />
            </div>
          </div>

          <div className="healthcare-box">
            <div className="healthcare-text">
              <h2>Community</h2>
              <p>
                Medflick is your Health Hub where you can get answers to all
                your health-related queries in one place. Just one step away
                from finding the solutions you need! Know about shared
                experiences, join the community, ask questions, get answers and
                make your informed health decisions.
              </p>
              <Link className="learn-more" to="/">
                Learn More <img src="images/2023/01/learn-more.png" />
              </Link>
            </div>
            <div className="healthcare-img">
              <img src="images/2023/01/02/frame-5.jpg" />
              <div className="animation-element slide-up1 in-view">
                <img className="dr-img" src="images/2023/01/02/frame-5-1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
