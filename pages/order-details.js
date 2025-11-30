import { useRouter} from "next/router";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/i18n";

export default function OrderDetails() {
  const router = useRouter();
  const { cartItems } = useContext(CartContext);
  const { totalPrice } = router.query;
  const  {language} = useContext(LanguageContext)
  const t = translations[language]
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalPayment = totalPrice
      ? Number(totalPrice)
      : cartItems.reduce((sum, item) => sum + item.price, 0);

    alert(
      `Nama: ${firstName} ${lastName}\nEmail: ${email}\nNomor Telepon: ${phone}\nTotal Pembayaran: Rp ${totalPayment.toLocaleString(
        "id-ID"
      )}`
    );

    router.push("/");
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "80px",
          backgroundColor: "#40648F",
          fontFamily: "Cormorant Garamond, serif",
        }}
      >
        <h1
          style={{
            marginBottom: "16px",
            color: "#042E61",
            fontSize: "70px",
          }}
        >
          Order <span style={{ color: "#BFD4E4" }}>Details</span>
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          gap: "32px",
          padding: "32px",
          margin: "0 auto",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "16px" }}>{t.yourDetails}</h2>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <label style={{ display: "flex", flexDirection: "column" }}>
              Email*
              <input
                type="email"
                style={{backgroundColor: "#D9D9D9", borderRadius: "5px"}}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div style={{ display: "flex", gap: "12px" }}>
              <label style={{ display: "flex", flexDirection: "column" }}>
                {t.name1}*
            <input
              type="text"
              required
              style={{backgroundColor: "#D9D9D9", borderRadius: "5px"}}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            </label>
            <label style={{ display: "flex", flexDirection: "column" }}>
              {t.name2}*
              <input
                type="text"
                required
                style={{backgroundColor: "#D9D9D9", borderRadius: "5px"}}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column" }}>
              {t.telp}*
              <input
                type="tel"
                style={{backgroundColor: "#D9D9D9", borderRadius: "5px"}}
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>{t.metode}</label>
              <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
                <input
                  type="radio"
                  name="method"
                  value="cod"
                  checked={method === "cod"}
                  onChange={(e) => setMethod(e.target.value)}
                />
                <span>{t.pay1}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
                <input
                  type="radio"
                  name="method"
                  value="transfer"
                  checked={method === "transfer"}
                  onChange={(e) => setMethod(e.target.value)}
                />
                <span>{t.pay2}</span>
              </div>
            </div>
            <label style={{ display: "flex", flexDirection: "column" }}>
              {t.address}*
              <input
                type="text"
                style={{backgroundColor: "#D9D9D9"}}
                required
              />
            </label>
            <button
              type="submit"
              style={{
                marginTop: "16px",
                padding: "12px 24px",
                backgroundColor: "#94A9CF",
                color: "#000",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Check Out
            </button>
          </form>
        </div>

        <div
          style={{
            flex: 1,
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "24px",
          }}
        >
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{ display: "flex", gap: "12px", marginBottom: "16px" }}
            >
              <img
                src={item.image}
                alt={item.name?.id || item.name?.en}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <div>
                <p>{item.name?.id || item.name?.en}</p>
                <p>Rp {item.price.toLocaleString("id-ID")}</p>
              </div>
            </div>
          ))}
          <hr style={{ margin: "16px 0" }} />
          <p>{t.ProductTotal}: {cartItems.length}</p>
          <p>
           {t.money} Rp{" "}
            {totalPrice
              ? Number(totalPrice).toLocaleString("id-ID")
              : cartItems
                  .reduce((sum, item) => sum + item.price, 0)
                  .toLocaleString("id-ID")}
          </p>
        </div>
      </div>
    </div>
  );
}
