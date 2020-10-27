import biodiversidad from "../Videos/biodiversidad.mp4";
import redes from "../Videos/redes.mp4";
import simbiosis from "../Videos/simbiosis.mp4";
import solidaridad from "../Videos/solidaridad.mp4";

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
new Causa(
  "Promover el derecho a la ciudad y proteger la biodiversidad",
  biodiversidad,
  "biodiversidad",
  "Bogotá y su entorno son territorios ricos en biodiversidad, esto abarca grupos poblacionales, flora, fauna y ecosistemas. La biodiversidad es valiosa en sí misma, pero también conforma un banco de herramientas frente a la incertidumbre provocada por la pandemia de COVID-19, sobre nuestro trabajo, familia, amigos, y la naturaleza.La diversidad se expresa en el derecho a la ciudad, que permite que todos los que viven en ella puedan usufructuar de manera equitativa el espacio colectivo y allí realizarse, a pesar de la incertidumbre.",
  "2020-11-07",
  [
    {
      image: "",
      title: "Reconociendo el entorno: ",
      actividad:
        "    Recorrido guiado por uno de los ecosistemas de la ciudad, en el que los participantes identificarán y plasmarán de manera gráfica qué tanto conocen su entorno y las relaciones entre las especies.",
    },
    {
      image: "",
      title: "¿Cómo cambió nuestro entorno durante la pandemia?: ",
      actividad:
        "Taller de podcast, en el que se indagará sobre los cambios que se vivieron y observaron en la ciudad durante los primeros 6 meses de la pandemia por COVID-19.",
    },
    {
      image: "",
      title: "Retratando a mis vecinos: ",
      actividad:
        "Taller de animación, en el que se cuestionará y reflexionará sobre la forma en la que vemos y compartimos nuestro entorno con vecinos humanos y no humanos.",
    },
  ],
  "https://forms.gle/HfDcVKBVqUcrUaFVA"
);
new Causa(
  "Diversificar redes de afecto y cuidado",
  redes,
  "redes",
  "Vivir con la COVID-19 implica ser consciente del cuidado propio, del cuidado común y de las otras personas con quienes se comparte un espacio vital. Si bien, la experiencia de las cuarentenas tuvo impactos diferenciados, se salvaron incontables vidas, lo cual representa una forma de cuidado. Adicionalmente, durante las cuarentenas algunos ecosistemas recibieron un alivio, evidenciando que un cambio de tecnologías puede efectivamente contrarrestar los efectos de la crisis ambiental: se presentaron mejoras en la la calidad del aire y del agua. Estos aprendizajes contribuyen a fortalecer nuevas formas de entender lo que significa compartir un territorio con otros seres vivos.",
  "2021-01-15",
  [
    {
      image: "",
      title: "Taller de infografías ilustradas: ",
      actividad:
        "A través está técnica de representación gráfica, se abordarán las formas en las que la pandemia de COVID-19 afectó las nociones de cuidado y los efectos que ha tenido sobre quienes lo ejercen.",
    },
    {
      image: "",
      title: "Conversación sobre saberes tradicionales:",
      actividad:
        " Se visitará una plaza de mercado de la ciudad en donde se conversará sobre el papel de las plantas como seres de sanación y curación. Se busca plasmar de manera gráfica recetas y experiencias en torno al cuidado y las plantas.",
    },
    {
      image: "",
      title: "La comida y el cuidado: ",
      actividad:
        "De manera virtual cocinaremos y conversaremos sobre el papel de la comida en el cuidado, y como las prácticas alimentarias se transformaron durante la pandemia de COVID-19.",
    },
    {
      image: "",
      title: "¿Quién presta la olla?: ",
      actividad:
        "Cocinar y comer son formas de construir redes de afecto. Esta actividad plantea realizar un plato para compartir con conocidos y extraños.",
    },
  ],
  "https://forms.gle/xRKPwfnrQ3QJ6joq7"
);
new Causa(
  "Simbiosis entre lo rural y lo urbano",
  simbiosis,
  "simbiosis",
  "La mayor parte del territorio bogotano es rural. Conocer esta riqueza que se manifiesta en las formas de vivir, los productos, los saberes y la cultura, tanto en las márgenes, como en el centro del espacio urbano, fortalece dimensiones sociales y económicas producto de ese encuentro, y establece cadenas más sostenibles y justas. Las dinámicas de la ciudad antes de la COVID-19, no nos permitían ver con claridad esta realidad, sin embargo, la ruralidad siempre ha estado en directa convivencia con lo urbano, en donde ambas partes se nutren de la coexistencia.",
  "2021-01-29",
  [
    {
      image: "",
      title: "Gota tras gota: ",
      actividad:
        "Recorrido por el nacimiento de uno de los cuerpos de agua de la ciudad, abordando el papel del agua en la relación entre lo rural y lo urbano.",
    },
    {
      image: "",
      title: "Huerteando en la ciudad: ",
      actividad:
        "Encuentro con colectivos de huertas urbanas en la ciudad, en dónde haremos un acercamiento a la importancia de reconocer el origen de lo que comemos, así como, la forma en la que disponemos nuestros desechos.",
    },
    {
      image: "",
      title: "¡Aún se puede usar!: ",
      actividad:
        "Taller de elaboración de objetos a partir de elementos reutilizables, en donde se reflexionará acerca de pautas de consumo y cambios necesarios en torno al impacto de los residuos.",
    },
  ],
  "https://forms.gle/2h1CUMZTRcf1NMP5A"
);
new Causa(
  "Reconocer la solidaridad y cuestionar prejuicios y estigmas",
  solidaridad,
  "solidaridad",
  "Durante las cuarentenas se hicieron visibles múltiples iniciativas de individuos y colectivos que apoyaron a otras personas desconocidas que vieron desaparecer su sustento. Acercarse a personas extrañas permite vencer la estigmatización que en ocasiones condena a grupos poblacionales a identidades cerradas y negativas. Las muestras de altruismo, confianza y reciprocidad frente a las necesidades de otros son más comunes en la ciudad de lo que podemos percibir, y hacerlas visibles puede generar y sostener en el tiempo redes amplias de apoyo mutuo.",
  "2021-02-09",
  [
    {
      image: "",
      title: "Feria solidaria virtual: ",
      actividad:
        "Espacio de encuentro con colectivos e iniciativas solidarias que nacieron durante la pandemia para intercambiar experiencias y aprendizajes.",
    },
    {
      image: "",
      title: "Recorrido por Ciudad Bolívar",
      actividad:
        "Se conocerán de primera mano las experiencias de las comunidades para afrontar los cambios generados por la pandemia de COVID-19.",
    },
    {
      image: "",
      title: "Taller de fotografía documental:",
      actividad:
        "Se explorará la fotografía documental como forma de cuestionar prejuicios y estigmas, activar redes de cuidado y el rol de las imágenes.",
    },
    {
      image: "",
      title: "Taller creativo: ",
      actividad:
        "Espacio para generar piezas de construcción colectiva en torno a las redes de solidaridad y el futuro de la ciudad.",
    },
  ],
  "https://forms.gle/4b4S7yZWKgLV6hJv5"
);
export default datos;
