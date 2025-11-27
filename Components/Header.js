"use client";
import { useContext } from "react";
import Languages from "./Languages";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import MenuPopUp from "./PopUpMenu";
import { CartContext } from "../context/CartContext";
import PopUpCart from "./PopUpCard";

export default function Header() {
    const { cartItems, isCartVisible, toggleCart, setIsCartVisible } = useContext(CartContext);

    return (
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px", backgroundColor: "white" }}>
            <div className="logo">
                <img src="/Logo Perusahaan/IMG-20251105-WA0003.jpg" alt="Logo" width={150} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div style={{ backgroundColor: "#BFD4E4", padding: "4px 6px", borderRadius: "8px", cursor: "pointer" }} onClick={toggleCart}>
                    <ShoppingCartOutlined style={{ fontSize: "20px", color: "black" }} />
                    <span style={{ color: "black" }}> Cart: {cartItems.length}</span>
                </div>
                <Languages />
                <div>
                    <MenuOutlined style={{ fontSize: "20px", color: "#042E61" }} />
                    <MenuPopUp visible={isCartVisible} onClose={() => setIsCartVisible(false)} />
                </div>
            </div>

            {cartItems.length > 0 && (
                <PopUpCart
                    cartItems={cartItems}   // 👈 pass the whole array
                    visible={isCartVisible}
                    onClose={() => setIsCartVisible(false)}
                />
            )}
        </header>
    );
}
