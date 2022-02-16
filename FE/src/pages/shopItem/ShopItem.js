import React, { useEffect, useState } from 'react';
import "./ShopItem.scss"
import { Link, useParams } from "react-router-dom";
import CartItem from "../../components/cartItems/cartItems";
import axios from 'axios';
import Url from 'config';

const ShopItem = () => {
    let { id } = useParams();
    const [item, setItem] = useState(null);
    const [count, setCount] = useState(0);
    const [isActive, setActive] = useState(false);
    const [buttonText, setButtonText] = useState("Add to cart");

    // counter for cart
    function plus() {
        setCount((prev) => prev + 1);
        console.log(count);
        setActive(!isActive);
        setButtonText("added to cart");
    }

    // get single item from api
    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/shop/getshopitemdetails/?id=" + id).then((res) => {
            console.log(res);
            setItem(res.data);
        });
    }, []);

    // check if item loaded
    if (!item) return <h1>Loading...</h1>
    return (
        <div className='shopDetail'>
            <Link className='backButton' to={'/shop'}><h3>&#60; Back</h3></Link>
            <div className='shopDetail__img'>
                <img className='shopDetail__img--product' src={Url.SERVER_URL + item.overview.imageUrl} alt="rock" />
            </div>
            <div>
                <h1>{item.overview.title}</h1>
                <table className='shopDetail__container'>
                    <tr className='shopDetail__info'>
                        <th>Price</th>
                        <td>{item.overview.price}</td>
                    </tr>
                    <tr className='shopDetail__info'>
                        <th>Height</th>
                        <td>{item.dimensions.height}</td>
                    </tr>
                    <tr className='shopDetail__info'>
                        <th>Width</th>
                        <td>{item.dimensions.width}</td>
                    </tr>
                    <tr className='shopDetail__info'>
                        <th>Depth</th>
                        <td>{item.dimensions.depth}</td>
                    </tr>
                    <tr className='shopDetail__info'>
                        <th>Weight</th>
                        <td>{item.dimensions.weight}</td>
                    </tr>
                </table>
                <div className='shopDetail__container'>
                    <h2>Description</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dignissimos dolore eius qui vel fugiat ipsa tenetur! Voluptatem delectus suscipit ad harum, fugit praesentium. Rerum optio cum nisi distinctio qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam fugiat amet quam sint iste distinctio cum animi totam aspernatur, repudiandae, a incidunt consectetur ut rerum corporis placeat voluptatibus doloremque!</p>
                </div>
                <div className='shopDetail__container'>
                    <div className='shopDetail__container--profile'>
                        <img className='shopDetail__img' src={Url.SERVER_URL + item.discoverer.profileImageUrl} alt="" />
                        <img className='shopDetail__img' src={Url.SERVER_URL + item.discoverer.autographImageUrl} alt="" />
                    </div>
                    <table>
                        <tr className='shopDetail__info'>
                            <th>Discoverer</th>
                            <td>{item.discoverer.name}</td>
                        </tr>
                        <tr className='shopDetail__info'>
                            <th>Role</th>
                            <td>{item.discoverer.role}</td>
                        </tr>
                        <tr className='shopDetail__info'>
                            <th>Description</th>
                            <td>{item.discoverer.description}</td>
                        </tr>
                    </table>
                </div>
                <div className='shopDetail__btn-container'>
                    <button onClick={plus} className={!isActive ? 'btn btn--primary' : 'btn btn--checkout'}>{isActive ? buttonText : item.overview.button.content}</button>
                    <Link to={'/cart'} className='btn btn--secondary'>Go to cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ShopItem;