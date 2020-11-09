import React, { useRef } from "react";
import { Image } from "semantic-ui-react";
import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import OrnamentoSD from "../Graphics/OrnamentoSD.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import Ojodescription from "../Graphics/Ojodescription.svg";
import datos from "./Causes";
import Timer from "./Timer";
let causa = datos[1];
const Redes = () => {
  const video = useRef();
  return (
    <div className={"causascards"}>
      <div className={"causacard"} id={causa.hashlink}>
        <div className="cardtitle">
          <div className="cardtitlecontainer">
            <Image
              src={OrnamentoSI}
              size="tiny"
              className={"causaOrnamentoSI"}
            />
            <div className="causaleftSide">
              <div className={"causatitle"}>
                <h1>{causa.name}</h1>
                <a href={causa.link} target="_blank" rel="noopener noreferrer">
                  <button className="suscribebtn">Suscribirse</button>
                </a>
                <Timer fecha={causa.fecha} />
              </div>
            </div>
            <div className="causarightSide">
              <div className={"videocausa"}>
                <video
                  controls
                  ref={video}
                  className="video"
                  id={`video${causa.hashlink}`}
                >
                  <source src={causa.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="carddescription">
          <div className="cardactivitiescontainer">
            <div className="carddescriptiontop">
              <Image src={OrnamentoSI} size="tiny" floated="left" />
              <Image src={OrnamentoSD} size="tiny" floated="right" />
            </div>
            <div className={"causadescription"}>
              <Image
                src={Ojodescription}
                className={"ojodescription"}
                centered
              />
              <h1>Descripción de la causa</h1>
              <p>{causa.description}</p>
            </div>
            <div className="carddescriptionbottom">
              <Image src={OrnamentoII} size="tiny" floated="left" />
              <Image src={OrnamentoID} size="tiny" floated="right" />
            </div>
          </div>
        </div>
        <div className="cardactivities">
          <div className="carddescriptioncontainer">
            <div className="carddescriptiontop">
              <Image src={OrnamentoSI} size="tiny" floated="left" />
              <Image src={OrnamentoSD} size="tiny" floated="right" />
            </div>
            <h1>Actividades:</h1>
            <div className="activitiescontainer">
              {causa.actividades.map((item) => (
                <div className="actividad">
                  <div className="imagenactividad">
                    <Image src={item.image} fluid />
                  </div>
                  <h5>{item.title}</h5>
                  <p>{item.actividad}</p>
                </div>
              ))}
            </div>
            <div className="carddescriptionbottom">
              <Image src={OrnamentoII} size="tiny" floated="left" />
              <Image src={OrnamentoID} size="tiny" floated="right" />
            </div>
          </div>
        </div>
        <div className="cardothers"></div>
      </div>
    </div>
  );
};

export default Redes;
