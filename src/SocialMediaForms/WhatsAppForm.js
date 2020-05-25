import React, {useState} from "react";
import "../index.css"

function WhatsAppForm({setLink}){
    const [num, setNum] = useState("");
    const [msg, setMsg] = useState("");

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

    return (
        <div className="formContainer">
            <h3>Phone number:</h3>
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

            <button 
                onClick={generateLinks}
                className="generateButton whatsbtn">
                Generate
            </button>
        </div>
        
    )
}

export default WhatsAppForm