import React from "react";
import { useReducer } from "react";
import reducerFn from "./reducerFn";

function Reducer(){

    const [ state, dispatch]= useReducer(reducerFn,0);

    let increase = ()=>{
        dispatch({type : 'INC'})
    }
    let decrease = ()=>{
        dispatch({type : 'DEC'})
    }
    let reset = ()=>{
        dispatch({type : 'RESET'})
    }

    return(
        <div className="main">
            <h1>Count{state}</h1>
            <div className="btn">
                <button onClick={increase}>increase</button>
                <button onClick={decrease}>decrease</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Reducer;