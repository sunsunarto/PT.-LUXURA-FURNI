import React from "react";
import { Card, Button } from "antd";

export default function OrderCard({ order, onViewDetails }) {
    return (
        <Card
            style={{ width: 300, margin: 10 }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
        >
            <Card.Meta title={order.name} description={order.description} />
            <Button type="primary" onClick={() => onViewDetails(order)}>
                View Details
            </Button>
        </Card>
    );
}