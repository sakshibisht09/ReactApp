import React from 'react';
import MyData from './newContext'
import { useContext } from 'react';


const bStyle ={
    width: "500px",
    boxShadow: "0 0 10px blue",
    textAlign:"center",
    padding:"20px",
    margin: "30px auto"
};

export default function Details() {

  let data = useContext(MyData)

  return (
    <div style={bStyle}>
        <h3>Details</h3>
        <br />
        <h3>Data : {data}</h3>
    </div>
  )
}
