import React from 'react';
import ProductCard from "./productCard/ProductCard";
import axios from "axios";
import './AllProducts.css';
import { useState } from "react";

function AllProducts() {

    const [data, setData] = useState([]);

    const getProducts = () => {
        let promiseObj = axios.get("https://fakestoreapi.com/products");

        promiseObj.then((res) => {
            console.log("SUCCESS : DATA FOUND");
            console.log(res.data);
            setData(res.data)
        }).catch((err) => {
            console.log("ERROR : DATA NOT FOUND");
            console.log(err)
        })
    }
    return (
        <div>
            <h2>All Products</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet blanditiis voluptatum modi ad sint quasi fugit illo magni reprehenderit veritatis cumque unde odit minus assumenda dolore, nobis eius error.</p>
            <button onClick={getProducts}>All Products</button>

            <div className="allProducts">
                {
                    data.map((products) => {
                        return (
                            <ProductCard 
                            image={products.image} 
                            title={products.title} 
                            price={products.price} 
                            rating={products.rating.rate} 
                            count={products.rating.count}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProducts