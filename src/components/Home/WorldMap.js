import React from "react";
import { Link } from "react-router-dom";

const WorldMap = () => {
  return (
    <>
      <section id="home-contact">
        <div className="midbox-inner  wiki-mk">
          <h2>Visa & Travel Support</h2>
          <p>
            We assist in planning your trip to India for medical treatment,
            ensuring that you are comfortable throughout your care with us. We
            handle your visa, itinerary, and ensure your well-being every step
            of the way.
          </p>
          <Link to="/contact-us">
    
            Contact us <img src="images/2023/01/arrow-w.png" alt="" />
          </Link>
        </div>
      </section>

      <section id="world-map">
        <div className="midbox-inner  wiki-mk">
        <h2>
            Trusted by Happy Patients from <span>10+ Countries</span>
          </h2>
          <img src="images/2023/01/world-map.gif" alt="" />
        
        </div>
      </section>
    </>
  );
};

export default WorldMap;
