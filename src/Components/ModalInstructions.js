import React, {} from "react";
import { Modal, Image } from "semantic-ui-react";

import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import OrnamentoSD from "../Graphics/OrnamentoSD.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import cartasHorizontalBlanco from "../Graphics/cartasHorizontalBlanco.gif";
import cartasVerticalBlanco from "../Graphics/cartasVerticalBlanco.gif";


function ModalInstructions() {
  const [firstOpen, setFirstOpen] = React.useState(true);
  return (
    <>
      <Modal basic dimmer="blurring" open={firstOpen}>
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
                  Haga clic y sin soltar arrastre. Luego seleccione las tres cartas
                  que prefiera haciendo click o tap sobre ellas. Estas cartas
                  visualizan el presente y lo llevan a su destino.
                </p>
                <button
                  className="begin"
                  onClick={() => {
                    setFirstOpen(false);
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
    </>
  );
}

export default ModalInstructions;
