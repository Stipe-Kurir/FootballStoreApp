import React,{useState} from 'react'
import "./header.css"



const Header = () => {

    const [index,setIndex]=useState(0);
    const [currentPointer,setCurrentPointer]=useState(0);

    const handleArrowClick=(direction)=>{
        let newIndexNumber;

        if (direction === "l") {
            newIndexNumber = index === 0 ? 2 : index - 1;
          } else {
            newIndexNumber = index === 2 ? 0 : index + 1;
          }
      
          setIndex(newIndexNumber)

    }

    const handleClickPointer=(index)=>{
        setIndex(index);

    }


    const photos=[
        {src:"./images/nike kope.jpg"},
        {src:"./images/adidasWall.jpg"},
        {src:"./images/ponuda.jpg"},        
    ]

  return (
    <div className="headerElements">

        <div className="slider">
            
            <div className="sliderImages" >
                <img src={photos[index].src} alt="" className="sliderImg"/>
            </div>

            <div className='sliderElements'>
                <div className="sliderPointers">
                <img onClick={()=>handleClickPointer(0)} src="./images/new-moon.png" alt="" width="15px" height="15px" className="sliderPointer"/>
                <img onClick={()=>handleClickPointer(1)} src="./images/new-moon.png" alt="" width="15px" height="15px" className="sliderPointer"/>
                <img onClick={()=>handleClickPointer(2)} src="./images/new-moon.png" alt="" width="15px" height="15px" className="sliderPointer"/>
                </div>
                <div className="sliderArrow">
                    <div className="arrowL">
                    <img onClick={()=>handleArrowClick("l")} src="./images/right-arrow.png" alt="icon" width="20px" height="20px"/>
                    </div>
                    <div className="arrowR">
                    <img  onClick={()=>handleArrowClick("r")}  src="./images/right-arrow.png" alt="icon" width="20px" height="20px"/>
                    </div>
                </div>
            </div>

        </div>

        <div className="elementsSocial">
            <div className="elementsSocialWrapper">
                <div className="infoElm">
                    <img className="iconImg" src="./images/shopping-cart.png" alt=""  width="30px" height="30px"/>
                    <span>Besplatna dostava za narudžbe iznad 70 eura</span>
                </div>
                <div className="infoElm">
                    <img className="iconImg" src="./images/facebook.png" alt=""  width="30px" height="30px"/>
                    <span>Pratite nas na Facebook</span>
                </div>
                <div className="infoElm">
                    <img className="iconImg" src="./images/instagram.png" alt=""  width="30px" height="30px"/>
                    <span>Pratite nas na Instagramu</span>
                </div>
                <div className="infoElm">
                    <img className="iconImg" src="./images/info.png" alt=""  width="30px" height="30px"/>
                    <span>Ponedjeljak-Petak/08-20h</span>
                </div>
    
            </div>
        </div>


    </div>
  )
}

export default Header
