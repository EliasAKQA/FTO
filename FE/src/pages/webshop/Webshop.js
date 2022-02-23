import React, { useEffect, useState } from 'react';
import ShopItemComponent from "../../components/shopItems/shopItems";
import "./Webshop.scss"
import ShopItem from "../shopItem/ShopItem";
import axios from 'axios';
import Url from 'config';

const Webshop = () => {
    const [sections, setSections] = useState(null);
    // let { id } = useParams();


    // get shop items
    useEffect(() => {
        document.title = "Shop - Flight To Orbit";
        axios.get(Url.SERVER_API + "/shop/content").then((res) => {
            console.log(res.data);
            setSections(res.data);
        })
    }, []);

    if (!sections) return <h1>Loading...</h1>
    return (
        <div className='main__container--lesswidth'>
            <section className='section-container'>
                <h1>{sections.headline}</h1>
                <p>{sections.description}</p>
                <div className='shopItemsHolder'>
                    {sections.shopItems.map((content) => {
                        // return < ShopItemComponent id={content.id} name={content.title} price={content.price}
                        //                            image={content.imageUrl} button={content.button.content}/>
                        return < ShopItemComponent id={content.id} name={content.title} price={content.price}
                            image={content.imageUrl} button={content.button.content} />
                    })}
                </div>
            </section>
        </div>
    );
};

export default Webshop;
