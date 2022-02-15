import React from 'react';
import Navbar from "../navigationBar/Navbar";
import logo from "assets/logo/logo.svg"
import './header.scss';
import {Link} from "react-router-dom";
import { BsCart4 } from "react-icons/bs"

const Header = () => {
    return (
        <header className={""}>
            <Link to={"/"}>
                <div className={"logo"}>
                    <img src={logo} alt="flight to orbit logo"/>
                    <h3>FTO</h3>
                </div>
            </Link>
            
            <Navbar/>
            
        </header>
    );
};

export default Header;
