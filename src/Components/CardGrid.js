import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";
import useImage from "use-image";
import CartaAzul from "../Graphics/CartaAzul.svg";
import CartaAmarilla from "../Graphics/CartaAmarilla.svg";
import ModalConfirmation from "./ModalConfirmation";
import ModalInstructions from "./ModalInstructions";
import { Icon } from "semantic-ui-react";

const WIDTH = 318;
const HEIGHT = 452;

export default function CardGrid({ random }) {
  const [counter, setCounter] = useState(3);
  const [gridComponents, setGridComponents] = useState([]);
  const startX = Math.floor(-window.innerWidth / WIDTH) * WIDTH;
  const endX = Math.floor((window.innerWidth * 2) / WIDTH) * WIDTH;
  const startY = Math.floor(-window.innerHeight / HEIGHT) * 6 * HEIGHT;
  const endY = Math.floor((window.innerHeight * 2) / HEIGHT) * 6 * HEIGHT;
  const [sideA] = useImage(CartaAzul);
  const [sideB] = useImage(CartaAmarilla);

  useEffect(() => {
    for (let x = startX; x < endX; x += WIDTH) {
      for (let y = startY; y < endY; y += HEIGHT) {
        setGridComponents((gridComponents) => [...gridComponents, { x, y }]);
      }
    }
  }, [setGridComponents, endX, endY, startX, startY]);

  return (
    <div className='konvaStage'>
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
      <button className="scrollbtn">
        Clic y arrastrar <Icon className='scroll' name="arrows alternate" />
      </button>
     <div className='counterpad'><h1>{counter}</h1></div>
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
