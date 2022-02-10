import React from 'react';
import logo from "assets/logo/logo.svg";
import './loadingScreen.scss';

const LoadingScreen = () => {
    return (
        <div className={"loading__container"}>
            <img src={logo} alt={"loading icon"} />
            <h1>Loading</h1>
        </div>
    );
};

export default LoadingScreen;
