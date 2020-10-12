import React from 'react';
import Media from 'react-media';

import './styles/Services.scss';
import mediacionRectangle from '../images/mediacionRectangle.png';
import arbitrajeRectangle from '../images/arbitrajeRectangle.png';
import justiciaRectangle from '../images/justiciaRectangle.png';
import mediacionWhite from '../images/mediacionWhite.png';
import arbitrajeWhite from '../images/arbitrajeWhite.png';
import derechoCivilWhite from '../images/derechoCivilWhite.png';
import rectangleGreen from '../images/rectangleGreen.png';
import mediacionFondo from '../images/mediacionFondo.png';
import arbitrajeFondo from '../images/arbitrajeFondo.png';
import justiciaFondo from '../images/justiciaFondo.png';
import crossIcon from '../images/crossIcon.png';
import meditacionHome from '../images/meditacionHome.png'
import meditacionMovil from '../images/meditacionMovil.png'
import logoMeditacion from '../images/metitacionHome2.png'
import albitrajehome from '../images/albitrajeHome.png'
import albotrajeMbovil from '../images/albitrajeMovil.png'
import logoAlbitraje from '../images/albitrajeHome2.png'
import civilHome from '../images/civilHome.png'
import logoCivil from '../images/civilHome2.png'

class Services extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      services: props.state.homeMain.services,
      tituloServicio1: props.state.homeMain.tituloServicio1,
      tituloServicio2: props.state.homeMain.tituloServicio2,
      tituloServicio3: props.state.homeMain.tituloServicio3,
      servicio1points: props.state.homeMain.servicio1points,
      servicio2points: props.state.homeMain.servicio2points,
      servicio3points: props.state.homeMain.servicio3points,
      img1: mediacionRectangle,
      img2: arbitrajeRectangle,
      img3: justiciaRectangle,
      fondo: null,
      select: null,
      point1: null,
      point2: null,
      point3: null,
      activador: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      services: nextProps.state.homeMain.services,
      tituloServicio1: nextProps.state.homeMain.tituloServicio1,
      tituloServicio2: nextProps.state.homeMain.tituloServicio2,
      tituloServicio3: nextProps.state.homeMain.tituloServicio3,
      servicio1points: nextProps.state.homeMain.servicio1points,
      servicio2points: nextProps.state.homeMain.servicio2points,
      servicio3points: nextProps.state.homeMain.servicio3points,

    })
  }

  handleSelected = (who) => {
    switch (who) {
      case '1':
        this.state.img1 == mediacionRectangle ?
          this.setState({
            ...this.state,
            img1: mediacionWhite,
            img2: arbitrajeRectangle,
            img3: justiciaRectangle,
            activador: true,
            fondo: mediacionFondo,
            select: '3',
          })
          :
          this.setState({
            ...this.state,
            img1: mediacionRectangle,
            activador: false,
          })
        break;
      case '2':
        this.state.img2 == arbitrajeRectangle ?
          this.setState({
            ...this.state,
            img2: arbitrajeWhite,
            img1: mediacionRectangle,
            img3: justiciaRectangle,
            activador: true,
            fondo: arbitrajeFondo,
            select: '1',
          })
          :
          this.setState({
            ...this.state,
            img2: arbitrajeRectangle,
            activador: false,
          })
        break;
      case '3':
        this.state.img3 == justiciaRectangle ?
          this.setState({
            ...this.state,
            img3: derechoCivilWhite,
            img1: mediacionRectangle,
            img2: arbitrajeRectangle,
            activador: true,
            fondo: justiciaFondo,
            select: '2',
          })
          :
          this.setState({
            ...this.state,
            img3: justiciaRectangle,
            activador: false,
          })
        break;
    }
  }

  render() {
    return (
      <>
        <section className="Services">
          <div className="Services__title">
            <div>{this.state.services} </div>
            <div className="Services__decorate"></div>
          </div>
          <div className="Services__icons">
            <Media query="(max-width: 830px)"
              render={() => (
                <div className="Services__icons-decorate" ></div>
              )}
            />
          </div>
          <Media query="(min-width: 832px)"
            render={
              () => (
                <div className="Services__selected">
                  <div className="meditacionC">
                    <div className="Services__selected-details">
                      <div className="Services__selected-title seccionHome">
                        <h1> {this.state.tituloServicio3} </h1>
                        <div></div>
                        <article className="Services__icons-rotate">
                          <img className="Services__icons-rotate-draw" src={logoMeditacion} alt="" />
                        </article>
                      </div>
                      <div className="Services__selected-text">
                        <ul>
                          {
                            this.state.servicio3points.map((puntos) => {
                              return <li> {puntos} </li>
                            })
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="">
                      <img src={meditacionHome} alt="" />
                    </div>
                  </div>
                  {/*  */}
                  <div className="meditacionC2">
                    <div className="Services__selected-details">
                      <div className="Services__selected-title seccionHome">
                        <h1> {this.state.tituloServicio1} </h1>
                        <div></div>
                        <article className="Services__icons-rotate">
                          <img className="Services__icons-rotate-draw" src={logoAlbitraje} alt="" />
                        </article>
                      </div>
                      <div className="Services__selected-text">
                        <ul>
                          {
                            this.state.servicio1points.map((puntos) => {
                              return <li> {puntos} </li>
                            })
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="">
                      <img src={albitrajehome} alt="" />
                    </div>
                  </div>

                  {/*  */}
                  <div className="meditacionC">
                    <div className="Services__selected-details">
                      <div className="Services__selected-title seccionHome">
                        <h1> {this.state.tituloServicio2} </h1>
                        <div></div>
                        <article className="Services__icons-rotate">
                          <img className="Services__icons-rotate-draw" src={logoCivil} alt="" />
                        </article>
                      </div>
                      <div className="Services__selected-text">
                        <ul>
                          {
                            this.state.servicio2points.map((puntos) => {
                              return <li> {puntos} </li>
                            })
                          }
                        </ul>
                      </div>
                    </div>
                    <div className="">
                      <img src={civilHome} alt="" />
                    </div>
                  </div>

                </div>
              )
            }
          />
          <Media query="(max-width: 829px)"
            render={
              () => (
                <div className="">
                <div className="meditacionC">
                  <div className="Services__selected-details">
                  <div className="">
                    <img src={meditacionMovil} alt="" />
                  </div>
                    <div className="Services__selected-title seccionHome">
                      <h1> {this.state.tituloServicio3} </h1>
                      <div></div>
                      <article className="Services__icons-rotate">
                        <img className="Services__icons-rotate-draw" src={logoMeditacion} alt="" />
                      </article>
                    </div>
                    <div className="Services__selected-text">
                      <ul>
                        {
                          this.state.servicio3points.map((puntos) => {
                            return <li> {puntos} </li>
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="meditacionC2">
                  <div className="Services__selected-details">
                  <div className="">
                    <img src={albotrajeMbovil} alt="" />
                  </div>
                    <div className="Services__selected-title seccionHome">
                      <h1> {this.state.tituloServicio1} </h1>
                      <div></div>
                      <article className="Services__icons-rotate">
                        <img className="Services__icons-rotate-draw" src={logoAlbitraje} alt="" />
                      </article>
                    </div>
                    <div className="Services__selected-text">
                      <ul>
                        {
                          this.state.servicio1points.map((puntos) => {
                            return <li> {puntos} </li>
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div className="meditacionC">
                  <div className="Services__selected-details">
                  <div className="">
                    <img src={civilHome} alt="" />
                  </div>
                    <div className="Services__selected-title seccionHome">
                      <h1> {this.state.tituloServicio2} </h1>
                      <div></div>
                      <article className="Services__icons-rotate">
                        <img className="Services__icons-rotate-draw" src={logoCivil} alt="" />
                      </article>
                    </div>
                    <div className="Services__selected-text">
                      <ul>
                        {
                          this.state.servicio2points.map((puntos) => {
                            return <li> {puntos} </li>
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
              )
            }
          />
        </section>

      </>
    )

  }
}

export default Services;