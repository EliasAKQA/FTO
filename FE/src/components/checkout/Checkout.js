import React, {useEffect, useState} from 'react';
import CartItems from "../../components/cartItems/cartItems"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const Checkout = (props) => {
    const stripePromise = loadStripe('pk_test_51HzJxADA3uJiKcuR4X3s8HnqtQUW6CaWBI0f03dR064VRvTE10LUaBoYNgsL7wGgqAknPicUMgGeKcSlzpFDkmQf00VXwvFGJu');

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={props.amount} state={props.state} setstate={props.setState} func={props.func}/>
        </Elements>
    );
};

export default Checkout;

