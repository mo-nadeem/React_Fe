import React from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DoctorExpert from "../../components/Home/DoctorExpert";
import FAQ from "../../components/Home/FAQ";
import Blog from "../../components/Home/Blog";

const responsiveHospital = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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

const Treatment = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scroll to the top of the element
      });
    }
  };
  return (
    <>
      <Homelayout>
        <section id="treatment-section">
          <div class="midbox-inner wiki-mk">
            <div class="treatment-top">
              <div class="treatment-headtext">
                <h1>Liver Transplant</h1>
                <p>Avg Price: $1000 - $3000</p>
              </div>
              <div class="treatment-subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation dolor sit
              </div>
            </div>
          </div>
        </section>

        <section id="treatment-banner">
          <div class="treatment-bannerimg">
            <img src="images/2023/03/1.jpg" />
            <img src="images/2023/03/2.jpg" />
          </div>
          <div class="midbox-inner  wiki-mk">
            <div class="treatment-headbox">
              <div class="treatment-left">
                <ul>
                  <li>
                    <h2>Chemotherapy</h2> <p>Treatment Type</p>
                  </li>
                  <li>
                    <h2>3-6 Months</h2> <p>Treatment Time</p>
                  </li>
                  <li>
                    <h2>6-8 Weeks</h2> <p>Recovery Time</p>
                  </li>
                  <li>
                    <h2>2-7 Days</h2> <p>Hospitalization Days</p>
                  </li>
                  <li>
                    <h2>84.5 - 95.1%</h2> <p>Success Rate</p>
                  </li>
                </ul>
              </div>
              <div class="treatment-right">
                <h2>Get a free quote</h2>

                <div class="treatment-form">
                  <div class="inputbox">
                    <label>Name</label>
                    <input type="text" placeholder="" name="name" required="" />
                  </div>
                </div>

                <div class="treatment-form">
                  <div class="inputbox">
                    <label>Phone</label>
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
                    <label>Email</label>
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

                <button type="submit" name="en" class="home-button">
                  {" "}
                  Submit Now <img src="images/2023/01/arrow-c.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="health-city">
          <div class="midbox-inner  wiki-mk">
            <h2>
              Lorem Ipsum dolor <span>Pricing</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
            </p>

            <div class="owl-slider">
              <div id="city-list">
                <Carousel
                  responsive={responsiveHospital}
                  arrows={false}
                  autoPlay={true}
                  autoPlaySpeed={2000}
                  infinite={true}
                >
                  <div class="item" style={{ marginRight: "20px" }}>
                    <div class="city-item">
                      <img src="images/2023/03/01/1.jpg" />
                      <div class="city-box">
                        <h3>Delhi</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon1.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon2.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="item" style={{ marginRight: "20px" }}>
                    <div class="city-item">
                      <img src="images/2023/03/01/2.jpg" />
                      <div class="city-box">
                        <h3>Mumbai</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon1.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon2.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="item" style={{ marginRight: "20px" }}>
                    <div class="city-item">
                      <img src="images/2023/03/01/3.jpg" />
                      <div class="city-box">
                        <h3>Chennai</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon1.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon2.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="item" style={{ marginRight: "20px" }}>
                    <div class="city-item">
                      <img src="images/2023/03/01/4.jpg" />
                      <div class="city-box">
                        <h3>Hyderabad</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon1.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon2.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="item" style={{ marginRight: "20px" }}>
                    <div class="city-item">
                      <img src="images/2023/03/01/3.jpg" />
                      <div class="city-box">
                        <h3>Chennai</h3>
                        <ul>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon1.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                          <li>
                            <h4>$1100</h4>
                            <img src="images/2023/03/line-icon2.png" />
                            <h5>Lowest Cost (Approx)</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section class="treatment-marquee" id="category-marquee">
          <div class="marquee-wrapper">
            <div class="marquee" style={{ animationDuration: "21s" }}>
              <div class="Marquee-tag"> 100+ Surgeries </div>
              <div class="Marquee-tag"> 95% Success Rate </div>
              <div class="Marquee-tag"> 4000+ Top Doctors </div>
              <div class="Marquee-tag"> 1000+ Top Hospital </div>
              <div class="Marquee-tag"> 100+ Surgeries </div>
              <div class="Marquee-tag"> 95% Success Rate </div>
              <div class="Marquee-tag"> 4000+ Top Doctors </div>
              <div class="Marquee-tag"> 1000+ Top Hospital </div>
            </div>
          </div>
        </section>

        <section id="treatment-mid">
          <div class="midbox-inner  wiki-mk">
            <div class="treatment-findox">
              <div class="treatment-leftbox">
                <ul>
                  <li>
                    <a
                      target="_self"
                      onClick={() => scrollToSection("transplant-nav1")}
                      class="active"
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
                </ul>
              </div>

              <div class="treatment-midbox">
                <div class="treatmen-overview" id="transplant-nav1">
                  <h2>Overview</h2>
                  <p>
                    Ever since the first successful Liver Transplant was
                    performed in 1963, the procedure has served as a beacon of
                    hope for patients suffering from liver failure. Over the
                    years, the procedure has gained immense popularity and at
                    present, around 25,000 liver transplant procedures are
                    performed every year, across the globe. It is a major
                    surgery that involves the use of anaesthesia and requires
                    proper pre-operative preparation & post-operative
                    rehabilitation. Liver transplant surgery in India is offered
                    at all the leading Hospitals and Medflick gives you easy
                    access to the best of these.
                  </p>
                </div>

                <div class="treatmen-midnav" id="transplant-nav2">
                  <h2>What is liver transplant</h2>
                  <p>
                    Ever since the first successful Liver Transplant was
                    performed in 1963, the procedure has served as a beacon of
                    hope for patients suffering from liver failure. Over the
                    years, the procedure has gained immense popularity and at
                    present, around 25,000 liver transplant procedures are
                    performed every year, across the globe. It is a major
                    surgery that involves the use of anaesthesia and requires
                    proper pre-operative preparation & post-operative
                    rehabilitation. Liver transplant surgery in India is offered
                    at all the leading <strong>Hospitals</strong> and Medflick
                    gives you easy access to the best of these.
                  </p>

                  <img src="images/2023/03/bg1.jpg" />

                  <div class="consultation-box">
                    <p>Lorem ipsum dolor sit amet quis</p>
                    <a class="consultation-button" href="#">
                      Book a Free Consultation{" "}
                      <img src="images/2023/01/learn-more.png" />
                    </a>
                  </div>
                </div>
                <div class="treatmen-midnav" id="transplant-nav3">
                  <h2>why is it needed</h2>

                  <div class="box-need">
                    <p>
                      Liver Transplant, in India, is generally the last resort
                      of treatment recommended for patients with liver failure,
                      a condition marked by the inability of the liver to
                      perform the vital functions that it is responsible for,
                      such as detoxification of blood, supporting healthy
                      metabolism, building immunity, aiding in digestion and so
                      on.
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
                      deterioration of liver function due to the sudden onset of
                      a disease involving the liver.
                    </p>

                    <p>
                      <strong>Viral hepatitis:</strong> It is the most dangerous
                      form of hepatitis, characterized by inflammation and
                      progressive liver damage.
                    </p>

                    <p>
                      <strong>Alcoholic liver disease:</strong> trigerred by
                      excessive alcohol intake, the condition is characterized
                      by excessive fat build-up in the liver, leading to
                      inflammation and scarring.
                    </p>

                    <p>
                      <strong>Non-alcoholic fatty liver:</strong> It is marked
                      by fat accumulation in the liver due to factors other than
                      drinking alcohol.
                    </p>

                    <p>
                      <strong>Liver Cancer:</strong> It is a progressive disease
                      marked by the gradual replacement of all healthy liver
                      cells and tissues with malignant cells.
                    </p>
                  </div>
                </div>

                <div class="treatment-mid-form">
                  <img src="images/2023/03/treatment-form.jpg" />

                  <div class="assistance-form">
                    <h3>Provide your details</h3>
                    <p>Our Health Experts will get back to you shortly</p>

                    <div class="assistance-box">
                      <div class="input-box1">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder=""
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    <div class="assistance-box">
                      <div class="inputbox">
                        <label>Phone</label>
                        <div class="phone-box">
                          <div class="phone-box3">
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
                          <div class="phone-box4">
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

                    <div class="assistance-box">
                      <div class="input-box1">
                        <label>Email</label>
                        <input
                          type="text"
                          placeholder=""
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    <div class="assistance-box">
                      <button type="submit" name="en" class="submit-now">
                        {" "}
                        Submit Now{" "}
                        <img src="images/2023/01/arrow-c.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav4">
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
                    orthotopic transplant, it involves the use of a healthy
                    liver taken from a deceased patient. A human liver can be
                    preserved for about 8 to 12 hours and the transplant surgery
                    has to be performed within this time frame.
                  </p>

                  <p>
                    <strong>Spit donation:</strong> This is somewhat similar to
                    an orthotopic transplant as it involves the removal of the
                    complete liver from the body of the deceased donor. In this
                    case, however, the donated liver is split into two parts,
                    each used for treating a separate recipient.
                  </p>

                  <img src="images/2023/03/bg2.jpg" />

                  <div class="consultation-box1">
                    <a class="free-quote" href="#">
                      Get a free quote <img src="images/2023/01/arrow-c.png" />
                    </a>

                    <a class="view-hospitals" href="#">
                      View Hospitals
                    </a>

                    <a class="view-doctors" href="#">
                      View Doctors
                    </a>
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav5">
                  <h2>pre evaluation</h2>
                  <p>
                    Although a liver transplant is a very effective procedure,
                    not every patient may qualify for it. In order to undergo
                    the transplant, the patients have to fit into the
                    eligibility criteria which is determined by detailed
                    pre-evaluation. Various modalities used for the evaluation
                    of such patients,{" "}
                    <strong>by liver transplant experts</strong> in India,
                    include:
                  </p>

                  <div class="consultation-box">
                    <p>Lorem ipsum dolor sit amet quis</p>
                    <a class="consultation-button" href="#">
                      Book a Free Consultation{" "}
                      <img src="images/2023/01/learn-more.png" />
                    </a>
                  </div>

                  <table cellspacing="0" cellpadding="0">
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
                  </table>

                  <div class="treatment-bannerimg">
                    <img src="images/2023/03/bg3.jpg" />
                    <img src="images/2023/03/bg4.jpg" />
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav6">
                  <h2>how is it done</h2>
                  <p>
                    Liver transplant procedure involves a series of steps, each
                    of which is very crucial for determining the outcome of the
                    procedure. Experts from the best liver transplant hospital
                    in India suggest that these steps may, however, slightly
                    vary depending on whether the patient is undergoing a living
                    donor transplant or a deceased donor transplant.
                  </p>

                  <h3>Steps involved in a liver transplant:</h3>

                  <h4>Step 1: Scheduling the surgery</h4>

                  <p>
                    This is the first and crucial step of a living donor
                    transplant in which the date of the surgery is decided based
                    on the availability of the doctor, recipient and donor. In
                    the case of a deceased donor transplant, the surgery is
                    generally performed on an urgent basis, depending on the
                    availability of the donor. For this, you need to register
                    yourself on the transplant list and you will receive a call
                    as soon as a donor is available.
                  </p>

                  <h4>Step 2: Pre-surgical evaluation</h4>

                  <p>
                    Once you check in on the day of the surgery, you will be
                    required to undergo a few tests for proper evaluation and
                    last-minute assessments.
                  </p>

                  <img src="images/2023/03/bg5.jpg" />

                  <h4>Step 3: Anesthesia</h4>

                  <p>
                    After clearing the pre-evaluation you will be taken to the
                    operation theatre. Your anesthesiologist will administer
                    anaesthesia to induce unconsciousness.
                  </p>

                  <h4>Step 4: Surgical incision</h4>

                  <p>
                    Once you are under the influence of anaesthesia, the
                    surgical site will be prepared and an incision will be made
                    carefully, to access the liver.
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
                    abdominal cavity and attached to the blood vessels to
                    restore the flow of blood.
                  </p>

                  <h4>Step 7 - Closure and bleeding control</h4>

                  <p>
                    Once the liver is implanted, the incision is closed, while
                    following stringent measures for bleeding and infection
                    control.
                  </p>

                  <img src="images/2023/03/bg6.jpg" />

                  <div class="consultation-box1">
                    <a class="free-quote" href="#">
                      Get a free quote <img src="images/2023/01/arrow-c.png" />
                    </a>
                    <a class="view-hospitals" href="#">
                      View Hospitals
                    </a>
                    <a class="view-doctors" href="#">
                      View Doctors
                    </a>
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav7">
                  <h2>Complications</h2>
                  <p>
                    Like other surgical interventions, liver transplant carries
                    certain risks as well. However, as per the top specialists
                    for liver transplant in India most of these can be
                    alleviated, and even negated, with proper pre-planning. Some
                    of the most common complications that should be taken into
                    consideration include:
                  </p>

                  <div class="box-need">
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

                <div class="treatment-mid-form">
                  <img src="images/2023/03/treatment-form.jpg" />

                  <div class="assistance-form">
                    <h3>Provide your details</h3>
                    <p>Our Health Experts will get back to you shortly</p>

                    <div class="assistance-box">
                      <div class="input-box1">
                        <label>Name</label>
                        <input
                          type="text"
                          placeholder=""
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    <div class="assistance-box">
                      <div class="inputbox">
                        <label>Phone</label>
                        <div class="phone-box">
                          <div class="phone-box3">
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
                          <div class="phone-box4">
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

                    <div class="assistance-box">
                      <div class="input-box1">
                        <label>Email</label>
                        <input
                          type="text"
                          placeholder=""
                          name="name"
                          required=""
                        />
                      </div>
                    </div>

                    <div class="assistance-box">
                      <button type="submit" name="en" class="submit-now">
                        {" "}
                        Submit Now{" "}
                        <img src="images/2023/01/arrow-c.png" alt="" />
                      </button>
                    </div>
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav8">
                  <h2>post procedure</h2>
                  <ul>
                    <li>
                      After the completion of the procedure, you will be taken
                      to the observation room, with an assigned nurse to keep
                      track of your vitals.
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
                      On average, the patient needs to stay at the hospital for
                      5 - 7 days or even more in some cases{" "}
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
                      Patients who are recovering well are shifted to the
                      general ward or room, from where they will be discharged
                      depending on the overall prognosis.
                    </li>
                  </ul>

                  <div class="consultation-box2">
                    <p>Lorem ipsum dolor sit amet quis</p>
                    <a class="consultation-button1" href="#">
                      Book a Free Consultation{" "}
                      <img src="images/2023/03/learn-more.png" />
                    </a>
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav9">
                  <h2>Life after a Liver Transplant</h2>

                  <p>
                    Undergoing a liver transplant will definitely make a
                    positive impact on your health and well-being, however, it
                    is not only the procedure that matters. Post-operative care
                    and follow-ups are equally important. Some of the most
                    important things that you need to prioritise post-liver
                    transplant, include:
                  </p>

                  <table cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Follow-ups</strong>
                        </td>
                        <td>
                          Even after undergoing the transplant, you need to stay
                          in constant touch with your doctors by going for
                          regular follow-ups for the first few months following
                          the transplant. This will allow the doctors to track
                          your prognosis better.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Medication</strong>
                        </td>
                        <td>
                          You will be required to take the prescribed
                          medication. This includes anti-rejection medicine,
                          which is crucial for alleviating the risks of organ
                          rejection.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Lifestyle modifications</strong>
                        </td>
                        <td>
                          You will be required to make some changes in your
                          lifestyle and eating habits to ensure minimal risks of
                          complications, There might be some dietary
                          restrictions to be followed for a couple of months.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="treatmen-midnav" id="transplant-nav10">
                  <h2>success rate</h2>

                  <p>
                    In India, the success rate of liver transplant procedure is
                    significantly high, with the overall survival rate soaring
                    up to <strong>90%</strong> in the first year following the
                    surgery. The survival rate for patients with acute liver
                    failure is around <strong>64 to 88 %</strong>. This can be
                    attributed to the unparalleled medical expertise offered by
                    the doctors, as well as to the use of the latest and most
                    innovative approaches, that add to the safety and efficacy
                    of the procedure. Liver Transplant in India has given hope
                    to countless patients over the years, helping them to lead a
                    long and healthy life.
                  </p>

                  <div class="consultation-box1">
                    <a class="free-quote" href="#">
                      Get a free quote <img src="images/2023/01/arrow-c.png" />
                    </a>
                    <a class="view-hospitals" href="#">
                      View Hospitals
                    </a>
                    <a class="view-doctors" href="#">
                      View Doctors
                    </a>
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav11">
                  <h2>Analysis and Comparison of Treatment Cost</h2>
                  <p>
                    ne of the reasons why a lot of people prefer undergoing
                    Liver transplant procedure in India is its affordability.
                    Despite being highly successful and efficient, liver
                    transplant in India is offered at a significantly lower rate
                    as compared to most countries.
                  </p>
                </div>

                <div class="treatmen-midnav" id="transplant-nav12">
                  <h2>Domestic Cost Comparison</h2>
                  <p>
                    Breakdown of the cost of liver transplant in 6 major
                    countries
                  </p>

                  <div class="cost-boxmid">
                    <div class="cost-list">
                      <div class="name-city">Delhi</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">Bangalore</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">Mumbai</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">Pune</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">Chennai</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">Hyderabad</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav13">
                  <h2>international cost</h2>
                  <p>
                    Breakdown of the cost of liver transplant in 6 major
                    countries
                  </p>

                  <div class="cost-boxmid">
                    <div class="cost-list">
                      <div class="name-city">India</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">South Africa</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">Singapore</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">United Kingdom</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">Germany</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>

                    <div class="cost-list">
                      <div class="name-city">USA</div>
                      <div class="cost-city">₹ 18-31.5 lakh</div>
                    </div>
                  </div>

                  <div class="consultation-box">
                    <p>Lorem ipsum dolor sit amet quis</p>
                    <a class="consultation-button" href="#">
                      Book a Free Consultation{" "}
                      <img src="images/2023/01/learn-more.png" />
                    </a>
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav14">
                  <h2>cost influencing factors</h2>
                  <p>
                    There are several factors that influence the cost of liver
                    transplant in a particular country. Some of the most
                    prevalent of these include:
                  </p>

                  <div class="box-need">
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

                <div class="treatmen-midnav" id="transplant-nav15">
                  <h2>Our Services: Your Journey With MedFlick</h2>
                  <p>
                    Medflick is your trusted healthcare companion for planning a
                    hassle-free and successful liver transplant in India. With
                    us, you can expect:
                  </p>

                  <div class="medflick-services">
                    <div class="services-box">
                      <img src="images/2023/03/02/1.png" />
                      Access to world-class hospitals and healthcare facilities
                    </div>

                    <div class="services-box">
                      <img src="images/2023/03/02/2.png" />
                      Personalized assistance to suit your specific needs and
                      requirements
                    </div>

                    <div class="services-box">
                      <img src="images/2023/03/02/3.png" />
                      Expert network of India’s renowned liver transplant
                      experts
                    </div>

                    <div class="services-box">
                      <img src="images/2023/03/02/4.png" />
                      Satisfactory pricing and complete transparency
                    </div>

                    <div class="services-box">
                      <img src="images/2023/03/02/5.png" />
                      Travel and lodging support to ensure a smooth journey
                    </div>

                    <div class="services-box">
                      <img src="images/2023/03/02/6.png" />
                      Multilingual support
                    </div>

                    <div class="services-box">
                      <img src="images/2023/03/02/7.png" />
                      24/7 assistance throughout your stay
                    </div>

                    <div class="services-box services-box1">
                      <img src="images/2023/01/logo.png" alt="Brand Logo" />
                      <a href="#">Contact us</a>
                    </div>
                  </div>

                  <p>
                    We are committed to simplifying your journey to better
                    health by empowering you with reliable information,
                    unparalleled assistance and access to the best hospitals and
                    doctors in India.
                  </p>
                </div>

                <div class="treatmen-midnav" id="transplant-nav15">
                  <h2>Doctors</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur adipiscing
                  </p>

                  <div class="owl-slider">
                    <div id="doctors-treatment" class="owl-carousel">
                      <div class="item">
                        <div class="doctors-treatment">
                          <img src="images/2023/01/06/1.jpg" />
                          <div class="doctors-treat">
                            <h3>Doctor Name </h3>
                            <div class="doctors-sub">
                              Lorem ipsum dolor sit amet
                            </div>
                            <a href="#" class="contact-now">
                              Contact Now{" "}
                              <img src="images/2023/01/arrow-c.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="item">
                        <div class="doctors-treatment">
                          <img src="images/2023/01/06/2.jpg" />
                          <div class="doctors-treat">
                            <h3>Doctor Name </h3>
                            <div class="doctors-sub">
                              Lorem ipsum dolor sit amet
                            </div>
                            <a href="#" class="contact-now">
                              Contact Now{" "}
                              <img src="images/2023/01/arrow-c.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="item">
                        <div class="doctors-treatment">
                          <img src="images/2023/01/06/3.jpg" />
                          <div class="doctors-treat">
                            <h3>Doctor Name </h3>
                            <div class="doctors-sub">
                              Lorem ipsum dolor sit amet
                            </div>
                            <a href="#" class="contact-now">
                              Contact Now{" "}
                              <img src="images/2023/01/arrow-c.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="item">
                        <div class="doctors-treatment">
                          <img src="images/2023/01/06/2.jpg" />
                          <div class="doctors-treat">
                            <h3>Doctor Name </h3>
                            <div class="doctors-sub">
                              Lorem ipsum dolor sit amet
                            </div>
                            <a href="#" class="contact-now">
                              Contact Now{" "}
                              <img src="images/2023/01/arrow-c.png" alt="" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="treatment-view">
                    <a class="viewmore" href="#">
                      View more{" "}
                    </a>
                  </div>
                </div>

                <div class="treatmen-midnav" id="transplant-nav16">
                  <h2>Hospitals</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                    amet, consectetur adipiscing
                  </p>

                  <div class="owl-slider">
                    <div id="hospitals-treatment">
                      <Carousel responsive={responsive} arrows={false} >
                        <div class="item" style={{marginRight:"20px"}}>
                          <div class="hospitals-treatment">
                            <img src="images/2023/02/03/1.jpg" />
                            <div class="hospitals-treat">
                              <h3>Hospitals Name </h3>
                              <div class="hospitals-sub">
                                Lorem ipsum dolor sit amet
                              </div>
                              <a href="#" class="contact-now">
                                Contact Now{" "}
                                <img src="images/2023/01/arrow-c.png" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="item" style={{marginRight:"20px"}}>
                          <div class="hospitals-treatment">
                            <img src="images/2023/02/03/2.jpg" />
                            <div class="hospitals-treat">
                              <h3>Hospitals Name </h3>
                              <div class="hospitals-sub">
                                Lorem ipsum dolor sit amet
                              </div>
                              <a href="#" class="contact-now">
                                Contact Now{" "}
                                <img src="images/2023/01/arrow-c.png" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="item" style={{marginRight:"20px"}}>
                          <div class="hospitals-treatment">
                            <img src="images/2023/02/03/3.jpg" />
                            <div class="hospitals-treat">
                              <h3>Hospitals Name </h3>
                              <div class="hospitals-sub">
                                Lorem ipsum dolor sit amet
                              </div>
                              <a href="#" class="contact-now">
                                Contact Now{" "}
                                <img src="images/2023/01/arrow-c.png" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="item" style={{marginRight:"20px"}}>
                          <div class="hospitals-treatment">
                            <img src="images/2023/02/03/2.jpg" />
                            <div class="hospitals-treat">
                              <h3>Hospitals Name </h3>
                              <div class="hospitals-sub">
                                Lorem ipsum dolor sit amet
                              </div>
                              <a href="#" class="contact-now">
                                Contact Now{" "}
                                <img src="images/2023/01/arrow-c.png" alt="" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </Carousel>
                    </div>
                  </div>

                  <div class="treatment-view">
                    <a class="viewmore" href="#">
                      View more{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div class="treatment-rightbox">
                <div class="free-consultation">
                  <img src="images/2023/03/free-consultation.jpg" />
                  <h3>
                    Book a free Consultation with Highly Qualified Doctors
                  </h3>
                  <a href="#">
                    {" "}
                    Contact us <img src="images/2023/01/arrow-c.png" alt="" />
                  </a>
                </div>

                <div class="navbox">
                  <img src="images/2023/03/icon1.png" />
                  <h4>Hospitals</h4>
                  <p>Lorem ipsum dolor sit aliqua sit labore minim venia</p>
                </div>

                <div class="navbox">
                  <img src="images/2023/03/icon2.png" />
                  <h4>Doctors</h4>
                  <p>Lorem ipsum dolor sit aliqua sit labore minim venia</p>
                </div>

                <div class="navbox">
                  <img src="images/2023/03/icon3.png" />
                  <h4> Q&A </h4>
                  <p>Lorem ipsum dolor sit aliqua sit labore minim venia</p>
                </div>

                <div class="symptomsbox">
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

          <div></div>
        </section>

        <section id="pay-section">
          <div class="midbox-inner  wiki-mk">
            <div class="pay-box">
              <div class="medflick-payleft">
                <h2>You don’t pay Medflick</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim minim
                </p>
              </div>
              <div class="medflick-payright">
                <a href="#" class="consultation">
                  {" "}
                  Request a free consultation{" "}
                  <img src="images/2023/01/arrow-w.png" alt="" />
                </a>
                <a href="#" class="contact">
                  {" "}
                  Contact Us <img src="images/2023/01/arrow-c.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="day-section">
          <div class="midbox-inner  wiki-mk">
            <div class="day-section">
              <div class="day-left">
                <h2>Daywise lorem ipsum dolor sit amet</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commo
                </p>
                <a href="#">
                  {" "}
                  Ask FREE Question{" "}
                  <img src="images/2023/01/arrow-c.png" alt="" />
                </a>
              </div>

              <div class="day-right">
                <div class="question active">
                  <span>Day 1 </span>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <div class="arrow"></div>
                  <div class="answer" style={{ display: "block" }}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore Ut enim ad minim
                      veniam, quis nostru exercitation ullamco laboris nisi ut
                      aliquip{" "}
                    </p>
                    <img src="images/2023/03/day.jpg" alt="" />
                  </div>
                </div>

                <div class="question">
                  <span>Day 2 </span>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <div class="arrow"></div>
                  <div class="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore Ut enim ad minim
                      veniam, quis nostru exercitation ullamco laboris nisi ut
                      aliquip{" "}
                    </p>
                    <img src="images/2023/03/day.jpg" alt="" />
                  </div>
                </div>

                <div class="question">
                  <span>Day 3 </span>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <div class="arrow"></div>
                  <div class="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore Ut enim ad minim
                      veniam, quis nostru exercitation ullamco laboris nisi ut
                      aliquip{" "}
                    </p>
                    <img src="images/2023/03/day.jpg" alt="" />
                  </div>
                </div>

                <div class="question">
                  <span>Day 4 </span>
                  <h5>Lorem ipsum dolor sit amet</h5>
                  <div class="arrow"></div>
                  <div class="answer">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed eiusmod tempor incididunt ut labore Ut enim ad minim
                      veniam, quis nostru exercitation ullamco laboris nisi ut
                      aliquip{" "}
                    </p>
                    <img src="images/2023/03/day.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* doctor expert */}
        <DoctorExpert />

        {/* end */}

        <section id="help-you">
          <div class="midbox-inner  wiki-mk">
            <img
              src="images/2023/02/logo.png"
              class="logo-med"
              alt="Brand Logo"
            />
            <h2>How can we help you?</h2>

            <div class="we-help-box">
              <div class="we-help-left">
                <div Class="button-wrap">
                  <div class="button">
                    <div class="arrow-icon"></div>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo con duis aute irure orem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore Ut enim
                    </p>
                  </div>
                  <div class="button">
                    <div class="arrow-icon"></div>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo con duis aute irure orem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore Ut enim
                    </p>
                  </div>
                  <div class="button">
                    <div class="arrow-icon"></div>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo con duis aute irure orem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore Ut enim
                    </p>
                  </div>
                  <div class="button">
                    <div class="arrow-icon"></div>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo con duis aute irure orem
                      ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore Ut enim
                    </p>
                  </div>
                </div>
              </div>

              <div class="we-help-right">
                <div class="content">
                  <div class="content-1 active">
                    <img src="images/2023/02/02/1.jpg" />
                  </div>
                  <div class="content-2">
                    <img src="images/2023/02/02/2.jpg" />
                  </div>
                  <div class="content-3">
                    <img src="images/2023/02/02/3.jpg" />
                  </div>
                  <div class="content-4">
                    <img src="images/2023/02/02/4.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="health-queries">
          <div class="midbox-inner  wiki-mk">
            <div class="queries-head">
              <div class="querieshead-left">
                <h2>Get answers to Health Queries</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip
                </p>
              </div>
              <div class="querieshead-right">
                <a href="#" class="queries-ask">
                  Ask FREE Question{" "}
                  <img src="images/2023/01/arrow-w.png" alt="" />
                </a>
              </div>
            </div>

            <div class="healthcare-professionals">
              <div class="professionals">
                <div class="professionals-box">
                  <img src="images/2023/01/icon-m.png" alt="" />
                  <div class="question-box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in?{" "}
                  </div>
                  <div class="question-ans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in, auctor
                    ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec sed purus consectetur, interdum felis in, auctor
                    ligula.{" "}
                  </div>
                </div>
              </div>

              <div class="professionals">
                <div class="professionals-box">
                  <img src="images/2023/01/icon-m.png" alt="" />
                  <div class="question-box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in?{" "}
                  </div>
                  <div class="question-ans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in, auctor
                    ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec sed purus consectetur, interdum felis in, auctor
                    ligula.{" "}
                  </div>
                </div>
              </div>

              <div class="professionals">
                <div class="professionals-box">
                  <img src="images/2023/01/icon-m.png" alt="" />
                  <div class="question-box">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in?{" "}
                  </div>
                  <div class="question-ans">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sed purus consectetur, interdum felis in, auctor
                    ligula. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec sed purus consectetur, interdum felis in, auctor
                    ligula.{" "}
                  </div>
                </div>
              </div>

              <div class="professionals treatmen-query">
                <div class="homeform-left">
                  <div class="home-form">
                    <div class="homequery">
                      <label>Your Query</label>
                      <textarea
                        class="magbox"
                        type="textarea"
                        name="query"
                        placeholder=""
                        rows="2"
                      ></textarea>
                    </div>
                  </div>

                  <div class="home-form">
                    <div class="inputbox1">
                      <label>Age</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                    <div class="inputbox1">
                      <label>Gender</label>
                      <input
                        type="text"
                        placeholder=""
                        name="name"
                        required=""
                      />
                    </div>
                  </div>

                  <div class="home-form">
                    <button type="submit" name="en" class="home-button">
                      {" "}
                      Submit Now <img src="images/2023/01/arrow-c.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="community-section">
          <div class="midbox-inner  wiki-mk">
            <div class="community-pro">
              <img class="community-img" src="images/2023/02/community.jpg" />
              <div class="community-box">
                <h3>Join our Community!</h3>
                <p>
                  Lorem ipsum dolor amet, consecte adipiscing elit, sed do
                  eiusmod tempor incididunt ut enim ad minim veniam, quis Lorem
                  ipsum dolor amet, consecte adipiscing elit, sed do eiusmod
                  tempor incididunt ut enim ad minim veniam, quis tempor
                  incididunt
                </p>
                <a class="more-img" href="#">
                  Lorem Ipsum <img src="images/2023/02/Vector 85.png" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <FAQ />

        {/* end */}

        {/* Blog */}

        <Blog />

        {/* end */}
      </Homelayout>
    </>
  );
};

export default Treatment;
