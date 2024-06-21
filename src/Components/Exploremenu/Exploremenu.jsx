import React from 'react'
import "./exploremenu.css"
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='exploremenu'>
      <h1>Explore Our Menu</h1>
      <p className='exploremenu-text'>Choose from a diverse menu featuring array of dishes crafted with finest ingredients and cullinary expertise .Our mission is to satisfy your cravings and elevate your dining experience ,one delicious meal at a time</p>
      <div className="exploremenu-list">
        {menu_list.map((item,index)=>{
           return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='exploremenu-list-item' id={index}>
             <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
             <p>{item.menu_name}</p>
            </div>
           )
        })}
      </div>
      <hr />
    </div>
  )
}

export default Exploremenu
