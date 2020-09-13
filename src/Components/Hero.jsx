import React from 'react';

import './styles/Hero.scss';
import triangleHero from '../images/triangleHero.png';
import handHello from '../images/handHello.png';
import eficienciaIcon from '../images/eficienciaIcon.png';
import arbitraje from '../images/arbitraje.png';
import calidadIcon from '../images/calidadIcon.png';


class Hero extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      language: props.state.es.language,
      title: props.state.es.hero.title,
      description: props.state.es.hero.description,
    }
  }

  render(){
    return(
      <>
        <div className="Hero">
          <img className="Hero-triangle"  src={triangleHero} alt=""/>
          <div className="Hero__left">
            <img className="Hero-hand" src={handHello} alt=""/>
            <h1 className="Hero__left-title">
              {this.state.title}
            </h1>
            <p className="Hero__left-description">
              {this.state.description}
            </p>
          </div>
          <div className="Hero__right">
            <img src={calidadIcon} alt="" className="Hero__right-item"/>
            <img src={arbitraje} alt="" className="Hero__right-item"/>
            <img src={eficienciaIcon} alt="" className="Hero__right-item"/>
          </div>
        </div>
      </>
    )
  }
}

export default Hero;