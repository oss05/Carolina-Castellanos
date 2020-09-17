import React from 'react';
import './styles/GreenDecorate.scss';


class GreenDecorate extends React.Component{



 render(){

 
  return (
   <>
   <div className="GreenDecorate">
    <img src={this.props.params.nav.greenDecorateImg} alt=""/>
    <span> {this.props.params.nav.greenDecorateMessage} </span>
  </div>
  </>
  )
 }
}

export default GreenDecorate;