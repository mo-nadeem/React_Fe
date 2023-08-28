import React, { useState } from "react";
import arrowImg from "../../assests/images/2023/01/arrow-c.png";
import arrow2Img from "../../assests/images/2023/01/arrow-w.png";
import { Link } from "react-router-dom";
import freeImf from "../../assests/images/07/free-consultation.jpg";
import complianceImg from "../../assests/images/compliance helpline.png";
import confidentialityImg from "../../assests/images/confidentiality.png";
import transparentImg from "../../assests/images/transparent policie.png";
const DontPay = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const popupStyle = {
    display: isPopupOpen ? "block" : "none",
  };
  return (
    <>
      <section id="pay-section">
        <div className="midbox-inner  wiki-mk">
          <div className="pay-box">
            <div className="medflick-payleft">
              <h2>Medflick's Promise: No Added Charges</h2>
              <p>
                Rest assured, no additional cost will be incurred from our end
                because your health is priceless.
              </p>
            </div>

            <div className="medflick-payright">
              <a className="consultation" onClick={togglePopup}>
                Request a free consultation <img src={arrow2Img} alt="arrow-icon" />
              </a>
              <Link to="/contact-us" className="contact">
                Contact Us <img src={arrowImg} alt="contact-us" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="popup" data-popup="popup-4" style={popupStyle}>
        <div className="popup-inner4">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="popup-close"
                data-popup-close="popup-4"
                data-dismiss="modal"
                onClick={togglePopup}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="free-consultation-form">
              <div className="consultation-form-left">
                <img src={freeImf} />
                <div className="consultation-privacy-box">
                  <h4>We value your Privacy</h4>
                  <ul>
                    <li>
                      <img src={complianceImg} alt="ivon" />
                      Confidentiality
                    </li>
                    <li>
                      <img src={confidentialityImg} alt="ivon" />
                      Transparent Policies
                    </li>
                    <li>
                      <img src={transparentImg} alt="ivon" />
                      Compliance Helpline
                    </li>
                    {/* <li>
                      <img src="images/2023/01/home-icon3.png" alt="" />
                      Lorem ipsum dolor sitconsec sit amet dolor sitco
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="consultation-form-right">
                <h2> Request Free Consultation</h2>
                <div className="treatment-right">
                  <div className="treatment-form">
                    <div className="inputbox">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="treatment-form">
                    <div className="inputbox">
                      <label>Phone Number</label>
                      <div className="phone-form">
                        <div className="phone-box1">
                          <select
                            aria-label="Sort dropdown"
                            className="phone-dropdown"
                          >
                            <option value="">Choose Code</option>
                            <option value="1">UK (+44)</option>
                            <option value="213">Algeria (+213)</option>
                            <option value="376">Andorra (+376)</option>
                            <option value="244">Angola (+244)</option>
                            <option value="1264">Anguilla (+1264)</option>
                            <option value="1268">
                              Antigua &amp; Barbuda (+1268)
                            </option>
                            <option value="54">Argentina (+54)</option>
                            <option value="374">Armenia (+374)</option>
                            <option value="297">Aruba (+297)</option>
                            <option value="61">Australia (+61)</option>
                            <option value="43">Austria (+43)</option>
                            <option value="994">Azerbaijan (+994)</option>
                            <option value="1242">Bahamas (+1242)</option>
                            <option value="973">Bahrain (+973)</option>
                            <option value="880">Bangladesh (+880)</option>
                            <option value="1246">Barbados (+1246)</option>
                            <option value="375">Belarus (+375)</option>
                            <option value="32">Belgium (+32)</option>
                            <option value="501">Belize (+501)</option>
                            <option value="229">Benin (+229)</option>
                            <option value="1441">Bermuda (+1441)</option>
                            <option value="975">Bhutan (+975)</option>
                            <option value="591">Bolivia (+591)</option>
                            <option value="387">
                              Bosnia Herzegovina (+387)
                            </option>
                            <option value="267">Botswana (+267)</option>
                            <option value="55">Brazil (+55)</option>
                            <option value="673">Brunei (+673)</option>
                            <option value="359">Bulgaria (+359)</option>
                            <option value="226">Burkina Faso (+226)</option>
                            <option value="257">Burundi (+257)</option>
                            <option value="855">Cambodia (+855)</option>
                          </select>
                        </div>

                        <div className="phone-box2">
                          <input
                            type="text"
                            placeholder=""
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="treatment-form">
                    <div className="inputbox">
                      <label>Email Address</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="treatment-form">
                    <div className="inputbox">
                      <label>Your Query</label>
                      <textarea
                        className="querybox"
                        type="textarea"
                        name="query"
                        placeholder=""
                        rows="2"
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" name="en" className="home-button">
                    {" "}
                    Continue{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default DontPay;
