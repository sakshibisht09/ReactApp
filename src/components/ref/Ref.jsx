import React from 'react';
import { useState } from "react";


const refStyle = {
    width: "500px",
    height: "100px",
    texAlign: "center",
    boxShadow: "0 0 10px red",
    display: "flex",
    padding: "40px",
    justifyContent: "space-around",
    margin: "50px auto"
};

function Ref() {


    let [state, setState] = useState(null);
    let [data, setData] = useState();

    let value;

    let stateData = () => {
        setState(140)
    }

    let updateValue= () => {
        value= 10000;
    }
    let updateData = ()=>{
        setData(5000);
    }

    let display = () => {
        console.log("state : ",state);
        console.log("value : ",value);
        console.log ("data : ", data);
    }

    return (
        <div>
            <h2>Ref Component</h2>
            <br />
            <h3>Data : {state}</h3>


            <div style={refStyle}>
                <button onClick={ stateData}>state</button>
                <button onClick={updateValue}>Update</button>
                 <button onClick={updateData}>data</button>
                <button onClick={display}>Display</button>
            </div>
        </div>
    )
}

export default Ref