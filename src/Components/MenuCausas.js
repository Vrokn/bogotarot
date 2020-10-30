import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Grid, Image, Menu } from "semantic-ui-react";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import Close from "../Graphics/Close.svg";
import Logosidpcmdb from "../Graphics/Logosidpcmdb.svg";

function MenuCausas() {
  const [activeItem, setActiveItem] = useState("Menu");

  return (
    <div>
      <div className={"eyetopmobile"}>
        <Image
          src={OrnamentoSI}
          size="tiny"
          className={"OrnamentoSIm"}
          floated="left"
        />
        <Link to="/">
          <Image
            src={Close}
            className={"close"}
            size={"mini"}
            floated="right"
          />
        </Link>
      </div>
      <Grid className={"menucausas"} stackable columns={2}>
        <Grid.Row columns={2} className={"eyetop"}>
          <Grid.Column>
            <Image src={OrnamentoSI} size="tiny" className={"OrnamentoSI"} />
          </Grid.Column>
          <Grid.Column>
            <Link to="/">
              <Image
                src={Close}
                className={"close"}
                size={"mini"}
                floated="right"
              />
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2} className="causaslink">
          <Grid.Column textAlign="left">
            <h1>Causas</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={8} className={"MenuCausasLinks"} textAlign="left">
          <Menu secondary fluid vertical>
            <Menu.Item
              className="brand"
              active={activeItem === "Causas"}
              onClick={() => setActiveItem("Causas")}
            >
              <HashLink to="/biodiversidad">
                Promover el derecho a la ciudad y proteger la biodiversidad
              </HashLink>
            </Menu.Item>
            <Menu.Item
              className="brand"
              active={activeItem === "Causas"}
              onClick={() => setActiveItem("Causas")}
            >
              <HashLink to="/redes">
                Diversificar redes de afecto y cuidado
              </HashLink>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column width={8} className={"MenuCausasLinks"} textAlign="left">
          <Menu secondary fluid vertical>
            <Menu.Item
              className="brand"
              active={activeItem === "Causas"}
              onClick={() => setActiveItem("Causas")}
            >
              <HashLink to="/solidaridad">
                Reconocer la solidaridad y cuestionar prejuicios y estigmas
              </HashLink>
            </Menu.Item>

            <Menu.Item
              className="brand"
              active={activeItem === "Causas"}
              onClick={() => setActiveItem("Causas")}
            >
              <HashLink to="/simbiosis">
                Simbiosis entre lo urbano y lo rural
              </HashLink>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Row className={"eyebottom"} columns={3} verticalAlign="middle">
          <Grid.Column>
            <Image src={OrnamentoII} size="tiny" className={"OrnamentoII"} />
          </Grid.Column>
          <Grid.Column floated>
            <Image
              className={"logosMenu"}
              src={Logosidpcmdb}
              size="medium"
              centered
            />
          </Grid.Column>
          <Grid.Column floated="right">
            <Image
              src={OrnamentoID}
              size="tiny"
              className={"OrnamentoID"}
              floated="right"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default MenuCausas;
