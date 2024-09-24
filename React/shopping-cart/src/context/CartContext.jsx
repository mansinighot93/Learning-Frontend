import React, { createContext, useState } from 'react';

//Step 1 : Create context at application level
// Create a context for the shopping cart

const CartContext = createContext();

//Step 2: Define Provider
//Store
// Create a provider component
export function CartProvider({ children }) {
  //Step 3: Define global State

  const [cart, setCart] = useState([]);
  //Step 4:Define Reducers

  // Add item to cart
  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from cart
  const removeItem = (itemId) => {
    //setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    setCart((prevCart)=>{
      const index=prevCart.findIndex((item)=>item.id===itemId);
      if(index!==-1){
        return [
          ...prevCart.slice(0,index),
          ...prevCart.slice(index+1)
        ];
      }
      return prevCart;
    })
  };

  // Get total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity,0);
  };

  //Middleware
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
/*
 eCommerce application, 
 you can use the useContext hook to manage and
  share important data across various components.
*/