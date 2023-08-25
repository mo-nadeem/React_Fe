import React from "react";
import Homelayout from "../../components/Homelayout/Homelayout";

const QueryForm = () => {
  return (
    <>
      <Homelayout>
        <section id="query-form">
          <div class="midbox-inner  wiki-mk">
            <img
              src="images/2023/02/logo.png"
              class="logo-med"
              alt="Brand Logo"
            />
            <div class="query-form">
              <h1>Query Form</h1>

              <div class="treatment-right">
                <div class="treatment-form">
                  <div class="inputbox">
                    <label>Full Name</label>
                    <input type="text" placeholder="" name="name" required="" />
                  </div>
                </div>

                <div class="treatment-form">
                  <div class="inputbox">
                    <label>Phone Number</label>
                    <div class="phone-form">
                      <div class="phone-box1">
                        <select
                          aria-label="Sort dropdown"
                          class="phone-dropdown"
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
                          <option value="387">Bosnia Herzegovina (+387)</option>
                          <option value="267">Botswana (+267)</option>
                          <option value="55">Brazil (+55)</option>
                          <option value="673">Brunei (+673)</option>
                          <option value="359">Bulgaria (+359)</option>
                          <option value="226">Burkina Faso (+226)</option>
                          <option value="257">Burundi (+257)</option>
                          <option value="855">Cambodia (+855)</option>
                        </select>
                      </div>
                      <div class="phone-box2">
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

                <div class="treatment-form">
                  <div class="inputbox">
                    <label>Email Address</label>
                    <input type="text" placeholder="" name="name" required="" />
                  </div>
                </div>

                <div class="treatment-form">
                  <div class="inputbox">
                    <label>Your Query</label>
                    <textarea
                      class="querybox"
                      type="textarea"
                      name="query"
                      placeholder=""
                      rows="2"
                    ></textarea>
                  </div>
                </div>

                <p>
                  I agree to the <a href="#">Terms of use Privacy policy</a> and
                  receive marketing letters that may be of interest.
                </p>

                <button type="submit" name="en" class="home-button">
                  {" "}
                  Submit Now <img src="images/2023/01/arrow-c.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </Homelayout>
    </>
  );
};

export default QueryForm;
