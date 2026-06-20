

import React from 'react'
import { useState } from 'react';
import MyData from './newContext';
import Details from './Details';

const aStyle ={
    width: "600px",
    boxShadow: "0 0 10px red",
    textAlign:"center",
    padding:"20px",
    margin: "50px auto"
};

export default function HomeComp() {
 
  let[data, setData] = useState();
  let [pData, setPData] = useState();
 return (
    <div style={aStyle}>
      <h3>HomeComp</h3>
      <input type="text" onChange={(event)=>{
        setData(event.target.value);
      }} />

      <button onClick={()=>{
        setPData(data);
      }}>submit</button>
    

    <MyData.Provider value={pData}>
          <Details/>
    </MyData.Provider>
    </div>
  
  )
}
