import React from 'react'
import { useState } from 'react';
import SecData from './secContext';


const aStyle = {
    width: "500px",
    boxShadow: "0 0 10px blue",
    textAlign: "center",
    padding: "20px",
    margin: "30px auto"
};

export default function SecDetails({setData}) {

    let [childData, setChildData] = useState();
    return (
        <div style={aStyle}>
            <h3>Sec Details</h3>
            <br /><br />
            <input type="text" onChange={(event)=>{
                setChildData(event.target.value);
            }}/>
            <br /><br />
            <button onClick={() => {
                setData(childData);
            }}>submit</button>


        </div>

    )
}
