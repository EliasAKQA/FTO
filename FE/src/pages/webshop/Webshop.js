import React from 'react';
import ShopItem from "../../components/shopItems/shopItems";
import "./Webshop.scss"

const Webshop = () => {
    return (
        <div className='main__container--lesswidth'>
            <h1 className='Webshoph1'>MASTER OF ROCKS</h1>
            <p className='WebshopText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eu orci orci nisl,
                lectus sed. Tincidunt iaculis mi, id sed viverra neque, euismod nec. Enim urna cras suspendisse sed enim
                eu volutpat.</p>
            <div className='shopItemsHolder'>
                <ShopItem name="Meteorite" prize="30"/>
                <ShopItem name="Meteorite" prize="30"/>

                <ShopItem name="Meteorite" prize="30"/>
                <ShopItem name="Meteorite" prize="30"/>

                <ShopItem name="Meteorite" prize="30"/>
                <ShopItem name="Meteorite" prize="30"/>

                <ShopItem name="Meteorite" prize="30"/>
                <ShopItem name="Meteorite" prize="30"/>

                
            </div>
        </div>
    );
};

export default Webshop;
