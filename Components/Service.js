import react from "react";
import { Space } from "antd";

export default function Service() {
    return (
        <div style={{ padding: "48px 24px", fontFamily: 'Cormorant Garamond, serif', backgroundColor : "white" }}>
            <Space direction="horizontal" size="large" style={{ width: "100%", alignItems: "center", justifyContent: "center", gap: "10px" , flexWrap: "wrap" , justifyContent: "space-around"}}>
                <div className="service-image1" style={{ width: "389px", backgroundColor: "#BFD4E4", height: "245px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="/Screenshot 2025-11-12 195039.png" alt="Service Image" style={{ width: "350px", height: "auto" }}></img>
                </div>
                <div className="service-image2" style={{ width: "389px", backgroundColor: "#BFD4E4", height: "245px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="/Screenshot 2025-11-12 195408.png" alt="Service Image" style={{ width: "273px", height: "auto" }}></img>
                </div>
                <div className="service-image3" style={{ width: "389px", backgroundColor: "#BFD4E4", height: "245px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="/Screenshot 2025-11-12 195550.png" alt="Service Image" style={{ width: "273px", height: "auto" }}></img>
                </div>
            </Space>
        </div>
    );
}