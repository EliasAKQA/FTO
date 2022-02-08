import React from 'react';
import Navbar from "../navigationBar/Navbar";
import logo from "assets/logo/logo.svg"
import './header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"main__container--lesswidth"}>
            <Link to={"/"}>
                <div className={"logo"}>
                    <img src={logo}/>
                    <h3>FTO</h3>
                </div>
            </Link>
            <Navbar/>
        </header>
    );
};

export default Header;
