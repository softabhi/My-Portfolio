import "./pricingCard.css";
import React from 'react'
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card">
            <div className="sing-card">
                <h3>PREMIUM</h3>
                <span className="bar"></span>
                <p className="btc">- $ 200 -</p>
                <p>- 2 Days -</p>
                <p>- 2 Pages -</p>
                <p>- Featured -</p>
                <p>- Resposive Desing -</p>
                <Link to="/Contact" className="btn">PURCHAGE NOW</Link>
            </div>
            <div className="sing-card">
                <h3>PREMIUM</h3>
                <span className="bar"></span>
                <p className="btc">- $ 100 -</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Featured -</p>
                <p>- Resposive Desing -</p>
                <Link to="/Contact" className="btn">PURCHAGE NOW</Link>
            </div>
            <div className="sing-card">
                <h3>PREMIUM</h3>
                <span className="bar"></span>
                <p className="btc"> -$ 300 -</p>
                <p>- 5 Days -</p>
                <p>- 5 Pages -</p>
                <p>- Featured -</p>
                <p>- Resposive Desing -</p>
                <Link to="/Contact" className="btn">PURCHAGE NOW</Link>
            </div>
        </div>
    </div>
  )
}

export default PricingCard  