import React from 'react';
import { Link } from 'react-router-dom';

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
                    <ul>
                        <li> <Link to="" > Inicio </Link> </li>
                        <li> <Link to="" > Trayectoria </Link> </li>
                        <li> <Link to="" > Servicios </Link> </li>
                        <li> <Link to="" > Contacto </Link> </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;