import React, { Component } from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Rating from '@mui/material/Rating';
// import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";


// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

// function Products(props) {
    
//     return (        
//     <div className='border px-4 py-2'>    
//                 <p>Test Test Test</p>   
//                 <h4 className='col-lg-3 text-left'>{props.title}</h4>
//                 <div className='d-block d-flex align-items-center col-sm-6'>
//                     <img src={props.image} alt={props.desc} width="150" />
//                     <FontAwesomeIcon 
//                         icon={faPlusSquare} 
//                         onClick={() => props.handleQuantityChange(props.value, props.id, 1)}
//                         className='Add grey-color' />
//                     <FontAwesomeIcon 
//                         icon={faMinusSquare} 
//                         onClick={() => props.handleQuantityChange(props.value, props.id, -1)}
//                         className='Remove grey-color' />
//                     <div className='d-block d-inline-block col-sm-1 justify-content-center'>
//                         <span>Quantity</span>
//                         <input 
//                         // className='col-md-1 mx-4'
//                         id="itemQuantity"
//                         type="text" 
//                         value={props.value}
//                         min="0"
//                         onChange={(event) => props.handleQuantityChange(event.target.value, props.id)}
//                         ></input>
//                     </div>
//                 </div>
//     </div>
//     );
// }

function Cart(props) {
    return (
        <div className='d-block container'>
          <h2>Todo Lists</h2>
          <div className="border mx-5 my-3 py-3">
            <h3 className="text-info">Monday</h3>
            
          </div>
          <div className="border mx-5 my-3 py-3">
            <h3 className="text-info">Tuesday</h3>
            
          </div>
        </div>
      );
}
 
export default Cart;



// return (
//   <div>
//   <h1 className='text-center'>Contact List</h1>
//   quantity == 0 or quantity != 0
//   {props.contacts.map((contact) => {
//       return(
//       <div>
//           <div className="card">
//               <div className="card-body">
//                   <h5 className="card-title">{contact.name}</h5>
//                   <p>{contact.email}</p>
//                   <p>{contact.company.catchPhrase}</p>
//               </div>
//           </div>

//       </div>
//   )
//   }) }
// </div> 

// )