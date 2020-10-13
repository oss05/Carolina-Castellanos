import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

import facebookFooter from '../images/facebookF.png';
import twitterFooter from '../images/twF.png';
import linkedlnFooter from '../images/lkinF.png';
import mailImg from '../images/Frame.png'
import soma from '../images/soma.png'

import './styles/Footer.scss';

const Footer = (props) => {
    return (
        <div className="Footer">
            <div className="somaD">
                <a target="black" href="">Politica de Privacidad</a>
                <img src={soma} alt=""/>
            </div>
            <div className="Footer__menu">
                <ul>
                    <li> <Link to="/#inicio"> {props.language.footer.opc1} </Link> </li>
                    <li> <Link to="/trayectoria#inicio" > {props.language.footer.opc2} </Link> </li>
                    <li> <Link to="/acerca-de#inicio" > {props.language.footer.opc3} </Link> </li>
                    <li> <Link to="/contact#inicio" > {props.language.footer.opc4} </Link> </li>
                </ul>
                <div className="contact" >
                    <a target="blank" href="mailto: contacto@ccmx.com.mx"><p><span><img src={mailImg} alt=""/></span>contacto@ccmx.com.mx</p></a>
                    <p>Phone : +52 (55) 8310 0774</p>
                    <p>Mobile : +52 (55) 6203 5541</p>
                    <p className="adv" >El uso de imagenes y logotipo son meramente informativos</p>
                </div>
            </div>
            <div className="Footer__others">
                <li> <Link to="/" > {props.language.footer.social} </Link> </li>
                <div className="Footer__others-social">
                    <img src={facebookFooter} alt="" />
                    <img src={twitterFooter} alt="" />
                    <img src={linkedlnFooter} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;