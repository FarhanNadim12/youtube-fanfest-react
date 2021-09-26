import React from 'react';
import './Cart.css'
import Name from '../Name/Name';


const Cart = (props) => {
    return (
        <div className="cart">
            <h2>Cart Added: {props.cartsAdded}</h2>
            <h2>Total Cost: ${props.totalCost}</h2>
            <div className="nameContainer">

                {
                    props.carts.map(cart => <Name key={cart.id} name={cart.name}></Name>)
                }
            </div>



        </div>
    );
};

export default Cart;