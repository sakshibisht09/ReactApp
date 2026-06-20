import React from 'react';
import { use, useState } from "react"
import "./ImgComp.css"

function ImgComp(){

    let [Title,setTitle] =useState("title");

    let [url, setUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s")

    
        let changetoAngular =()=>{
            setUrl("https://miro.medium.com/v2/1*FKD2Uy_Q6r6AviZA2VD4RQ.png");
            setTitle("Angular");
        }

        let changetoReact =() =>{
            setUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s");
            setTitle("React");
            
        }

    
    return(
        <div id="imageComp">
            <h2>{Title}</h2>
            <img src={url} height="300px" width="300px" alt="" />
            <br />
            <button onClick={changetoReact}>React</button>
            <button onClick={changetoAngular}>Angular</button>
        </div>
    )
}
export default ImgComp