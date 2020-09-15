import React from 'react';
import { Link } from 'react-router-dom'

import facebookFooter from '../images/facebookFooter.png';
import youtubeFooter from '../images/youtubeFooter.png';
import twitterFooter from '../images/twitterFooter.png';
import linkedlnFooter from '../images/linkedlnFooter.png';

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
                <li> <Link to="/" > Unete a la conversación </Link> </li>
                <div className="Footer__others-social">
                 <img src={youtubeFooter} alt=""/>
                 <img src={facebookFooter} alt=""/>
                 <img src={twitterFooter} alt=""/>
                 <img src={linkedlnFooter} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer;