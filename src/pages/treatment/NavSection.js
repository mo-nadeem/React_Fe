import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrowIcon from "../../assests/images/2023/01/arrow-c.png";
import consultentImg from "../../assests/images/03/free-consultation.jpg";
import bg1 from "../../assests/images/03/bg1.jpg";
import bg2 from "../../assests/images/03/bg2.jpg";
import bg3 from "../../assests/images/03/bg3.jpg";
import bg4 from "../../assests/images/03/bg4.jpg";
import learnMore from "../../assests/images/2023/01/learn-more.png";
import treatmentImg from "../../assests/images/03/treatment-form.jpg";
import icon1 from "../../assests/images/03/02/1.png";
import icon2 from "../../assests/images/03/02/2.png";
import icon3 from "../../assests/images/03/02/3.png";
import icon4 from "../../assests/images/03/02/4.png";
import icon5 from "../../assests/images/03/02/5.png";
import icon6 from "../../assests/images/03/02/6.png";
import icon7 from "../../assests/images/03/02/7.png";
import logo from "../../assests/images/2023/01/logo.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const NavSection = ({ doctor, hospital }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <section id="treatment-mid">
        <div className="midbox-inner  wiki-mk">
          <div className="treatment-findox">
            <div className="treatment-leftbox">
              <ul>
                <li>
                  <a
                    target="_self"
                    onClick={() => scrollToSection("transplant-nav1")}
                    className="active"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("transplant-nav2")}>
                    What is Liver Transplant
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("transplant-nav3")}>
                    Why is it needed?
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav4")}
                    target="_self"
                  >
                    Types of Liver Transplant
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav7")}
                    target="_self"
                  >
                    Complications
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav8")}
                    target="_self"
                  >
                    Post Procedure
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav9")}
                    target="_self"
                  >
                    Life after a Liver Transplant
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav10")}
                    target="_self"
                  >
                    Success rate
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav11")}
                    target="_self"
                  >
                    Analysis and Comparison of Treatment Cost
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav12")}
                    target="_self"
                  >
                    Domestic Cost Comparison
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav13")}
                    target="_self"
                  >
                    International Cost Comparison
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav14")}
                    target="_self"
                  >
                    Cost Influencing Factors
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav15")}
                    target="_self"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav16")}
                    target="_self"
                  >
                    Doctors
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => scrollToSection("transplant-nav17")}
                    target="_self"
                  >
                    Hospitals
                  </a>
                </li>
              </ul>
            </div>

            <div className="treatment-midbox">
              <div className="treatmen-overview" id="transplant-nav1">
                <h2>Overview</h2>
                <p>
                  Ever since the first successful Liver Transplant was performed
                  in 1963, the procedure has served as a beacon of hope for
                  patients suffering from liver failure. Over the years, the
                  procedure has gained immense popularity and at present, around
                  25,000 liver transplant procedures are performed every year,
                  across the globe. It is a major surgery that involves the use
                  of anaesthesia and requires proper pre-operative preparation &
                  post-operative rehabilitation. Liver transplant surgery in
                  India is offered at all the leading Hospitals and Medflick
                  gives you easy access to the best of these.
                </p>
              </div>

              <div className="treatmen-midnav" id="transplant-nav2">
                <h2>What is liver transplant</h2>
                <p>
                  Ever since the first successful Liver Transplant was performed
                  in 1963, the procedure has served as a beacon of hope for
                  patients suffering from liver failure. Over the years, the
                  procedure has gained immense popularity and at present, around
                  25,000 liver transplant procedures are performed every year,
                  across the globe. It is a major surgery that involves the use
                  of anaesthesia and requires proper pre-operative preparation &
                  post-operative rehabilitation. Liver transplant surgery in
                  India is offered at all the leading <strong>Hospitals</strong>{" "}
                  and Medflick gives you easy access to the best of these.
                </p>

                <img src={bg1} />

                <div className="consultation-box">
                  <p>Lorem ipsum dolor sit amet quis</p>
                  <a className="consultation-button" href="#">
                    Book a Free Consultation <img src={learnMore} />
                  </a>
                </div>
              </div>
              <div className="treatmen-midnav" id="transplant-nav3">
                <h2>why is it needed</h2>

                <div className="box-need">
                  <p>
                    Liver Transplant, in India, is generally the last resort of
                    treatment recommended for patients with liver failure, a
                    condition marked by the inability of the liver to perform
                    the vital functions that it is responsible for, such as
                    detoxification of blood, supporting healthy metabolism,
                    building immunity, aiding in digestion and so on.
                  </p>

                  <p>
                    If the liver fails to perform these functions, it can give
                    rise to serious, and even life-threatening complications.
                    Liver failure is the result of an underlying disease or
                    ailments. The most common causes of this include:
                  </p>

                  <p>
                    <strong>Acute liver failure:</strong> Also known as
                    fulminant hepatic failure, it is marked by the rapid
                    deterioration of liver function due to the sudden onset of a
                    disease involving the liver.
                  </p>

                  <p>
                    <strong>Viral hepatitis:</strong> It is the most dangerous
                    form of hepatitis, characterized by inflammation and
                    progressive liver damage.
                  </p>

                  <p>
                    <strong>Alcoholic liver disease:</strong> trigerred by
                    excessive alcohol intake, the condition is characterized by
                    excessive fat build-up in the liver, leading to inflammation
                    and scarring.
                  </p>

                  <p>
                    <strong>Non-alcoholic fatty liver:</strong> It is marked by
                    fat accumulation in the liver due to factors other than
                    drinking alcohol.
                  </p>

                  <p>
                    <strong>Liver Cancer:</strong> It is a progressive disease
                    marked by the gradual replacement of all healthy liver cells
                    and tissues with malignant cells.
                  </p>
                </div>
              </div>

              <div className="treatment-mid-form">
                <img src={treatmentImg} />

                <div className="assistance-form">
                  <h3>Provide your details</h3>
                  <p>Our Health Experts will get back to you shortly</p>

                  <div className="assistance-box">
                    <div className="input-box1">
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="assistance-box">
                    <div className="inputbox">
                      <label>Phone</label>
                      <div className="phone-box">
                        <div className="phone-box3">
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
                        <div className="phone-box4">
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

                  <div className="assistance-box">
                    <div className="input-box1">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="assistance-box">
                    <button type="submit" name="en" className="submit-now">
                      {" "}
                      Submit Now <img src={arrowIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav4">
                <h2>Types of liver transplant</h2>
                <p>
                  Liver transplant is broadly classified into 3 major types.
                  These are:
                </p>

                <p>
                  <strong>Live Donor Transplant:</strong> Our liver has
                  regenerative properties, which makes it possible for healthy
                  people to donate a lobe of their liver. The procedure is
                  commonly referred to as a living donor transplant{" "}
                </p>

                <p>
                  <strong>Deceased donor transplant:</strong> Also known as
                  orthotopic transplant, it involves the use of a healthy liver
                  taken from a deceased patient. A human liver can be preserved
                  for about 8 to 12 hours and the transplant surgery has to be
                  performed within this time frame.
                </p>

                <p>
                  <strong>Spit donation:</strong> This is somewhat similar to an
                  orthotopic transplant as it involves the removal of the
                  complete liver from the body of the deceased donor. In this
                  case, however, the donated liver is split into two parts, each
                  used for treating a separate recipient.
                </p>

                <img src={bg2} />

                <div className="consultation-box1">
                  <a className="free-quote" href="#">
                    Get a free quote <img src={arrowIcon} />
                  </a>

                  <a className="view-hospitals" href="#">
                    View Hospitals
                  </a>

                  <a className="view-doctors" href="#">
                    View Doctors
                  </a>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav5">
                <h2>pre evaluation</h2>
                <p>
                  Although a liver transplant is a very effective procedure, not
                  every patient may qualify for it. In order to undergo the
                  transplant, the patients have to fit into the eligibility
                  criteria which is determined by detailed pre-evaluation.
                  Various modalities used for the evaluation of such patients,{" "}
                  <strong>by liver transplant experts</strong> in India,
                  include:
                </p>

                <div className="consultation-box">
                  <p>Lorem ipsum dolor sit amet quis</p>
                  <a className="consultation-button" href="#">
                    Book a Free Consultation <img src={learnMore} />
                  </a>
                </div>

                <table cellSpacing="0" cellPadding="0">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Initial screening and referral</strong>
                      </td>
                      <td>
                        This involves a few primary tests that may be
                        recommended by a doctor/general physician to analyze the
                        underlying cause of the symptoms that you have been
                        experiencing. If diagnosed with a serious liver ailment
                        that may call for the need for a transplant, you will be
                        referred to a specialist.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          Assessment of medical history and physical
                          examinations
                        </strong>
                      </td>
                      <td>
                        Your medical records will be thoroughly evaluated to
                        analyze the progression of the disease and a general
                        physical examination will be conducted to assess the
                        symptoms.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Blood Analysis</strong>
                      </td>
                      <td>
                        Blood samples collected from the patients are examined
                        to assess liver function by measuring blood toxicity and
                        enzyme levels.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Biopsy</strong>
                      </td>
                      <td>
                        This involves the collection of a small tissue sample
                        from the liver, which is examined under a
                        high-definition microscope to detect serious diseases
                        like liver cancer, as well as to determine the severity
                        of the same.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Imaging tests</strong>
                      </td>
                      <td>
                        This includes advanced interventions like Computerised
                        Tomography (CT) scan, Magnetic Resonance Imaging (MRI)
                        scan, Positron Emission Tomography (PET) scan and
                        ultrasound for detecting any structural abnormalities or
                        visible changes in the liver
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Social and psychological evaluation</strong>
                      </td>
                      <td>
                        Although these are not related to your physical
                        well-being, they are crucial in determining whether you
                        are eligible for undergoing the transplant. This
                        involves the evaluation of mental well-being, financial
                        security and family ties and relationships
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Nutrition counselling</strong>
                      </td>
                      <td>
                        A certified dietician will evaluate your nutritional
                        status and recommend a balanced plan to help you make up
                        for the nutritional deficits that might affect your
                        eligibility to undergo the transplant.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Cardiopulmonary </strong>
                      </td>
                      <td>
                        A liver transplant is a major surgery and it is
                        important to ensure that your heart and lungs are
                        healthy enough to tolerate it. Certain cardiac and
                        pulmonary function tests will be performed to evaluate
                        the same.
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="treatment-bannerimg">
                  <img src={bg3} />
                  <img src={bg4} />
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav6">
                <h2>how is it done</h2>
                <p>
                  Liver transplant procedure involves a series of steps, each of
                  which is very crucial for determining the outcome of the
                  procedure. Experts from the best liver transplant hospital in
                  India suggest that these steps may, however, slightly vary
                  depending on whether the patient is undergoing a living donor
                  transplant or a deceased donor transplant.
                </p>

                <h3>Steps involved in a liver transplant:</h3>

                <h4>Step 1: Scheduling the surgery</h4>

                <p>
                  This is the first and crucial step of a living donor
                  transplant in which the date of the surgery is decided based
                  on the availability of the doctor, recipient and donor. In the
                  case of a deceased donor transplant, the surgery is generally
                  performed on an urgent basis, depending on the availability of
                  the donor. For this, you need to register yourself on the
                  transplant list and you will receive a call as soon as a donor
                  is available.
                </p>

                <h4>Step 2: Pre-surgical evaluation</h4>

                <p>
                  Once you check in on the day of the surgery, you will be
                  required to undergo a few tests for proper evaluation and
                  last-minute assessments.
                </p>

                <img src={bg4} />

                <h4>Step 3: Anesthesia</h4>

                <p>
                  After clearing the pre-evaluation you will be taken to the
                  operation theatre. Your anesthesiologist will administer
                  anaesthesia to induce unconsciousness.
                </p>

                <h4>Step 4: Surgical incision</h4>

                <p>
                  Once you are under the influence of anaesthesia, the surgical
                  site will be prepared and an incision will be made carefully,
                  to access the liver.
                </p>

                <h4>Step 5: Transecting and removing the liver</h4>

                <p>
                  Doctors will carefully detach all the blood vessels and
                  extract the unhealthy liver with some of the surrounding
                  tissues if needed.
                </p>

                <h4>Step 6: Implanting the donor liver</h4>

                <p>
                  The donor liver is carefully positioned in the patient’s
                  abdominal cavity and attached to the blood vessels to restore
                  the flow of blood.
                </p>

                <h4>Step 7 - Closure and bleeding control</h4>

                <p>
                  Once the liver is implanted, the incision is closed, while
                  following stringent measures for bleeding and infection
                  control.
                </p>

                <img src={bg1} />

                <div className="consultation-box1">
                  <a className="free-quote" href="#">
                    Get a free quote <img src={arrowIcon} />
                  </a>
                  <a className="view-hospitals" href="#">
                    View Hospitals
                  </a>
                  <a className="view-doctors" href="#">
                    View Doctors
                  </a>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav7">
                <h2>Complications</h2>
                <p>
                  Like other surgical interventions, liver transplant carries
                  certain risks as well. However, as per the top specialists for
                  liver transplant in India most of these can be alleviated, and
                  even negated, with proper pre-planning. Some of the most
                  common complications that should be taken into consideration
                  include:
                </p>

                <div className="box-need">
                  <ul>
                    <li>
                      Wound infection, which can be managed with adherence to
                      strict infection control protocols{" "}
                    </li>
                    <li>
                      Clotting, which can be taken care of with post-operative
                      physiotherapy{" "}
                    </li>
                    <li>
                      Bile leakage, which can be prevented with precise
                      anastomosis{" "}
                    </li>
                    <li>
                      Bleeding, which can be managed by taking necessary
                      bleeding control measures.{" "}
                    </li>
                    <li>
                      Organ rejection, which can be managed with the use of
                      prescribed anti-rejection medications{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="treatment-mid-form">
                <img src={treatmentImg} />

                <div className="assistance-form">
                  <h3>Provide your details</h3>
                  <p>Our Health Experts will get back to you shortly</p>

                  <div className="assistance-box">
                    <div className="input-box1">
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="assistance-box">
                    <div className="inputbox">
                      <label>Phone</label>
                      <div className="phone-box">
                        <div className="phone-box3">
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
                        <div className="phone-box4">
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

                  <div className="assistance-box">
                    <div className="input-box1">
                      <label>Email</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                  </div>

                  <div className="assistance-box">
                    <button type="submit" name="en" className="submit-now">
                      {" "}
                      Submit Now <img src={arrowIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav8">
                <h2>post procedure</h2>
                <ul>
                  <li>
                    After the completion of the procedure, you will be taken to
                    the observation room, with an assigned nurse to keep track
                    of your vitals.
                  </li>
                  <li>
                    Once you gain consciousness, you will be shifted to the
                    intensive care unit.
                  </li>
                  <li>
                    Medication and nutritional fluids will be given
                    intravenously
                  </li>
                  <li>
                    On average, the patient needs to stay at the hospital for 5
                    - 7 days or even more in some cases{" "}
                  </li>
                  <li>
                    Throughout your stay, doctors will keep on assessing your
                    health by conducting regular physical examinations and
                    assessments.{" "}
                  </li>
                  <li>
                    You will be briefed about physiotherapy, medication and
                    diet.{" "}
                  </li>
                  <li>
                    Patients who are recovering well are shifted to the general
                    ward or room, from where they will be discharged depending
                    on the overall prognosis.
                  </li>
                </ul>

                <div className="consultation-box2">
                  <p>Lorem ipsum dolor sit amet quis</p>
                  <a className="consultation-button1" href="#">
                    Book a Free Consultation <img src={learnMore} />
                  </a>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav9">
                <h2>Life after a Liver Transplant</h2>

                <p>
                  Undergoing a liver transplant will definitely make a positive
                  impact on your health and well-being, however, it is not only
                  the procedure that matters. Post-operative care and follow-ups
                  are equally important. Some of the most important things that
                  you need to prioritise post-liver transplant, include:
                </p>

                <table cellSpacing="0" cellPadding="0">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Follow-ups</strong>
                      </td>
                      <td>
                        Even after undergoing the transplant, you need to stay
                        in constant touch with your doctors by going for regular
                        follow-ups for the first few months following the
                        transplant. This will allow the doctors to track your
                        prognosis better.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Medication</strong>
                      </td>
                      <td>
                        You will be required to take the prescribed medication.
                        This includes anti-rejection medicine, which is crucial
                        for alleviating the risks of organ rejection.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Lifestyle modifications</strong>
                      </td>
                      <td>
                        You will be required to make some changes in your
                        lifestyle and eating habits to ensure minimal risks of
                        complications, There might be some dietary restrictions
                        to be followed for a couple of months.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="treatmen-midnav" id="transplant-nav10">
                <h2>success rate</h2>

                <p>
                  In India, the success rate of liver transplant procedure is
                  significantly high, with the overall survival rate soaring up
                  to <strong>90%</strong> in the first year following the
                  surgery. The survival rate for patients with acute liver
                  failure is around <strong>64 to 88 %</strong>. This can be
                  attributed to the unparalleled medical expertise offered by
                  the doctors, as well as to the use of the latest and most
                  innovative approaches, that add to the safety and efficacy of
                  the procedure. Liver Transplant in India has given hope to
                  countless patients over the years, helping them to lead a long
                  and healthy life.
                </p>

                <div className="consultation-box1">
                  <a className="free-quote" href="#">
                    Get a free quote <img src={arrowIcon} />
                  </a>
                  <a className="view-hospitals" href="#">
                    View Hospitals
                  </a>
                  <a className="view-doctors" href="#">
                    View Doctors
                  </a>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav11">
                <h2>Analysis and Comparison of Treatment Cost</h2>
                <p>
                  ne of the reasons why a lot of people prefer undergoing Liver
                  transplant procedure in India is its affordability. Despite
                  being highly successful and efficient, liver transplant in
                  India is offered at a significantly lower rate as compared to
                  most countries.
                </p>
              </div>

              <div className="treatmen-midnav" id="transplant-nav12">
                <h2>Domestic Cost Comparison</h2>
                <p>
                  Breakdown of the cost of liver transplant in 6 major countries
                </p>

                <div className="cost-boxmid">
                  <div className="cost-list">
                    <div className="name-city">Delhi</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Bangalore</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Mumbai</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Pune</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Chennai</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Hyderabad</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav13">
                <h2>international cost</h2>
                <p>
                  Breakdown of the cost of liver transplant in 6 major countries
                </p>

                <div className="cost-boxmid">
                  <div className="cost-list">
                    <div className="name-city">India</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">South Africa</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Singapore</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">United Kingdom</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">Germany</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>

                  <div className="cost-list">
                    <div className="name-city">USA</div>
                    <div className="cost-city">₹ 18-31.5 lakh</div>
                  </div>
                </div>

                <div className="consultation-box">
                  <p>Lorem ipsum dolor sit amet quis</p>
                  <a className="consultation-button" href="#">
                    Book a Free Consultation <img src={learnMore} />
                  </a>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav14">
                <h2>cost influencing factors</h2>
                <p>
                  There are several factors that influence the cost of liver
                  transplant in a particular country. Some of the most prevalent
                  of these include:
                </p>

                <div className="box-need">
                  <ul>
                    <li>Hospital facilities, infrastructure and services </li>
                    <li>Location of the hospital </li>
                    <li>Age of the patient </li>
                    <li>Expertise of the surgeon </li>
                    <li>Pre-operative evaluation and diagnostic cost </li>
                    <li>Room preference </li>
                    <li>
                      Post-operative hospital stay, which varies depending on
                      the patient’s prognosis{" "}
                    </li>
                    <li>Physiotherapy and rehabilitation </li>
                    <li>Pre and post-operative medication </li>
                  </ul>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav15">
                <h2>Our Services: Your Journey With MedFlick</h2>
                <p>
                  Medflick is your trusted healthcare companion for planning a
                  hassle-free and successful liver transplant in India. With us,
                  you can expect:
                </p>

                <div className="medflick-services">
                  <div className="services-box">
                    <img src={icon1} />
                    Access to world-class hospitals and healthcare facilities
                  </div>

                  <div className="services-box">
                    <img src={icon2} />
                    Personalized assistance to suit your specific needs and
                    requirements
                  </div>

                  <div className="services-box">
                    <img src={icon3} />
                    Expert network of India’s renowned liver transplant experts
                  </div>

                  <div className="services-box">
                    <img src={icon4} />
                    Satisfactory pricing and complete transparency
                  </div>

                  <div className="services-box">
                    <img src={icon5} />
                    Travel and lodging support to ensure a smooth journey
                  </div>

                  <div className="services-box">
                    <img src={icon6} />
                    Multilingual support
                  </div>

                  <div className="services-box">
                    <img src={icon7} />
                    24/7 assistance throughout your stay
                  </div>

                  <div className="services-box services-box1">
                    <img src={logo} alt="Brand Logo" />
                    <a href="#">Contact us</a>
                  </div>
                </div>

                <p>
                  We are committed to simplifying your journey to better health
                  by empowering you with reliable information, unparalleled
                  assistance and access to the best hospitals and doctors in
                  India.
                </p>
              </div>

              <div className="treatmen-midnav" id="transplant-nav16">
                <h2>Doctors</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing
                </p>

                <div className="owl-slider">
                  <div id="doctors-treatment">
                    <Carousel
                      responsive={responsive}
                      arrows={false}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={1500}
                    >
                      {doctor.map((e) => (
                        <div
                          className="item"
                          style={{ marginRight: "20px" }}
                          key={e.id}
                        >
                          <div className="doctors-treatment">
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}/doctor/${e.image}`}
                              alt={e.slug}
                            />
                            <div className="doctors-treat">
                              <h3>
                                {e.prefix} {e.first_name} {e.last_name}
                              </h3>
                              <div className="doctors-sub">{e.designation}</div>
                              <a href="#" className="contact-now">
                                Contact Now{" "}
                                <img src={arrowIcon} alt="arrow-icon" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div className="treatment-view">
                  <a className="viewmore" href="#">
                    View more{" "}
                  </a>
                </div>
              </div>

              <div className="treatmen-midnav" id="transplant-nav17">
                <h2>Hospitals</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing
                </p>

                <div className="owl-slider">
                  <div id="hospitals-treatment">
                    <Carousel
                      responsive={responsive}
                      arrows={false}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={1500}
                    >
                      {hospital.map((e) => (
                        <div
                          className="item"
                          style={{ marginRight: "20px" }}
                          key={e.id}
                        >
                          <div className="hospitals-treatment">
                            <img
                              src={`${process.env.REACT_APP_BASE_URL}/hospital/${e.icon}`}
                              alt={e.slug}
                            />
                            <div className="hospitals-treat">
                              <h3>{e.name}</h3>
                              <div className="hospitals-sub">
                                Lorem ipsum dolor sit amet
                              </div>
                              <a href="#" className="contact-now">
                                Contact Now <img src={arrowIcon} alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div className="treatment-view">
                  <a className="viewmore" href="#">
                    View more{" "}
                  </a>
                </div>
              </div>
            </div>

            <div className="treatment-rightbox">
              <div className="free-consultation">
                <img src={consultentImg} />
                <h3>Book a free Consultation with Highly Qualified Doctors</h3>
                <a href="#">
                  {" "}
                  Contact us <img src={arrowIcon} alt="arrow" />
                </a>
              </div>

              <div className="navbox">
                <img src={icon1} />
                <h4>Hospitals</h4>
                <p>Lorem ipsum dolor sit aliqua sit labore minim venia</p>
              </div>

              <div className="navbox">
                <img src={icon2} />
                <h4>Doctors</h4>
                <p>Lorem ipsum dolor sit aliqua sit labore minim venia</p>
              </div>

              <div className="navbox">
                <img src={icon3} />
                <h4> Q&A </h4>
                <p>Lorem ipsum dolor sit aliqua sit labore minim venia</p>
              </div>

              <div className="symptomsbox">
                <h4>Symptoms</h4>

                <ul>
                  <li>
                    <a href="#" target="_self">
                      Lorem Ipsum
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Lorem Ipsum
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Exceptur{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Exceptur{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Anim
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Lorem Ipsum{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_self">
                      Anim
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavSection;
