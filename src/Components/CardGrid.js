import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { Modal, Image, Button } from "semantic-ui-react";
import useImage from "use-image";
import CartaAzul from "../Graphics/CartaAzul.svg";
import CartaAmarilla from "../Graphics/CartaAmarilla.svg";
import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import OrnamentoSD from "../Graphics/OrnamentoSD.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import cartasHorizontalBlanco from "../Graphics/cartasHorizontalBlanco.gif";
import cartasVerticalBlanco from "../Graphics/cartasVerticalBlanco.gif";

const WIDTH = 318;
const HEIGHT = 452;

const ModalConfirmation = () => {
  const [firstOpen, setFirstOpen] = useState(true);
  const [secondOpen, setSecondOpen] = useState(false);
  const onClick = () =>{
    setFirstOpen(false);
    setSecondOpen(true);
  }
  return (
    <>
      <Modal basic dimmer="blurring" open={firstOpen}>
        <Modal.Content>
          <div className="modalInstructions">
            <div className="modalInstructionsContainer">
              <div className="carddescriptiontop">
                <Image src={OrnamentoSI} size="tiny" floated="left" />
                <Image src={OrnamentoSD} size="tiny" floated="right" />
              </div>
              <div className={"modalDescription"}>
                <h1>Instrucciones</h1>
                <Image
                  className={"cartasHorizontalAzul"}
                  src={cartasHorizontalBlanco}
                />
                <Image
                  className={"cartasVerticalAzul"}
                  src={cartasVerticalBlanco}
                />
                <p>
                  Ingrese a la sección del Tarot y seleccione las tres cartas
                  que prefiera haciendo click o tap sobre ellas. Estas cartas
                  visualizan el presente y lo llevan a su destino.
                </p>
                <button
                  className="begin"
                  onClick={() => {
                    onClick();
                    setSecondOpen(false);
                  }}
                >
                  EMPEZAR
                </button>
              </div>
              <div className="carddescriptionbottom">
                <Image src={OrnamentoII} size="tiny" floated="left" />
                <Image src={OrnamentoID} size="tiny" floated="right" />
              </div>
            </div>
          </div>
        </Modal.Content>
      </Modal>
      
      <Modal open={secondOpen}>
        <Modal.Content>
          <p>That's everything!</p>
          <Button
            icon="check"
            content="All Done"
            onClick={() => {
              onClick();
            }}
          />
        </Modal.Content>
      </Modal>
    </>
  );
};

const Card = ({ width, x, y, height, sideA, sideB, onClick }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      cornerRadius={10}
      fillPatternImage={flipped ? sideB : sideA}
      onClick={() => {
        setFlipped(true);
        onClick();
      }}
    />
  );
};

export default function CardGrid() {
  const [counter, setCounter] = useState(3);
  const [gridComponents, setGridComponents] = useState([]);
  const startX = Math.floor(-window.innerWidth / WIDTH) * WIDTH;
  const endX = Math.floor((window.innerWidth * 2) / WIDTH) * WIDTH;
  const startY = Math.floor(-window.innerHeight / HEIGHT) * 6 * HEIGHT;
  const endY = Math.floor((window.innerHeight * 2) / HEIGHT) * 6 * HEIGHT;
  const [sideA] = useImage(CartaAzul);
  const [sideB] = useImage(CartaAmarilla);
  

  useEffect(() => {
    console.log("render");
    for (let x = startX; x < endX; x += WIDTH) {
      for (let y = startY; y < endY; y += HEIGHT) {
        setGridComponents((gridComponents) => [...gridComponents, { x, y }]);
      }
    }
  }, [setGridComponents, endX, endY, startX, startY]);

  return (
    <>
      <Stage
        x={200}
        y={200}
        width={window.innerWidth}
        height={window.innerHeight - 65}
        draggable
      >
        <Layer>
          {gridComponents.map(({ x, y }) => (
            <>
              {[{}, {}, {}].map((card, index) => (
                <Card
                  x={3.8 * x + 405 * index}
                  y={1.2 * y + 200 * index}
                  width={WIDTH}
                  height={HEIGHT}
                  sideA={sideA}
                  sideB={sideB}
                  onClick={() => {
                    setCounter((counter) => counter - 1);
                  }}
                />
              ))}
            </>
          ))}
        </Layer>
      </Stage>
      <ModalConfirmation />
      {counter <= 0 && <ModalConfirmation />}
    </>
  );
}
