import React from "react";
import arrowImg from "../../assests/images/2023/01/arrow-c.png";
import arrow2Img from "../../assests/images/2023/01/arrow-w.png";
import { Link } from "react-router-dom";
const DontPay = () => {
  return (
    <>
      <section id="pay-section">
        <div className="midbox-inner  wiki-mk">
          <div className="pay-box">
            <div className="medflick-payleft">
              <h2>Medflick's Promise: No Added Charges</h2>
              <p>
              Rest assured, no additional cost will be incurred from our end because your health is priceless.
              </p>
            </div>

            <div className="medflick-payright">
              <Link to="/free-consultation" className="consultation">
                {" "}
                Request a free consultation <img src={arrow2Img} alt="" />
              </Link>
              <a href="#" className="contact">
                {" "}
                Contact Us <img src={arrowImg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DontPay;
