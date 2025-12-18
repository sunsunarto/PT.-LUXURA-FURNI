import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { translations } from "@/utils/i18n";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div
      className="contact"
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "20px",
      }}
    >
      <h1
        style={{
          padding: "20px 0",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#042E61",
          textAlign: "center",
        }}
      >
        {t.contact}
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "40px",
          marginTop: "20px",
        }}
      >
        <div
          className="left"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            flex: "1 1 300px",
            maxWidth: "400px",
          }}
        >
          <div className="whatsapp">
            <h2 style={{ fontSize: "1rem", color: "black" }}>Whatsapp</h2>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#042e61",
                fontWeight: "bold",
              }}
            >
              +62 877-4023-6169
            </p>
          </div>
          <div className="email">
            <h2
              style={{
                fontSize: "1.2rem",
                color: "#94A9CF",
                fontWeight: "bold",
              }}
            >
              Email
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#40648F",
                fontWeight: "bold",
                wordBreak: "break-word",
              }}
            >
              luxurafurni.store@gmail.com
            </p>
          </div>
          <div className="address">
            <h2
              style={{
                fontSize: "1.2rem",
                color: "#94A9CF",
                fontWeight: "bold",
              }}
            >
              {t.address}
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#40648F",
                fontWeight: "bold",
              }}
            >
              Jl. Krendang Raya 107 AB Duri Utara, Tambora, Jakarta Barat
            </p>
          </div>
        </div>

        <div
          className="right"
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1 1 300px",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginBottom: "40px",
              width: "100%",
            }}
          >
            <input
              type="text"
              placeholder={t.name}
              required
              style={{
                backgroundColor: "#94A9CF",
                color: "black",
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                padding: "8px",
              }}
            />
            <input
              type="email"
              placeholder="Email"
              required
              style={{
                backgroundColor: "#94A9CF",
                color: "black",
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                padding: "8px",
              }}
            />
            <input
              type="text"
              placeholder={t.subject}
              required
              style={{
                backgroundColor: "#94A9CF",
                color: "black",
                width: "100%",
                height: "40px",
                borderRadius: "5px",
                padding: "8px",
              }}
            />
            <textarea
              placeholder={t.message}
              required
              style={{
                backgroundColor: "#94A9CF",
                color: "black",
                width: "100%",
                minHeight: "150px",
                borderRadius: "5px",
                padding: "8px",
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                backgroundColor: "#042E61",
                color: "white",
                borderRadius: "5px",
                fontWeight: "bold",
                height: "40px",
              }}
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
