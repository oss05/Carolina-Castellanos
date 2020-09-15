import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from './Components/Layout';
import Home from './pages/Home';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      language: {
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
          }
        }
      }  
    }
}

render(){
  return (
    <BrowserRouter>
      <Switch>
        <Layout 
        state={this.state.language}
        >
          <Route exact path="/" render={
            ()=> {
              return (
                <Home
                state={this.state.language}
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
