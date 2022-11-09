import "./footer.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">

                <div className="left">
                    <div className="mid-content">
                        <h3>Register Office</h3>
                    </div>
                    <div className="location">
                        <FaHome size={20} style={{ color: "red", marginRight: "2rem" }} />
                        <div>
                            <p>Swarajpuri Road, Gays</p>
                            <p>Bihar ,(India)</p>
                        </div>
                    </div>
                    <div className="mobile">
                        <h4>
                            <FaPhone size={20} style={{ color: "red" }} />
                            <span>987565465456</span>
                        </h4>

                    </div>
                    <div className="mail">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "red" }} />

                            <span>software@.gmail.com</span></h4>

                    </div>
                </div>
                <div className="left">
                    <div className="mid-content">
                        <h3>Importains Link</h3>
                    </div>

                    <div className="links">
                        <ul>
                            <li className="sing-link">Know Latest Courses</li>
                            <li className="sing-link">About Modern Technologies</li>
                            <li className="sing-link">Placements</li>
                        </ul>

                    </div>
                </div>
                <div className="left">
                    <h3>About The Company</h3>
                    <p>
                        We are educational platform, that is provide quelity,<br />
                        current demandeble education that make students for <br />
                        industries expert with minimum fees.
                    </p> 
                    <br />
                    <p>
                        I spent sometime understanding the difference between <br />
                        positioning and relative positioning and element.

                    </p>
                    <br />
                    <div className="social">
                        <FaFacebook size={30} className="icons" />
                        <FaLinkedin size={30} className="icons" />
                        <FaInstagram size={30} className="icons" />
                        <FaYoutube size={30} className="icons" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer