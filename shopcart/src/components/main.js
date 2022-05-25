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
import productsData from './productsData';
import LogIn from './login';


class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products:productsData
      };
    };

    handleQuantityChange = (quantity, id, operator = 0) => {
    
        let products = this.state.products.products
        products.filter(item => item.id === id)[0].value = parseInt(quantity) + parseInt(operator)
        this.setState({ products })
        console.log()
    
    };
    
    render() {
      return (
        <Router>
        <div className='container'>
        <Routes>
            <Route exact path='/' element={<DisplayProducts products={this.state.products.products} handleQuantityChange={this.handleQuantityChange} />} />
            <Route path='/showCart' element={<ShowCart cartitems={this.state.products.products} />} handleQuantityChange={this.handleQuantityChange} />
            <Route path='/logIn' element={<LogIn checkoutitems={this.state.products.products} handleQuantityChange={this.handleQuantityChange} />} />
        </Routes>
        </div>
        </Router>
      );
    };
  }

export default Main;