import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerElements">

        <div className="footerTitle">POSLOVNICE</div>

        <div className="footerDesc">
          <div className="footerDescOne">
            <div className="footerDescOneTitle">ZAGREB</div>
            <div className="footerDescOneInfo">Zagrebačka 7<br/>PON/SUB 9-21 h / NED 9-14 h</div>
          </div>
          <div className="footerDescTwo">
            <div className="footerDescTwoTitle">SPLIT</div>
            <div className="footerDescTwoInfo">Splitska 7<br/>PON/NED 9-21 h</div></div>
        </div>

        <div className="footerSlider">
          <div className="footerItems">

            <div className="footerItem">
             <img className="footerImg" src="./images/store1.jpg" alt=" "  ></img>
            </div>
            <div className="footerItem">
             <img className="footerImg" src="./images/store2.jpg" alt=" "  ></img>
            </div>
            <div className="footerItem">
             <img className="footerImg" src="./images/store3.jpg" alt=" "  ></img>
            </div>
            <div className="footerItem">
              <img className="footerImg" src="./images/store4.jpg" alt=" " ></img>
            </div>
            <div className="footerItem">
             <img className="footerImg" src="./images/store3.jpg" alt=" "  ></img>
            </div>
            <div className="footerItem">
              <img className="footerImg" src="./images/store4.jpg" alt=" " ></img>
            </div>
  
          </div>
        </div>

        <div className="footerInfo">INFO u stupcima</div>
      </div>
    </div>
  )
}

export default Footer
