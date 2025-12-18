"use client";
import { useContext } from "react";
import Link from "next/link";
import Service from "./Service.js";
import Product from "./Product.js";
import { translations } from "../utils/i18n";
import { LanguageContext } from "../context/LanguageContext";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div>
      <div
        className="background-home flex flex-col items-center justify-center min-h-screen text-center px-4"
        style={{
          background: "linear-gradient(to bottom right, #BFD4E4, #042E61)",
        }}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4"
          style={{ color: "#042E61", fontFamily: "Cormorant Garamond, serif" }}
        >
          Luxura Furni
        </h1>
        <p
          className="text-lg sm:text-xl md:text-2xl mb-6 max-w-xl"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {t.store}
        </p>
        <Link href="/About">
          <button
            className="bg-indigo-900 hover:bg-indigo-800 text-white text-base sm:text-lg px-6 py-2 rounded-full shadow-md transition"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {t.AboutMe}
          </button>
        </Link>
      </div>
      <Service
        style={{
          fontFamily: "Cormorant Garamond, serif",
          backgroundColor: "#BFD4E4",
        }}
      />
      <Product />
    </div>
  );
}
