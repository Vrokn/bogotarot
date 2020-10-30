import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import data from "./Cards";
import { HashLink } from "react-router-hash-link";
import correcto from "../Graphics/Correcto.svg";
import incorrecto from "../Graphics/Incorrecto.svg";

const Carta = ({ num }) => {
  const [showIntro, setShshowIntro] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [popup, setpopup] = useState(false);
  const [popupc, setpopupc] = useState(false);

  const showpopup = () => {
    setpopup(true);
    setTimeout(() => {
      setpopup(false);
    }, 1000);
  };
  const showpopupc = () => {
    setpopupc(true);
    setTimeout(() => {
      setpopupc(false);
      setShowQuestion(false);
      setShowAnswer(true);
    }, 1000);
  };

  return (
    <>
      <div className="cartasTarot">
        <div className="choosedCard">
          <div className="leftSide">
            <Image
              fluid
              size="massive"
              src={data[num].image}
              verticalAlign="middle"
            />
            <div className="cardName">
              <p>{data[num].name}</p>
            </div>
          </div>
          <div className="rightSide">
            <div className={showIntro ? "cardIntro" : "hidden"}>
              <h1>{data[num].name}</h1>
              <p>{data[num].desctiption}</p>
              <button
                className="cardbutton"
                onClick={() => {
                  setShshowIntro(false);
                  setShowQuestion(true);
                }}
              >
                Pregunta -----
              </button>
            </div>
            <div className={showQuestion ? "cardQuestion" : "hidden"}>
              <h1>{data[num].name}</h1>
              <p>{data[num].pregunta}</p>
              {data[num].opciones.map((opcion) => (
                <button
                  className="options"
                  onClick={() => {
                    if (data[num].opcionValida === opcion) {
                      showpopupc();
                    } else {
                      showpopup();
                    }
                  }}
                >
                  {opcion}
                </button>
              ))}
            </div>
            <div className={showAnswer ? "cardAnwser" : "hidden"}>
              <h2>{data[num].name}</h2>
              <p>{data[num].respuesta}</p>
              <p>Las cartas elegidas han señalado su presente.</p>
              <HashLink to={`/${data[num].causa}`}>
                <button className="cardbutton">Ir a mi destino</button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
      <Image src={incorrecto} size='tiny' className={popup ? "popup" : "nopopup"} />
      <Image src={correcto} size='tiny' className={popupc ? "popup" : "nopopup"} />
    </>
  );
};
const Cartas = ({ random }) => {
  /*   const [modalOpen, setModalOpen] = useState([false]);

  let moda = random.map((num) => data[num].causa); */

  return (
    <>
      {random.map((num, index) => (
        <Carta num={num} />
      ))}
    </>
  );
};

export default Cartas;
