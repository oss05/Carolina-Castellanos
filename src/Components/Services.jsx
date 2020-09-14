import React from 'react';

import './styles/Services.scss';
import mediacionRectangle from '../images/mediacionRectangle.png';
import arbitrajeRectangle from '../images/arbitrajeRectangle.png';
import justiciaRectangle from '../images/justiciaRectangle.png';



const Services = () => {
  return (
    <section className="Services">
      <div className="Services__title">
        <div>Services </div>
        <div className="Services__decorate"></div>
      </div>
      <div className="Services__icons">
        <div className="Services__icons-1">
          <img src={mediacionRectangle} alt=""/>
        </div>
        <div className="Services__icons-2">
          <img src={arbitrajeRectangle} alt=""/>
        </div>
        <div className="Services__icons-3">
          <img src={justiciaRectangle} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default Services;