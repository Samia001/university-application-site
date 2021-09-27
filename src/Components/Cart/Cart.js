import React from 'react';

const Cart = (props) => {
    console.log(props.cart);
    const {cart} = props;

    // reduce use here
    const totalReducer = (previousValue,currentValue) => previousValue + currentValue.applicationFee;
    const total = cart.reduce(totalReducer, 0)
    
    return (
        <div className="mt-5">
      
       <p> <b> Application Number:</b> <i>{props.cart.length}</i> </p>
        <h2> Total Fee : ${total} </h2>
         {
             cart.map( (university, i) => <li key={i}>{university.name}</li> )
         }

        <button className="btn btn-info" type="button">Apply Now </button>

        </div>

    

    );
};

export default Cart;