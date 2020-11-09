import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import ojocounter from "../Graphics/ojocounter.svg";

export default function Timer({ fecha }) {
  function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }

  const calculateTimeLeft = () => {
    const difference = new Date(fecha) - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      const humanized = [
        pad(timeLeft.days.toString(), 2),
        pad(timeLeft.hours.toString(), 2),
        pad(timeLeft.minutes.toString(), 2),
        pad(timeLeft.seconds.toString(), 2),
      ].join(":");
      return humanized;
    } else {
      return "00:00:00";
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  timerComponents.push(<span className="timeleft">{timeLeft}</span>);

  return (
    <div className={"contador"}>
      <Image src={ojocounter} className={"ojocounter"} floated="left" />
      {timerComponents}
      <span className="toclose">
        Para abrir<br></br>la causa.
      </span>
    </div>
  );
}
