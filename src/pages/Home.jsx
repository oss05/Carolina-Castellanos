import React from 'react';

import Button from '../Components/Button';

import HeroImg from '../images/hero-img.png';
import esij from '../images/ESIJ.png';
import itam from '../images/itam.png';
import tecMonterrey from '../images/tecMonterrey.png';
import tsjGuerrero from '../images/tsjGuerrero.png';
import unam from '../images/unam.png';
import up from '../images/up.png';


import './styles/Home.scss';

class Home extends React.Component{
    render(){
        return (
            <div className="Home">
                <div className="Home__hero">
                    <img src={HeroImg} alt="" className="Home__hero-img"/>
                    <div className="Home__hero-details">
                        <div className="Home__hero-details-container">
                            <h1>Consultoría en solución Alternativa de Controversias</h1>
                            <p>
                                Gestión y solución alternativa de controversias comerciales por medio de procesos de mediación y arbitraje.
                            </p>
                            <Button 
                            message="Ver más"
                            />
                        </div>
                    </div>  
                </div>
                <section className="Home__teacher-in">
                    <h5 className="Home__teacher-in-title" >Experiencia impartiendo clases y conferencias en </h5>
                    <div className="Home__teacher-in-list">
                        <div className="Home__teacher-in-item">
                            <img src={esij} alt=""/>
                        </div>
                        <div className="Home__teacher-in-item">
                            <img src={itam} alt=""/>
                        </div>
                        <div className="Home__teacher-in-item">
                            <img src={tecMonterrey} alt=""/>
                        </div>
                        <div className="Home__teacher-in-item">
                            <img src={tsjGuerrero} alt=""/>
                        </div>
                        <div className="Home__teacher-in-item">
                            <img src={unam} alt=""/>
                        </div>
                        <div className="Home__teacher-in-item">
                            <img src={up} alt=""/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    
}

export default Home;