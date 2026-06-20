import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="mainContainer">
        <div className="container">
            <div className="header">
                <h3>Header</h3>
            </div>
            <div className="about">
                <Link to="/allproducts" style={{textDecoration:"none", color:"white", fontSize:"20px"}}>All-Products</Link>
                <Link to="/home" style={{textDecoration:"none", color:"white", fontSize:"20px"}}>Home</Link>
                <Link to="/imgTask" style={{textDecoration:"none", color:"white", fontSize:"20px"}}>Image</Link>
                <Link to="/counter1" style={{textDecoration:"none", color:"white", fontSize:"20px"}}>Counter</Link>
                <Link to="/products" style={{textDecoration:"none", color:"white", fontSize:"20px"}}>Products</Link>
                <Link to="/redux" style={{textDecoration:"none", color:"white", fontSize:"20px"}}>Redux</Link>
            </div>
        </div>
        </div>
    );
}


export default Header