import React from 'react';
import ShopItemComponent from "../../components/shopItems/shopItems";
import "./Webshop.scss"



const Webshop = () => {
    return (
        <div className='main__container--lesswidth'>
            <h1 className='Webshoph1'>Shop</h1>
            <h2 className='Webshoph1'>MASTER OF ROCKS</h2>
            <p className='WebshopText'>The meteorites in our shop where discoverd by none other than out astronauts! Each meteorite is signed by the astronaut who fond it.
            Buy a meteorite signed by your favorite astronaut and get it delivered to you all the eay from space!</p>
            <div className='shopItemsHolder'>
                {/* <ShopItem pic="rock-1" name="Meteorite" prize="30"/>
                <ShopItem pic="rock-2" name="Meteorite" prize="30"/> */}
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
                {/* <Route path={"/:shopItem"} element={<ShopItem/>}/> */}

        </div>
    );
};

export default Webshop;
