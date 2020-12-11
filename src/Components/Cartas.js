import React, { useState } from "react";
import { Image, Modal } from "semantic-ui-react";
import data from "./Cards";
import { HashLink } from "react-router-hash-link";
import correcto from "../Graphics/correcto.svg";
import incorrecto from "../Graphics/incorrecto.svg";

const Carta = ({ num }) => {
  const [showIntro, setShshowIntro] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [popup, setpopup] = useState(false);
  const [popupc, setpopupc] = useState(false);
  const [fullCard, setFullCard] = useState(false);

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
    <div className="choosedCard">
      <div className="leftSide">
        <Modal
          basic
          onClose={() => setFullCard(false)}
          onOpen={() => setFullCard(true)}
          open={fullCard}
          dimmer="blurring"
          size="tiny"
          trigger={
            <Image
              fluid
              size="massive"
              src={data[num].image}
              verticalAlign="middle"
            />
          }
        >
          <Modal.Content>
            <video
              width="100%"
              loop
              autoPlay
              muted
              className="videocarta"
              id={`video${data[num].hashlink}`}
            >
              <source src={data[num].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Modal.Content>
        </Modal>

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
            Pregunta
          </button>
        </div>
        <div className={showQuestion ? "cardQuestion" : "hidden"}>
          <h1>{data[num].name}</h1>
          <p>{data[num].pregunta}</p>
          {data[num].opciones.map((opcion) => (
            <>
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
              <br></br>
            </>
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
      <Image
        src={incorrecto}
        size="mini"
        className={popup ? "popup" : "nopopup"}
      />
      <Image
        src={correcto}
        size="mini"
        className={popupc ? "popup" : "nopopup"}
      />
    </div>
  );
};
const Cartas = ({ random }) => {
  return (
    <>
      <div className="cartasTarot">
        {random.map((num, index) => (
          <Carta num={num} />
        ))}
      </div>
    </>
  );
};

export default Cartas;
