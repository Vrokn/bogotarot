import React, { useState } from "react";
import { Modal, Image, Button } from "semantic-ui-react";

import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import OrnamentoSD from "../Graphics/OrnamentoSD.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import cartasHorizontalBlanco from "../Graphics/cartasHorizontalBlanco.gif";
import cartasVerticalBlanco from "../Graphics/cartasVerticalBlanco.gif";

function ModalInstructions() {
  const [firstOpen, setFirstOpen] = useState(true);
  const [secondOpen, setSecondOpen] = useState(false);
  return (
    <>
      <Modal
        basic
        dimmer="blurring"
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Content>
          <div className="modalInstructions">
            <div className="modalInstructionsContainer">
              <div className="carddescriptiontop">
                <Image src={OrnamentoSI} size="tiny" floated="left" />
                <Image src={OrnamentoSD} size="tiny" floated="right" />
              </div>
              <div className={"modalDescription"}>
                <h1>Instrucciones</h1>
                <Image
                  className={"cartasHorizontalAzul"}
                  src={cartasHorizontalBlanco}
                />
                <Image
                  className={"cartasVerticalAzul"}
                  src={cartasVerticalBlanco}
                />
                <p>
                  Ingrese a la sección del Tarot y seleccione las tres cartas
                  que prefiera haciendo click o tap sobre ellas. Estas cartas
                  visualizan el presente y lo llevan a su destino.
                </p>
                <button
                  className="begin"
                  onClick={() => {
                    setFirstOpen(false);
                    setSecondOpen(false);
                  }}
                >
                  EMPEZAR
                </button>
              </div>
              <div className="carddescriptionbottom">
                <Image src={OrnamentoII} size="tiny" floated="left" />
                <Image src={OrnamentoID} size="tiny" floated="right" />
              </div>
            </div>
          </div>
        </Modal.Content>
      </Modal>
      <Modal
        onClose={() => setSecondOpen(false)}
        open={secondOpen}
        size="small"
      >
        <Modal.Header>Modal #2</Modal.Header>
        <Modal.Content>
          <p>That's everything!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            icon="check"
            content="All Done"
            onClick={() => {
              setFirstOpen(false);
              setSecondOpen(false);
            }}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
}

export default ModalInstructions;
