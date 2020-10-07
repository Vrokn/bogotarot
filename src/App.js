import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Header from './Components/Header'
import './App.css';

import CardGrid from './Components/CardGrid';
import Intro from './Components/Intro';
import Instructions from './Components/Instructions';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/tarot" >
            <Header />
            <CardGrid />
          </Route>
          <Route path="/causas">
            <Header />
            <div>
              <h2>causas</h2>
            </div>
          </Route>
          <Route path="/instrucciones">
            <Header />
            <Instructions />
          </Route>
          <Route path="/introducción">
            <Header />
            <Intro />
          </Route>
          <Route path="/archivo">
            <Header />
            <div>
              <h2>archivo</h2>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


