import React from 'react';
import SecData from './secContext';
import { useContext, useState } from 'react';
import SecDetails from './SecDetails';


const bStyle ={
    width: "600px",
   boxShadow: "0 0 10px red",
    textAlign:"center",
    padding:"20px",
    margin: "50px auto"
};

export default function SecHome() {

  let [state, setState] = useState();

  return (
    <div style={bStyle}>
        <h3>Sec Home</h3>
        <br />
        <h3>Data : {state}</h3>
        
          <SecDetails setData={setState}/>

    </div>
  )
}
