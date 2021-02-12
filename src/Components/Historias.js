import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Historiasb from "../Graphics/Historiasb.svg";
import HistoriasMobile from "../Graphics/HistoriasMobile.svg";
import Ojoamarillo from "../Graphics/Ojoamarillo.svg";
import { Link } from "react-router-dom";
import Close from "../Graphics/Close.svg";

function Historias() {
  return (
    <Grid className={"intro"} stackable columns={2}>
      <Grid.Column>
        <Link to="/">
          <Image
            src={Close}
            className={"closereturn"}
            size={"mini"}
            floated="right"
          />
        </Link>
        <Image
          size="massive"
          className={"instrutitle"}
          src={Historiasb}
          fluid
          centered
          verticalAlign="middle"
        />
        <Image className={"instrutitlemobile"} src={HistoriasMobile} fluid />
        <Image className={"Ojoamarillomobile"} src={Ojoamarillo} />
      </Grid.Column>
      <Grid.Column className={"instrucdescription"}>
        <p>
          Su viaje inició con la selección de cartas del Bogotarot, entendido
          como “un lenguaje que habla del presente” y que llama la atención
          sobre aquello que podemos hacer ahora para no dejar el futuro al azar.
          Estas elecciones nos proponen conexiones que tenemos que buscar con
          otros seres vivos y el entorno para elaborar estrategias de
          supervivencia colectiva. <br></br>
          <br></br>
          La exposición digital colaborativa ¡No es la peste! La gripa de 1918
          desde el presente buscó examinar el impacto de la epidemia de
          influenza en Bogotá y los aprendizajes que podría dejarnos ese pasado
          para sobrellevar la epidemia actual. <br></br>
          <br></br>
          Historias de cuidado y supervivencia parte también de la experiencia
          de la pandemia de la COVID-19 para hacer un balance de lo vivido y
          replantear nuestro sendero. Finalmente le apuntamos a contestar
          colectivamente esta pregunta: ¿Cuál es la mejor versión de Bogotá y
          qué necesitamos pensar, soñar y hacer para hacerla realidad? <br></br>
          <br></br>
          Aquí encuentra una nueva baraja de posibles respuestas.
        </p>
      </Grid.Column>
    </Grid>
  );
}

export default Historias;
