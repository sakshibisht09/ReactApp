import React from 'react';
import { useEffect } from "react"

function Text(){
    useEffect(()=>{
        console.log("useEffect Text Call")
    })

    return(
        <>
        {
            console.log("TextComponent")
        }

        <h2>Text Component</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt non voluptatum sequi mollitia molestiae pariatur dolorem, distinctio dolores minima aspernatur, odio vitae obcaecati cum libero iusto quibusdam porro impedit!</p>
        </>
    )
}

export default Text;