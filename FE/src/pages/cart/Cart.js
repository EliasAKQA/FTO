import React from 'react';
import CartItems from "../../components/cartItems/cartItems"
import "./Cart.scss"

const Cart = () => {
    return (
        <div>
            <h1 className='cartH1'>Cart</h1>
            <CartItems name="Meteorite"/>
            <CartItems name="meteorites"/>

            <div className='cartTotal'>
                <div>
                <h3>Subtotal</h3>
                <p>100.00</p>
                </div>
                <div>
                <h3>Shipping</h3>
                <p>10.99</p>
                </div>
                <div>
                <h3>Total</h3>
                <p>110.99</p>
                </div>
                <br/>
                <button className='btn btn--primary'><h2>BUY</h2></button>
            </div>
            
        </div>
    );
};

export default Cart;
