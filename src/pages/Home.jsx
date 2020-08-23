import React from 'react';

import Button from '../Components/Button';
import ProfileCard from '../Components/ProfileCard';

import HeroImg from '../images/hero-img.png';
import esij from '../images/ESIJ.png';
import itam from '../images/itam.png';
import tecMonterrey from '../images/tecMonterrey.png';
import tsjGuerrero from '../images/tsjGuerrero.png';
import unam from '../images/unam.png';
import up from '../images/up.png';
import Facebook from '../images/Facebook.png';
import Twitter from '../images/Twitter.png';
import Linkedln from '../images/Linkedln.png';
import profile from '../images/profile.png';


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
                <section className="Home__experience">
                    <div className="Home__experience-card">
                        <div className="Home__experience-decorate">
                        </div>
                        <div className="Home__experience-card-left">
                            <ProfileCard 
                            Facebook={Facebook}
                            Twitter={Twitter}
                            Linkedln={Linkedln}
                            profile={profile}
                            name="Carolina Castellanos Lopez"
                            job="Abogada Consultora"
                            option="ALL POSTS"
                            />
                        </div>
                        <div className="Home__experience-card-right">
                            <h1>Experiencia</h1>
                            <h5> Es abogada mexicana especialista en arbitraje y solución alternativa de controversias. </h5>
                            <Button 
                            message="Ver más"
                            />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
    
}

export default Home;