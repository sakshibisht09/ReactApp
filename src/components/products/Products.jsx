import React from 'react';
import { Link, Outlet } from "react-router-dom"
import './Products.css'
function Products (){
    return(
        <div className="productContainer">

            <div className="linkContainer">

                <Link to="electronics" style={{textDecoration:"none", color:"white", fontSize:"22px"}}>Electronics</Link>
                <Link to="jewellery" style={{textDecoration:"none", color:"white", fontSize:"22px"}}>Jewellery</Link>
                <Link to="menWear" style={{textDecoration:"none", color:"white", fontSize:"22px"}}>Men's Clothing</Link>
                <Link to="womenWear" style={{textDecoration:"none", color:"white", fontSize:"22px"}}>Women's Clothing</Link>
            </div>

            <div className="componentContainer">

                <Outlet/>
            </div>
        </div>
    )
}

export default Products