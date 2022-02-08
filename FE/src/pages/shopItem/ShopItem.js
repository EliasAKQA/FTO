import React from 'react';
import "./ShopItem.scss"
import Rock from "../../components/shopItems/rock.png"
import {Link} from "react-router-dom"

const ShopItem = () => {
    return (
        <div className='shopDetailBox'>
            <Link className='backButton' to={'/shop'}><h3>&#60; Back</h3></Link>
            <div className='shopDetailIMG'>
                <div className='shopDetailBackground'></div>
                <div className='shopDetailCircle'></div>
                <img className='shopDetailRock' src={Rock} alt="rock"/>
            </div>
            <div>
            <h2>meteorite</h2>
            <h2 className='shopDetailPrize'>30$</h2>
            <br/>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vitae mauris enim, commodo magna ultrices
                lobortis. Porta viverra arcu turpis vel dignissim adipiscing. Ante cras sed vitae id at etiam in. In
                laoreet eros risus risus sit id molestie nunc imperdiet. Faucibus aliquam in faucibus orci, nullam orci
                tortor massa ultricies. Consectetur neque molestie facilisis suspendisse. Praesent orci quis adipiscing
                euismod purus quis.
            </p>
            <br/>
            <button className='btn btn--primary'>Add to cart</button>
            </div>
        </div>
    );
};

export default ShopItem;
