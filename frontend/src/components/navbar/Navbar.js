import React from 'react'
import "./navbar.css";
import logo from "../../images/logo.png"
import cart from "../../images/cart.png"
import search from "../../images/search.png";
import {useNavigate} from "react-router-dom";
import trava from "../../images/trava.jpg"
import adidas from "../../images/adidas.png"
import nike from "../../images/nike.png"

const Navbar = () => {

  const navigate=useNavigate();
  const handleLogo=()=>{
    navigate("/");
  }



  return (
  <div className="navbar">
    <div className="navContainerFirst">

      <div className="navItem">
        <div className="logo">
          <img onClick={handleLogo} src={logo} alt="icon" />
        </div>
      </div>

      <div className="navItem">
        <div className="searchItem">
          <input className="search" type="text" placeholder="Search item..."/>
          <button className="navButton" >
            <img src={search} alt="icon" width="14px" height="14px"/>
          </button>
        </div>
      </div>

      <div className="navItem">
        <div className="cart">
          <img  src={cart} alt="icon" width="30px" height="30px"/>
          <div className="counter">5</div>
        </div>
      </div>

    </div> 

    <div className="navContainerSecond">

        <div className="itemList">
        <div className="listItem">
            <div className="itemTitle">KOPAČKE</div>
            <div className="itemWindow">
             <div className="itemBrands">
              <div className='mainBrand'>
                <div className="mainItem">
                  <div className="titleItem">ADIDAS</div>
                  <img className="itemLogo" src={adidas} alt="icon" width="50px" heigh="50px"/>
                </div>
                <div className="items">            
                  <div className="item">COPA</div>
                  <div className="item">NEMEZIZ</div>
                  <div className="item">PREDATOR</div>
                  <div className="item">X</div>  
                </div>
              </div>
              <div className='mainBrand'>
                <div className="mainItem">  <div className="titleItem">NIKE</div>
                  <img className="itemLogo" src={nike} alt="icon" width="50px" heigh="50px"/></div>
                <div className="items">            
                  <div className="item">MERCURIAL</div>
                  <div className="item">TIEMPO</div>
                  <div className="item">PHANTOM</div> 
                </div>
                </div>
              </div>
            <div className="itemSurface">  
              <div className="titleSurface">PODLOGA</div>
                <div className="optionSurface">

                  <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                    </div>
                     <div   className="descSurface">Umjetna<br/> trava</div>
                     </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                     <div className="typeSurface">
                       <div className="imgSurface">
                        <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                       </div>
                      <div className="descSurface">Umjetna<br/> trava</div>
                     </div>

                  </div>

            </div>

            </div>
          </div> 

          <div className="listItem">
            <div className="itemTitle">KOPAČKE</div>
            <div className="itemWindow">
             <div className="itemBrands">
              <div className='mainBrand'>
                <div className="mainItem">ADIDAS</div>
                <div className="items">            
                  <div className="item">COPA</div>
                  <div className="item">NEMEZIZ</div>
                  <div className="item">PREDATOR</div>
                  <div className="item">X</div>  
                </div>
              </div>
              <div className='mainBrand'>
                <div className="mainItem">NIKE</div>
                <div className="items">            
                  <div className="item">MERCURIAL</div>
                  <div className="item">TIEMPO</div>
                  <div className="item">PHANTOM</div> 
                </div>
                </div>
              </div>
            <div className="itemSurface">  
              <div className="titleSurface">PODLOGA</div>
                <div className="optionSurface">

                  <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                    </div>
                     <div   className="descSurface">Umjetna<br/> trava</div>
                     </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                     <div className="typeSurface">
                       <div className="imgSurface">
                        <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                       </div>
                      <div className="descSurface">Umjetna<br/> trava</div>
                     </div>

                  </div>

            </div>

            </div>
          </div>  

          <div className="listItem">
            <div className="itemTitle">KOPAČKE</div>
            <div className="itemWindow">
             <div className="itemBrands">
              <div className='mainBrand'>
                <div className="mainItem">ADIDAS</div>
                <div className="items">            
                  <div className="item">COPA</div>
                  <div className="item">NEMEZIZ</div>
                  <div className="item">PREDATOR</div>
                  <div className="item">X</div>  
                </div>
              </div>
              <div className='mainBrand'>
                <div className="mainItem">NIKE</div>
                <div className="items">            
                  <div className="item">MERCURIAL</div>
                  <div className="item">TIEMPO</div>
                  <div className="item">PHANTOM</div> 
                </div>
                </div>
              </div>
            <div className="itemSurface">  
              <div className="titleSurface">PODLOGA</div>
                <div className="optionSurface">

                  <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                    </div>
                     <div   className="descSurface">Umjetna<br/> trava</div>
                     </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                     <div className="typeSurface">
                       <div className="imgSurface">
                        <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                       </div>
                      <div className="descSurface">Umjetna<br/> trava</div>
                     </div>

                  </div>

            </div>

            </div>
          </div> 

          <div className="listItem">
            <div className="itemTitle">KOPAČKE</div>
            <div className="itemWindow">
             <div className="itemBrands">
              <div className='mainBrand'>
                <div className="mainItem">ADIDAS</div>
                <div className="items">            
                  <div className="item">COPA</div>
                  <div className="item">NEMEZIZ</div>
                  <div className="item">PREDATOR</div>
                  <div className="item">X</div>  
                </div>
              </div>
              <div className='mainBrand'>
                <div className="mainItem">NIKE</div>
                <div className="items">            
                  <div className="item">MERCURIAL</div>
                  <div className="item">TIEMPO</div>
                  <div className="item">PHANTOM</div> 
                </div>
                </div>
              </div>
            <div className="itemSurface">  
              <div className="titleSurface">PODLOGA</div>
                <div className="optionSurface">

                  <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                    </div>
                     <div   className="descSurface">Umjetna<br/> trava</div>
                     </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                     <div className="typeSurface">
                       <div className="imgSurface">
                        <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                       </div>
                      <div className="descSurface">Umjetna<br/> trava</div>
                     </div>

                  </div>

            </div>

            </div>
          </div> 

          <div className="listItem">
            <div className="itemTitle">KOPAČKE</div>
            <div className="itemWindow">
             <div className="itemBrands">
              <div className='mainBrand'>
                <div className="mainItem">ADIDAS</div>
                <div className="items">            
                  <div className="item">COPA</div>
                  <div className="item">NEMEZIZ</div>
                  <div className="item">PREDATOR</div>
                  <div className="item">X</div>  
                </div>
              </div>
              <div className='mainBrand'>
                <div className="mainItem">NIKE</div>
                <div className="items">            
                  <div className="item">MERCURIAL</div>
                  <div className="item">TIEMPO</div>
                  <div className="item">PHANTOM</div> 
                </div>
                </div>
              </div>
            <div className="itemSurface">  
              <div className="titleSurface">PODLOGA</div>
                <div className="optionSurface">

                  <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                    </div>
                     <div   className="descSurface">Umjetna<br/> trava</div>
                     </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                    <div className="typeSurface">
                     <div className="imgSurface">
                      <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                     </div>
                     <div className="descSurface">Umjetna<br/> trava</div>
                    </div>

                     <div className="typeSurface">
                       <div className="imgSurface">
                        <img className="img" src={trava} alt="icon" height="50px" width="50px" />
                       </div>
                      <div className="descSurface">Umjetna<br/> trava</div>
                     </div>

                  </div>

            </div>

            </div>
          </div> 


        </div> 
    </div> 

  </div> //NAVBAR,PRIJE NJEGA SEC C,ITEM LIST,LIST ITEM
  
  )
}

export default Navbar;
