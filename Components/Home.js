import React from 'react';
import Service from './Service.js';
import Product from './Product.js';
export default function Home() {
  return (
    <div>
      <div className="background-home flex flex-col items-center justify-center min-h-screen" style={{ background: "linear-gradient(to bottom right, #BFD4E4, #042E61)", height: "100vh" }} >
        <h1 className="text-5xl font-semibold mb-2" style={{ color: "#042E61", fontFamily: 'Cormorant Garamond, serif' }}>Luxura Furni</h1>
        <p className="text-xl mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Toko Furniture</p>
        <button className="bg-indigo-900 hover:bg-indigo-800 text-white text-lg px-6 py-2 rounded-full shadow-md transition" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          About Me
        </button>
      </div>
      <Service style={{ fontFamily: 'Cormorant Garamond, serif', backgroundColor : "#BFD4E4" }}/>
      <Product/>
    </div>
  );
}
