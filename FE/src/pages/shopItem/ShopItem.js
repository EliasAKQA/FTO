import React, { useEffect, useState } from 'react';
import "./ShopItem.scss"
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Url from 'config';

const ShopItem = () => {
    let { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/shop/getshopitemdetails/?id=" + id).then((res) => {
            console.log(res);
            setItem(res.data);
        });
    }, []);

    if (!item) return <h1>Loadingggggg....</h1>
    return (
        <div className='shopDetailBox'>
            <Link className='backButton' to={'/shop'}><h3>&#60; Back</h3></Link>
            <div className='shopDetailIMG'>
                <img className='shopDetailRock' src={Url.SERVER_URL + item.overview.imageUrl} alt="rock" />
            </div>
            <div>
                <h1>{item.overview.title}</h1>
                <div className='shopDetailBox__info'>
                    <h2>Price</h2>
                    <p>${item.overview.price}</p>
                </div>
                <div className="shopDetailBox__info">
                    <h2>height</h2>
                    <p>{item.dimensions.height}</p>
                </div>
                <div className="shopDetailBox__info">
                    <h2>width</h2>
                    <p>{item.dimensions.width}</p>
                </div>
                <div className="shopDetailBox__info">
                    <h2>depth</h2>
                    <p>{item.dimensions.depth}</p>
                </div>
                <div className="shopDetailBox__info">
                    <h2>weight</h2>
                    <p>{item.dimensions.weight}</p>
                </div>
                <div className='shopDetailBox__discoverer'>
                    <div className='shopDetailIMG'>
                        <img className='shopDetailRock' src={Url.SERVER_URL + item.discoverer.profileImageUrl} alt="" />
                    </div>
                    <div>
                        <div className='shopDetailBox__info'>
                            <h2>Discovered by</h2>
                            <p>{item.discoverer.name}</p>
                        </div>
                        <div className="shopDetailBox__info">
                            <h2>Role</h2>
                            <p>{item.discoverer.role}</p>
                        </div>
                    </div>
                </div>
                <button className='btn btn--primary'>{item.overview.button.content}</button>
            </div>
        </div>
    );
};

export default ShopItem;