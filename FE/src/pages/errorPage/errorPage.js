import React from 'react'
import "./errorPage.scss"
import Logo from "../../assets/logo/logoSad.svg"
import {Link} from "react-router-dom"

const errorPage = () => {
  return (
      
    <div className='errorPageHolder'>
        <img className='errorPageLogo' src={Logo}/>
        <h3>Error, 404 Page not found</h3>
        <p>Woops! looks like this page doesn't exist</p>
        <br/>
        <Link className='btn btn--primary' to={'/'}><p> Go to home</p></Link>
        
    </div>
  )
}

export default errorPage