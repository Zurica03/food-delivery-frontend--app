import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removefromcart } = useContext(StoreContext);

  const navigate = useNavigate();

  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="Cart">
      <div className="Cart_items">
        <div className="Cart_items_title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          const quantity = cartItems?.[item._id];
          if (quantity > 0) {
            return (
              <div key={item._id} className="cartitems-title cartitems-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{quantity}</p>
                <p>${item.price * quantity}</p>
                <p
                  onClick={() => removefromcart(item._id)}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  X
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
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
  );
};

export default Cart;
