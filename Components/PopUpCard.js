import { Drawer, Button } from "antd";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function PopUpCart({ cartItems, visible, onClose }) {
  const { removeItem } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Drawer
      title="🛒 Keranjang"
      placement="right"
      onClose={onClose}
      open={visible}
      width={360}
      bodyStyle={{ padding: "16px" }}
    >
      <div>
        {cartItems.map((item, index) => (
          <div key={item.id || index} style={{ marginBottom: "24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <img
              src={item.image}
              alt={item.name?.id || item.name?.en}
              style={{ maxHeight: "70px", marginBottom: "8px", borderRadius: "8px" }}
            />
            <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
              <p style={{ marginBottom: "4px" }}>
                {item.name?.id || item.name?.en}
              </p>
              <p style={{ marginBottom: "4px" }}>Rp {item.price.toLocaleString("id-ID")}</p>
            </div>
            <Button
              danger
              size="small"
              onClick={() => removeItem(item.id)}
            >
              Hapus
            </Button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontWeight: "bold", fontSize: "16px" }}>
          Total: Rp {totalPrice.toLocaleString("id-ID")}
        </p>
        <Button type="primary" style={{ marginTop: "12px" }}>
          Checkout
        </Button>
      </div>
    </Drawer>
  );
}
