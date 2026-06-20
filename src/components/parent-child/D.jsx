import React from 'react';
import E from "./E";

const dStyle ={
    width: "300px",
    boxShadow: "0 0 10px green",
    textAlign: "center",
    padding:"20px",
    margin: "20px auto"
};

function D (Props){
    return(
        <div style={dStyle}>
            <h5>D Component</h5>
            {/* <p>Name = {Props.info}</p> */}
            <E info={Props.info}/>
        </div>
    )
}
export default D;