import React from 'react';

import writeAbout from '../images/writeAbout.png';
import './styles/About.scss';

class About extends React.Component{

 constructor(props){
  super(props)
  this.state={
   activar: true,
   description: props.data.about.description
  }
 }

 componentDidMount(){  
  const details = document.getElementById('deatils-about')
  details.innerHTML=this.state.description
  if(visualViewport.width>750){
   this.props.differNav(this.state.activar)
  }else{
   this.props.differNav(false)
   this.setState({
    ...this.state.details,
    activar: false,
  })}
   
 }


 componentWillReceiveProps(nextProps){
  this.setState({
   details: nextProps.data.about.description,
  })
  const details = document.getElementById('deatils-about')
  details.innerHTML=nextProps.data.about.description  
 }

 render(){
  return (
   <>
    <div className="About">
    <section className="About-container">
     <div className="About__img">
      <img src={writeAbout} alt=""/>
      <div></div>
     </div>
     <div className="About__littleDescription">
      <div>
       <h2> {this.props.data.about.titleLittle} </h2>
       <p>
        {this.props.data.about.descriptionLittle}
       </p>
      </div>
     </div>
     <div className="About__details">
      <h2> {this.props.data.about.title} </h2>
      <p id="deatils-about">
      
      </p>
     </div>
    </section>
    </div>
   </>
  )
 }
}

export default About;