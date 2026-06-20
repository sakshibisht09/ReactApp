import React, { useRef } from 'react'

export default function RefDom() {

    let hRef = useRef(null);
    let bRef = useRef(null);

  
    
    let changeUsingRef = ()=>{

        hRef.current.style.color ="red";
        hRef.current.style.fontsize = "50px";

        bRef.current.style.color ="blue";
        bRef.current.style.padding = "10px";

    }

  return (
    <div>
        <h3>RefDom</h3>
        <br />
        <p id='title' ref={hRef}>this is RefDom</p>
        <br />
        <br />
        <button ref={bRef} onClick={changeUsingRef}>submit button</button>
    </div>
  )
}
