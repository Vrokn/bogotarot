import React, { useState } from "react";
import { Link } from "react-router-dom";
import Close from "../Graphics/Close.svg";
import { Image } from "semantic-ui-react";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import Bogotarot from "../Graphics/Bogotarot.svg";
import Logosidpcmdb from "../Graphics/Logosidpcmdb.svg";
import LogosIdcpNaranja from "../Graphics/LogosIdcpNaranja.svg";

function EyeMenu2() {
  const [BgDark, setBgColor] = useState(false);
  const [logoImage, setLogoImage] = useState(Logosidpcmdb);

  return (
    <div className={"MenuContainer"}>
      <div className={BgDark ? "bgdark" : "bgligth"}>
        <div className={"eyemenutop2"}>
          <Image
            src={OrnamentoSI}
            size="tiny"
            className={"OrnamentoSI"}
            floated="left"
          />
          <Link to="/">
            <Image
              src={Close}
              className={"return"}
              size={"mini"}
              floated="right"
            />
          </Link>
        </div>
        <div className={"eyeMenucontainer"}>
          <div>
            <Image
              className={"Bogotarot2"}
              size={window.innerWidth < 500 ? "mini" : "small"}
              src={Bogotarot}
            />
          </div>
          <div className={BgDark ? "NavMenuDark2" : "NavMenu2"}>
            <Link
              className="brand2"
              to="/introducción"
              onMouseOver={() => {
                setBgColor(true);
                setLogoImage(LogosIdcpNaranja);
              }}
              onMouseLeave={() => {
                setBgColor(false);
                setLogoImage(Logosidpcmdb);
              }}
            >
              Introducción
            </Link>
            <Link
              className="brand2"
              to="/instrucciones"
              onMouseOver={() => {
                setBgColor(true);
                setLogoImage(LogosIdcpNaranja);
              }}
              onMouseLeave={() => {
                setBgColor(false);
                setLogoImage(Logosidpcmdb);
              }}
            >
              Instrucciones
            </Link>
            <Link
              className="brand2"
              to="/"
              onMouseOver={() => {
                setBgColor(true);
                setLogoImage(LogosIdcpNaranja);
              }}
              onMouseLeave={() => {
                setBgColor(false);
                setLogoImage(Logosidpcmdb);
              }}
            >
              Tarot
            </Link>
            <Link
              className="brand2"
              to="/causasmenu"
              onMouseOver={() => {
                setBgColor(true);
                setLogoImage(LogosIdcpNaranja);
              }}
              onMouseLeave={() => {
                setBgColor(false);
                setLogoImage(Logosidpcmdb);
              }}
            >
              Causas
            </Link>
            <Link
              className="brand2"
              to="/historias"
              onMouseOver={() => {
                setBgColor(true);
                setLogoImage(LogosIdcpNaranja);
              }}
              onMouseLeave={() => {
                setBgColor(false);
                setLogoImage(Logosidpcmdb);
              }}
            >
              Historias
            </Link>
            <Link
              className="brand2"
              to="/voces"
              onMouseOver={() => {
                setBgColor(true);
                setLogoImage(LogosIdcpNaranja);
              }}
              onMouseLeave={() => {
                setBgColor(false);
                setLogoImage(Logosidpcmdb);
              }}
            >
              Voces
            </Link>
          </div>
        </div>
        <div className={"eyemenuBottom2"}>
          <Image
            src={OrnamentoII}
            size="tiny"
            className={"OrnamentoII2"}
            floated="left"
          />
          <Image
            src={logoImage}
            size={"medium"}
            className={"logosMenu2"}
            centered
          />
          <Image
            src={OrnamentoID}
            size="tiny"
            className={"OrnamentoID2"}
            floated="right"
          />
        </div>
      </div>
    </div>
  );
}

export default EyeMenu2;
