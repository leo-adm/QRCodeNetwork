import React, {useState} from "react";
import "./index.css"

function MainPage(){
    var QRCode = require("qrcode.react")

    const [num, setNum] = useState("");
    const [msg, setMsg] = useState("");
    const [link, setLink] = useState("");

    function numberChanged(text){
        if(!isNaN(text)){
            setNum(text)
        }
    }

    function generateLinks(){
        if(num !== "" && msg !== ""){
            var encodedMsg = encodeURI(msg)
            setLink(`https://api.whatsapp.com/send?phone=${num}&text=${encodedMsg}`)
        }
        else{
            alert("Fields must be filled!")
        }
    }

    function copyText(){
        var linkText = document.getElementById("linkInput");
        linkText.select();
        linkText.setSelectionRange(0, 99999);/* For mobile devices */
        document.execCommand("copy");
    }

    return (
        <div>

            <header>

                <h1>Whatsapp Message Generator</h1>
                <p>Create links and QRCodes for predefined whatsapp messages!</p>

            </header>

            <main>

                <h3 style={{marginTop:"0px"}}>Phone number:</h3>
                <input 
                    type="text"
                    value={num}
                    placeholder="ex.: 5551999944555"
                    onChange={e => numberChanged(e.target.value)}
                />
                <p>Make sure you type the country and area code</p>

                <h3>Message:</h3>
                <textarea
                    type="text"
                    value={msg}
                    placeholder="Message here"
                    onChange={e => setMsg(e.target.value)}
                />

                <button onClick={generateLinks}>GENERATE</button>
                
                <input 
                    type="text" 
                    value={link} 
                    id="linkInput"
                    style={link === "" ? {display:"none"} : {display:"block"}}
                />

                <button 
                    style={link === "" ? {display:"none"} : {display:"block"}}
                    onClick={copyText}
                >
                    Copy Link
                </button>

                <QRCode 
                    value={link}
                    style={link === "" ? {display:"none"} : {display:"flex", height:"300px"}}
                    size="200" includeMargin="true" bgColor="#f5f5f5"
                />

            </main>

        </div>
        
    )
}

export default MainPage