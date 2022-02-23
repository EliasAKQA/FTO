import React, {useEffect, useState} from 'react';
import ShopItemComponent from "../../components/shopItems/shopItems";
import "./Webshop.scss"
import ShopItem from "../shopItem/ShopItem";
import axios from 'axios';
import Url from 'config';
import LoadingScreen from "../../components/loading/LoadingScreen";

const Webshop = () => {
    const [sections, setSections] = useState(null);
    // let { id } = useParams();

    // get shop items
    useEffect(() => {
        document.title = "Shop - Flight To Orbit";
        if (!sections) {
            axios.get(Url.SERVER_API + "/shop/content").then((res) => {
                setSections(res.data);
            })
        }
    }, [sections]);

    if (!sections) return <LoadingScreen/>
    return (
        <div className='main__container--lesswidth'>
            <section className='section-container'>
                <h1>{sections.headline}</h1>
                <p>{sections.description}</p>
                <div className='shopItemsHolder'>
                    {sections.shopItems.map((content) => {
                        return < ShopItemComponent id={content.id} name={content.title} price={content.price}
                                                   image={content.imageUrl} button={content.button.content}/>
                    })}
                </div>
            </section>
        </div>
    );
};

export default Webshop;
