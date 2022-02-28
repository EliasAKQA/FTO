import React, {useEffect, useState} from 'react';
import "./cartItems.scss"
import Rock from "../shopItems/rock.png"


const CartItem = (props) => {
    const [count, setCount] = useState(0);
    const [deleted, setDeleted] = useState(false);

    // useEffect(() => {
    // let myStorage = window.sessionStorage;
    // if (myStorage.getItem(`${props.name}`) == null) {
    //     myStorage.setItem(`${props.name}`, count);
    // } else {
    //     setCount(() => {
    //         myStorage.getItem(`${props.name}`);
    //     })
    // }

    // }, []);


    // function addAmount(props) {
    //   document.getElementById(props.name).value = parseInt(document.getElementById(props.name).value) + 1;
    // }

    // function subtractAmount(props) {
    //     document.getElementById(props.name).value = parseInt(document.getElementById(props.name).value) - 1;
    // }

    function plus() {
        setCount((prev) => prev + 1);
    }

    function minus() {
        setCount((prev) => prev - 1);
    }

    function cartRemove() {
        console.log('Removing from cart');
        let cart = JSON.parse(localStorage.getItem('FTOCart'));
        localStorage.setItem('FTOCart', JSON.stringify(cart.filter(item => item.id !== props.data.id)));
        props.func(props.data.price)
        setDeleted(true);
    }

    return (
        <div>
            {deleted ? (<></>) : (
                <div id={props.data.id} className='cartItem--holder'>
                    <div className='cartItem--img'>
                        <img className='cartItem--rock' src={props.data.url} alt="rock"/>
                    </div>
                    <div className='cartItem--text'>
                        <h4 className='cartItem--name'>{props.data.name}</h4>
                        <p className='cartItem--price'>${props.data.price}</p>
                        {/* <button className='cartItem--remove'>Remove</button> */}
                        <button className='btn btn--secondary remove' onClick={cartRemove}>Remove</button>
                    </div>
                </div>
            )}

        </div>
        // {/* <div className='cartAmount'>
        //   <button className='buttonSubtract' onClick={minus} >&#8722;</button>
        //   <input className='cartAmountNumber' type="number" value={count} id={props.name} />
        //   <button className='buttonAdd' onClick={plus} >&#43;</button>
        // </div> */}
    );
};

export default CartItem;

