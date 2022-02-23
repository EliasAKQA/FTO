import React, {useEffect, useState} from 'react';
import "./shopItems.scss";
import {Link} from "react-router-dom";
import Url from 'config';

const ShopItems = (props) => {
    const [isActive, setActive] = useState(false)

    if (!localStorage.getItem('FTOCart')) {
        localStorage.setItem('FTOCart', '[]');
    }
    let cart = JSON.parse(localStorage.getItem('FTOCart'));

    useEffect(() => {
        if (cart.filter(item => item.id === props.id).length > 0) {
            setActive(!isActive);
        }
        // console.log(props.data);
    }, [])

    function addToCart() {
        cart = JSON.parse(localStorage.getItem('FTOCart'));
        const cartItem = {
            id: props.id,
            name: props.name,
            price: props.price,
            url: Url.UMBRACO_SERVER + props.image,
        }
        console.log(cart.length);
        if (cart.filter(item => item.id === cartItem.id).length > 0) {
            cart = cart.filter(item => item.id !== cartItem.id);
            console.log('This Item already is in the cart');
            setActive(!isActive);
        } else {
            cart.push(cartItem)
            console.log(cart.length);
            console.log(cart);
            setActive(!isActive);
        }
        localStorage.setItem('FTOCart', JSON.stringify(cart));
    }

    return (
        <div className='container'>
            <div className='shopItemHolder'>
                <Link to={'/shop/' + props.id}>
                    <div className='shopItemIMG'>
                        <img className='shopItemRock' src={Url.UMBRACO_SERVER + props.image} alt={props.image}/>
                    </div>
                </Link>
                <p className='shopItemName'>{props.name}</p>
                <p className='shopItemPrize'>{props.price}$</p>
                <div className='shopItemBtnContainer'>
                    <Link to={'/shop/' + props.id} className='btn btn--secondary ShopItemsbutton'>info</Link>
                    <button
                        className={isActive ? ('btn btn--checkout ShopItemsbutton') : ('btn btn--primary ShopItemsbutton')}
                        onClick={addToCart}>{isActive ? ('Added') : (props.button)}</button>
                </div>
            </div>
        </div>
    );
};

export default ShopItems;
