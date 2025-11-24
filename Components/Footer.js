import { Typography, Space } from "antd";
import { InstagramOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#1A237E",
        color: "#fff",
        padding: "32px 24px",
        fontFamily: 'Cormorant Garamond, serif'
      }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <div className="footer logo" style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: 'Cormorant Garamond, serif'}}>
          <img
            src="/Logo Perusahaan/IMG-20251105-WA0003.jpg"
            alt="Luxura Furni Logo"
            style={{ width: 120, height: "auto" }}
          />
          <div className="text" style={{ display:"flex", flexDirection: "column", borderLeft: "1px solid #fff", paddingLeft: 12, gap : 4, justifyContent: "start", }}>
            <Title style={{ color: "#fff", fontSize: 24, fontWeight: "bold", margin: 0, fontFamily: 'Cormorant Garamond, serif' }}>
              LUXURA FURNI
            </Title>
            <Text style={{ color: "#fff", fontSize: 12, fontFamily: 'Cormorant Garamond, serif' }}>
              Furniture Store
            </Text>
          </div>
        </div>
        <Space direction="horizontal" align="start" size={64}>
          <div className="address">
            <Title level={4} style={{ color: "#fff", marginBottom: 8, maxWidthwidth : "250px", fontFamily: 'Cormorant Garamond, serif' }}>
              Address
            </Title>
            <Text style={{ color: "#fff", maxWidthwidth : "250px", fontFamily: 'Cormorant Garamond, serif' }}>
              Jl. Krendang Raya 107 AB Duri Utara, Tambora, Jakarta Barat
            </Text>
          </div>
          <div className="phone" style={{ marginLeft: 48 }}>
            <Title level={4} style={{ color: "#fff", marginBottom: 8 , fontFamily: 'Cormorant Garamond, serif'}}>
              Phone
            </Title>
            <Text style={{ color: "#fff", fontFamily: 'Cormorant Garamond, serif' }}>
              +62 877-4023-6169
            </Text>
          </div>
          <div className="email" style={{ marginLeft: 48 }}>
            <Title level={4} style={{ color: "#fff", marginBottom: 8, fontFamily: 'Cormorant Garamond, serif' }}>
              Email
            </Title>
            <Text style={{ color: "#fff", fontFamily: 'Cormorant Garamond, serif' }}>
              luxurafurni.store@gmail.com
            </Text>
          </div>
          <div className="sosial media" style={{ marginLeft: 48 }}>
            <Title level={4} style={{ color: "#fff", marginBottom: 8, fontFamily: 'Cormorant Garamond, serif' }}>
              Follow Us
            </Title>
            <Text style={{ color: "#fff", fontSize: 20, cursor: "pointer", fontFamily: 'Cormorant Garamond, serif' }}>
              <InstagramOutlined />
            </Text>
          </div>
        </Space>

        <Text style={{ marginTop: 16, fontSize: 12, color: "#fff", textAlign: "center", display: "block", fontFamily: 'Cormorant Garamond, serif' }}>
          PT. LUXURA FURNI | 2025 | All Rights Reserved
        </Text>
      </Space>
    </div>
  );
}
