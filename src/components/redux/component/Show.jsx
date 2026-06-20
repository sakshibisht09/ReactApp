import React from 'react';
import City from './City';
import Details from './Details';

import './Multi.css';

function Show() {

    return(
        <div className="show">
            <div className="cityShow">
                <City/>
            </div>

            <div className="detailsShow">
                <Details/>
            </div>
        </div>
    )
}

export default Show;