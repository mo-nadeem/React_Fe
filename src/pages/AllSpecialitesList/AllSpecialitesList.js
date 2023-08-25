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
        {speciality.map((e) => {
          // Filter gallery items that match the current hospital's id
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
        })}
      </Homelayout>
    </>
  );
};

export default AllSpecialitesList;
