import React from 'react';
import { Link } from 'react-router-dom';

import FloatMenu from './FloatMenu';

import './styles/Navbar.scss';
import logo from '../images/Logo.png';


const Navbar = (props) =>{
    return (
        <React.Fragment>
            <div className="Navbar">
                <figure className="Navbar__logo">
                    <img src={logo} alt="logo"/>
                </figure>
                <div className="Navbar__menu">
                    <FloatMenu />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;