"use client"
import { useContext } from 'react';
import { Drawer, Menu } from 'antd';
import Link from 'next/link';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../utils/i18n';

const MenuPopUp = ({ visible, onClose }) => {
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  return (
    <Drawer
      title="Menu"
      placement="right"
      onClose={onClose}
      visible={visible}
      closable
      style={{backgroundColor: "#40648F", color: "white"}}
    >
      <Menu mode="vertical" style={{backgroundColor: "#40648F", color: "white"}}>
        <Menu.Item key="home">
          <Link href="/"style={{color: "white"}}>{t.home}</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/About" style={{color: "white"}}>{t.AboutMe}</Link>
        </Menu.Item>
        <Menu.Item key="product">
          <Link href="/product" style={{color: "white"}}>{t.product}</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link href="/contact" style={{color: "white"}}>{t.contact}</Link>
        </Menu.Item>
      </Menu>
    </Drawer>
  );
};

export default MenuPopUp;
