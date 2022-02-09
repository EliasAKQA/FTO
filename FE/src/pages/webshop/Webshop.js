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
                <ShopItem pic="rock-1" name="Meteorite" prize="30"/>
                <ShopItem pic="rock-2" name="Meteorite" prize="30"/>

                <ShopItem pic="rock-3" name="Meteorite" prize="30"/>
                <ShopItem pic="rock-4" name="Meteorite" prize="30"/>

                <ShopItem pic="rock-5" name="Meteorite" prize="30"/>
                <ShopItem pic="rock-6" name="Meteorite" prize="30"/>

                <ShopItem pic="rock-7" name="Meteorite" prize="30"/>
                <ShopItem pic="rock-8" name="Meteorite" prize="30"/>

                
            </div>
        </div>
    );
};

export default Webshop;
