import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import CardGrid from "./Components/CardGrid";
import Intro from "./Components/Intro";
import Instructions from "./Components/Instructions";
import EyeMenu from "./Components/EyeMenu";
import MenuCausas from "./Components/MenuCausas";
import Footer from "./Components/Footer";
import Cartas from "./Components/Cartas";
import Historias from "./Components/Historias";
import { createBrowserHistory } from "history";
import Biodiversidad from "./Components/Biodiversidad";
import Redes from "./Components/Redes";
import Solidaridad from "./Components/Solidaridad";
import Simbiosis from "./Components/Simbiosis";
import EyeMenu2 from "./Components/EyeMenu2";
const customHistory = createBrowserHistory();

export default function App() {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array.slice(0, 3);
  }
  let random = shuffleArray(numbers);
  return (
    <Router history={customHistory}>
      <div className="App">
        <Switch>
          <Route path="/biodiversidad">
            <Header />
            <Biodiversidad />
            <Footer />
          </Route>
          <Route path="/redes">
            <Header />
            <Redes />
            <Footer />
          </Route>
          <Route path="/solidaridad">
            <Header />
            <Solidaridad />
            <Footer />
          </Route>
          <Route path="/simbiosis">
            <Header />
            <Simbiosis />
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
          <Route path="/cartas">
            <Header />
            <Cartas random={random} />
          </Route>
          <Route path="/historias">
            <Header />
            <Historias />
            <Footer />
          </Route>
          <Route path="/menu">
            <EyeMenu2 />
          </Route>
          <Route path="/causasmenu">
            <MenuCausas customHistory={customHistory} />
          </Route>
          <Route path="/" exact>
            <Header />
            <CardGrid random={random} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
