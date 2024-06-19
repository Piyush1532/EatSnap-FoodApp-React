import React, { useState } from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
const Navbar = () => {

const [menu, setMenu] = useState("menu")


  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className='navbar-menu'>
        <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>Menu</li>
        <li onClick={()=>{setMenu("mobileapp")}} className={menu==="mobileapp"?"active":""}>Mobile-App</li>
        <li onClick={()=>{setMenu("contact")}} className={menu==="contact"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-seacrh-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
