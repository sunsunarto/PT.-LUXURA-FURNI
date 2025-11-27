import Header from "./Header";
import Footer from "./Footer";

export default function LayoutApp({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main >{children}</main>
      <Footer />
    </div>
  );
}
