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
        
        <Header />

        <Switch>
          <Route path="/tarot" >
            <CardGrid />

          </Route>
          <Route path="/causas">
            <Header />

            <div>
              <h2>causas</h2>
            </div>
          </Route>
          <Route path="/instrucciones">
            <Instructions />
          </Route>
          <Route path="/introducción">
            <Intro />
          </Route>
          <Route path="/archivo">
            <div>
              <h2>archivo</h2>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


