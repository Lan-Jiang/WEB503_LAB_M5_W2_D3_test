import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Main from './components/main';
import DisplayProducts from './components/displayproducts';
import ShowCart from './components/showcart';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// framework
// 1.app -> nav
// 2.nav -> displayproduct(home) or product

// function
// 1.quantity add and decrease
// 2.add to cart total
// 3.create displayproduct page
// 4.lightbox
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: productsData
  //   };
  // }

  // handleQuantityChange = (quantity, id, operator = 0) => {
    
  //   let products = this.state.products
  //   products.filter(item => item.id === id)[0].value = parseInt(quantity) + parseInt(operator)
  //   this.setState({ products })
  //   console.log()

  // };

  render() {
    return (
      <div className='App'>
        <NavBar />

        <Main 
          // products={this.state.products} 
          // handleQuantityChange={this.handleQuantityChange}
          />

      </div>
    );
  }
}

export default App;
