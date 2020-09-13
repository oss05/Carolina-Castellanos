import React from 'react';

import Hero from '../Components/Hero';

import esij from '../images/ESIJ.png';
import itam from '../images/itam.png';
import tecMonterrey from '../images/tecMonterrey.png';
import tsjGuerrero from '../images/tsjGuerrero.png';
import unam from '../images/unam.png';
import up from '../images/up.png';



import './styles/Home.scss';

class Home extends React.Component{

    constructor(props){
        super(props)

      }

    render(){
        return (
            <div className="Home">
                <Hero 
                state={this.props.state}
                />
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