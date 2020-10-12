import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import esij from '../images/ESIJ.png';
import itam from '../images/itam.png';
import tecMonterrey from '../images/tecMonterrey.png';
import tsjGuerrero from '../images/tsjGuerrero.png';
import unam from '../images/unam.png';
import up from '../images/up.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <div className="fristpart d-flex justify-content-around">
                <img className="d-block w-80" src={esij} alt="First slide"/>      
                <img className="d-block w-80" src={itam} alt="First slide"/>
                <img className="d-block w-80" src={tecMonterrey} alt="First slide"/> 
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="fristpart d-flex justify-content-around">
                <img className="d-block w-80" src={tsjGuerrero} alt="First slide"/>      
                <img className="d-block w-80" src={unam} alt="First slide"/>
                <img className="d-block w-80" src={up} alt="First slide"/> 
            </div>
        </Carousel.Item>

        <Carousel.Item>
            <div className="fristpart d-flex justify-content-around">
                <img className="d-block w-80" src={esij} alt="First slide"/>      
                <img className="d-block w-80" src={itam} alt="First slide"/>
                <img className="d-block w-80" src={tecMonterrey} alt="First slide"/> 
            </div>
        </Carousel.Item>
       
      </Carousel>
    );
  }
  
export default ControlledCarousel 