import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from './Components/Layout';
import Home from './pages/Home';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
