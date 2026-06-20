import React from 'react';
function Card (props){
    return(
        <div className='myCards'>
            <img src={props.imgURl}
            height="350px" width="300px"alt="" />
            <h3>{props.name}</h3>
            <p>{props.about}</p>

            </div>
    );
}

export default Card