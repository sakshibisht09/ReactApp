import React from 'react';
import { useState } from "react";
import B from "./B";

const aStyle ={
    width: "600px",
    boxShadow: "0 0 10px red",
    textAlign:"center",
    padding:"20px",
    margin: "50px auto"
};

function A(){

    const [state, setState] = useState("____")

    return(
        <div style={aStyle}>

            <h2>A Component</h2>

            <button onClick={()=>{
                setState("Asif")
            }}>Enter</button>

            <B info={state}/>
        </div>
    )
}

export default A;