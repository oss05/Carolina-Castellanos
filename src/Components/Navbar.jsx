import React from 'react';

import GreenDecorate from './GreenDecorate';
import FloatMenu from './FloatMenu';

import './styles/Navbar.scss';
import logo from '../images/Logo.png';


class Navbar extends React.Component{

 constructor(props){
  super(props)
  this.state={
   valor: props.valor,
  }
 }

 componentWillReceiveProps(nextProps){
  this.setState({
   valor: nextProps.valor,
  })
  
 }

 render(){
  return (
   <React.Fragment>
    {this.state.valor?
     <div className="Navbar2" id="inicio">
     <div className="Navbar__img">
      <GreenDecorate params={this.props.language}/>
     </div>   
     <div className="Navbar__menu2">
      <FloatMenu
      state={this.props.state}
      languageSignal={this.props.languageSignal}
      />
     </div>
     </div>
      :
      <div className="Navbar1" id="inicio">
       <div className="Navbar__logo">
        <img src={logo} alt="logo"/>
       </div> 
       <div className="Navbar__menu">
        <FloatMenu
        state={this.props.state}
        languageSignal={this.props.languageSignal}
        />
       </div>
      </div>
     }
   </React.Fragment>
  )

 }
}

export default Navbar;