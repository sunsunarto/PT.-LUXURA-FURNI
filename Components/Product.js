import { useState, useEffect, useContext } from "react";
import { Card, Row, Col, Empty, Button } from "antd";
import { translations } from "../utils/i18n";
import { LanguageContext } from "../context/LanguageContext";
import { CartContext } from "../context/CartContext";

export default function Product() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false); // ✅ toggle state
  const { language } = useContext(LanguageContext);
  const { addToCart } = useContext(CartContext);
  const t = translations[language];

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
    return nameId.includes(query) || nameEn.includes(query) || category.includes(query);
  });

  // ✅ limit to 12 unless showAll is true
  const visibleProducts = showAll ? filteredProducts : filteredProducts.slice(0, 12);

  return (
    <div style={{ backgroundColor: "#BFD4E4", paddingBottom: 32 }}>
      <div
        style={{
          backgroundColor: "#BFD4E4",
          padding: 16,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder={t.search}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
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
        <Empty description={t.noProducts} style={{ backgroundColor: "#BFD4E4" }} />
      ) : (
        <>
          <Row gutter={[16, 16]} style={{ backgroundColor: "#BFD4E4" }}>
            {visibleProducts.map((product) => (
              <Col
                xs={8}
                sm={8}
                md={8}
                lg={8}
                key={product.id}
                style={{ backgroundColor: "#BFD4E4", padding: 32 }}
              >
                <Card hoverable style={{ backgroundColor: "#40648F", color: "white" }}>
                  <div
                    style={{
                      backgroundColor: "white",
                      height: "273px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name?.[language]}
                        style={{ height: "273px" }}
                      />
                    )}
                  </div>
                  <h1
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: 20,
                    }}
                  >
                    {product.name?.[language]}
                  </h1>
                  <p>Rp {product.price}</p>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: "#BFCDE4",
                      borderRadius: 50,
                      border: "none",
                      fontSize: 20,
                      width: "100%",
                      height: "40px",
                      marginTop: "10px",
                      color: "black",
                    }}
                    onClick={() => addToCart(product)}
                  >
                    {t.addToCart}
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredProducts.length > 12 && (
            <div style={{ textAlign: "center", marginTop: 20 }}>
              <Button
                type="default"
                onClick={() => setShowAll(!showAll)}
                style={{
                  borderRadius: 50,
                  fontSize: 16,
                  padding: "0 24px",
                  backgroundColor: "#042E61",
                  color: "white",
                }}
              >
                {showAll ? t.readLess || "Read Less" : t.readMore || "Read More"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
