import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { Table, Typography, Card, Spin, Alert } from "antd";
import gsap from "gsap";
import { LanguageContext } from "../context/LanguageContext.js";
import { translations } from "../utils/i18n.js";
import Languages from "../Components/Languages.js"; // ✅ cleaned import

const { Title, Paragraph } = Typography;

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language } = useContext(LanguageContext);
  const t = translations[language] || translations.en;
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("data/products.json");
        setProducts(response.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    gsap.from(cardRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: "power3.out",
    });
  }, []);

  const columns = [
    {
      title: t.table.name,
      dataIndex: "name",
      key: "name",
      render: (name) => (
        <strong>{name?.[language] || name?.en || t.untitled}</strong>
      ),
    },
    {
      title: t.table.category,
      dataIndex: "category",
      key: "category",
    },
    {
      title: t.table.price,
      dataIndex: "price",
      key: "price",
      render: (price) => (price ? `Rp ${price}` : "-"),
    },
    {
      title: t.table.quantity,
      dataIndex: "quantity",
      key: "quantity",
      render: (qty) => (qty ?? "-"),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Card
        ref={cardRef}
        bordered={false}
        style={{ boxShadow: "0 2px 8px #f0f1f2" }}
      >
        <Title level={2}>{t.home}</Title>
        <Paragraph>{t.welcome}</Paragraph>

        <Languages />

        {loading ? (
          <Spin tip={t.loading} />
        ) : error ? (
          <Alert message={t.error} description={error} type="error" showIcon />
        ) : (
          <Table
            dataSource={products}
            columns={columns}
            rowKey="id"
            pagination={false}
          />
        )}
      </Card>
    </div>
  );
}
