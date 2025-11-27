import React from 'react';
import { Drawer, Menu } from 'antd';
import Link from 'next/link';

const MenuPopUp = ({ visible, onClose }) => {
  return (
    <Drawer
      title="Menu"
      placement="right"
      onClose={onClose}
      visible={visible}
      closable
    >
      <Menu mode="vertical">
        <Menu.Item key="about">
          <Link href="/Components/About">About Us</Link>
        </Menu.Item>
        <Menu.Item key="products">
          <a href="#products">Products</a>
        </Menu.Item>
        <Menu.Item key="contact">
          <a href="#contact">Contact</a>
        </Menu.Item>
      </Menu>
    </Drawer>
  );
};

export default MenuPopUp;
