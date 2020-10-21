import React, { useState } from "react";
import { Stage, Layer, Rect } from "react-konva";
import useImage from "use-image";
import CartaAzul from '../Graphics/CartaAzul.svg'
import CartaAmarilla from '../Graphics/CartaAmarilla.svg'

const WIDTH = 318;
const HEIGHT = 452;

export default function CardGrid() {
    const [counter, setcounter] = useState(3);
    const [card, setCard] = useState(CartaAzul);
    const [image] = useImage(card);
    const [stagePos, setStagePos] = React.useState({ x: 200, y: 200 });
    const startX = Math.floor((-stagePos.x - window.innerWidth) / WIDTH) * 40;
    const endX = Math.floor((-stagePos.x + window.innerWidth * 2) / WIDTH) * 40;
    const startY = Math.floor((-stagePos.y - window.innerHeight) / HEIGHT) * 400;
    const endY = Math.floor((-stagePos.y + window.innerHeight * 2) / HEIGHT) * 400;
    const gridComponents = [];
    function selectedCard(key) {

    }
    let i = 0;
    for (var x = startX; x < endX; x += WIDTH) {
        for (var y = startY; y < endY; y += HEIGHT) {
            i += 1;
            gridComponents.push(
                <React.Fragment key={i}>
                    <Rect
                        key={'1' + x + '-' + y}
                        x={3.8 * x}
                        y={1.2 * y}
                        width={WIDTH}
                        height={HEIGHT}
                        cornerRadius={10}
                        fillPatternImage={image}
                        onClick={() => setCard(CartaAmarilla)}
                    />
                    <Rect
                        key={'2' + x + '-' + y}
                        x={3.8 * x + 405}
                        y={1.2 * y + 200}
                        width={WIDTH}
                        height={HEIGHT}
                        cornerRadius={10}
                        fillPatternImage={image}
                        onClick={() => setCard(CartaAmarilla)}
                    />
                    <Rect
                        key={'3' + x + '-' + y}
                        x={3.8 * x + 810}
                        y={1.2 * y + 400}
                        width={WIDTH}
                        height={HEIGHT}
                        cornerRadius={10}
                        fillPatternImage={image}
                        onClick={() => setCard(CartaAmarilla)}
                    />
                </React.Fragment>
            );
        }
    }
    return (
        <Stage
            x={stagePos.x}
            y={stagePos.y}
            width={window.innerWidth}
            height={window.innerHeight - 65}
            draggable
            onDragEnd={(e) => {
                setStagePos(e.currentTarget.position());
            }}
        >
            <Layer>{gridComponents}</Layer>
        </Stage>
    );
};

