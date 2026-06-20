import React from 'react';
import Data from "./context"; 
import { useState } from "react";
import J from "./J";

function I (){

     const [state, setState] = useState("____")

    return(
        <div>
            <h1>I component</h1>
            <button onClick={()=>{
                setState("Sakshi")
            }}>enter</button>
            <hr />
            <Data.Provider value ={state}>
                <J/>
            </Data.Provider>
        </div>

    )
}


export default I;