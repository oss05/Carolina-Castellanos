import React from 'react';
import './styles/GreenDecorate.scss';
import alter from '../images/alternativa.png';


class GreenDecorate extends React.Component{



 render(){

 
  return (
   <>
   <div className="GreenDecorate">
     {
      this.props.params.nav.title? 
      <div className="About__decorate">
      <div></div>
      <h2> {this.props.params.nav.title} </h2>
      <p> {this.props.params.nav.details} </p>
     </div>
     :
     ''
     }
    <img src={alter} alt=""/>
    <span> {this.props.params.nav.greenDecorateMessage} </span>
  </div>
  </>
  )
 }
}

export default GreenDecorate;