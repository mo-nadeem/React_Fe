import React, { useState } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import ReCAPTCHA from "react-google-recaptcha";
import arrowCIcon from "../../assests/images/2023/01/arrow-c.png";

const QueryForm = () => {
  // form query post api
  const [name, setName] = useState("");
  const [pcode, setPcode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const clearFormFields = () => {
    setName("");
    setPhone("");
    setEmail("");
    setQuery("");
  };

  const Formstyles = {
    errorInput: {
      border: "2px solid red",
    },
    errorMessage: {
      color: "red",
      fontSize: "0.85rem",
      marginTop: "0.25rem",
    },
    loadingMessage: {
      fontSize: "1.2rem",
      color: "#333",
      marginTop: "1rem",
    },
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    setNameError("");
    setPhoneError("");
    setEmailError("");

    // Validation logic
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }
    if (!captchaValue) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const phoneRegex = /^\d{10,}$/; // Matches 10 or more digits
    if (!phone || !phone.match(phoneRegex)) {
      setPhoneError("Phone must have at least 10 digits");
      isValid = false;
    }

    if (isValid) {
      // Create the data object to be sent in the API request
      const data = {
        name: name,
        phone_code: pcode,
        phone: phone,
        email: email,
        messages: query,
      };

      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const apiEndpoint = `${process.env.REACT_APP_BASE_URL}/api/free_consultants`;

      setIsLoading(true);

      // Make the API call
      axios
        .post(apiEndpoint, data)
        .then((response) => {
          // Handle the API response here if needed
          console.log(response);
          alert("questions is susscefull submitted");
          clearFormFields();
        })
        .catch((error) => {
          // Handle any errors that occurred during the API call
          console.error("Error:", error);
        })
        .finally(() => {
          // Set loading back to false after the API call is complete
          setIsLoading(false);
        });
    }
  };
  return (
    <>
      <Homelayout>
        <section id="query-form">
          <div className="midbox-inner  wiki-mk">
            <img
              src="images/2023/02/logo.png"
              className="logo-med"
              alt="Brand Logo"
            />
            <div className="query-form">
              <h1>Query Form</h1>

              <div className="treatment-right">
                <form onSubmit={handleFormSubmit}>
                  <div
                    className="treatment-form"
                    style={nameError ? Formstyles.errorInput : {}}
                  >
                    <div className="inputbox">
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        style={nameError ? Formstyles.errorInput : {}}
                      />
                      {nameError && (
                        <span style={Formstyles.errorMessage}>{nameError}</span>
                      )}
                    </div>
                  </div>

                  <div className="treatment-form">
                    <div className="inputbox">
                      <label>Phone</label>
                      <div className="phone-form">
                        <div className="phone-box1">
                          <select
                            aria-label="Sort dropdown"
                            className="phone-dropdown"
                            value={pcode}
                            onChange={(e) => setPcode(e.target.value)}
                          >
                            <option value="">Choose Code</option>
                            <option value="+91">India (+91)</option>
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
                            type="tel"
                            placeholder=""
                            name="name"
                            value={phone}
                            onChange={(e) => {
                              const phoneNumber = e.target.value.replace(
                                /\D/g,
                                ""
                              ); // Remove non-numeric characters
                              setPhone(phoneNumber);
                            }}
                            style={phoneError ? Formstyles.errorInput : {}}
                            autoComplete="off"
                          />
                          {/* {phoneError && (
                              <span style={Formstyles.errorMessage}>
                                {phoneError}
                              </span>
                            )} */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="treatment-form">
                    <div className="inputbox">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder=""
                        name="name"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
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
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoComplete="off"
                      ></textarea>
                    </div>
                  </div>
                  <ReCAPTCHA
                    sitekey="6LcX6-YnAAAAAAjHasYD8EWemgKlDUxZ4ceSo8Eo" // Replace with your reCAPTCHA site key
                    onChange={handleCaptchaChange}
                  />
                  <p>
                    I agree to the <a href="#">Terms of use Privacy policy</a>{" "}
                    and receive marketing letters that may be of interest.
                  </p>
                  <button
                    type="submit"
                    name="en"
                    className="home-button"
                    disabled={isLoading}
                  >
                    {" "}
                    {isLoading ? (
                      <ThreeDots
                        height="27"
                        width="80"
                        radius="9"
                        color="#ffffff"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      />
                    ) : (
                      "Submit Now"
                    )}
                    <img src={arrowCIcon} alt="arrow-Icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Homelayout>
    </>
  );
};

export default QueryForm;
