import React from 'react'
import "./navbar.css";
import logo from "../../images/logo.png"
import cart from "../../images/cart.png"
import search from "../../images/search.png";
import {useNavigate} from "react-router-dom";


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
          <div className="listItem">KOPAČKE</div>
          <div className="listItem">TENISICE</div>
          <div className="listItem">LIFESTYLE</div>
          <div className="listItem">FAN SHOP</div>
          <div className="listItem">TRENING</div>
        </div>
    </div>

  </div>
    
  )
}

export default Navbar;
