import animales from "../Videos Miedos/Animales.m4v";
import ansiedad from "../Videos Miedos/Ansiedad Social.m4v";
import artistas from "../Videos Miedos/Artistas escenicos.m4v";
import brecha from "../Videos Miedos/Brecha socioe.m4v";
import desecho from "../Videos Miedos/Desecho.m4v";
import ejemplos from "../Videos Miedos/Ejemplos Solidaridad.m4v";
import esperanza from "../Videos Miedos/Esperanza.m4v";
import lazos from "../Videos Miedos/Lazos.m4v";
import virtualizacion from "../Videos Miedos/Miedo.m4v";
import salud from "../Videos Miedos/Salud mental.m4v";
import sociedad from "../Videos Miedos/Sociedad Temerosa.m4v";
import xenofobia from "../Videos Miedos/Xenofobia.m4v";

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
  "Miedo al abandono",
  animales,
  "Por dificultades económicas cientos de animales domésticos quedaron en la calle."
);
Miedo(
  "Miedo a la ansiedad Social",
  ansiedad,
  "Imposibilidad de volver a nuestras relaciones humanas normales."
);
Miedo(
  "Miedo al fin de la comparecencia",
  artistas,
  "Imposibilidad de intercambiar la energía de la creación con el público en las artes escénicas."
);
Miedo(
  "Miedo a la desigualdad",
  brecha,
  "Brechas socioeconómicas más grandes después del confinamiento."
);
Miedo(
  "Miedo a la contaminación",
  desecho,
  "El aumento de plásticos de un solo uso por temor al contagio."
);
Miedo(
  "Esperanza de solidaridad",
  ejemplos,
  "La ampliación de redes comunitarias de afecto y cuidado ante las adversidades."
);
Miedo(
  "Esperanza de ciudades justas",
  esperanza,
  "Movilizarnos como sociedad para disminuir la desigualdad."
);
Miedo(
  "Esperanza de reconectarnos",
  lazos,
  "Los lazos de afecto y cuidado que se reestablecieron con el confinamiento se mantengan en el tiempo."
);
Miedo(
  "Miedo a la virtualización",
  virtualizacion,
  "Un mundo en el que las experiencias corporales y sensoriales se pierden por completo."
);
Miedo(
  "Miedo a la invisibilización",
  salud,
  "Falta de atención a las personas con enfermedades mentales por parte del sistema de salud."
);
Miedo(
  "Miedo a la hostilidad",
  sociedad,
  "Que cada vez nos cueste más ser empáticos con las demás personas."
);
Miedo(
  "Miedo a la falta de empatía",
  xenofobia,
  "La falta de comprensión y entendimiento de lo que viven y sienten las demás personas."
);

export default fears;
