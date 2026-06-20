import React from 'react';
import Card from "../card/Card";

function Home(){
    return(
        <div>
        <h1>React app using vite</h1>
        <div className='forCards'>
        <Card name="Rora" imgURl="https://shorturl.at/UiDlC" about="Group-Babymonster"/>
        <Card name="Pharita" imgURl="https://shorturl.at/Zvj7F" about="Group-Babymonster"/>
        <Card name="chiquita" imgURl="https://shorturl.at/KfA7z" about="Group-Babymonster"/>            
       </div>
       </div>
    );
}

export default Home