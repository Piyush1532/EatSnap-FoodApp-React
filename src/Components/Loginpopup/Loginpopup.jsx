import React, { useState } from 'react'
import "./loginpopup.css"
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowLogin}) => {

const [currentState,setCurrentState]=useState("Login")


  return (
    <div className='loginpop-up'>
     <div className="login-popup-container">
      <form className='login-popup-form'>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img  onClick={()=>setShowLogin(false)}  src={assets.cross_icon}  />
        </div>
        <div className="login-popup-input">
        {currentState==="Login"?<></>: <input type="text" placeholder='Your Name' required />}
          <input type="email"  placeholder='Your Email' required/>
          <input type="password" placeholder='Your Password' required /> 
        </div>

        
          <div className="login-pop-condition">
            <input type="checkbox" required/>
            <p>By continuing ,I agree to the terms of use & privacy policy </p>
          </div>
          {currentState==="Login"?<p>Create a new account? <span onClick={()=>setCurrentState("sign up")}>Click Here</span></p>:
            <p>Alerady have an account <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}

      </form>
            <button>{currentState==="sign up"?"create account":"Login"}</button>
     </div>
    </div>
  )
}

export default Loginpopup
