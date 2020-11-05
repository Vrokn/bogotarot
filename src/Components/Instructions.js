import React from "react";
import { Grid, Image } from "semantic-ui-react";
import instrucciones from "../Graphics/Instrucciones.svg";
import instruccionesMobile from "../Graphics/Instruccionesmobile.svg";
import Ojoamarillo from "../Graphics/Ojoamarillo.svg";
import cartasHorizontalAzul from "../Graphics/cartasHorizontalAzul.gif";
import cartasVerticalAzul from "../Graphics/cartasVerticalAzul.gif";

import { Link } from "react-router-dom";
import Close from "../Graphics/Close.svg";

function Instructions() {
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
          className={"instrutitle"}
          src={instrucciones}
          size="massive"
          fluid
          centered
          verticalAlign="middle"
        />
        <Image
          className={"instrutitlemobile"}
          src={instruccionesMobile}
          fluid
        />
        <Image className={"Ojoamarillomobile"} src={Ojoamarillo} />
      </Grid.Column>
      <Grid.Column className={"instrucdescription"}>
        <p>
          Ingrese a la sección del Tarot y seleccione las tres cartas que
          prefiera haciendo click o tap sobre ellas. Estas cartas visualizan el
          presente y lo llevan a su destino.
        </p>
        <Image className={"cartasHorizontalAzul"} src={cartasHorizontalAzul} />
        <Image className={"cartasVerticalAzul"} src={cartasVerticalAzul} />
      </Grid.Column>
    </Grid>
  );
}

export default Instructions;
