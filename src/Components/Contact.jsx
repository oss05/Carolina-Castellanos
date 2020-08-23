import React from 'react';

import location from '../images/location.png';

import './styles/Contact.scss';
import contactDecorate from '../images/contact-decorate.png'; 

const Contact = (props) =>{
  return (
    <div className="Contact">
      <div className="Contact__decorate">
        <img src={contactDecorate} alt="decoracion de seccion de contacto"/>
      </div>
      <div className="Contact__form">
        <h2 className="Contact__form-title">
          Registrese y le enviaremos un correo electronico en unos días 
        </h2>
        <form action="">
          <input placeholder="Nombre" type="text" className="Contact__form-name input"/>
          <input placeholder="Email" type="text" className="Contact__form-email input"/>
          <input placeholder="numero telefonico" type="text" className="Contact__form-telephone input"/>
        </form>
        <h4 className="Contact__form-details">
          Deseamos mantener un dialogo cercano con nuestros clientes a medida que desarrollamos nuestra plataforma. Por lo tanto, su número de teléfono es importante para nosotros.
        </h4>
      </div>
      <div className="Contact__location">
        <img src={location} alt=""/>
      </div>
    </div>
  )
}

export default Contact;