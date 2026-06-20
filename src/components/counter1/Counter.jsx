import React from 'react';
import { useState } from "react"
import "./Counter.css"


function Counter(){

    let [count, setCount]= useState(0);

    let changeValue = ()=>{
        setCount(count+1);
    }
    return(
        <div id="card">
            <h1>Counter</h1>
            <h3>Value of Count = {count}</h3>
            <button onClick={changeValue}>Click</button>
        </div>
    )
}

export default Counter