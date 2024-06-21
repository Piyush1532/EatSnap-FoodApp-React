import React, { useContext } from 'react'
import "./fooddisplay.css"
import { StoreContext } from '../../Context/Storecontext'
import Fooditem from '../Fooditems/Fooditem'

const Fooddisplay = ({category}) => {

    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='fooddisplay'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
            return <Fooditem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
