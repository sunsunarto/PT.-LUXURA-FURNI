"use client";
import { useContext, useState } from "react";
import Languages from "./Languages";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import MenuPopUp from "./PopUpMenu";
import { CartContext } from "../context/CartContext";
import PopUpCart from "./PopUpCard";

export default function Header() {
  const { cartItems, isCartVisible, toggleCart, setIsCartVisible, removeItem } =
    useContext(CartContext);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
  const closeMenu = () => setIsMenuVisible(false);

  return (
    <header
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "white",
        borderBottom: "1px solid #eee",
      }}
    >
      <div
        className="logo"
        style={{
          flex: "1 1 150px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <img
          src="/Logo Perusahaan/IMG-20251105-WA0003.jpg"
          alt="Logo"
          style={{ width: "120px", height: "auto" }}
        />
      </div>
      <div
        style={{
          flex: "2 1 300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundColor: "#BFD4E4",
            padding: "6px 10px",
            borderRadius: "8px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          onClick={toggleCart}
          role="button"
          aria-label="Toggle cart"
        >
          <ShoppingCartOutlined style={{ fontSize: "20px", color: "black" }} />
          <span style={{ color: "black", fontSize: "0.9rem" }}>
            Cart: {cartItems.length}
          </span>
        </div>
        <Languages />
        <div
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
          role="button"
          aria-label="Toggle menu"
        >
          <MenuOutlined style={{ fontSize: "22px", color: "#042E61" }} />
          <MenuPopUp visible={isMenuVisible} onClose={closeMenu} />
        </div>
      </div>
      {cartItems.length > 0 && (
        <PopUpCart
          cartItems={cartItems}
          visible={isCartVisible}
          onClose={() => setIsCartVisible(false)}
          removeItem={removeItem}
        />
      )}
    </header>
  );
}
