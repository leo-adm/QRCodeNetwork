import React, {useState} from "react";
import "./index.css"

import WhatsAppForm from "./SocialMediaForms/WhatsAppForm"
import WhatsLogo from "./assets/whats.jpg"
import InstagramForm from "./SocialMediaForms/InstagramForm"
import InstaLogo from "./assets/insta.jpg"


function MainPage(){
    var QRCode = require("qrcode.react")

    const [link, setLink] = useState("");
    const [activeForm, setActiveForm] = useState("");

    function ActiveFormJsx(){
        switch (activeForm) {
            case "whatsapp":
                return (
                    <WhatsAppForm setLink={setLink} />
                )
            case "instagram":
                return (
                    <InstagramForm setLink={setLink} />
                )
            default:
                return (
                    <div><h4>Choose a social media</h4></div>
                )
        }
    }

    return (
        <div>

            <header>

                <h1>QRCode Network</h1>
                <p>Create QRCodes for your favorite social medias!</p>

                <button onClick={() => setActiveForm("whatsapp")} className="logoButton">
                    <img src={WhatsLogo} className="logo" alt="whatsapp logo"/>
                </button>
                <button onClick={() => setActiveForm("instagram")} className="logoButton">
                    <img src={InstaLogo} className="logo" alt="instagram logo"/>
                </button>
            </header>

            <main>

                <ActiveFormJsx/>

                <QRCode 
                    value={link}
                    className="qrcode"
                    style={link === "" && {display:"none"}}
                    size="200" includeMargin="true" bgColor="#2c2c2f" fgColor="#fff"
                />

            </main>

        </div>
        
    )
}

export default MainPage