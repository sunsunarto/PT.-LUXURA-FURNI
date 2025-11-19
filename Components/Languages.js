import { useState, useContext } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import { LanguageContext } from "../context/LanguageContext.js";

export default function Languages() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setDrawerVisible(false);
  };

  // Map language codes to display names
  const languageNames = {
    en: "English",
    id: "Bahasa Indonesia",
  };

  return (
    <div style={{ padding: "8px 16px" }}>
      <Button
        type="primary"
        style={{
          borderRadius: 4,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          backgroundColor: "#3949AB",
          color: "#fff",
        }}
        onClick={() => setDrawerVisible(true)}
      >
        {languageNames[language] || "Select Language"}
      </Button>

      <Drawer
        title="Select Language"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible} // ✅ AntD v5 uses `open` instead of `visible`
        bodyStyle={{ padding: 24 }}
      >
        <Radio.Group onChange={handleLanguageChange} value={language}>
          <Space direction="vertical">
            <Radio value="en">English</Radio>
            <Radio value="id">Bahasa Indonesia</Radio>
          </Space>
        </Radio.Group>
      </Drawer>
    </div>
  );
}
