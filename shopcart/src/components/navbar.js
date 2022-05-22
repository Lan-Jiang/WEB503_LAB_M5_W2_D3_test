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
import ShowCart from "./showcart";


function NavBar() {
    return (
        <div className="header bg-info">
            <ul className="navbar">
                <li className='float-left'>
                    Shop 2 <a href="/"><FontAwesomeIcon icon={faRegistered} /></a>eact  
                </li>
                <li className='float-right'>
                <a href="/showCart">< FontAwesomeIcon icon={faShoppingCart} /></a>
                    <span> 0 Item(s)</span> 
                </li>
            </ul>
        </div>
    );
}
 
export default NavBar;

