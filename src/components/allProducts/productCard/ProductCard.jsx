import React from 'react';
import './ProductCard.css';

function ProductCard({image, title, price, rating, count}){
    return(
         <div id="mycard">
             <img src={image}/>
            <h3>{title}</h3>
            <p>$ {price}</p>
            <p>Rating {rating}</p>
            <p>count {count}</p>
            <button>Know more</button>
        </div>
    );
}

export default ProductCard