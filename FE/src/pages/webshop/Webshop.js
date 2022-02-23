import React, { useEffect, useState } from 'react';
import ShopItemComponent from "../../components/shopItems/shopItems";
import "./Webshop.scss"
import ShopItem from "../shopItem/ShopItem";
import {Route, Routes} from "react-router-dom";
import axios from 'axios';
import Url from 'config';

const Webshop = () => {

    useEffect(() => {
        document.title = "Shop - Flight To Orbit";  
      }, []);

    const [sections, setSections] = useState(null);

    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/shop/getshopcontent").then((res) => {
            console.log(res);
            setSections(res.data);
        })
    }, []);

    if (!sections) return <h1>Loading...</h1>
    return (
        <div className='main__container--lesswidth'>
            <section className='section-container'>
            <h1>{sections.headline}</h1>
            <p>{sections.description}</p>
            </section>
            <div className='shopItemsHolder'>
                {sections.shopItems.map((content) => {
                    return < ShopItemComponent key={content.id} id={content.id} name={content.title} price={content.price} image={content.imageUrl} button={content.button.content} />
                })}
            </div>
        </div>
    );
};

export default Webshop;
