import { useState, useEffect, useContext } from "react";
import { Card, Row, Col, Empty, Button } from "antd";
import { translations } from "../utils/i18n.js";
import { LanguageContext } from "../context/LanguageContext.js";

export default function Product() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data/Products.json");
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : data?.products || []);
      } catch (error) {
        console.error("Failed to load products data:", error);
      }
    };
    fetchData();
  }, []);

  const normalizeText = (val) => (val ? String(val).toLowerCase() : "");
  const query = normalizeText(searchQuery);

  const filteredProducts = products.filter((product) => {
    const nameId = normalizeText(product?.name?.id);
    const nameEn = normalizeText(product?.name?.en);
    const category = normalizeText(product?.category);
    return (
      nameId.includes(query) ||
      nameEn.includes(query) ||
      category.includes(query)
    );
  });

  return (
    <div>
      <div
        className="searchBar"
        style={{
          backgroundColor: "#BFD4E4",
          padding: 16,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: 8,
            width: 380,
            color: "white",
            backgroundColor: "#042E61",
            border: "none",
            borderRadius: 50,
          }}
        />
      </div>

      {filteredProducts.length === 0 ? (
        <Empty
          description={t.noProducts}
          style={{ backgroundColor: "#BFD4E4" }}
        />
      ) : (
        <Row gutter={[16, 16]} style={{ backgroundColor: "#BFD4E4" }}>
          {filteredProducts.map((product) => (
            <Col
              xs={10}
              sm={10}
              md={10}
              lg={8}
              key={product.id}
              style={{ backgroundColor: "#BFD4E4", padding: 32 }}
            >
              <Card hoverable style={{ backgroundColor: "#40648F", color: "white", borderRadius: 0}}>
                <div style={{backgroundColor: "white", height: "273px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name?.[language]}
                      style={{ height: "273px" }}
                    />
                  )}
                </div>
                <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20}}>{product.name?.[language]}</h1>
                <p> Rp {product.price}</p>
                <Button type="primary" style={{ backgroundColor: "#BFCDE4", borderRadius: 50, border: "none", color: "white", fontFamily: 'Cormorant Garamond, serif', fontSize: 20, width: "100%", height: "40px", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "black"}}>{t.addToCart}</Button>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
