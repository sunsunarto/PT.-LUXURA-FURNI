"use client";
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const toggleCart = () => setIsCartVisible(!isCartVisible);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, isCartVisible, toggleCart, setIsCartVisible }}>
      {children}
    </CartContext.Provider>
  );
}
