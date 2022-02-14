import React from 'react';
import "./shopItems.scss";
import { Link } from "react-router-dom";
import Url from 'config';

const shopItems = (props) => {
    return (
        <div>
            <Link to={'/shop/' + props.name}>
                <div className='shopItemHolder' >
                    <div className='shopItemIMG'>
                        <div className='shopItemCircle'></div>
                        <img className='shopItemRock' src={Url.SERVER_URL + props.image} alt={props.image} />
                    </div>
                    <p className='shopItemName'>{props.name}</p>
                    <p className='shopItemPrize'>{props.price}$</p>
                    <button className='btn btn--primary ShopItemsbutton'>{props.button}</button>
                    <div className='shopItemdark'></div>
                </div>
            </Link>
        </div>
    );
};

export default shopItems;
