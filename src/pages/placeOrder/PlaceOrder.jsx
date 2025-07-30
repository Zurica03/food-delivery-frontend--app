import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const PlaceOrder = () => {

  const { cartItems, food_list, removefromcart } = useContext(StoreContext);

  const navigate = useNavigate();

  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multifields'>
          <input type='text' placeholder='first name'/>
          <input type='text' placeholder='last name'/>
        </div>
        <input type='email' placeholder='email'/>
        <input type='text' placeholder='street'/>
        <div className='multifields'>
          <input type='text' placeholder='city'/>
          <input type='text' placeholder='state'/>
        </div>
        <div className='multifields'>
          <input type='text' placeholder='zipcode'/>
          <input type='text' placeholder='country'/>
        </div>
        <input type='text' placeholder='phone'/>
      </div>
      <div className='place-order-right'>
        <div className="cart-bottom-section">
        <div className="cart-summary-card">
          <h2>Cart Summary</h2>
          <div className="summary-line">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="summary-line">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>
          <hr />
          <div className="summary-line total-line">
            <b>Total</b>
            <b>${total}</b>
          </div>
          <button onClick={() => navigate('/placeorder')} className="checkout-btn">Proceed to Checkout</button>
        </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder;
