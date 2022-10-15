import "./Heroimg2.css"
import React, { Component } from 'react'

class Heroimg2 extends Component {
    render(){
        return (
            <div className="hero-img">
                <div className="content-img">
                    <div className="content">
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Heroimg2