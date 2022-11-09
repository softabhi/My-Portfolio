

import React from 'react'
import './middle.css'
import midimg from '../assests/pi3.jpg'
import midimg1 from '../assests/pi5.jpg'
import midimg2 from '../assests/pi7.jpg'

const Middle = () => {
  return (
    <div className='mid'>
        <div className="mid-conte">
            <div className="info1">
              <img className='pic' src={midimg} alt="pi3" />
            </div>
            <div className="text">
                <h2>Why <span>?</span></h2>
            </div>
        </div>
        <div className="mid-conte">
            <div className="info1">
              <img className='pic2' src={midimg1} alt="pi3" />
            </div>
            <div className="text">
                <h2>How <span>?</span></h2>
            </div>
        </div>
        <div className="mid-conte">
            <div className="info1">
              <img className='pic3' src={midimg2} alt="pi3" />
            </div>
            <div className="text">
                <h2>What <span>?</span></h2>
            </div>
        </div>
    </div>
  )
}

export default Middle