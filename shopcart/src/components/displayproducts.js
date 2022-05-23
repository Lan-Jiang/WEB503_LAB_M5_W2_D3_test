import React, { Component } from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import { Modal } from "react-bootstrap";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./displayproducts.css";
import productsData from './productsData';

function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [showImg, setShowImg] = useState({});
    const handleShow = (product) => {
    setShow(true);
    setShowImg(product);
  };
    const handleClose = () => {
    setShow(false);
  };

    const { handleQuantityChange } = props;

    return (     
    <div>
    {props.products.map(product => (
    <div className='border px-4 py-2'>       
                <h4 className='col-lg-3 text-left'>{product.desc}</h4>
                <div className='d-block d-flex align-items-center col-sm-6'>
                    <img src={product.image} alt={product.desc} width="150" 
                        onClick={() => handleShow(product)}/>
                    <FontAwesomeIcon 
                        icon={faPlusSquare} 
                        onClick={() => product.handleQuantityChange(product.value, product.id, 1)}
                        className='Add grey-color' />
                    <FontAwesomeIcon 
                        icon={faMinusSquare} 
                        onClick={() => product.handleQuantityChange(product.value, product.id, -1)}
                        className='Remove grey-color' />
                    <div className='d-block d-inline-block col-sm-1 justify-content-center'>
                        <span>Quantity</span>
                        <input 
                        // className='col-md-1 mx-4'
                        id="itemQuantity"
                        type="text" 
                        value={product.value}
                        min="0"
                        onChange={(event) => product.handleQuantityChange(event.target.value, product.id)}
                        ></input>
                    </div>
                </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{showImg.desc}</Modal.Title>
            </Modal.Header>
        <Modal.Body>
          <img
            src={showImg.image}
            width="350"
            alt={showImg.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings: </span>
            {showImg.rating}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
    ) )}
    </div>   
    );
}
 
export default DisplayProducts;

// export default function DisplayProducts(props) {
//     console.log(props.products);
//     return (
//         <div className="container mx-auto bg-white">
//             <p>test</p>
//         </div>
//     )
// }
