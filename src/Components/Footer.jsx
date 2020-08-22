import React from 'react';
import { Link } from 'react-router-dom'
import './styles/Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__menu">
                <ul>
                    <li> <Link to="/" > Inicio </Link> </li>
                    <li> <Link to="/" >Experiencia </Link> </li>
                    <li> <Link to="/" > Servicios </Link> </li>
                    <li> <Link to="/" > Contacto </Link> </li>
                </ul>
            </div>
            <div className="Footer__others">
                <i> <Link to="/" > Unete a la conversación </Link> </i>
            </div>
        </div>
    )
}

export default Footer;