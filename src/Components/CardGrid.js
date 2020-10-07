import React, { } from "react";
import { Stage, Layer, Rect } from "react-konva";
import useImage from "use-image";
import CartaAzul from '../Graphics/CartaAzul.svg'
const WIDTH = 318;
const HEIGHT = 452;

export default function CardGrid() {
    const [image] = useImage(CartaAzul);
    const [stagePos, setStagePos] = React.useState({ x: 200, y: 200 });
    const startX = Math.floor((-stagePos.x - window.innerWidth) / WIDTH) * WIDTH;
    const endX = Math.floor((-stagePos.x + window.innerWidth * 2) / WIDTH) * WIDTH;
    const startY = Math.floor((-stagePos.y - window.innerHeight) / HEIGHT) * HEIGHT;
    const endY = Math.floor((-stagePos.y + window.innerHeight * 2) / HEIGHT) * HEIGHT;
    const gridComponents = [];

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
                        shadowBlur={20}
                        cornerRadius={10}
                        fillPatternImage={image}
                    />
                    <Rect
                        key={'2' + x + '-' + y}
                        x={3.8 * x + 405}
                        y={1.2 * y + 200}
                        width={WIDTH}
                        height={HEIGHT}
                        shadowBlur={20}
                        cornerRadius={10}
                        fillPatternImage={image}
                    />
                    <Rect
                        key={'3' + x + '-' + y}
                        x={3.8 * x + 810}
                        y={1.2 * y + 400}
                        width={WIDTH}
                        height={HEIGHT}
                        shadowBlur={20}
                        cornerRadius={10}
                        fillPatternImage={image}
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
            height={window.innerHeight - 58}
            draggable
            onDragEnd={(e) => {
                setStagePos(e.currentTarget.position());
            }}
        >
            <Layer>{gridComponents}</Layer>
        </Stage>
    );
};

