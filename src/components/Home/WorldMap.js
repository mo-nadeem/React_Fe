import React from "react";

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
          <a href="#">
            {" "}
            Contact us <img src="images/2023/01/arrow-w.png" alt="" />
          </a>
        </div>
      </section>

      <section id="world-map">
        <div className="midbox-inner  wiki-mk">
          <img src="images/2023/01/world-map.gif" alt="" />
          <h2>
            Mark countries more than <span>10</span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default WorldMap;
