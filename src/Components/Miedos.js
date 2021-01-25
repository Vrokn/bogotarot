import React from "react";
import Slider from "infinite-react-carousel";
import fears from "./Fears";
function Miedos() {
  let pad = window.innerWidth < 767 ? 50 : 500;
  let shift = window.innerWidth < 767 ? 0 : 150;

  const settings = {
    centerMode: true,
    centerPadding: pad,
    className: "carousel",
    duration: 300,
    shift: shift,
  };
  return (
    <div className="miedoscontainer">
      <h4>
        Miedos y<br></br>esperanzas
      </h4>
      <Slider {...settings}>
        {fears.map((item) => (
          <div className="miedo">
            <div
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              onTap={(event) => {
                event.target.paused()
                  ? event.target.play()
                  : event.target.pause();
              }}
            >
              <video className="videomiedo" loop playsInline>
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Miedos;
