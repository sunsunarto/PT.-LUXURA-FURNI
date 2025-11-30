import {useContext} from "react"
import {LanguageContext} from "../context/LanguageContext"
import {translations} from "../utils/i18n"

export default function About (){
    const {language} = useContext(LanguageContext);
    const t = translations[language];

    return(
        <div className="Main About" style={{backgroundColor: "white", fontFamily: "Cormorant Garamond, serif", }}>
            <div className="About-Content" style={{ display: "flex", flexDirection: "column", background: "linear-gradient(to bottom right, #BFD4E4, #527098)", color: "black"  , padding: 50}}>
                <div className="about-title" style={{fontSize: 40, color: "#001C3F", fontWeight: "lighter" }}>
                    <h1>{t.AboutMe}</h1>
                </div>
                <div className="about-text1" style={{marginTop: "20px" }}>
                    <p style={{fontSize: 20, width: "50%"}}>{t.about1}</p>
                </div>
                <div className="about-text2" style={{ display: "flex ", justifyContent: "end", marginTop: "20px", textAlign: "right" }}>
                    <p style={{fontSize: 20, width: "50%" }}>{t.about2}</p>
                </div>
            </div>
            <div className="Vission-Mission" style={{ display: "flex", flexDirection: "column", background: "white", color: "black"}}>
                <div className="vission" style={{ fontSize: 30, padding: 20,}}>
                    <h1 style={{paddingLeft: "20px"}}>{t.vission}</h1>
                    <p style={{ fontSize: 20, width: "60%"}}>{t.vissionText}</p>
                </div>
                <div className="mission" style={{ fontSize: 30, padding: 20, display: "flex", flexDirection: "column", alignItems: "end", textAlign: "right" }}>
                    <h1 style={{paddingRight: "20px"}}>{t.mission}</h1>
                    <p style={{ fontSize: 20, width: "60%" }}>{t.missionText}</p>
                </div>

            </div>
        </div>
    );
};