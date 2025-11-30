import { Drawer, Button } from "antd";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/router";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/i18n";

export default function PopUpCart({ cartItems, visible, onClose }) {
  const { language } = useContext(LanguageContext);
  const t = translations[language]; 
  const { removeItem } = useContext(CartContext);
  const router = useRouter();

  if (!cartItems || cartItems.length === 0) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    router.push({
      pathname: "/order-details",
      query: { totalPrice },
    });
    onClose();
  };

  return (
    <Drawer
      title={t.cartTitle}
      placement="right"
      onClose={onClose}
      open={visible}
      width={360}
      bodyStyle={{ padding: "16px" }}
      style={{ backgroundColor: "#40648F", color: "white"}}
    >
      <div>
        {cartItems.map((item, index) => (
          <div
            key={`${item.name?.id || item.name?.en}-${index}`}
            style={{
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src={item.image}
              alt={item.name?.id || item.name?.en}
              style={{
                maxHeight: "70px",
                marginBottom: "8px",
                borderRadius: "8px",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
              <p style={{ marginBottom: "4px" }}>
                {item.name?.[language] || item.name?.en}
              </p>
              <p style={{ marginBottom: "4px" }}>
                Rp {item.price.toLocaleString("id-ID")}
              </p>
            </div>
            <Button
              danger
              size="small"
              onClick={() => removeItem(item.id)}
              style={{backgroundColor: "#D9D9D9", color: "black", borderRadius: "20px"}}
            >
              {t.erease}  
            </Button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontWeight: "bold", fontSize: "16px" }}>
          {t.total}: Rp {totalPrice.toLocaleString("id-ID")}
        </p>
        <Button
          type="primary"
          style={{ marginTop: "12px", backgroundColor: "#D9D9D9", color: "black", borderRadius: "20px" }}
          onClick={handleCheckout}
        >
          {t.checkout}
        </Button>
      </div>
    </Drawer>
  );
}
