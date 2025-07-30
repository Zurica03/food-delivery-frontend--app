import React, { useState } from "react";
import "./FoodItem.css";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, description, image, price }) => {
  const [itemCount, setitemCount] = useState(0);
  const { addToCart } = useContext(StoreContext);

  const handleAdd = () => setitemCount(1);
  const increment = () => setitemCount((prev) => prev + 1);
  const decrement = () => {
    if (itemCount > 1) {
      setitemCount((prev) => prev - 1);
    } else {
      setitemCount(0);
    }
  };

  return (
    <div className="food-item-card">
      <img src={image} alt={name} className="food-item-image" />
      <div className="food-item-details">
        <h3 className="food-item-name">{name}</h3>
        <p className="food-item-description">{description}</p>
        <div className="food-item-footer">
          <span className="food-item-price">${price}</span>
          {itemCount === 0 ? (
            <button className="add-btn"  onClick={() => {
              handleAdd();
              addToCart(id);
            }}>
              Add +
            </button>
          ) : (
            <div className="counter-controls">
              <button className="counter-btn" onClick={decrement}>
                −
              </button>
              <span className="count-value">{itemCount}</span>
              <button className="counter-btn" onClick={increment}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
