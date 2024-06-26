import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='Footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo}  className='footer-logo' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quidem reprehenderit eaque voluptatibus, quae ratione nobis veritatis unde placeat minima!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy </li>
            </ul>
        </div>


        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>+91212333</li>
                <li>EatSnap!@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 EatSnap.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
