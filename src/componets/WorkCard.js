import "./workcard.css"
import React from 'react'
import image from '../assests/pi6.jpg'
import image1 from '../assests/pi4.jpeg'
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="workcard">
        <div className="work-content">
            <h1>Projects</h1>
            <div className="sing-contet">
                <img src={image} alt="imgg"  className="imgg"/>
            </div>
            <div className="pargra">
                <h2>Project Title</h2>
                <h3>This is Demo</h3>
                <NavLink to="./Contack"  className="btn" >VIEW</NavLink>
                <NavLink to="./Contack"  className="btn">SOURCE</NavLink>
            </div>
        </div>
        <div className="work-content">
            <h1>Projects</h1>
            <div className="sing-contet">
                <img src={image1} alt="imgg"  className="imgg"/>
            </div>
            <div className="pargra">
                <h2>Project Title</h2>
                <h3>This is Demo</h3>
                <NavLink to="./Contack"  className="btn" >VIEW</NavLink>
                <NavLink to="./Contack"  className="btn">SOURCE</NavLink>
            </div>
        </div>
    </div>
  )
}

export default WorkCard