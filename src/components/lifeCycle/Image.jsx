import React from 'react';
import { useEffect, useState } from "react"

function Image(){

    let [title, setTitle] = useState("React");

    let [url, setUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s");
     
    let changeToAngular =()=>{
        setUrl("https://miro.medium.com/v2/1*FKD2Uy_Q6r6AviZA2VD4RQ.png");
        setTitle("Angular")
    }
    let changeToReact =()=>{
        setUrl("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s")
        setTitle("React")
    }

    useEffect(()=>{
        console.log("")
    },{title, url});

    return(
        <>
        <div id="ImgComponent">
        {
            console.log("Image Component")
        }
        <h2>{title}</h2>
        <img src={url} height="300px" width="300px" />
        <br /><br />
        <button onClick={changeToAngular}>Angular</button>
        <button onClick={changeToReact}>React</button>
        <button onClick={()=>{
            setTitle("Angular");
        }}>Title</button>
        </div>
        </>
    )
}
export default Image;