import React, { useState, useRef } from 'react'

 function Timer() {

     let [timer, setTimer] = useState(0);
      // let [timerId, setTimerId] = useState(0);
    // var value ;
    
    let timerId = useRef();

    // let timerStart =()=>{
    //    timerId = setTimerId(setInterval(()=>{
    //     setTimer((hello) => hello+1);
    //     console.log("working");
    //    },1000)) 
    // }

    let timerStart =()=>{
      timerId.current =(setInterval(()=>{
        setTimer((hello) => hello+1);
        console.log("working");
      },1000))
    }

    let resetTimer = ()=>{
      setTimer(0);
    }

    let stopTimer = ()=>{
      clearInterval(timerId.current)
    }
  return (
    <div style={{
        width:"500px",
        margin: "100px",
        textAlign: "center",
        boxShadow: "0 0 10px black",
        padding: "50px"
    }}>
        <h3>Timer Value : {timer}</h3>

        <button onClick={timerStart}>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={resetTimer}>clear</button>
    </div>
    
  )
}

export default Timer