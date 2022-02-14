import React, { useEffect, useState } from 'react';
import "./ShopItem.scss"
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Url from 'config';

const ShopItem = () => {
    let { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/shop/getshopitemdetails/?id=1073").then((res) => {
            console.log(res);
            setItem(res.data);
        });
    }, []);

    return (
        <div className='shopDetailBox'>
            <Link className='backButton' to={'/shop'}><h3>&#60; Back</h3></Link>
            <div className='shopDetailIMG'>
                <div className='shopDetailBackground'></div>
                <div className='shopDetailCircle'></div>
                <img className='shopDetailRock' src={Url.SERVER_URL + id} alt="rock" />
            </div>
            <div>
                <h2>{item.overview.title}</h2>
                <h2 className='shopDetailPrize'>30$</h2>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae mauris enim, commodo magna ultrices
                    lobortis. Porta viverra arcu turpis vel dignissim adipiscing. Ante cras sed vitae id at etiam in. In
                    laoreet eros risus risus sit id molestie nunc imperdiet. Faucibus aliquam in faucibus orci, nullam orci
                    tortor massa ultricies. Consectetur neque molestie facilisis suspendisse. Praesent orci quis adipiscing
                    euismod purus quis.
                </p>
                <br />
                <button className='btn btn--primary'>Add to cart</button>
            </div>
        </div>
    );
};

export default ShopItem;