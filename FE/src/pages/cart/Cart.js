import React, {useEffect, useState} from 'react';
import CartItems from "../../components/cartItems/cartItems"
import "./Cart.scss"
import Checkout from '../../components/checkout/Checkout';
import {Link} from "react-router-dom";

const Cart = () => {
    const [total, setTotal] = useState(0);
    const [stage, setStage] = useState(1);

    useEffect(() => {
        document.title = "Cart - Flight To Orbit";
    }, []);


    if (!localStorage.getItem('FTOCart')) {
        localStorage.setItem('FTOCart', '[]');
    }

    const setParentStage = (newStage) => {
        setStage(newStage);
        if (newStage === 3) {
            localStorage.setItem('FTOCart', '[]');
        }
    }

    function moveStage() {
        setStage((prev) => prev + 1)
    }

    function minus() {
        setStage((prev) => prev - 1)
    }

    let shipping = 10;
    let cart = JSON.parse(localStorage.getItem('FTOCart'));

    useEffect(() => {
        let price = 0;
        cart.map(item => price += item.price);
        setTotal(price)
    }, [])

    return (
        <div className={'cart'}>
            <h1 className='cartH1'>Cart</h1>
            {stage === 2 ? <button className='backButton' onClick={minus}><h3>&#60; Back</h3></button> : <></>}
            <div className='paymentStage'>
                <div className={stage > 0 ? 'stage stage--1 active' : 'stage stage--1'}>
                    <p className={stage > 0 ? 'step--counter active' : 'step--counter'}>1</p>
                    <p className='step--name'>Overview</p>
                </div>
                <div className={stage > 1 ? 'stage stage--2 active' : 'stage stage--2'}>
                    <p className={stage > 1 ? 'step--counter active' : 'step--counter'}>2</p>
                    <p className='step--name'>Payment</p>
                </div>
                <div className={stage > 2 ? 'stage stage--3 active' : 'stage stage--3'}>
                    <p className={stage > 2 ? 'step--counter active' : 'step--counter'}>3</p>
                    <p className='step--name'>Confirmation</p>
                </div>
            </div>
            {stage === 3 ? (
                <div className='confirm'>
                    <h2>Your order has been made</h2>
                    <h3>Thank you for your purchase!</h3>
                    <p>Thank you for buying our meteorites! we are sure you will like them. Your money will be used to
                        buy the neccessary supplements the crew on the ISS needs. <br></br>
                        You will receive an email from us with a recipt for your purchase.</p>
                </div>
            ) : (
                <>
                    {stage === 1 ? (
                        <section className={'Items'}>
                            {cart.map((item) => {
                                // priceTotal =+priceTotal+item.price;
                                return <CartItems key={item.id} data={item}/>
                            })}
                        </section>
                    ) : (
                        <section className='payment'>
                            <Checkout amount={total} currency='usd' state={stage} setstate={setStage}
                                      func={setParentStage}/>
                        </section>
                    )}
                    <section className='cartTotal'>
                        <div>
                            <h3>Subtotal</h3>
                            <p>${total}</p>
                        </div>
                        <div>
                            <h3>Shipping</h3>
                            <p>${shipping}</p>
                        </div>
                        <div>
                            <hr></hr>
                            <h3>Total</h3>
                            <p>${shipping + total}</p>
                            <hr></hr>

                        </div>
                        <br/>
                        {stage === 1 ? (
                            <button className='btn btn--primary' onClick={moveStage}
                                    disabled={cart.length === 0 ? true : false}>Checkout</button>
                        ) : (<></>)}
                    </section>
                </>
            )}

        </div>
    );
};

export default Cart;
