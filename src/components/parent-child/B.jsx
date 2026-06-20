import React from 'react';
import C from "./C";

const bStyle ={
    width: "500px",
    boxShadow: "0 0 10px blue",
    textAlign:"center",
    padding:"20px",
    margin: "30px auto"
};

function B(Props){
    return(
        <div style={bStyle}>
            <h3>B Component</h3>
            {/* <p>Name = {Props.info}</p> */}
            <C info={Props.info}/>
        </div>
    )
}

export default B;