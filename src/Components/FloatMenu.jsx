import React from 'react'
import { Link } from 'react-router-dom';

import LogoLittle from '../images/LogoLittle.png';
import menuIcon from '../images/menuIcon.png';
import crossIcon from '../images/crossIcon.png';
import triangle from '../images/triangle.png';

import './styles/FloatMenu.scss';

class FloatMenu extends React.Component {

  state={
    menu: {
      isActive: false
    }
  }
  
  handleMenu(){
    let menu=document.getElementById('FloatMenu-active');
    let block = document.getElementById('FloatMenu__block-active');
    if(!this.state.menu.isActive){
      this.setState({
        menu: {
          isActive: true
        }
      });
      menu.classList.add('FloatMenu-active')
      block.classList.add('FloatMenu__block-active')
    }else{
      this.setState({
        menu: {
          isActive: false
        }
      });
      // console.log('activando')
      menu.classList.remove('FloatMenu-active')
      block.classList.remove('FloatMenu__block-active')
    }
  }

  render(){
    return(
      <>
        <div className="FloatMenu"
        id="FloatMenu-active"
        >
          <img src={menuIcon} 
          alt="icono menu" 
          className="FloatMenu__img"
          onClick={ () => { this.handleMenu() } }
          />
          <div className="FloatMenu__block"
          id="FloatMenu__block-active"
          >
            <div className="FloatMenu__block-logo">
              <img src={LogoLittle} alt=""/>
            </div>
            <div className="FloatMenu__block-cross">
              <img src={crossIcon} alt="cross icon"
              onClick={()=> { this.handleMenu() } }
              />
            </div>
            <div className="FloatMenu__block-nav">
              <ul className="FloatMenu__block-menu">
                <li className="FloatMenu__block-menu-item">
                  <Link>Inicio
                  <img className="FloatMenu__block-menu-triangle" src={triangle} alt="triangle"/>
                  </Link>
                </li>
                <li className="FloatMenu__block-menu-item">
                  <Link>Trayectoria
                  <img className="FloatMenu__block-menu-triangle" src={triangle} alt="triangle"/>
                  </Link>
                </li>
                <li className="FloatMenu__block-menu-item">
                  <Link>Servicios
                  <img className="FloatMenu__block-menu-triangle" src={triangle} alt="triangle"/>
                  </Link>
                </li>
                <li className="FloatMenu__block-menu-item">
                  <Link>Contacto
                  <img className="FloatMenu__block-menu-triangle" src={triangle} alt="triangle"/>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="FloatMenu__block-details">
              <div className="FloatMenu__block-details-left">

              </div>
              <div className="FloatMenu__block-details-right">
                
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default FloatMenu;