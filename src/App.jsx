import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from './Components/Layout';
import Home from './pages/Home';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
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
 this.render()
}

sendData = () => {
 if(this.state.language.actual==='En'){
  console.log('es')
  return this.state.language.es
 }else if(this.state.language.actual==='Es'){
  console.log('en')
  return this.state.language.en
 }
}

render(){
  return (
    <BrowserRouter>
      <Switch>
        <Layout 
        state={this.state.language}
        languageSignal={this.languageSignal}
        >
          <Route exact path="/consultoria-carolina/" render={
            ()=> {
              return (
                <Home
                state={
                 this.sendData()
                }
                />
              )
            }
          } />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

}

export default App;
