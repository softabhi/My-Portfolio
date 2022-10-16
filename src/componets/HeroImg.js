import "./HeroImg.css"
import React from 'react'
import img from '../assests/pi.jpg';
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={img} alt="img" />
      </div>
      <div className="content">
        <h4>HI, I AM LEARNER</h4>
        <h1>Learn More, Gain More.</h1>
        <div>
          <Link to="/projects" className="btn" >PROJECTS</Link>
          <Link to="/projects" className="btn dim-btn" >CONTACT</Link>
        </div>

      </div>
    </div>
  )
}

export default HeroImg