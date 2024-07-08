import React, { useContext } from 'react'
import "./placeorder.css"
import { StoreContext } from '../../Context/Storecontext'
const Placeorder = () => {
 
  const {getTotalCartAmount}=useContext(StoreContext)



  return (
    <form className='place-order'>
      <div className="place-order-left">
       <p className="title">Delivery Information</p>
       <div className="multi-field">
        <input type="text"  placeholder='First Name'/>
        <input type="text" placeholder='Last Name' />
       </div>
       <input type="email" placeholder='Email address'/>
       <input type="text" placeholder='Street'/>
       <div className="multi-field">
        <input type="text"  placeholder='City'/>
        <input type="text" placeholder='State' />
       </div>
       <div className="multi-field">
        <input type="text"  placeholder='Zip Code'/>
        <input type="text" placeholder='Country' />
       </div>
       <input type="text" placeholder='Phone No' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fees</p>
              <p>$${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Total</p>
              <b>${getTotalCartAmount()===0?0:   getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button >Proceed to Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
