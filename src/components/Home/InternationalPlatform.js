import React from 'react'
import { Link } from 'react-router-dom'

const InternationalPlatform = () => {
  return (
    <>
 <section id="international-platform">
  <div className="midbox-inner  wiki-mk">
    <div className="platform-box">
      <div className="platform-left">
        <h2>Medflick is an international platform for hospital search and treatment arrangement</h2>
      </div>
      <div className="platform-right">
        <h3>2000+</h3>
        <p>Patients have received our assistance since 2020</p>
        <Link to="/about-us" className="learn">
          Learn More <img src="images/2023/01/arrow-w.png" alt="" />
        </Link>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default InternationalPlatform