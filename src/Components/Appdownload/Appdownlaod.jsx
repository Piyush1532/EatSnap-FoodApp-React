import React from 'react'
import "./appdownload.css"
import { assets } from '../../assets/assets'
const Appdownlaod = () => {
  return (
    <div className='appdownload' id='appdownload'>
    <p>For Better Experience Download <br /> EatSnap App</p>
    <div className="app-download-platform">
      <img src={assets.play_store} alt="" />
      <img src={assets.app_store}alt="" />
    </div>
    </div>
  )
}

export default Appdownlaod
