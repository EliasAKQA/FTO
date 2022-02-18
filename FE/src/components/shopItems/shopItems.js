import React, { useState } from 'react';
import "./shopItems.scss";
import { Link } from "react-router-dom";
import Url from 'config';

const ShopItems = (props) => {
    if (!localStorage.getItem('FTOCart')) {
        localStorage.setItem('FTOCart', '[]');
    }
    function addToCart(){
        let cart = JSON.parse(localStorage.getItem('FTOCart'));
        const cartItem = {
            id: props.id,
            name:props.name,
            price:props.price,
            url: Url.SERVER_URL + props.image,
        }
        console.log(cart.length);
        if (cart.filter(item=>item.id === cartItem.id).length>0) {
            console.log('This Item already is in the cart');
        }else{
            cart.push(cartItem)
            console.log(cart.length);
            localStorage.setItem('FTOCart', JSON.stringify(cart));
            console.log('Created local storage');
            console.log(cart);
    }}
    return (
        <div className='container'>
            <div className='shopItemHolder' >
                <Link to={'/shop/' + props.id}>
                    <div className='shopItemIMG'>
                        <img className='shopItemRock' src={Url.SERVER_URL + props.image} alt={props.image} />
                    </div>
                </Link>
                <p className='shopItemName'>{props.name}</p>
                <p className='shopItemPrize'>{props.price}$</p>
                <div className='shopItemBtnContainer'>
                    <Link to={'/shop/' + props.id} className='btn btn--secondary ShopItemsbutton'>info</Link>
                    <button className='btn btn--primary ShopItemsbutton' onClick={addToCart}>{props.button}</button>
                </div>
            </div>
        </div>
    );
};

export default ShopItems;
