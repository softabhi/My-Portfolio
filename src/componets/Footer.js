import "./footer.css"

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left">
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
                <div className="right">
                    <h4>About The Company</h4>
                    <p>
                        I spent sometime understanding the difference between <br />
                         positioning and relative positioning and element.
                        
                    </p>
                    <div className="social">
                        <FaFacebook size={30} className="icons"/>
                        <FaLinkedin size={30} className="icons"/>
                        <FaInstagram size={30} className="icons"/>
                        <FaYoutube size={30} className="icons"/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer