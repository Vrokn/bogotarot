import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import data from "./Cards";
import { HashLink } from "react-router-hash-link";

const Carta = ({ num }) => {
  const [showIntro, setShshowIntro] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="cartasTarot">
        <div className="choosedCard">
          <div className="leftSide">
            <Image
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
                      setShowQuestion(false);
                      setShowAnswer(true);
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
              <HashLink to={`/causas#${data[num].causa}`}>
                <button className="cardbutton">Ir a mi destino</button>
              </HashLink>
            </div>
          </div>
        </div>
      </div>
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
