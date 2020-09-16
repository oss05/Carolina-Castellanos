import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from './Components/Layout';
import Home from './pages/Home';
import Trayectoria from './pages/Trayectoria';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      nav: false,
      language: {
       actual:'En',
        es: {
          language: 'Es',
          nav: {
            menu1: 'Inicio',
            menu2: 'Trayectoria',
            menu3: 'Servicios',
            menu4: 'Contacto',
            languageReference: 'Idioma',
          },
          hero:{
            title: 'Consultoría en Solución Alternativa de Controversias',
            description: 'Gestión y solución alternativa de controversias comerciales por medio de procesos de mediación y arbitraje',
            viewMore: 'ver más',
          },
          homeMain:{
           carrerButton: 'Ver Trayectoria',
           services: 'Servicios',
           experienceTitle: 'Experiencia impartiendo clases y conferencias en'
          },
          footer:{
           opc1: 'Inicio',
           opc2: 'Trayectoria',
           opc3: 'Servicios',
           opc4: 'contacto',
           social: 'Únete a la conversación',
          },
          trayectoria:{
           sendButton: 'Enviar Mensaje',
           title: 'Semblanza Profesional',
           details: 'Es licenciada en Derecho por el Instituto Tecnológico Autónomo de México (ITAM), especialista en arbitraje comercial y gestión de conflictos por medio de mecanismos alternativos de solución de controversias (MASC). Fue Secretario General del Centro de Arbitraje de México (CAM) por 10 años, donde tuvo a su cargo la administración de más de 70 arbitrajes comerciales nacionales e internacionales en materia comercial del sector de telecomunicaciones, franquicias, energía, propiedad intelectual, obra, entre otros. <br /><br /> Ha sido profesora de cátedra en la Universidad Panamericana y en el Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM), Campus Santa Fe, Campus San Luis Potosí y Campus Estado de México. Profesora en los programas de maestría de solución alternativa de controversias del Poder Judicial de Guanajuato y del Poder Judicial de Guerrero. Es profesora en el Diplomado en Derecho Corporativo del ITAM, y profesora y coordinadora académica del Diplomado en Mecanismos Alternativos de Solución de Controversias del ITAM.<br /><br />En su práctica profesional independiente representa a personas físicas, personas morales y a entidades de la administración pública en procedimientos arbitrales administrados y ad-hoc, nacionales e internacionales, así como en procedimientos judiciales relacionados con arbitraje; se desempeña como árbitro; como mediadora privada; y presta consultoría en materia de MASC. <br /><br />Miembro de la Barra Mexicana, Colegio de Abogados, S.C. (BMA)<br /><br />Presidente del Consejo de Administración del Centro de Arbitraje de México (CAM)<br /><br /><span>Resumen profesional</span> <br /><br /> <span>Abogada Consultora independiente</span>, enero 2014 a la fecha. <br /><br /><span>Coordinadora académica del Diplomado en Mecanismos Alternativos de Solución de Controversias del ITAM</span>, julio de 2017 a la fecha.<br /><br /><span> Profesora de cátedra en el ITAM</span>, de enero de 2015 a la fecha. <br /><br /><span>Profesora en la Maestría de Mediación y Conciliación</span> de la Escuela Judicial del Poder Judicial del Estado de Guerrero, 2017 a la fecha<br /><br /><span>Profesora de los módulos de mediación, conciliación y arbitraje</span> en la Especialidad de Métodos Alternativos de Solución de Controversias y en la Maestría en Derecho Procesal ofrecidas por la Escuela de Estudios e Investigación Judicial del Poder Judicial del Estado de Guanajuato, 2015 -2017.<br /><br /><span>Profesora de cátedra en el Tecnológico de Monterrey, Campus Estado de México</span>, agosto de 2019 a la fecha.<br /><br /><span>Profesora de cátedra en el Tecnológico de Monterrey, Campus Santa Fe</span>, agosto de 2013 a diciembre 2014.<br /><br /><span>Profesora invitada en el Tecnológico de Monterrey, Campus San Luis Potosí</span>, enero a mayo de 2011; y de agosto a diciembre de 2015. <br /><br /><span>Directora y Secretario General del Centro de Arbitraje de México (CAM)</span>, noviembre de 2004 a diciembre de 2013.<br /><br /><span>Profesora invitada en Penn State University</span>, noviembre de 2009<br /><br /><span>Profesora titular de la materia Arbitraje en la Universidad Panamericana</span>, agosto de 2005 a diciembre de 2007<br /><br /><span>Miembro de la Secretaría General del CAM</span>, julio de 2002 a noviembre de 2004<br /><br /><span>Licenciada en Derecho por el ITAM</span>, 2002.',
          }
        },
        en:{
          language: 'En',
          nav: {
            menu1: 'Home',
            menu2: 'Carrer Path',
            menu3: 'Services',
            menu4: 'Contact',
            languageReference: 'Language',
          },
          hero:{
           title: 'Consultancy in Aternative Dispute Resolution',
           description: 'Management nad dispute resolution of commercial disputes through mediation and arbitration processes',
           viewMore: 'view more',
         },
         homeMain:{
          carrerButton: 'View Carrer Path',
          services: 'Services',
          experienceTitle: 'Experience teaching classes and conferences in:'
         },
         footer:{
          opc1: 'Home',
          opc2: 'Carrer Path',
          opc3: 'Services',
          opc4: 'Contact',
          social: 'Join the conversation',
         },
         trayectoria:{
          sendButton: 'Send Message',
          title: 'Professional Resume',
          details: `Carolina Castellanos López obtained her Law Degree from Instituto Tecnológico Autónomo de México (ITAM).  She has specialized in commercial arbitration and in the management and resolution of conflicts through alternative dispute resolution (ADR). She served as Secretary General of the Arbitration Center of Mexico (CAM) for 10 years, where she was in charge of the management of over 70 arbitration processes, national and international, related to commercial matters of the construction, telecommunications, franchising, energy and intellectual property sectors, inter alia. <br /><br /> Carolina has been professor at Universidad Panamericana’s law school and at the Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) San Luis Potosi, Santa Fe and Mexican State campus. She has also been professor of the master programs of mediation offered by the Judicial Power of Guanajuato, México, and the Judicial Power of Guerrero, México. She is currently professor of the Diplomat on Corporate Law at the ITAM, as well as professor and academic coordinator of the Diplomat on ADR’s at the ITAM <br /><br /> On her independent legal practice, Carolina Castellanos López represents private companies as legal counsel in national and international arbitration, administered or ad hoc, as well on judicial proceedings related to arbitration; she serves as private law arbitrator; as private mediator; and provides consultancy on alternative dispute resolution mechanisms <br /><br /> President of the Arbitration Center of México (CAM) Board of Directors <br /><br />  <span>Professional summary</span> <br /><br /> <span>Consultant Lawyer in Alternative Dispute Resolution</span>, January 2014 – Currently <br /><br /><span> President of the Arbitration Center of México (CAM) Board of Directors</span>, March 2020 – Currently <br /><br /><span> CEO and Secretary General, Arbitration Center of México (CAM)</span>, November 2004 to December 2013 <br /><br /><span> Academic Coordinator of the Diplomat on Alternative Dispute Resolution Mechanisms (Diplomat on ADR) at ITAM</span>, 2017 <br /><br /> – Currently <br /><br /> <span>Professor at ITAM</span>, January 2015 - Currently. <br /><br /> <span>Professor of Mediation and Conciliation in the Master on Mediation offered by the Judicial Institute of the Judicial Power of Guerrero</span>, México (2017 - Currently). <br /><br /><span> Professor of Mediation and Conciliation in the Specialty in ADR and in the Master in Procedural Law offered by the Judicial School of the Judicial Power of Guanajuato</span>, México (August 2015 - 2017) <br /><br /> <span>Professor at Tecnológico de Monterrey, Mexican State campus</span>, August 2019 – Currently <br /><br /> <span>Professor at Tecnológico de Monterrey, Santa Fe campus</span>, August 2013 – 2015 <br /><br /> <span>Professor at Tecnológico de Monterrey, San Luis Potosí campus</span>, January to May, 2011; and from August to December, 2015 <br /><br /> <span>Visiting Lecturer at Penn State University</span>, November 2009. <br /><br /> <span>Professor at Universidad Panamericana</span>, August 2005 to December 2007 <br /><br /><span> Member of CAM’s Secretariat</span>, July 2002 to November 2004.`,
         }
        }
      }  
    }
}

languageSignal = (a) =>{
 this.setState({
  language: {
   ...this.state.language,
   actual: a,
  }
 })
 
}

sendData = () => {
 
 if(this.state.language.actual==='En'){
  return this.state.language.en
 }else if(this.state.language.actual==='Es'){
  return this.state.language.es
 }
}

differNav = (valor) =>{
 this.setState({
  language: {
   ...this.state.language,
  },
  nav: valor,

 })
}

render(){
  return (
    <BrowserRouter>
      <Switch>
        <Layout 
        valor={this.state.nav}
        state={this.state.language}
        language={this.sendData()}
        languageSignal={this.languageSignal}
        >
          <Route exact path="/consultoria-carolina/" render={
            ()=> {
              return (
                <Home
                state={
                 this.sendData()
                }
                differNav={this.differNav}
                />
              )
            }
          } 
          />
         <Route exact path="/trayectoria/" render={
          () => {
           return (
             <Trayectoria 
             data={this.sendData()}
             differNav={this.differNav}
             />
           )
          }
         }
         />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

}

export default App;
