import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Components/Header'
import './App.css';

import CardGrid from './Components/CardGrid';
import Intro from './Components/Intro';
import Instructions from './Components/Instructions';
import EyeMenu from './Components/EyeMenu';
import MenuCausas from './Components/MenuCausas';
import Causas from './Components/Causas';
import Footer from './Components/Footer';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/tarot"  >
            <Header />
            <CardGrid />
          </Route>
          <Route path="/causas">
            <Header />
            <Causas />
            <Footer />

          </Route>
          <Route path="/instrucciones">
            <Header />
            <Instructions />
            <Footer />

          </Route>
          <Route path="/introducción">
            <Header />
            <Intro />
            <Footer />
          </Route>
          <Route path="/archivo">
            <Header />
            <div>
              <h2>archivo</h2>
            </div>
          </Route>
          <Route path="/menu">
            <EyeMenu />
          </Route>
          <Route path="/causasmenu">
            <MenuCausas />
          </Route>
          <Route path="/">
            <Redirect to="/tarot" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


