import React from 'react';
import './Multi.css';
import { useSelector } from 'react-redux';
import myStore from '../store/myStore';

function Details() {

    let data = useSelector((myStore)=> {return myStore});

    return(
        <div className='Details'>
            <h1>
                Wellcome, Redux
            </h1>

            <h2>Name:- {data.city}</h2>
            <h3>City:- {data.name}</h3>

        </div>
    )
}

export default Details;