import React from 'react';
import Media from 'react-media';

import Button from './Button';

import './styles/Hero.scss';
import triangleHero from '../images/triangleHero.png';
import handHello from '../images/handHello.png';
import eficienciaIcon from '../images/eficienciaIcon.PNG';
import arbitraje from '../images/arbitraje.PNG';
import calidadIcon from '../images/calidadIcon.PNG';
import handHelloLittle from '../images/handHelloLittle.png';

class Hero extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      language: props.state.language,
      title: props.state.hero.title,
      description: props.state.hero.description,
      viewMore: props.state.hero.viewMore,
    }
  }

  componentWillReceiveProps(nextProps){
   // console.log('recibiendo actualizacion', nextProps)
   this.setState({
    ...this.state,
    language: nextProps.state.language,
    title: nextProps.state.hero.title,
    description: nextProps.state.hero.description,
    viewMore: nextProps.state.hero.viewMore,
   })
  }

  render(){
   
    return(
      <>
        <div className="Hero">
          <Media query="(max-width: 850px)" render={() =>
            (
              <img className="Hero__img-responsive" src={handHelloLittle} alt="saludo de manos"></img>
            )}
          />
          <img className="Hero-triangle"  src={triangleHero} alt=""/>
          <div className="Hero-decorate">
            <div className="Hero-decorate-left"></div>
            <div className="Hero-decorate-right"></div>
          </div>
          <div className="Hero__left">
            <img className="Hero-hand" src={handHello} alt=""/>
            <h1 className="Hero__left-title">
              {this.state.title}
            </h1>
            <p className="Hero__left-description">
              {this.state.description}
            </p>
            <Button message={this.state.viewMore}/>
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