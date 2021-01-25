import animales from "../Videos Miedos/Animales1.mp4";
import ansiedad from "../Videos Miedos/Ansiedad Social.mp4";
import artistas from "../Videos Miedos/Artistas escenicos.mp4";
import brecha from "../Videos Miedos/Brecha socioe.mp4";
import desecho from "../Videos Miedos/Desecho.mp4";
import ejemplos from "../Videos Miedos/Ejemplos Solidaridad.mp4";
import esperanza from "../Videos Miedos/Esperanza.mp4";
import lazos from "../Videos Miedos/Lazos.mp4";
import virtualizacion from "../Videos Miedos/Miedo.mp4";
import salud from "../Videos Miedos/Salud mental.mp4";
import sociedad from "../Videos Miedos/Sociedad Temerosa.mp4";
import xenofobia from "../Videos Miedos/Xenofobia.mp4";

const fears = [];

function Miedo(name, video, description) {
  let miedo = {
    name,
    video,
    description,
  };
  fears.push(miedo);
}

Miedo(
  "Abandono",
  animales,
  "Por dificultades económicas cientos de animales domésticos quedaron en la calle."
);
Miedo(
  "Ansiedad",
  ansiedad,
  "Imposibilidad de volver a nuestras relaciones humanas normales."
);
Miedo(
  "Ausencias",
  artistas,
  "Imposibilidad de intercambiar la energía de la creación con el público en las artes escénicas."
);
Miedo(
  "Desigualdad",
  brecha,
  "Brechas socioeconómicas más grandes después del confinamiento."
);
Miedo(
  "Contaminación",
  desecho,
  "El aumento de plásticos de un solo uso por temor al contagio."
);
Miedo(
  "Solidaridad",
  ejemplos,
  "La ampliación de redes comunitarias de afecto y cuidado ante las adversidades."
);
Miedo(
  "Justicia",
  esperanza,
  "Movilizarnos como sociedad para disminuir la desigualdad y ciudades justas."
);
Miedo(
  "Reconexión",
  lazos,
  "Los lazos de afecto y cuidado que se reestablecieron con el confinamiento se mantengan en el tiempo."
);
Miedo(
  "Virtualización",
  virtualizacion,
  "Un mundo en el que las experiencias corporales y sensoriales se pierden por completo."
);
Miedo(
  "Invisibilización",
  salud,
  "Falta de atención a las personas con enfermedades mentales por parte del sistema de salud."
);
Miedo(
  "Hostilidad",
  sociedad,
  "Que cada vez nos cueste más ser empáticos con las demás personas."
);
Miedo(
  "Indiferencia",
  xenofobia,
  "La falta de comprensión y entendimiento de lo que viven y sienten las demás personas."
);

export default fears;
