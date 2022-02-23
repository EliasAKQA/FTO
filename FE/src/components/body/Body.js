import React from 'react';
import { Route, Routes } from "react-router-dom";
import Crew from '../../pages/crew/Crew';
import CrewMember from "../../pages/crewMember/CrewMember";
import Quizes from "../../pages/quizes/Quizes";
import Webshop from 'pages/webshop/Webshop';
import Inventory from "../../pages/inventory/Inventory";
import Landing from "../../pages/landing/Landing";
import Tracker from "../../pages/tracker/Tracker";
import Cart from '../../pages/cart/Cart';
import ShopDetail from '../../pages/shopItem/ShopItem';
import ErrorPage from "../../pages/errorPage/errorPage";

const Body = () => {
    return (
        <main>
            {/* <title>Flight to orbit</title> */}
            <Routes>
                <Route exact path={"/"} element={<Landing />} />
                <Route path={"/shop"} element={<Webshop />} />
                <Route path={"/crew/*"} element={<Crew />} />
                <Route path={"/crew/:id"} element={<CrewMember />} />
                <Route path={"/inventory"} element={<Inventory />} />
                <Route path={"/tracker"} element={<Tracker />} />
                <Route path={"/quiz/*"} element={<Quizes />} />
                <Route path={"/cart"} element={<Cart />} />
                <Route path={"/shop/:id"} element={<ShopDetail />} />
                <Route path={"*"} element={<ErrorPage />} />
            </Routes>
        </main>
    );
};

export default Body;

