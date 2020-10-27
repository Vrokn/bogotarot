import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import CardGrid from "./Components/CardGrid";
import Intro from "./Components/Intro";
import Instructions from "./Components/Instructions";
import EyeMenu from "./Components/EyeMenu";
import MenuCausas from "./Components/MenuCausas";
import Causas from "./Components/Causas";
import Footer from "./Components/Footer";
import Cartas from "./Components/Cartas";
import Historias from "./Components/Historias";

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
  console.log("texto");
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route path="/tarot">
            <Header />
            <CardGrid random={random} />
          </Route> */}
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
            <EyeMenu />
          </Route>
          <Route path="/causasmenu">
            <MenuCausas />
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
