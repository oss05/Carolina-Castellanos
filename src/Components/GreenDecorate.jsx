import React from 'react';
import './styles/GreenDecorate.scss';
import carrerImg from '../images/carrerImg.png';

class GreenDecorate extends React.Component{

 constructor(props){
  super(props)
 }

 render(){

 
  return (
   <>
   <div className="GreenDecorate">
    <img src={carrerImg} alt=""/>
    <span> {this.props.message} </span>
  </div>
  </>
  )
 }
}

export default GreenDecorate;