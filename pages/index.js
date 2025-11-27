import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { Table, Typography, Card, Spin, Alert } from "antd";
import gsap from "gsap";
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";
import Languages from "../Components/Languages.js"; 
import LayoutApp from "../Components/LayoutApp.js";
import Home from "../Components/Home.js";


const { Title, Paragraph } = Typography;

export default function App() {
  return (
    <div>
      <LayoutApp>
        <Home />
      </LayoutApp>
    </div>
  );
}
