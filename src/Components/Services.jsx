import React from 'react';

import './styles/Services.scss';
import calidadIcon from '../images/calidadIcon.PNG';
import confianzaIcon from '../images/confianzaIcon.PNG';
import eficienciaIcon from '../images/eficienciaIcon.PNG';
import mediacion from '../images/mediacion.PNG';
import arbitraje from '../images/arbitraje.PNG';
import derechoCivil from '../images/derechoCivil.PNG';
import plusIcon from '../images/plusIcon.PNG';

const Services = () => {
  return (
    <section className="Services">
      <div className="Service__icons-grid">
        <div className="Service__icons-item Service__title "> <h2>Servicios:</h2> </div>
        <div className="Service__icons-item Service__icon1 "> <img src={calidadIcon} alt=""/> </div>
        <div className="Service__icons-item Service__icon2 "> <img src={confianzaIcon} alt=""/> </div>
        <div className="Service__icons-item Service__icon3 "> <img src={eficienciaIcon} alt=""/> </div>
      </div>
      <div className="Services__details-grid">
        <div className="Services__details-decorate">
        </div>
        <div className="Services__details-item Services__details-1 "> 
          <div className="Services__details-item-decorate"> </div>
          <img src={plusIcon} className="plusIcon" alt="simbolo más"/>
          <img src={mediacion} className="Services__details-img" alt=""/>
          <h2>Mediacion</h2>
        </div>
        <div className="Services__details-item Services__details-2 "> 
          <div className="Services__details-item-decorate"> </div>
          <img src={plusIcon} className="plusIcon" alt="simbolo más"/>
          <img src={arbitraje} className="Services__details-img" alt=""/>
          <h2>Arbitraje</h2>
        </div>
        <div className="Services__details-item Services__details-3 "> 
          <div className="Services__details-item-decorate"> </div>
          <img src={plusIcon} className="plusIcon" alt="simbolo más"/>
          <img src={derechoCivil} className="Services__details-img" alt=""/>
          <h2>Derecho Civil y comercial</h2>
        </div>
      </div>
    </section>
  )
}

export default Services;