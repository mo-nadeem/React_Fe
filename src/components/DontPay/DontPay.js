import React from "react";
import arrowImg from "../../assests/images/2023/01/arrow-c.png";
import arrow2Img from "../../assests/images/2023/01/arrow-w.png";
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
              <a href="#" className="consultation">
                {" "}
                Request a free consultation <img src={arrow2Img} alt="" />
              </a>
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
