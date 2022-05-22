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


class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products:productsData
      };
    };

    handleQuantityChange = (quantity, id, operator = 0) => {
    
        let products = this.state.products
        products.filter(item => item.id === id)[0].value = parseInt(quantity) + parseInt(operator)
        this.setState({ products })
        console.log()
    
    };
    
    render() {
        // console.log(this.state.products)

      return (
        // <Routes>
        //         <Route exact path="/" element={<DisplayProducts  products={this.state.products} /> } />
        //         <Route path="/showCart" element={<ShowCart cartitems={this.state.products}/>} />
        // </Routes>
        <Router>
        <div className='container'>
        <Routes>
            <Route exact path='/' element={<DisplayProducts products={this.state.products.products} />} />
            <Route path='/showCart' element={<ShowCart />} />
        </Routes>
        </div>
        </Router>
      );
    };
  }

export default Main;