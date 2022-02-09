import React from 'react';
import "./shopItems.scss";
// import Rock from "./rock.png";
import {Link} from "react-router-dom";

const shopItems = (props) => {
    return (
        <div>
            <Link to={'/shop/' + props.name}>
                <div className='shopItemHolder'>
                    <div className='shopItemIMG'>
                        <div className='shopItemCircle'></div>
                        <img className='shopItemRock' src={"/assets/images/rocks/" + props.pic + ".png"} alt="rock"/>
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
