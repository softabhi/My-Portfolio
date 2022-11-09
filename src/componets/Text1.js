import React, { useState } from 'react'
import img from '../assests/pi8.jpg'
import './text1.css'
const Text1 = () => {
    const [val,setVal]=useState("");
//   let val;
   setInterval(()=>{
      return setVal("hello")
   },1000)
    
    return (
       
            <div className='text1'>
                <div className="textImg">
                    <div className="img1">
                        <img id='imgg' src={img} alt="text1" />
                    </div>

                    <div className="textCont">
                        <h2>{val}</h2>
                    </div>
                </div>
            </div>
        
    )
}

export default Text1