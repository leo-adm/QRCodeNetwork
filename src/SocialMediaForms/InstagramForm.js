import React, {useState} from "react";
import "../index.css"

function InstagramForm({setLink}){
    const [acc, setAcc] = useState("");

    function generateLinks(){
        if(acc !== ""){
            setLink(`https://instagram.com/${acc}`)
        }
        else{
            alert("Fields must be filled!")
        }
    }

    return (
        <div className="formContainer">
            <h3>Account Name:</h3>
            <input 
                type="text"
                value={acc}
                onChange={e => setAcc(e.target.value)}
            />

            <button 
                onClick={generateLinks}
                className="generateButton instabtn">
                Generate
            </button>
        </div>
        
    )
}

export default InstagramForm