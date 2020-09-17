import React from 'react';

import contactComponent from '../images/contactComponent.png';
import Button from '../Components/Button';
import './styles/Contact.scss';

class Contact extends React.Component{

 componentDidMount(){
  this.props.differNav(false)
 }


 render(){
  console.log(this.props.data)
  return (
   <section className="Contact">
    <div className="Contact__img">
     <img src={contactComponent} alt=""/>
    </div>
    <div className="Contact__form">
     <h1> {this.props.data.contact.title} </h1>
     <p> {this.props.data.contact.details} </p>
     <form className="Contact__form-container" action="">
      <div className="Contact__form-name">
       <span> {this.props.data.contact.name} </span>
       <input type="text" placeholder={this.props.data.contact.yourName} />
      </div>
      <div className="Contact__form-email">
       <span> {this.props.data.contact.email} </span>
       <input type="text" placeholder={this.props.data.contact.yourEmail} />
      </div>
      <div className="Contact__form-message">
       <span> {this.props.data.contact.message} </span>
       <textarea>
        {this.props.data.contact.yourMessage}
       </textarea>
      </div>
     </form>

    </div>
    <div className="Contact__button">
     <Button message={this.props.data.contact.button} />
    </div>
   </section>
  )
 }
}

export default Contact;