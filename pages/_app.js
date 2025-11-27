import "../Styles/globals.css";
import { ConfigProvider } from "antd";
import { LanguageProvider } from "../context/LanguageContext.js";
import { CartProvider } from "../context/CartContext.js";   // 👈 add this
import { useEffect } from "react";
import gsap from "gsap";

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const handleRouteChange = () => {
      gsap.fromTo(
        "main",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1677ff",
          borderRadius: 6,
        },
      }}
    >
      <LanguageProvider>
        <CartProvider>
          <main>
            <Component {...pageProps} />
          </main>
        </CartProvider>
      </LanguageProvider>
    </ConfigProvider>
  );
}

export default MyApp;
