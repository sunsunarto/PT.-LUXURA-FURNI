"use client";
import { useState } from "react";
import Languages from "../Components/Languages.js";
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import MenuPopUp from "./PopUpMenu.js";

export default function Header() {
    const [cart, setCart] = useState(0);
    const [menuVisible, setMenuVisible] = useState(false)

     const toggleMenu = () => setMenuVisible(!menuVisible);

    const incrementCart = () => {
        setCart(cart + 1);
    };
  return (
    <header className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', backgroundColor: 'white', fontFamily: 'Cormorant Garamond, serif' }}>
        <div className="logo">
            <img src="/Logo Perusahaan/IMG-20251105-WA0003.jpg" alt="Logo" width={150}/>        
        </div>
        <div className="header-right style" style={{  display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div classname="cart"  style={{backgroundColor: '#BFD4E4', padding: '4px 6px', borderRadius: '8px', cursor: 'pointer'}} onClick={incrementCart}>
                <ShoppingCartOutlined style={{ fontSize: '20px', color: 'black', fontFamily: 'Cormorant Garamond, serif'}} />
                <span className="cart-count" style={{color: 'black', fontFamily: 'Cormorant Garamond, serif'}}> Cart: {cart}</span>
            </div>
            <Languages />
            <div className="menu-icon">
                <MenuOutlined style={{ fontSize: '20px', color: '#042E61' }}  onClick={toggleMenu}/>
                <MenuPopUp visible={menuVisible} onClose={() => setMenuVisible(false)} />
            </div>
        </div>
    </header>
  );
}