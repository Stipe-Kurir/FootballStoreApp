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

<div className="sliderFooter">
  <div className="slide-track">
    <div className="slide">
      <img src="./images/store1.jpg" height="150" width="250" alt="" />
    </div>
    <div className="slide">
      <img src="./images/store2.jpg" height="150" width="250" alt="" />
    </div>
    <div className="slide">
      <img src="./images/store3.jpg" height="150" width="250" alt="" />
    </div>
    <div className="slide">
      <img src="./images/store4.jpg" height="150" width="250" alt="" />
    </div>
    <div className="slide">
      <img src="./images/store1.jpg" height="150" width="250" alt="" />
    </div>
    <div className="slide">
      <img src="./images/store2.jpg" height="150" width="250" alt="" />
    </div>
    <div className="slide">
      <img src="./images/store3.jpg" height="150" width="250" alt="" />
    </div>
    <div className="slide">
      <img src="./images/store4.jpg" height="150" width="250" alt="" />
    </div>
  </div>
</div>

        <div className="footerInfo">
          <div className="footerInfoItems">
            <div className='footerInfoItem'> 
              <div className='footerInfoItemTitle'>O nama</div>
              <div className='footerInfoItemData'>Kontakt</div>
              <div className='footerInfoItemData'>Lokacije</div>
              </div>
            <div className='footerInfoItem'> 
              <div className='footerInfoItemTitle'>Usluge</div>
              <div className='footerInfoItemData'>Povrat i zamjena robe</div>
              <div className='footerInfoItemData'>Poklon bonovi</div>
              <div className='footerInfoItemData'>Kupi u poslovnici</div>
            </div>
            <div className='footerInfoItem'> 
              <div className='footerInfoItemTitle'>uvjeti i pravila</div>
              <div className='footerInfoItemData'>Načini plaćanja</div>
              <div className='footerInfoItemData'>Opći i uvjeti kupnje </div>
            </div>
          </div>
          <div className='footerMedia'>
            <div className='mediaLogo'><img className='mediaInst' src="./images/instagram.png" height="25px" width="25px"/></div>
            <div className='mediaLogo'>INST</div>
            <div className='mediaLogo'>INST</div>
            <div className='mediaLogo'>INST</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
