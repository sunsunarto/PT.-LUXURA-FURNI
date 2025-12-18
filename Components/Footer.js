import { useContext } from "react";
import { Typography, Space } from "antd";
import { InstagramOutlined } from "@ant-design/icons";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/i18n";

const { Title, Text } = Typography;

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div
      style={{
        backgroundColor: "#042E61",
        color: "#fff",
        padding: "32px 24px",
        fontFamily: "Cormorant Garamond, serif",
      }}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div
          className="footer-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            src="/Logo Perusahaan/IMG-20251105-WA0003.jpg"
            alt="Luxura Furni Logo"
            style={{ width: 120, height: "auto" }}
          />
          <div
            className="text"
            style={{
              display: "flex",
              flexDirection: "column",
              borderLeft: "1px solid #fff",
              paddingLeft: 12,
              gap: 4,
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <Title
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: 0,
              }}
            >
              LUXURA FURNI
            </Title>
            <Text style={{ color: "#fff", fontSize: "0.9rem" }}>{t.store}</Text>
          </div>
        </div>
        <div
          className="footer-info"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <div className="address" style={{ flex: "1 1 200px", maxWidth: "250px" }}>
            <Title level={4} style={{ color: "#fff", marginBottom: 8 }}>
              {t.address}
            </Title>
            <Text style={{ color: "#fff" }}>
              Jl. Krendang Raya 107 AB Duri Utara, Tambora, Jakarta Barat
            </Text>
          </div>

          <div className="phone" style={{ flex: "1 1 200px", maxWidth: "250px" }}>
            <Title level={4} style={{ color: "#fff", marginBottom: 8 }}>
              {t.telp}
            </Title>
            <Text style={{ color: "#fff" }}>+62 877-4023-6169</Text>
          </div>

          <div className="email" style={{ flex: "1 1 200px", maxWidth: "250px" }}>
            <Title level={4} style={{ color: "#fff", marginBottom: 8 }}>
              Email
            </Title>
            <Text style={{ color: "#fff" }}>luxurafurni.store@gmail.com</Text>
          </div>

          <div className="social" style={{ flex: "1 1 200px", maxWidth: "250px" }}>
            <Title level={4} style={{ color: "#fff", marginBottom: 8 }}>
              {t.follow}
            </Title>
            <Text
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              <InstagramOutlined />
            </Text>
          </div>
        </div>
        <Text
          style={{
            marginTop: 16,
            fontSize: "0.8rem",
            color: "#fff",
            textAlign: "center",
            display: "block",
          }}
        >
          PT. LUXURA FURNI | 2025 | All Rights Reserved
        </Text>
      </Space>
    </div>
  );
}
