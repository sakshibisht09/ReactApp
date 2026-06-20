import React from 'react';
import { useState } from "react";

function TestMap(){
    
    const [names]= useState(["sakshi","kimi","aditya","salman"])

    return(
        <div>
            <h1>My student name</h1>
            <ul>
                {
                    names.map(function(name){
                       return<li><h2>{name}</h2></li>
                    })
                }
            </ul>    
        </div>        
    )
}

export default TestMap