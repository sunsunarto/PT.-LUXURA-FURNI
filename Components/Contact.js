import {useContext} from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { translations } from "@/utils/i18n";

export default function Contact (){
    const {language} = useContext(LanguageContext)
    const t = translations[language]
    return(
        <div className="contact" style={{backgroundColor: "white", color: "black" }}>
            <h1 style={{padding: "20px 32px", fontSize: "40px", fontWeight:"bold", color: "#042E61"}}>{t.contact}</h1>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                <div className="left" style={{display: "flex", flexDirection: "column", gap: "20px", marginRight: "20px"}}>
                    <div className="whatsapp">
                        <h2 style={{fontSize: "15px", color: "black"}}>Whatsapp</h2>
                        <p style={{fontSize: "30px", color: "#042e61", fontWeight:"bold"}}>+62 877-4023-6169</p>
                    </div>
                    <div className="email">
                        <h2 style={{fontSize: "20px", color: "#94A9CF", fontWeight:"bold" }}>Email</h2>
                        <p style={{fontSize: "20px", color: "#40648F", fontWeight:"bold"}}>luxurafurni.store@gmail.com</p>
                    </div>
                    <div className="address">
                        <h2 style={{fontSize: "20px", color: "#94A9CF", fontWeight:"bold" }}>{t.address}</h2>
                        <p style={{fontSize: "20px", color: "#40648F", width: "342px", fontWeight:"bold"}}>Jl. Krendang Raya 107 AB Duri Utara, Tambora, Jakarta Barat</p>
                    </div>
                </div>
                <div className="right" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <form style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "40px" }}>
                        <input type="text" placeholder={t.name} required style={{backgroundColor: "#94A9CF", color : "black", width: "657px", height: "32px",borderRadius: "5px" }}/>
                        <input type="email" placeholder="Email" required style={{backgroundColor: "#94A9CF", color : "black", height: "32px", borderRadius: "5px" }}/>
                        <input type="text" placeholder={t.subject} required style={{backgroundColor: "#94A9CF", color : "black", height: "32px", borderRadius: "5px" }}/>
                        <textarea placeholder={t.message} required style={{backgroundColor: "#94A9CF", color : "black", height: "147px", borderRadius: "5px" }}></textarea>
                        <button type="submit" style={{backgroundColor: "#042E61",  color : "white", borderRadius: "5px", fontWeight: "bold", height: "32px" }}>{t.send}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}