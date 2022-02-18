import React from 'react';
import "./shopItems.scss";
import { Link } from "react-router-dom";
import Url from 'config';

const shopItems = (props) => {
    return (
        <div className='container'>
            <Link to={'/shop/' + props.id}>
                <div className='shopItemHolder' >
                    <div className='shopItemIMG'>
                        <img className='shopItemRock' src={Url.SERVER_URL + props.image} alt={props.image} />
                    </div>
                    <p className='shopItemName'>{props.name}</p>
                    <p className='shopItemPrize'>{props.price}$</p>
                    <div className='shopItemBtnContainer'>
                        <button className='btn btn--secondary ShopItemsbutton'>info</button>
                        <button className='btn btn--primary ShopItemsbutton'>{props.button}</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default shopItems;
