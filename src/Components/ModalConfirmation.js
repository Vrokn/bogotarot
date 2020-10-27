import React from "react";
import { Modal, Image } from "semantic-ui-react";
import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import OrnamentoSD from "../Graphics/OrnamentoSD.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import { Link } from "react-router-dom";
import data from "./Cards";

const ModalConfirmation = ({ random }) => {
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
                  <Image
                    className={"card"}
                    size="medium"
                    src={data[random[0]].image}
                  />
                  <Image
                    className={"card"}
                    size="medium"
                    src={data[random[1]].image}
                  />
                  <Image
                    className={"card"}
                    size="medium"
                    src={data[random[2]].image}
                  />
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
