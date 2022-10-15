import React, { useState } from 'react'
import "./NavberStyle.css"
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa"
function Navbar() {
  const [clickBtn, setClickBtn] = useState(false);
  const [navbar , setNavbar] = useState(false);

  const scrolHandler = ()=>{
    if(window.scrollY >= 1){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
    
  }

  window.addEventListener("scroll" ,scrolHandler);
  
  const handlerClick = () => {
    setClickBtn(!clickBtn);
  }
  return (
    <div className={navbar ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={clickBtn ? "nav-menu active" :
        "nav-menu"}>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/projects">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handlerClick}>
        {clickBtn ? (<FaTimes size={20} style={{ color: "red" }
        } />) : (<FaBars size={20} style={{ color: "red" }
        } />)

        }
      </div>
    </div>
  );
}

export default Navbar