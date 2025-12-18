import React from "react";
import { Space } from "antd";

export default function Service() {
  return (
    <div
      style={{
        padding: "48px 24px",
        fontFamily: "Cormorant Garamond, serif",
        backgroundColor: "white",
      }}
    >
      <Space
        direction="horizontal"
        size="large"
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Service Image 1 */}
        <div
          className="service-image1"
          style={{
            flex: "1 1 300px",
            maxWidth: "389px",
            backgroundColor: "#BFD4E4",
            height: "245px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <img
            src="/Screenshot 2025-11-12 195039.png"
            alt="Service Image"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Service Image 2 */}
        <div
          className="service-image2"
          style={{
            flex: "1 1 300px",
            maxWidth: "389px",
            backgroundColor: "#BFD4E4",
            height: "245px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <img
            src="/Screenshot 2025-11-12 195408.png"
            alt="Service Image"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Service Image 3 */}
        <div
          className="service-image3"
          style={{
            flex: "1 1 300px",
            maxWidth: "389px",
            backgroundColor: "#BFD4E4",
            height: "245px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <img
            src="/Screenshot 2025-11-12 195550.png"
            alt="Service Image"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </Space>
    </div>
  );
}