import React from 'react';
import "./shopItems.scss";
// import Rock from "./rock.png";
import { Link } from "react-router-dom";
import Url from 'config';

const shopItems = (props) => {
    return (
        <div>
            <Link to={'/shop/' + props.name}>
                <div className='shopItemHolder' >
                    <div className='shopItemIMG'>
                        <div className='shopItemCircle'></div>
                        <img src={Url.SERVER_URL + props.pic} alt="Crew member name" />
                    </div>
                    <p className='shopItemName'>{props.name}</p>
                    <p className='shopItemPrize'>{props.prize}$</p>
                    <button className='btn btn--primary ShopItemsbutton'>BUY</button>
                    <div className='shopItemdark'></div>
                </div>
            </Link>
        </div>
    );
};

export default shopItems;
