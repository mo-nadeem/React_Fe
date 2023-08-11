import React from "react";

const WorldMap = () => {
  return (
    <>
      <section id="home-contact">
        <div className="midbox-inner  wiki-mk">
          <h2>Sorry, does all this scare you?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo
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
