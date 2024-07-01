import React, { useState } from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {

const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className='navbar-menu'>
        <Link to="/" onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}>Home</Link>
        <a href='#exploremenu' onClick={()=>{setMenu("menu")}} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#appdownload' onClick={()=>{setMenu("mobileapp")}} className={menu==="mobileapp"?"active":""}>Mobile-App</a>
        <a href='#Footer' onClick={()=>{setMenu("contact")}} className={menu==="contact"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-seacrh-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
