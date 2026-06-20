import React from 'react';
const eStyle ={
    width: "200px",
    boxShadow: "0 0 10px blue",
    textAlign: "center",
    padding:"10px",
    margin: "10px auto"
};

function E (Props){
    return(
        <div style={eStyle}>
            <h6>E Component</h6>
            <p>Name = {Props.info}</p>
        </div>
    )
}
export default E;