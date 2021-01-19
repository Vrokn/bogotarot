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
      <h4>Miedos y<br></br>esperanzas</h4>
      <Slider {...settings}>
        {fears.map((item) => (
          <div className="miedo">
            <video
              loop
              className="videomiedo"
              onMouseOver={(event) => event.target.play()}
              onMouseOut={(event) => event.target.pause()}
              onTap={(event) => {
                (event.target.paused()) ? event.target.play() : event.target.pause();
              }}
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Miedos;
