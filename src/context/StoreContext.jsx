import { createContext } from "react";
import data from "/src/assets/assets.js";
import { useState } from "react";

const food_list = data.food_list;

const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removefromcart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
  };

  const contextvalue = {
    food_list,
    cartItems,
    addToCart,
    removefromcart,
  };

  return (
    <StoreContext.Provider value={{ food_list, cartItems, addToCart, removefromcart , contextvalue}}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContextProvider, StoreContext };
