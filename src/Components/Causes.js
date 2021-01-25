import biodiversidad from "../Videos/biodiversidad.mp4";
import redes from "../Videos/redes.mp4";
import simbiosis from "../Videos/simbiosis.mp4";
import solidaridad from "../Videos/solidaridad.mp4";
import C1A1 from "../actividadescausas/causapromover/Reconociendo el entorno.jpg";
import C1A2 from "../actividadescausas/causapromover/Taller de podcast.jpg";
import C1A3 from "../actividadescausas/causapromover/Retratando a mis vecinos.jpg";
import C2A1 from "../actividadescausas/causadiversificarelcuidado/infografías-ilustradas-.jpg";
import C2A2 from "../actividadescausas/causadiversificarelcuidado/saberes tradicionales.png";
import C2A3 from "../actividadescausas/causadiversificarelcuidado/La comida y el cuidado.png";
import C2A4 from "../actividadescausas/causadiversificarelcuidado/¿Quién presta la olla_.png";
import C3A1 from "../actividadescausas/causasimbiosis/Gota tras gota.jpg";
import C3A2 from "../actividadescausas/causasimbiosis/Huerteando en la ciudad.jpg";
import C3A3 from "../actividadescausas/causasimbiosis/aún se puede usar.jpg";
import C4A2 from "../actividadescausas/causasolidaridad/recorrido_ciudadbolivar.PNG";
import C4A3 from "../actividadescausas/causasolidaridad/fotografía_documental.jpg";
import C4A4 from "../actividadescausas/causasolidaridad/taller_creativo.jpg";

const datos = [];

