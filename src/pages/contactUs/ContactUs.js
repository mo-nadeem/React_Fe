import React from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Homelayout>
        <section id="contact-head">
          <div class="midbox-inner  wiki-mk">
            <div class="contact-box">
              <h1>Need Assistance?</h1>
              <p>
                Our dedicated experts are ready to assist, eager to address any
                inquiries you might have
              </p>

              <Link to="/free-consultation" class="learn">
                Call me Back <img src="images/2023/01/arrow-w.png" alt="" />
              </Link>
            </div>
          </div>
        </section>

        <section class="support-medflick">
          <div class="midbox-inner  wiki-mk">
            <div class="support-box">
              <div class="support-itembox active">
                <h2>Chat with Sales</h2>
                <p>Speak to our friendly team</p>

                <a href="#" class="sales-box">
                  sales@medflick.com{" "}
                  <img src="images/2023/01/arrow-c.png" alt="" />
                </a>
              </div>

              <div class="support-itembox">
                <h2>Chat with Support</h2>
                <p>We’re here to help</p>

                <a href="#" class="support-button">
                  sales@medflick.com{" "}
                  <img src="images/2023/01/arrow-w.png" alt="" />
                </a>
              </div>

              <div class="support-itembox">
                <h2>Visit Us</h2>
                <p>View our office HQ</p>

                <a href="#" class="support-button">
                  View on Google Maps{" "}
                  <img src="images/2023/01/arrow-w.png" alt="" />
                </a>
              </div>

              <div class="support-itembox">
                <h2>Call Us</h2>
                <p>Mon-Fri: 10 AM - 7 PM</p>

                <a href="#" class="support-button">
                  (+91) 000-000-0000{" "}
                  <img src="images/2023/01/arrow-w.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Homelayout>
    </>
  );
};

export default ContactUs;
