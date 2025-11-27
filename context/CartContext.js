"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const toggleCart = () => setIsCartVisible(!isCartVisible);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItem,
        isCartVisible,
        toggleCart,
        setIsCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
