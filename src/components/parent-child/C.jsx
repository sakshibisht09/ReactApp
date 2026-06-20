import React from 'react';
import D from "./D";

const cStyle ={
    width: "400px",
    boxShadow: "0 0 10px red",
    textAlign: "center",
    padding:"20px",
    margin: "30px auto"
};

function C (Props){
    return(
        <div style={cStyle}>
            <h4>C Component</h4>
            {/* <p>Name = {Props.info}</p> */}
            <D info={Props.info}/>
        </div>
    )
}
export default C;