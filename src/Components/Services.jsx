import React from 'react';
import Media from 'react-media';

import './styles/Services.scss';
import mediacionRectangle from '../images/mediacionRectangle.png';
import arbitrajeRectangle from '../images/arbitrajeRectangle.png';
import justiciaRectangle from '../images/justiciaRectangle.png';



class Services extends React.Component {
 
 constructor(props){
  super(props)
  this.state={
   services: props.state.homeMain.services,
  }
 }

 componentWillReceiveProps(nextProps){
  this.setState({
   ...this.state,
   services: nextProps.state.homeMain.services,
  })
 }

 render(){
  return (
    <section className="Services">
      <div className="Services__title">
        <div>{this.state.services} </div>
        <div className="Services__decorate"></div>
      </div>
      <div className="Services__icons">
       <Media query="(max-width: 830px)"
       render={ () => (
        <div className="Services__icons-decorate" ></div>
       ) }
       />
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
}

export default Services;