import React from "react";

const WorldMap = () => {
  return (
    <>
      <section id="home-contact">
        <div className="midbox-inner  wiki-mk">
          <h2>Stay Informed, Stay Healthy</h2>
          <p>
            Subscribe to our Newsletter and make your informed health decisions.
            Get essential health insights and updates delivered straight to your
            inbox. Join now for a healthier you
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
            Trusted by happy clients in <span>10+ Countries</span>
          </h2>
        </div>
      </section>
    </>
  );
};

export default WorldMap;
