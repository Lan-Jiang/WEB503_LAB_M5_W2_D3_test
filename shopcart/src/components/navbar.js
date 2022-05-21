import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faRegistered } from "@fortawesome/free-solid-svg-icons";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import DisplayProducts from "./displayproducts";
import Cart from "./cart";


function NavBar(props) {
    return (
        <div className="header bg-info">
            <Router>
            <ul className="navbar">
                <li className='float-left'>
                    Shop 2 <Link to="/"><FontAwesomeIcon icon={faRegistered} /></Link>eact  
                </li>
                <li className='float-right'>
                    <Link to="/showCart">< FontAwesomeIcon icon={faShoppingCart} /></Link>
                    <span> 0 Item(s)</span> 
                </li>
            </ul>

                <Routes>
                    {/* <Route exact path="/" element={<DisplayProducts to="/" key={props.id} id={props.id} image={props.image} title={props.desc} desc={props.desc} rating={props.rating} value={props.value} 
             handleQuantityChange={this.handleQuantityChange} replace />} />
                    <Route path="/showCart" element={<Products to="/showCart" key={props.id} id={props.id} image={props.image} title={props.desc} desc={props.desc} rating={props.rating} value={props.value}
             handleQuantityChange={this.handleQuantityChange} replace />} /> */}
                    <Route exact path="/" element={<DisplayProducts  products={props.products} handleQuantityChange={props.handleQuantityChange} /> } />
                    <Route path="/showCart" element={<Cart cartitems={props.products} handleQuantityChange={props.handleQuantityChange} />} />
                </Routes>
            </Router>
        </div>
    );
}
 
export default NavBar;

