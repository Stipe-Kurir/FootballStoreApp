import React from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"


const Home = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <div className="homepageContainer">

      <div className="homepageItems">


        <div className="homeItem"> 
        <a href="http://localhost:3000/product" target=""> 
          <img  src="./images/Life3.jpg" alt="" width="341.33px" height="100%" className="imgEx" />
        </a>
        </div>
        <div className="homeItem">
          <img src="./images/home1.jpg" alt="" width="341.33px" height="100%" className="imgEx" />
        </div>
        <div className="homeItem">
          <img src="./images/shirt.jpg" alt="" width="341.33px" height="100%" className="imgEx" />
        </div>
        <div className="homeItem">
          <img src="./images/tenisice.jpg" alt="" width="341.33px" height="100%" className="imgEx" />
        </div>
        <div className="homeItem">
          <img src="./images/hrv.jpg" alt="" width="341.33px" height="100%" className="imgEx" />
        </div>
        <div className="homeItem">
          <img src="./images/tenisice_za_trcanje.jpg" alt="" width="341.33px" height="100%" className="imgEx" />
        </div>
      </div>
 

      <div className="homepagePersonalization">
        <div className="homepagePersImg">
         
          <div className="titlePersonalization">
            <div className="title">PERSONALIZIRAJ</div>
            <div className="title2">Personalizacija kopačke i opreme</div>
            </div>

            <div className="personalizationItems">
              <div className='personalizationItemsLeft'>
                <div className="itemDesc">Imaš nešto što te posebno motivira da navučeš svoje kopačke? Otisni poruku, ime ili broj i budi football manijak u svojoj areni</div>
                <div className="personalizationButton">
                  <button className="button">PERSONALIZIRAJ</button>
                </div>
            </div>
              <div className="itemImg">
                <img src="./images/boots.jpg" width="100%" height="100%"/>
              </div>
            </div>

        </div>
        </div>


      <div className="homepageBlog">Blog</div>
    
    
     
     </div>

    </div>
    
  )
}

export default Home
