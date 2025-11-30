"use client"
import { useContext } from 'react';
import Link from 'next/link';
import Service from './Service.js';
import Product from './Product.js';
import { translations } from "../utils/i18n";
import { LanguageContext } from "../context/LanguageContext";
export default function Home() {

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div>
      <div className="background-home flex flex-col items-center justify-center min-h-screen" style={{ background: "linear-gradient(to bottom right, #BFD4E4, #042E61)", height: "100vh" }} >
        <h1 className="text-5xl font-semibold mb-2" style={{ color: "#042E61", fontFamily: 'Cormorant Garamond, serif' }}>Luxura Furni</h1>
        <p className="text-xl mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{t.store}</p>
        <Link href="/About">
          <button className="bg-indigo-900 hover:bg-indigo-800 text-white text-lg px-6 py-2 rounded-full shadow-md transition" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            {t.AboutMe}
          </button>
        </Link>
      </div>
      <Service style={{ fontFamily: 'Cormorant Garamond, serif', backgroundColor : "#BFD4E4" }}/>
      <Product/>
    </div>
  );
}
