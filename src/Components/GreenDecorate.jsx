import React from 'react'

import FloatMenu from './FloatMenu';
import './styles/GreenDecorate.scss';
import carrerImg from '../images/carrerImg.png';

const GreenDecorate = (props) => {
 return (
  <>
  <div className="GreenDecorate">
   <img src={carrerImg} alt=""/>
   <span> {props.message} </span>
 </div>
 </>
 )
}

export default GreenDecorate;