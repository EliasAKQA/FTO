import React, {useEffect} from 'react'
import "./errorPage.scss"
import Logo from "../../assets/logo/logoSad.svg"
import {Link} from "react-router-dom"

const ErrorPage = () => {

    useEffect(() => {
        document.title = "Error - Flight To Orbit";
    }, []);

    return (
        <div className='errorPageHolder main__container--lesswidth'>
            <div>
                <img className='errorPageLogo' src={Logo}/>
                <h3>Error, 404 Page not found</h3>
                <p>Woops! looks like this page doesn't exist</p>
                <br/>
                <Link className='btn btn--primary' to={'/'}><p className='btnText'> Go to home</p></Link>
            </div>
        </div>
    )
}

export default ErrorPage