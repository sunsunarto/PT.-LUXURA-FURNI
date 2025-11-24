import { useContext } from "react";
import { Button } from "antd";
import { LanguageContext } from "../context/LanguageContext.js";

export default function Languages() {
  const { language, setLanguage } = useContext(LanguageContext);

  const languageNames = {
    en: "English",
    id: "Bahasa Indonesia",
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "id" : "en");
  };

  return (
    <div style={{ padding: "8px 16px", fontFamily: 'Cormorant Garamond, serif'}}>
      <Button
        type="primary"
        style={{
          borderRadius: 30,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          backgroundColor: "#3949AB",
          color: "#fff",
          fontSize: "20px",
          fontFamily: 'Cormorant Garamond, serif'
        }}
        onClick={toggleLanguage}
      >
        {languageNames[language]}
      </Button>
    </div>
  );
}
