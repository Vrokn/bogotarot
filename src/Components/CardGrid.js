import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";
import useImage from "use-image";
import CartaAzul from "../Graphics/GroupA.png";
import CartaAmarilla from "../Graphics/GroupB.png";
import CartaAzulMovil from "../Graphics/GroupC.png";
import CartaAmarillaMovil from "../Graphics/GroupD.png";
import ModalConfirmation from "./ModalConfirmation";
import ModalInstructions from "./ModalInstructions";
import { Icon } from "semantic-ui-react";

export default function CardGrid({ random }) {
  let WIDTH = 318;
  let HEIGHT = 452;
  function getcard() {
    if (window.innerWidth < 767) {
      WIDTH = 170;
      HEIGHT = 242;
    }
  }
  getcard();

  const [counter, setCounter] = useState(3);
  const [gridComponents, setGridComponents] = useState([]);
  const startX = Math.floor(-window.innerWidth / WIDTH) * WIDTH;
  const endX = Math.floor((window.innerWidth * 2) / WIDTH) * WIDTH;
  const startY = Math.floor(-window.innerHeight / HEIGHT) * 6 * HEIGHT;
  const endY = Math.floor((window.innerHeight * 2) / HEIGHT) * 6 * HEIGHT;
  const [sideA] = useImage(CartaAzul);
  const [sideB] = useImage(CartaAmarilla);
  const [sideAm] = useImage(CartaAzulMovil);
  const [sideBm] = useImage(CartaAmarillaMovil);

  useEffect(() => {
    for (let x = startX; x < endX; x += WIDTH) {
      for (let y = startY; y < endY; y += HEIGHT) {
        setGridComponents((gridComponents) => [...gridComponents, { x, y }]);
      }
    }
  }, [setGridComponents, endX, endY, startX, startY, WIDTH, HEIGHT]);

  return (
    <div className="konvaStage">
      <Stage
        x={window.innerWidth < 767 ? 100 : 200}
        y={window.innerWidth < 767 ? 100 : 200}
        width={window.innerWidth}
        height={
          window.innerWidth < 767
            ? window.innerHeight - 42
            : window.innerHeight - 65
        }
        draggable
      >
        <Layer>
          {gridComponents.map(({ x, y }) => (
            <>
              {[{}, {}, {}].map((card, index) => (
                <Card
                  x={
                    window.innerWidth < 767
                      ? 3.7 * x + 210 * index
                      : 3.8 * x + 405 * index
                  }
                  y={
                    window.innerWidth < 767
                      ? 1.2 * y + 100 * index
                      : 1.2 * y + 200 * index
                  }
                  width={WIDTH}
                  height={HEIGHT}
                  sideA={window.innerWidth < 767 ? sideAm : sideA}
                  sideB={window.innerWidth < 767 ? sideBm : sideB}
                  onClick={() => {
                    setCounter((counter) => counter - 1);
                  }}
                />
              ))}
            </>
          ))}
        </Layer>
      </Stage>
      <button className="scrollbtn">
        Clic y arrastrar <Icon className="scroll" name="arrows alternate" />
      </button>
      <div className="counterpad">
        <h1>{counter}</h1>
      </div>
      {counter === 3 && <ModalInstructions />}
      {counter <= 0 && <ModalConfirmation random={random} />}
    </div>
  );
}

const Card = ({ width, x, y, height, sideA, sideB, onClick }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Rect
      x={x}
      y={y}
      width={width}
      height={height}
      cornerRadius={10}
      shadowBlur={flipped ? 40 : 0}
      fillPatternImage={flipped ? sideB : sideA}
      onTap={() => {
        setFlipped(true);
        !flipped ? onClick() : setFlipped(true);
      }}
      onClick={() => {
        setFlipped(true);
        !flipped ? onClick() : setFlipped(true);
      }}
    />
  );
};
