import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Cart from '../../assets/cart.svg';
import "./navbar.scss";
// import { BsCart4 } from "react-icons/bs"
import axios from 'axios';
import Url from 'config';

// const navigationJson = [
//     {title: "Home", link: "/"},
//     {title: "Shop", link: "/shop"},
//     {title: "Crew", link: "/crew"},
//     {title: "Inventory", link: "/inventory"},
//     {title: "Quiz", link: "/quiz"},
//     {title: "Tracker", link: "/tracker"},
//     {title: "Cart", link: "/cart"},
//     // {title:  <BsCart4/> , link: "/cart"}
// ];


const Navbar = () => {
    const [navs, setNavs] = useState(null);
    if (!localStorage.getItem('FTOCart')) {
        localStorage.setItem('FTOCart', '[]');
    }
    let cart = JSON.parse(localStorage.getItem('FTOCart'));

    useEffect(() => {
        axios.get(Url.UMBRACO_API + "/shared/getheadercontent").then((res) => {
            console.log(res.data.menu);
            setNavs(res.data.menu.content);
        })
    }, []);
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(true);

    useEffect(() => {
        if (open) {
            // let nav = document.querySelector(".navbar--open");
            let nav = document.querySelector(".navbar");
            trapFocus(nav);
        }
        setMobile(window.innerWidth > 800);
    }, [mobile]);


    // Research better options:
    function trapFocus(element) {
        let focusableEls = element.querySelectorAll('a, .navbar>button');
        // let navbar = element.querySelectorAll('.navbar');
        // console.log(element);
        // console.log(navbar);
        let first = focusableEls[0];
        let last = focusableEls[focusableEls.length - 1];
        let KEYCODE_TAB = 9;

        element.addEventListener('keydown', (e) => {
            let isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
            if (!isTabPressed) {
            }
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    console.log(first);
                    last.focus();
                    e.preventDefault();
                }
            } else /* tab */ {
                if (document.activeElement === last) {
                    first.focus();
                    e.preventDefault();
                }
            }
        })
    }

    function handleNavigationIcon() {
        setOpen((prev) => !prev);
        // ensure content behind overlay wont scroll
        let header = document.getElementsByTagName("header");
        header[0].classList.toggle("expand");
        document.body.classList.toggle("scroll--disabled");
    }


    function createNavItems(item) {
        if (!item.submenu) {
            return <li onClick={handleNavigationIcon} key={item.text}><Link to={item.link}>{item.text}</Link></li>
        }
        return <li>
            <button aria-controls={item.text + "-submenu"} aria-expanded="false">{item.text}</button>
            <ul id={item.title + "-submenu"} aria-hidden={"true"}>
                {item.submenu.map((nextItem) => {
                    {
                        return createNavItems(nextItem);
                    }
                })}
            </ul>
        </li>;
    }

    function createDeskNavItems(item) {
        if (!item.submenu) {
            if (item.text == "Cart") {
                return <li key={item.text}><Link to={item.link} title="Shopping-Cart"><div className='icon--container'>{cart.length>0 ? (<p className='cart--amount'>{cart.length}</p>): (<></>)}<img src={Cart} className={'cartIcon'}></img></div></Link></li>
            }
            return <li key={item.text}><Link to={item.link}>{item.text}</Link></li>
        }
        return <li>
            <button aria-controls={item.text + "-submenu"} aria-expanded="false">{item.text}</button>
            <ul id={item.text + "-submenu"} aria-hidden={"true"}>
                {item.submenu.map((nextItem) => {
                    {
                        return createDeskNavItems(nextItem);
                    }
                })}
            </ul>
        </li>;
    }

    /* if (mobile) return (
         <div className={"desktopNav"}>
             <ul>
                 {navigationJson.map((item) => {
                     return createNavItems(item);
                 })}
             </ul>
         </div>
     )*/
    if (!navs) return <h3>Loading...</h3>

    return (
        <div className={"navbar"}>
            <nav className={'desktop__nav'}>
                <ul>
                    {navs.map((item) => {
                        return createDeskNavItems(item);
                    })}
                </ul>
            </nav>
            <button tabIndex="0" onClick={handleNavigationIcon}
                style={{ backgroundColor: 'transparent', border: 'none' }}>
                <img
                    src={open === false ? "/assets/images/navigation/burgerbar.svg" : "/assets/images/navigation/close-burgerbar.svg"}
                    alt={"burgerbar"} /></button>
            {open &&
                <nav className={"navbar--open"}>
                    <ul>
                        {navs.map((item) => {
                            return createNavItems(item);
                        })}
                    </ul>
                </nav>
            }
        </div>
    );
};

export default Navbar;
