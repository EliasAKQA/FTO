import React, {useEffect, useState} from 'react';
import "./ShopItem.scss"
import {Link, useParams} from "react-router-dom";
import CartItem from "../../components/cartItems/cartItems";
import axios from 'axios';
import Url from 'config';
import LoadingScreen from "../../components/loading/LoadingScreen";

const ShopItem = () => {
    const [item, setItem] = useState(null);
    const [count, setCount] = useState(0);
    const [isActive, setActive] = useState(false);
    const [buttonText, setButtonText] = useState("Add to cart");
    let {id} = useParams();
    
    let cart = JSON.parse(localStorage.getItem('FTOCart'));

        // get single item from api
        useEffect(() => {
            if (!item) {
                axios.get(Url.SERVER_API + "/shop/content?id=" + id).then((res) => {
                    setItem(res.data);
                    if (cart.filter(p => p.id === res.data.overview.id).length > 0) {
                        setActive(true);
                    }
                });
            }
        }, [item]);

    useEffect(() => {
        document.title = "Shop Item - Flight To Orbit";
    }, []);


    function addToCart() {
        cart = JSON.parse(localStorage.getItem('FTOCart'));
        const cartItem = {
            id: item.overview.id,
            name: item.overview.name,
            price: item.overview.price,
            url: Url.UMBRACO_SERVER + item.overview.imageUrl,
        }
        console.log(cart.length);
        if (cart.filter(item => item.id === cartItem.id).length > 0) {
            cart = cart.filter(item => item.id !== cartItem.id);
            console.log(item);
            console.log('This Item already is in the cart');
        } else {
            cart.push(cartItem)
            console.log(cart.length);
            console.log(cart);
            setButtonText("added to cart");
        }
        setActive(!isActive);
        localStorage.setItem('FTOCart', JSON.stringify(cart));
    }

    // counter for cart
    function plus() {
        setCount((prev) => prev + 1);
        setActive(!isActive);
        setButtonText("added to cart");
    }

    // check if item loaded
    if (!item) return <LoadingScreen/>
    return (
        <div className='shopDetail main__container--lesswidth'>
            <Link className='backButton' to={'/shop'}><h3>&#60; Back</h3></Link>
            <div className='shopDetail__img'>
                <img className='shopDetail__img--product' src={Url.UMBRACO_SERVER + item.overview.imageUrl} alt="rock"/>
            </div>
            <div>
                <h1>{item.overview.title}</h1>
                <table className='shopDetail__container'>
                    <tr>
                        <th>Price</th>
                        <td>${item.overview.price}</td>
                    </tr>
                    <tr>
                        <th>Height</th>
                        <td>{item.dimensions.height}cm</td>
                    </tr>
                    <tr>
                        <th>Width</th>
                        <td>{item.dimensions.width}cm</td>
                    </tr>
                    <tr>
                        <th>Depth</th>
                        <td>{item.dimensions.depth}cm</td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td>{item.dimensions.weight}kg</td>
                    </tr>
                </table>
                <section className='shopDetail__container'>
                    <h2>Description</h2>
                    <p>{item.description}</p>
                </section>
                <div className='shopDetail__container'>
                    <div className='shopDetail__container--profile'>
                        <img className='shopDetail__img profile'
                             src={Url.UMBRACO_SERVER + item.overview.discoverer.profileImageUrl} alt=""/>
                        <img className='shopDetail__img autograph'
                             src={Url.UMBRACO_SERVER + item.overview.discoverer.autographImageUrl} alt=""/>
                    </div>
                    <table>
                        <tr>
                            <th>Discoverer</th>
                            <td><Link to={'/crew/' + item.overview.discoverer.id}>{item.overview.discoverer.name}</Link>
                            </td>
                        </tr>
                        <tr>
                            <th>Role</th>
                            <td>{item.overview.discoverer.role}</td>
                        </tr>
                    </table>
                </div>
                <div className='shopDetail__btn-container'>
                    <button onClick={addToCart}
                            className={!isActive ? 'btn btn--primary' : 'btn btn--checkout'}>{isActive ? buttonText : item.overview.button.content}</button>
                    <Link to={'/cart'} className='btn btn--secondary'>Go to cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;