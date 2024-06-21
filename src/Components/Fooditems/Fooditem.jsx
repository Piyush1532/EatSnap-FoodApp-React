import React, { useState } from 'react'
import "./fooditem.css"
import { assets } from '../../assets/assets'

const Fooditem = ({id,name,price,description,image}) => {
 const [itemCount,setitemCount]=useState(0)


  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt=""  className='food-item-img'/>
        {!itemCount
        ? <img  className="add" onClick={()=>setitemCount(prev=>prev+1)} src={assets.add_icon_white}/>
         : <div className='food-item-counter'></div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-description">
            {description}
        </p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default Fooditem
