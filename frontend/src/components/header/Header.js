import React from 'react'
import "./header.css"
import nike from "../../images/nike kope.jpg"

const Header = () => {

    const images=[
        {src:"../../images/nike kope.jpg"}
    ];

  return (
    <div className="headerElements">

        <div className="slider">
            
            <div className="Images">
      
                <img src={nike} alt="" className="img"/>
                
        
            </div>

            <div className='sliderElements'>
                <div className="sliderPointers">
                    da
                </div>
                <div className="sliderArrow">
                    <div className="arrowL">L</div>
                    <div className="arrowR">R</div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Header
