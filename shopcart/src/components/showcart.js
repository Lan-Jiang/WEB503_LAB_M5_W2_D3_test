import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Rating from '@mui/material/Rating';
// import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import LogIn from './login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function ShowCart(props) {
  const { cartitems, handleQuantityChange } = props;
  // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  // const taxPrice = itemsPrice * 0.14;
  // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  // const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (     
    <div>
    <h4 className='d-inline d-flex col-sm-6 text-left'>Your Cart Items</h4>
    <div>
    {props.cartitems.map((item) => {
          if (item.value > 0) {
            return (
              <div className='border px-4 py-2'>  
                <div className='d-flex'>     
                  <div className='d-inline  col-sm-4'>
                      <img src={item.image} alt={item.desc} width="150" />
                      <h4 className='justify-content-center'>{item.desc}</h4>
                  </div>
                  <div className='d-inline d-flex col-sm-6 text-left align-items-center'>
                        <span style={{fontWeight: "bold"}}>Quantity {item.value}</span>
                  </div>
                </div>
              </div> 
    )
    }
    })} 
    </div>
    <Checkout totalQuantity={props.totalQuantity} />
    </div>
  )
}

const Checkout = ({ totalQuantity }) => {
  return totalQuantity > 0 ? (
    <div className="items checkout-btn">
      <Link to="/logIn">
        <Button className="btn btn-primary" id="cartBtn">
        <a className="text-white" href="checkOut">
          Check Out
          </a>
        </Button>
      </Link>
    </div>
  ) : (
    <div className="cart-number-items">
      <h4>There are 0 items in your cart.</h4>
      <Link to="/">
        <button className="btn btn-success cart-btn">Continue Shop</button>
      </Link>
    </div>
  );
};
export default ShowCart;
