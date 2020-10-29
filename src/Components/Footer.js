import React from "react";
import { Image, Icon, Input } from "semantic-ui-react";
import LogosBlancos from "../Graphics/LogosBlancos.svg";
import Ojoamarillo from "../Graphics/Ojoamarillo.svg";
import Countries from "./Countries";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerl">
          <div className="footerm">
            <h2>Registrate para recibir noticias</h2>
            <iframe
              title="dummy"
              name="dummyframe"
              id="dummyframe"
              style={{ display: "none" }}
            ></iframe>
            <form
              target="dummyframe"
              id="sib-form"
              method="POST"
              action="https://4f6cf558.sibforms.com/serve/MUIEAAZ3mcQnUx4l_6JcMSKZnerUjPmrasWdO7TKnpEv5bbepI7WmKt8c0Yv8RrCybmFiYaH758lcPCXfFGGnUaZL-XjcilTNUMuJfE4LWnQlZfEwc54pIx9Zp-c97M88isJfDBwONwOyVaXNuHAJTXZ3cFB4TU-F8H3Vh9xOVpBmQGrQ1qj8FLyqYBkS2-iWUHtSA4R0ejnXZWw"
              data-type="subscription"
            >
              <Input
                className="input"
                type="text"
                id="EMAIL"
                name="EMAIL"
                autocomplete="off"
                placeholder="E-Mail*"
                data-required="true"
                required
              />
              <Countries />
              <button className="submitbtn" form="sib-form" type="submit">
                <Icon inverted name="arrow right" />
              </button>
            </form>
          </div>
        </div>
        <Image src={Ojoamarillo} verticalAlign="middle" className="footereye" />

        <div className="footerr">
          <div className="footersm">
            <h2>Síguenos</h2>
            <a
              href="https://twitter.com/MuseodeBogota"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/museodebogota/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/museodebogota/"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
          </div>
          <Image
            src={LogosBlancos}
            verticalAlign="middle"
            className="LogosBlancos"
          />
        </div>
      </div>
    </>
  );
}