function Causa(name, video, hashlink, description, fecha, actividades, link) {
  let cause = {
    name,
    video,
    hashlink,
    description,
    fecha,
    actividades,
    link,
  };
  datos.push(cause);
}
Causa(
  "Promover el derecho a la ciudad y proteger la biodiversidad",
  biodiversidad,
  "biodiversidad",
  "Bogotá y su entorno son territorios ricos en biodiversidad, esto abarca grupos poblacionales, flora, fauna y ecosistemas. La biodiversidad es valiosa en sí misma, pero también conforma un banco de herramientas frente a la incertidumbre provocada por la pandemia de COVID-19, sobre nuestro trabajo, familia, amigos, y la naturaleza.La diversidad se expresa en el derecho a la ciudad, que permite que todos los que viven en ella puedan usufructuar de manera equitativa el espacio colectivo y allí realizarse, a pesar de la incertidumbre.",
  "2020-11-07",
  [
    {
      image: C1A1,
      title: "Reconociendo el entorno: ",
      actividad:
        "    Recorrido guiado por uno de los ecosistemas de la ciudad, en el que los participantes identificarán y plasmarán de manera gráfica qué tanto conocen su entorno y las relaciones entre las especies.",
    },
    {
      image: C1A2,
      title: "¿Cómo cambió nuestro entorno durante la pandemia?: ",
      actividad:
        "Taller de podcast, en el que se indagará sobre los cambios que se vivieron y observaron en la ciudad durante los primeros 6 meses de la pandemia por COVID-19.",
    },
    {
      image: C1A3,
      title: "Retratando a mis vecinos: ",
      actividad:
        "Taller de animación, en el que se cuestionará y reflexionará sobre la forma en la que vemos y compartimos nuestro entorno con vecinos humanos y no humanos.",
    },
  ],
  "https://forms.gle/HfDcVKBVqUcrUaFVA"
);
Causa(
  "Diversificar redes de afecto y cuidado",
  redes,
  "redes",
  "Vivir con la COVID-19 implica ser consciente del cuidado propio, del cuidado común y de las otras personas con quienes se comparte un espacio vital. Si bien, la experiencia de las cuarentenas tuvo impactos diferenciados, se salvaron incontables vidas, lo cual representa una forma de cuidado. Adicionalmente, durante las cuarentenas algunos ecosistemas recibieron un alivio, evidenciando que un cambio de tecnologías puede efectivamente contrarrestar los efectos de la crisis ambiental: se presentaron mejoras en la la calidad del aire y del agua. Estos aprendizajes contribuyen a fortalecer nuevas formas de entender lo que significa compartir un territorio con otros seres vivos.",
  "2021-01-15",
  [
    {
      image: C2A1,
      title: "Graficando el cuidado: ",
      actividad:
        "A través de la gigantografía, se abordarán las formas en las que la pandemia de COVID-19 afectó las nociones de cuidado y los efectos que ha tenido sobre quienes lo ejercen.",
    },
    {
      image: C2A2,
      title: "Conversación sobre saberes tradicionales:",
      actividad:
        "Se visitará la plaza de mercado Samper Mendoza, en donde se conversará sobre el papel de las plantas como seres de sanación y curación. Se busca plasmar recetas y experiencias en torno al cuidado y las plantas.",
    },
    {
      image: C2A3,
      title: "La comida y el cuidado: ",
      actividad:
        "De manera virtual cocinaremos y conversaremos sobre el papel de la comida en el cuidado, y como las prácticas alimentarias se transformaron durante la pandemia de COVID-19.",
    },
    {
      image: C2A4,
      title: "¿Quién presta la olla?: ",
      actividad:
        "Cocinar y comer son formas de construir redes de afecto. Esta actividad plantea realizar un plato típico para compartir con conocidos y extraños.",
    },
  ],
  "https://docs.google.com/forms/d/e/1FAIpQLScAdYUf_R2bEnZaVn90XkiFltf0CQmCiF68vRNRtRLRmk4EaQ/viewform"
);
Causa(
  "Simbiosis entre lo rural y lo urbano",
  simbiosis,
  "simbiosis",
  "La mayor parte del territorio bogotano es rural. Conocer esta riqueza que se manifiesta en las formas de vivir, los productos, los saberes y la cultura, tanto en las márgenes, como en el centro del espacio urbano, fortalece dimensiones sociales y económicas producto de ese encuentro, y establece cadenas más sostenibles y justas. Las dinámicas de la ciudad antes de la COVID-19, no nos permitían ver con claridad esta realidad, sin embargo, la ruralidad siempre ha estado en directa convivencia con lo urbano, en donde ambas partes se nutren de la coexistencia.",
  "2021-01-29",
  [
    {
      image: C3A1,
      title: "Gota tras gota: ",
      actividad:
        "Recorrido por el nacimiento de uno de los cuerpos de agua de la ciudad, abordando el papel del agua en la relación entre lo rural y lo urbano.",
    },
    {
      image: C3A2,
      title: "Huerteando en la ciudad: ",
      actividad:
        "Encuentro con colectivos de huertas urbanas en la ciudad, en dónde haremos un acercamiento a la importancia de reconocer el origen de lo que comemos, así como, la forma en la que disponemos nuestros desechos.",
    },
    {
      image: C3A3,
      title: "Transformando el consumo: ",
      actividad:
        "Recorrido por veredas de Ciudad Bolívar y Usme a través de senderos ecológicos, en donde se reflexionará acerca de pautas de consumo y cambios necesarios en torno al impacto de nuestros residuos.",
    },
  ],
  "https://forms.gle/veVFPar3iL9mmeR66"
);
Causa(
  "Reconocer la solidaridad y cuestionar prejuicios y estigmas",
  solidaridad,
  "solidaridad",
  "Durante las cuarentenas se hicieron visibles múltiples iniciativas de individuos y colectivos que apoyaron a otras personas desconocidas que vieron desaparecer su sustento. Acercarse a personas extrañas permite vencer la estigmatización que en ocasiones condena a grupos poblacionales a identidades cerradas y negativas. Las muestras de altruismo, confianza y reciprocidad frente a las necesidades de otros son más comunes en la ciudad de lo que podemos percibir, y hacerlas visibles puede generar y sostener en el tiempo redes amplias de apoyo mutuo.",
  "2021-02-09",
  [
    {
      image: C4A2,
      title: "Recorrido por Ciudad Bolívar",
      actividad:
        "Se conocerán de primera mano las experiencias de las comunidades para afrontar los cambios generados por la pandemia de COVID-19.",
    },
    {
      image: C4A3,
      title: "Taller de fotografía documental:",
      actividad:
        "Se explorará la fotografía documental como forma de cuestionar prejuicios y estigmas, activar redes de cuidado y el rol de las imágenes.",
    },
    {
      image: C4A4,
      title: "Taller creativo: ",
      actividad:
        "Espacio para generar piezas de construcción colectiva en torno a las redes de solidaridad y el futuro de la ciudad.",
    },
  ],
  "https://forms.gle/4b4S7yZWKgLV6hJv5"
);
export default datos;
