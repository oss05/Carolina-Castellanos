import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from './Components/Layout';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
