import React from 'react';
import ShopItemComponent from "../../components/shopItems/shopItems";
import "./Webshop.scss"
import ShopItem from "../shopItem/ShopItem";
import {Route, Routes} from "react-router-dom";



const Webshop = () => {
    return (
        <div className='main__container--lesswidth'>
            <h1 className='Webshoph1'>Shop</h1>
            <h2 className='Webshoph1'>MASTER OF ROCKS</h2>
            <p className='WebshopText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit eu orci orci nisl,
                lectus sed. Tincidunt iaculis mi, id sed viverra neque, euismod nec. Enim urna cras suspendisse sed enim
                eu volutpat.</p>
                <Routes>
                    <Route exact path={"/"} element={
                        <div className='shopItemsHolder'>
                        <ShopItemComponent pic="rock-1" name="Meteorite" prize="30"/>
                        <ShopItemComponent pic="rock-2" name="Meteorite" prize="30"/>

                        <ShopItemComponent pic="rock-3" name="Meteorite" prize="30"/>
                        <ShopItemComponent pic="rock-4" name="Meteorite" prize="30"/>

                        <ShopItemComponent pic="rock-5" name="Meteorite" prize="30"/>
                        <ShopItemComponent pic="rock-6" name="Meteorite" prize="30"/>

                        <ShopItemComponent pic="rock-7" name="Meteorite" prize="30"/>
                        <ShopItemComponent pic="rock-8" name="Meteorite" prize="30"/>

                        <ShopItemComponent pic="rock-9" name="Meteorite" prize="30"/>
                        <ShopItemComponent pic="rock-10" name="Meteorite" prize="30"/>
                        </div>
                    }/>
                <Route path={"/:shopItem"} element={<ShopItem/>}/>
                </Routes>

        </div>
    );
};

export default Webshop;
