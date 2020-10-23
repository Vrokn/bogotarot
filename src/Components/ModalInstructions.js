import React, { useState } from "react";
import { Modal, Image } from "semantic-ui-react";

import OrnamentoSI from "../Graphics/OrnamentoSI.svg";
import OrnamentoSD from "../Graphics/OrnamentoSD.svg";
import OrnamentoII from "../Graphics/OrnamentoII.svg";
import OrnamentoID from "../Graphics/OrnamentoID.svg";
import Ojodescription from "../Graphics/Ojodescription.svg";

function ModalInstructions() {
  const [open, setOpen] = useState(true);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Content>
        <div className="carddescription">
          <div className="carddescriptioncontainer">
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
              <p>
                Ingrese a la sección del Tarot y seleccione las tres cartas que
                prefiera haciendo click o tap sobre ellas. Estas cartas
                visualizan el presente y lo llevan a su destino.
              </p>
            </div>
            <div className="carddescriptionbottom">
              <Image src={OrnamentoII} size="tiny" floated="left" />
              <Image src={OrnamentoID} size="tiny" floated="right" />
            </div>
          </div>
        </div>
        <p>
          Ingrese a la sección del Tarot y seleccione las tres cartas que prefiera haciendo click o tap sobre ellas. Estas cartas visualizan el presente y lo llevan a su destino.
        </p>
        <button className="begin" onClick={() => setOpen(false)}>
          EMPEZAR
        </button>
      </Modal.Content>
    </Modal>
  );
}

export default ModalInstructions;
