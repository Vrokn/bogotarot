import React, { useRef } from "react";
import { Modal, Image } from "semantic-ui-react";
import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import OrnamentoSD from "../Graphics/OrnamentoSD.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import { Link } from "react-router-dom";
import data from "./Cards";

const ModalConfirmation = ({ random }) => {
  const video = useRef();
  const video1 = useRef();
  const video2 = useRef();

  return (
    <>
      <Modal open={true} dimmer="blurring" basic>
        <Modal.Content>
          <div className="modalConfirmations">
            <div className="modalContainer">
              <div className="carddescriptiontop">
                <Image src={OrnamentoSI} size="tiny" floated="left" />
                <Image src={OrnamentoSD} size="tiny" floated="right" />
              </div>
              <div className={"modalDescription"}>
                <div className={"modalcards"}>
                  <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    playsinline 
                    ref={video}
                    className="videomodal"
                    id={`video${data[random[0]].hashlink}`}
                  >
                    <source src={data[random[0]].video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    ref={video1}
                    className="videomodal"
                    id={`video${data[random[1]].hashlink}`}
                  >
                    <source src={data[random[1]].video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    ref={video2}
                    className="videomodal"
                    id={`video${data[random[2]].hashlink}`}
                  >
                    <source src={data[random[2]].video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h2>¿Está seguro de estas cartas?</h2>
                <div>
                  <Link to="/cartas">
                    <button className="sibtn">SÍ</button>
                  </Link>
                  <button
                    className="nobtn"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    NO
                  </button>
                </div>
              </div>
              <div className="carddescriptionbottom">
                <Image src={OrnamentoII} size="tiny" floated="left" />
                <Image src={OrnamentoID} size="tiny" floated="right" />
              </div>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ModalConfirmation;
