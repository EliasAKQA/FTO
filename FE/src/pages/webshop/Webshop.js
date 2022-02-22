import React, { useEffect, useState } from 'react';
import ShopItemComponent from "../../components/shopItems/shopItems";
import "./Webshop.scss"
import ShopItem from "../shopItem/ShopItem";
import axios from 'axios';
import Url from 'config';

const Webshop = () => {
    const [sections, setSections] = useState(null);

    // get shop items
    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/shop/content").then((res) => {
            console.log(res);
            setSections(res.data);
        })
    }, []);

    if (!sections) return <h1>Loading...</h1>
    return (
        <div className='main__container--lesswidth'>
            <h1>{sections.headline}</h1>
            <p>{sections.description}</p>
            <div className='shopItemsHolder'>
                {sections.shopItems.map((content) => {
                    return < ShopItemComponent id={content.id} name={content.title} price={content.price} image={content.imageUrl} button={content.button.content} />
                })}
            </div>
        </div>
    );
};

export default Webshop;
