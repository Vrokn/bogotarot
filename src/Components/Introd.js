import React, { useRef, useState } from "react";
import Slider from "infinite-react-carousel";
import Bogotarot from "../Graphics/Bogotarot.svg";
import { Image } from "semantic-ui-react";
import Cards from "../Components/Cards";
import Ojodescription from "../Graphics/Ojodescription.svg";
import Down from "../Graphics/Down.svg";
import SunMoon from "../Graphics/SunMoon.svg";
import Close from "../Graphics/Close.svg";
import folleto from "../Cards/folleto_descargable.pdf";

function Intro() {
  let video = useRef();
  const [showCarousel, setShowCarousel] = useState(false);
  const [initial, setInitial] = useState(0);
  const settings = {
    className: "carouselDown",
    duration: 300,
    initialSlide: initial,
    shift: 200,
  };
  return (
    <>
      <div className={showCarousel ? "hidden" : "newIntro"}>
        <div className={"newLeft"}>
          <Image src={Ojodescription} className={"Ojoamarillo"} size={"tiny"} />
          <h1>Historias de cuidado y supervivencia</h1>
          <p>
            El presente de la ciudad está marcado profundamente por la
            experiencia de las cuarentenas, la crisis ambiental, social y
            económica agudizada por la COVID-19, pero también está formado por
            la solidaridad, los nuevos encuentros y las vidas salvadas. Eso que
            llamamos “normalidad” y que podríamos añorar es un escenario
            insostenible para los seres humanos y el planeta.
            <br></br>
            <br></br>
            Es el momento de preguntarnos qué queremos guardar de esta
            experiencia como aprendizaje colectivo. ¿Qué narrativas sobre el
            presente son esenciales para los bogotanos del futuro?
            <br></br>
            <br></br>
            En este proyecto, el Museo de Bogotá les invita a que contestemos
            colectivamente esta pregunta: ¿Cuál es la mejor versión de Bogotá y
            qué necesitamos pensar, soñar y hacer para hacerla realidad?
          </p>
          <a
            href={folleto}
            className={"downloadButton"}
            type={"button"}
            download="Set Bogotarot"
          >
            Descargar todo el set
            <Image
              src={Down}
              className={"Down"}
              size={"mini"}
              floated="right"
            />
          </a>
          <Image src={SunMoon} className={"SunMoon"} centered />
        </div>
        <div className={"newRight"}>
          {Cards.map((carta, index) => (
            <video
              loop
              autoPlay
              muted
              playsInline
              ref={video}
              poster={carta.image}
              className="videoDownload"
              id={`video${carta.name}`}
              onClick={() => {
                setInitial(index);
                setShowCarousel(true);
              }}
            >
              <source src={carta.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </div>

      <div className={showCarousel ? "DownCarousel" : "hidden"}>
        <Image
          onClick={() => {
            setInitial(0);
            setShowCarousel(false);
          }}
          src={Close}
          className={showCarousel ? "closeCarousel" : "hidden"}
          size={"mini"}
        />
        <Slider {...settings}>
          {Cards.map((carta) => (
            <div className="downlodable">
              <div>
                <Image className={"Bogotarot2"} size={"tiny"} src={Bogotarot} />
              </div>
              <div className={"cardWrapper"}>
                <div className={"cardVideo"}>
                  <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    poster={carta.image}
                    className="videoDownloadable"
                  >
                    <source src={carta.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className={"cardText"}>
                  <h2>{carta.name}</h2>
                  <p>{carta.description}</p>
                  <a
                    href={carta.image}
                    className={"downloadButton"}
                    type={"button"}
                    download={`${carta.name}`}
                  >
                    Descargar carta
                    <Image src={Down} className={"Down"} size={"mini"} />
                  </a>
                </div>
              </div>
              <div>
                <Image src={SunMoon} className={"SunMoon"} centered />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Intro;
