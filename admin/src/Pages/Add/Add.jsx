import React, { useEffect } from 'react'
import "./add.css"
import { assets } from '../../assets/assets'
import { useState } from 'react'
const Add = () => {
 
    const [image, setImage] = useState(false)

const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
})
 
const onChangeHandler=(evt)=>{
const name=evt.target.name
const value=evt.target.value
setData(data=>({...data,[name]:value
}))
}

useEffect(()=>{
console.log(data)
},[data])


  return (
    <div className='add'>
      <form className='flex-col'>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>  
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_icon} alt="" className='uploadicon' />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
<p>Product Name</p>
<input type="text" name='name' placeholder='Type Here' onChange={onChangeHandler} value={data.name} />
        </div> 
        <div className="add-product-description flex-col">
         <p>Product Description</p>
         <textarea name="description" rows="6" placeholder='Write content here' required onChange={onChangeHandler} value={data.description}></textarea>
        </div>
        <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product category</p>
                <select name="category" onChange={onChangeHandler}>
                    <option value="Salad">Salad</option>
                    <option value="Rolls">Rolls</option>
                    <option value="Deserts">Deserts</option>
                    <option value="Sandwich">Sandwich</option>
                    <option value="Cake">Cake</option>
                    <option value="Pure Veg">Pure Veg</option>
                    <option value="Pasta">Pasta</option>
                    <option value="Noodles">Noodles</option>
                </select>
            </div>
            <div className="add-price flex-col">
                <p>Product Price</p>
                <input type="Number" name='price' placeholder='$20' onChange={onChangeHandler} value={data.price} />
            </div>
        </div>
        <button type='submit' className='add-btn'>Add</button>
      </form>
    </div>
  )
}

export default Add
