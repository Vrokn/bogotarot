import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import Ojodescription from "../Graphics/Ojodescription.svg";
import Stories from "./Stories";
import SunMoon from "../Graphics/SunMoon.svg";
import { useSpring, animated as an } from "react-spring";

function Historias() {
  function getLength(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      temp.push(i);
    }
    console.log(temp);
    return temp;
  }
  let numbers = getLength(Stories);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  let random = shuffleArray(numbers);

  return (
    <>
      <div className={"newStories"}>
        <div className={"storiesLeft"}>
          <Image src={Ojodescription} className={"Ojoamarillo"} size={"tiny"} />
          <h1>Historias:</h1>
          <p>
            Su viaje inició con la selección de cartas del Bogotarot, entendido
            como “un lenguaje que habla del presente” y que llama la atención
            sobre aquello que podemos hacer ahora para no dejar el futuro al
            azar. Estas elecciones nos proponen conexiones que tenemos que
            buscar con otros seres vivos y el entorno para elaborar estrategias
            de supervivencia colectiva. <br></br>
            <br></br>
            La exposición digital colaborativa ¡No es la peste! La gripa de 1918
            desde el presente buscó examinar el impacto de la epidemia de
            influenza en Bogotá y los aprendizajes que podría dejarnos ese
            pasado para sobrellevar la epidemia actual. <br></br>
            <br></br>
            Historias de cuidado y supervivencia parte también de la experiencia
            de la pandemia de la COVID-19 para hacer un balance de lo vivido y
            replantear nuestro sendero. Finalmente le apuntamos a contestar
            colectivamente esta pregunta: ¿Cuál es la mejor versión de Bogotá y
            qué necesitamos pensar, soñar y hacer para hacerla realidad?{" "}
            <br></br>
            <br></br>
            Aquí encuentra una nueva baraja de posibles respuestas.
          </p>
          <a
            href={"https://www.instagram.com/museodebogota/"}
            className={"storiesButton"}
            type={"button"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visita las historias
          </a>
          <Image src={SunMoon} className={"SunMoon"} centered />
        </div>
        <div className={"storiesRight"}>
          {Stories.map((item, index) => (
            <>
              <Card index={random[index]} className={"storieCard"} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

const Card = ({ index }) => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className={"storie"} onClick={() => set((state) => !state)}>
      <an.div
        class={flipped ? "hidden" : "c back"}
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      >
        <img
          src={Stories[index].Foto}
          className={"storiePhoto"}
          alt={"cardPhoto"}
        />
      </an.div>
      <an.div
        class={flipped ? "c front" : "hidden"}
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        <div className={"frontContainer"}>
          <Image src={Ojodescription} className={"Ojoamarillo"} size={"mini"} />

          <h1>{Stories[index].Nombre}</h1>
          <p>{Stories[index].Texto}</p>
          <a
            href={Stories[index].Link}
            className={"storiesButton"}
            type={"button"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir a la historia
          </a>
        </div>
        <Image src={SunMoon} className={"SunMoon"} centered size="tiny" />

      </an.div>
    </div>
  );
};

export default Historias;
