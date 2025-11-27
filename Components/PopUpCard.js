import { Modal, Button } from "antd";

export default function PopUpCart({ cartItems, visible, onClose }) {
  if (!cartItems || cartItems.length === 0) return null;

  return (
    <Modal
      title="Your Cart"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
        <Button key="checkout" type="primary">
          Checkout
        </Button>,
      ]}
    >
      <div style={{ textAlign: "center" }}>
        {cartItems.map((item, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img
              src={item.image}
              alt={item.name?.en || item.name?.id}
              style={{ maxHeight: "150px", marginBottom: "8px" }}
            />
            <p><strong>{item.name?.en || item.name?.id}</strong></p>
            <p>Rp {item.price}</p>
            <p>{item.category}</p>
            <hr />
          </div>
        ))}
      </div>
    </Modal>
  );
}