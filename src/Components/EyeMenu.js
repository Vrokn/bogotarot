import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Grid, Image, Menu } from "semantic-ui-react";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import OrnamentoSD from "../Graphics/OrnamentoSD.svg";
import Bogotarot from "../Graphics/Bogotarot.svg";
import Logosidpcmdb from "../Graphics/Logosidpcmdb.svg";
import LogosIdcpNaranja from "../Graphics/LogosIdcpNaranja.svg";

function EyeMenu() {
  const [activeItem, setActiveItem] = useState("Menu");
  const [BgDark, setBgColor] = useState(false);
  const [logoImage, setLogoImage] = useState(Logosidpcmdb);

  return (
    <div className={BgDark ? "backgrounddark" : "backgroundligth"}>
      <div className={"eyetopmobile"}>
        <Image
          src={OrnamentoSI}
          size="tiny"
          className={"OrnamentoSIm"}
          floated="left"
        />
        <Image
          src={OrnamentoSD}
          size="tiny"
          className={"OrnamentoSDm"}
          floated="right"
        />
      </div>
      <Grid className={"EyeMenu"} stackable columns={2} verticalAlign="middle">
        <Grid.Row columns={2} className={"eyetop"}>
          <Grid.Column>
            <Image
              src={OrnamentoSI}
              size="tiny"
              className={"OrnamentoSI"}
              floated="left"
            />
          </Grid.Column>
          <Grid.Column>
            <Image
              src={OrnamentoSD}
              size="tiny"
              className={"OrnamentoSD"}
              floated="right"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Column width={7} className={"Bogotarot"}>
          <Image size={"small"} src={Bogotarot} centered />
        </Grid.Column>
        <Grid.Column width={9} className={"MenuLinks"} textAlign="left">
          <Menu
            secondary
            className={BgDark ? "NavMenuDark" : "NavMenu"}
            fluid
            vertical
          >
            <Menu.Item
              className="brand"
              active={activeItem === "Introducción"}
              onClick={() => setActiveItem("Introducción")}
            >
              <NavLink
                to="/introducción"
                onMouseOver={() => {
                  setBgColor(true);
                  setLogoImage(LogosIdcpNaranja);
                }}
                onMouseLeave={() => setBgColor(false)}
              >
                Introducción
              </NavLink>
            </Menu.Item>
            <Menu.Item
              className="brand"
              active={activeItem === "Instrucciones"}
              onClick={() => setActiveItem("Instrucciones")}
            >
              <NavLink
                to="/instrucciones"
                onMouseOver={() => setBgColor(true)}
                onMouseLeave={() => setBgColor(false)}
              >
                Instrucciones
              </NavLink>
            </Menu.Item>
            <Menu.Item
              className="brand"
              active={activeItem === ""}
              onClick={() => setActiveItem("")}
            >
              <NavLink
                to="/"
                onMouseOver={() => setBgColor(true)}
                onMouseLeave={() => setBgColor(false)}
              >
                Tarot
              </NavLink>
            </Menu.Item>
            <Menu.Item
              className="brand"
              active={activeItem === "Causas"}
              onClick={() => setActiveItem("Causas")}
            >
              <NavLink
                to="/causasmenu"
                onMouseOver={() => setBgColor(true)}
                onMouseLeave={() => setBgColor(false)}
              >
                Causas
              </NavLink>
            </Menu.Item>
            <Menu.Item
              className="brand"
              active={activeItem === "Historias"}
              onClick={() => setActiveItem("Historias")}
            >
              <NavLink
                to="/historias"
                onMouseOver={() => setBgColor(true)}
                onMouseLeave={() => setBgColor(false)}
              >
                Historias
              </NavLink>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column className={"MenuLinksmobile"} textAlign="center" centered>
          <Menu secondary className="NavMenumobile" fluid centered vertical>
            <Image
              className={"Bogotarotm"}
              size={"tiny"}
              src={Bogotarot}
              centered
            />

            <Menu.Item
              className="brandmobile"
              active={activeItem === "Introducción"}
              onClick={() => setActiveItem("Introducción")}
            >
              <NavLink
                to="/introducción"
                onMouseOver={() => setBgColor("Introducción")}
              >
                Introducción
              </NavLink>
            </Menu.Item>
            <Menu.Item
              className="brandmobile"
              active={activeItem === "Instrucciones"}
              onClick={() => setActiveItem("Instrucciones")}
            >
              <NavLink to="/instrucciones">Instrucciones</NavLink>
            </Menu.Item>
            <Menu.Item
              className="brandmobile"
              active={activeItem === ""}
              onClick={() => setActiveItem("")}
            >
              <NavLink to="/">Tarot</NavLink>
            </Menu.Item>
            <Menu.Item
              className="brandmobile"
              active={activeItem === "Causas"}
              onClick={() => setActiveItem("Causas")}
            >
              <NavLink to="/causasmenu">Causas</NavLink>
            </Menu.Item>
            <Menu.Item
              className="brandmobile"
              active={activeItem === "Historias"}
              onClick={() => setActiveItem("Historias")}
            >
              <NavLink to="/historias">Historias</NavLink>
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Row className={"eyebottom"} columns={3}>
          <Grid.Column>
            <Image
              src={OrnamentoII}
              size="tiny"
              className={"OrnamentoII"}
              floated="left"
            />
          </Grid.Column>
          <Grid.Column floated>
            <Image
              className={"logosmenu"}
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
        <Grid.Row className={"eyebottomMobile"}>
          <Image
            src={OrnamentoII}
            size="tiny"
            className={"OrnamentoIIm"}
            floated="left"
          />
          <Image
            src={Logosidpcmdb}
            size="small"
            className={"logosMenumb"}
            centered
          />
          <Image
            src={OrnamentoID}
            size="tiny"
            className={"OrnamentoIDm"}
            floated="right"
          />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default EyeMenu;
