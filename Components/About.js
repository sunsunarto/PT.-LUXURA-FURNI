import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../utils/i18n";

export default function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div
      className="Main About"
      style={{
        backgroundColor: "white",
        fontFamily: "Cormorant Garamond, serif",
      }}
    >
      <div
        className="About-Content"
        style={{
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(to bottom right, #BFD4E4, #527098)",
          color: "black",
          padding: "5%",
        }}
      >
        <div
          className="about-title"
          style={{
            fontSize: "2.5rem",
            color: "#001C3F",
            fontWeight: "lighter",
            textAlign: "center",
          }}
        >
          <h1>{t.AboutMe}</h1>
        </div>

        <div
          className="about-text1"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            {t.about1}
          </p>
        </div>

        <div
          className="about-text2"
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            {t.about2}
          </p>
        </div>
      </div>
      <div
        className="Vission-Mission"
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          color: "black",
          padding: "5%",
          gap: "40px",
        }}
      >
        <div
          className="vission"
          style={{
            fontSize: "1.8rem",
            textAlign: "center",
          }}
        >
          <h1>{t.vission}</h1>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {t.vissionText}
          </p>
        </div>

        <div
          className="mission"
          style={{
            fontSize: "1.8rem",
            textAlign: "center",
          }}
        >
          <h1>{t.mission}</h1>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {t.missionText}
          </p>
        </div>
      </div>
    </div>
  );
}
