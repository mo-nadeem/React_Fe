import React, { useState, useEffect } from "react";
import Homelayout from "../../components/Homelayout/Homelayout";
import img1 from "../../assests/images/02/01/1.jpg";
import { Link } from "react-router-dom";
import arrowTrans from "../../assests/images/2023/01/pack-arrow.png";
import axios from "axios";

const AllSpecialitesList = () => {
  const [speciality, setSpeciality] = useState([]);
  const [treatment, setTreament] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/speciality/list`) // Replace with your API endpoint
      .then((response) => {
        setSpeciality(response.data.specialityList.speciality_list);
        setTreament(response.data.treatemen_list);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  //   console.log(speciality);
  return (
    <>
      <Homelayout>
        <section id="medical-treatments">
          <div class="midbox-inner  wiki-mk">
            <h1>Medical Treatments</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation dolor sit
            </p>

            <div class="medical-treatments">
              {speciality.map((e) => {
                const galleryImages = treatment.filter(
                  (gallery) => gallery.speciality_id === String(e.id)
                );
                return (
                  <div class="medical-treatments-box" key={e.id}>
                    <Link to={`/speciality/${e.slug}/${e.country}`}>
                      <h2>{e.name}</h2>
                    </Link>
                    <ul>
                      {galleryImages &&
                        galleryImages.map((p) => (
                          <Link
                            to={`/treatment/${p.slug}/${p.country}`}
                            key={p.id}
                          >
                            <li>{p.name}</li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                );
              })}

              {/* <div class="medical-treatments-box">
                <h2>Neuro Surgery</h2>
                <ul>
                  <li> Brain Tumor </li>
                  <li> Dystonia Parkinsons </li>
                  <li> Interstim Therapy </li>
                  <li> Spinal Cord Injury</li>
                </ul>
              </div>

              <div class="medical-treatments-box">
                <h2>Transplants</h2>
                <ul>
                  <li>Liver Transplant </li>
                  <li> Kidney Transplant </li>
                  <li> Heart Transplant </li>
                  <li> Bone Marrow Transplant </li>
                </ul>
              </div>

              <div class="medical-treatments-box">
                <h2>Transplants</h2>
                <ul>
                  <li>Liver Transplant </li>
                  <li> Kidney Transplant </li>
                  <li> Heart Transplant </li>
                  <li> Bone Marrow Transplant </li>
                </ul>
              </div>

              <div class="medical-treatments-box">
                <h2>Transplants</h2>
                <ul>
                  <li>Liver Transplant </li>
                  <li> Kidney Transplant </li>
                  <li> Heart Transplant </li>
                  <li> Bone Marrow Transplant </li>
                </ul>
              </div>

              <div class="medical-treatments-box">
                <h2>Transplants</h2>
                <ul>
                  <li>Liver Transplant </li>
                  <li> Kidney Transplant </li>
                  <li> Heart Transplant </li>
                  <li> Bone Marrow Transplant </li>
                </ul>
              </div> */}
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
        {/* {speciality.map((e) => {
       
          const galleryImages = treatment.filter(
            (gallery) => gallery.speciality_id === String(e.id)
          );
          return (
            <div style={{ marginTop: "2rem" }}>
              <Link to={`/speciality/${e.slug}/${e.country}`}>
                <h1>{e.name}</h1>
              </Link>

              <ul>
                {galleryImages &&
                  galleryImages.map((p) => (
                    <Link to={`/treatment/${p.slug}/${p.country}`} key={p.id}>
                      <li>{p.name}</li>
                    </Link>
                  ))}
              </ul>
            </div>
          );
        })} */}
      </Homelayout>
    </>
  );
};

export default AllSpecialitesList;
