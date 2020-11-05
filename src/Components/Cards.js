import avaro from "../Cards/el-avaro.jpg";
import clasificador from "../Cards/el-clasificador.jpg";
import guache from "../Cards/el-guache.jpg";
import guetto from "../Cards/el-guetto.jpg";
import monocultivo from "../Cards/el-monocultivo.jpg";
import sancocho from "../Cards/el-sancocho.jpg";
import agropolis from "../Cards/la-agropolis.jpg";
import copetona from "../Cards/la-copetona.jpg";
import macula from "../Cards/la-macula.jpg";
import bayetilla from "../Cards/la-bayetilla.jpg";
import cocina from "../Cards/la-cocina.jpg";
import ahogadx from "../Cards/lx-ahogadx.jpg";

const data = [];

function Card(
  name,
  image,
  causa,
  desctiption,
  pregunta,
  opciones,
  opcionValida,
  respuesta,
  blurhash
) {
  let carta = {
    name,
    image,
    causa,
    desctiption,
    pregunta,
    opciones,
    opcionValida,
    respuesta,
    blurhash
  };
  data.push(carta);
}

new Card(
  "El Avaro",
  avaro,
  'solidaridad',
  "Casi todo para muy pocos y casi nada para muchos. Entre todos decidimos si erradicamos la inequidad.",
  "En la ciudad algunos hogares comparten una misma vivienda con otros hogares. ¿Qué porcentaje de hogares en Bogotá no cuentan con una vivienda exclusiva para ellos?",
  ["A) 9,1%", "B) 4,8%", "C) 0,3%", "D) 20,2%"],
  "B) 4,8%",
  "Según la información del Censo de 2018, en Bogotá 120.695 hogares comparten una misma unidad de vivienda con uno o más hogares. Sin embargo, existen en la ciudad 178.329 viviendas sin ocupantes."
);
new Card(
  "El Clasificador",
  clasificador,
  'solidaridad' ,
  "Toneladas de elementos que no queremos ver más, para otras son recursos que pueden aprovechar.",
  "En 2019 más de 30.000 recicladores se encontraban agremiados en Colombia. De estos ¿cuántos se encuentran en Bogotá?",
  ["A) 25.078", "B) 7.256", "C) 17.296", "D) 18.315"],
  "C) 17.296",
  "La mayoría de los recicladores asociados del país se encuentran en Bogotá: 17.296 personas en 2019. La mayoría tienen jornadas de trabajo entre 12 y 15 horas diarias, en las que se exponen al contacto directo con la basura, ya que en Bogotá no se separa el material reciclable."
);
new Card(
  "El Guache",
  guache,
  'redes',
  "Todo final trae consigo un nuevo comienzo, la violencia del hogar se puede erradicar.",
  "  Algunas palabras de la lengua muysca, utilizada antiguamente en el altiplano cundiboyacense, han cambiado su significado. Una de ellas es guache que originalmente se refería a:",
  ["A) Señor", "B) Guerrero", "C) Pobre", "D) Todas las anteriores"],
  "D) Todas las anteriores",
  "Aunque en la ciudad hoy en día suele denominarse guache a un hombre brusco, violento y de malos modales, esta palabra originalmente no tenía connotaciones negativas. Por ello varias personas proponen rescatar el significado original."
);
new Card(
  "El Guetto",
  guetto,
  'biodiversidad',
  "Los espacios donde vivimos y compartimos pueden ser uno para todos, o muchos para cada quien.",
  "  En Bogotá residen poblaciones de orígenes diversos, que se concentran en algunas localidades de la ciudad. ¿Cuál es la localidad con mayor presencia de población indígena?",
  ["A) Bosa", "B) Kennedy", "C) Suba", "D) Engativá"],
  "A) Bosa",
  "En Bogotá viven alrededor de 37.266 indígenas, de los cuales cerca de 5.664 habitan en la localidad de Bosa, aproximadamente el 15% de ellos; le siguen las localidades de Kennedy, Suba y Engativá. Hay un total de 26 pueblos indígenas en la ciudad de los cuales 14 son cabildos reconocidos."
);
new Card(
  "El Monocultivo",
  monocultivo,
  'simbiosis',
  "En la variedad está el placer, la tierra lo sabe. El hombre… ¿quién sabe?",
  "En Sumapaz, solían cultivarse gran variedad de alimentos. Ahora la mayoría de los cultivos son de papa. ¿Cuáles de las siguientes variedades de papa dejaron de cultivarse porque se perdió la semilla?",
  ["A) Guatiba", "B) Lizarasa", "C) La blanca", "D) Todas las anteriores"],
  "D) Todas las anteriores",
  "Variedades de papa como la argentina, tocarreña, guatiba, lizarasa, blanca, colorada, negra, entre otras, han dejado de sembrarse debido a la estandarización del mercado que se cerró a variedades como la pastusa, sabanera, criolla y R-12. Las semillas de muchas variedades han desaparecido."
);
new Card(
  "El Sancocho",
  sancocho,
  'simbiosis',
  "Nadie quiere comerse un plato gris que a nada sabe, a buscar los colores y sabores se han ido nuestros sucesores.",
  "Las plazas de mercado son lugares mágicos con gran diversidad de alimentos, no solo para preparar en casa, sino en platos listos para el consumo. Un plato representativo de la Plaza de La Perseverancia es:",
  [
    "A) Ajiaco",
    "B) Cocido boyacense",
    "C) Caldo rompecolchón",
    "D) Todas las anteriores",
  ],
  "D) Todas las anteriores",
  "La variedad de alimentos que encontramos en las plazas de mercado no está limitada a los productos emblemáticos de la región. Se encuentran platos fruto de la tradición culinaria de otras regiones, como el caldo rompecolchón, con todo el sabor del Pacífico colombiano."
);
new Card(
  "La agrópolis",
  agropolis,
  'simbiosis',
  "Lo rural y lo urbano, dos hermanos que de la mano van, nadie los podrá separar.",
  "El ritmo de vida experimentado en una ciudad con más de 7 millones de habitantes nos lleva a pensar que allí no tiene cabida lo rural.¿Qué porcentaje de Bogotá está catalogado como rural?",
  ["A) 10%", "B) 21%", "C) 75%", "D) 32%"],
  "C) 75%",
  "Bogotá cuenta con 163.000 hectáreas de extensión, de estas 122.000 corresponden a territorio rural, es decir un 75%. Este territorio está ubicado en nueve localidades: Sumapaz, Usme, Ciudad Bolívar, Usaquén, Santa Fe, San Cristóbal, Chapinero, Suba y Bosa, pero Sumapaz es la única completamente rural."
);
new Card(
  "La Copetona",
  copetona,
  "biodiversidad",
  "Cientos de animales que habitan la ciudad, entre buses y edificios su camino a casa deben encontrar.",
  "Durante el aislamiento preventivo, algunas especies animales fueron avistadas por los bogotanos en entornos no habituales, entre estos búhos. ¿Cuántas especies de búhos y lechuzas habitan en Bogotá?",
  ["A) 2", "B) En Bogotá no viven esas aves", "C) 7", "D) 16"],
  "C) 7",
  "Bogotá cuenta con gran diversidad de ecosistemas en los que habitan más de 600 especies de flora y más de 200 especies de fauna. Entre ellas, 6 especies de búhos como el sabanero, listado, negruzco, currucutú, el mochuelo andino y el bandeado, así como la única especie de lechuza que se registra en Colombia."
);
new Card(
  "La Mácula",
  macula,
  'solidaridad',
  "Formando un gran mosaico vivimos en la ciudad, el encanto de la diferencia miedo no nos dará.",
  "En Colombia la discriminación es un delito que se sanciona penalmente (Ley 1752/2015). ¿Cuál de las siguientes causas de discriminación son sancionables por dicha Ley?",
  [
    "A) Por raza, etnia, nacionalidad y religión",
    "B) Por ideología política o filosófica",
    "C) Por sexo, orientación sexual y discapacidad",
    "D) Las anteriores y otras razones de discriminación",
  ],
  "D) Las anteriores y otras razones de discriminación",
  "Las diferencias intra e interespecies garantizan la supervivencia de nuestro planeta. Lo mismo que ocurre en las sociedades humanas, sin embargo, algunas personas no ven la riqueza existente en la diversidad, olvidando que todos los seres humanos somos sujetos de derechos."
);
new Card(
  "La Bayetilla",
  bayetilla,
  'redes',
  "Señales en las ventanas que son difíciles de ignorar, en nuestras manos está colaborar.",
  "La Red Comunitaria Trans, recaudó ayudas con el fondo de emergencia para cubrir las necesidades básicas de trabajadoras sexuales. ¿Cuántas personas en Bogotá se vieron beneficiadas con este fondo?",
  ["A) 125", "B) 1.500", "C) Ninguna", "D) 879"],
  "B) 1.500",
  "Durante el aislamiento preventivo muchas familias perdieron su fuente de sustento y vieron en riesgo su alimentación. Iniciativas como el fondo de emergencia para cubrir las necesidades básicas de las trabajadoras sexuales recaudó fondos para entregarles mercados y bonos a 1.500 personas."
);
new Card(
  "La cocina",
  cocina,
  'redes',
  "Todo trabajo tiene un valor, y en casa todos debemos aportar.",
  "El trabajo doméstico que busca reconocimiento social y valoración económica, al igual que los demás trabajos, aporta al Producto Interno Bruto (PIB). ¿De las horas dedicadas a estas actividades cuántas son realizadas por mujeres?",
  ["A) 25%", "B) 100%", "C) 76%", "D) 85%"],
  "C) 76%",
  "El trabajo doméstico aporta el 17% del PIB de Bogotá, equivalente a $21,3 billones de pesos. De las horas dedicadas a estas actividades el 76% son realizadas por mujeres. Lo anterior impacta negativamente a las mujeres sobre su salud, educación, descanso, autocuidado y empleo remunerado."
);
new Card(
  "La ahogada",
  ahogadx,
  "biodiversidad",
  "Bolsas y más bolsas con todo lo que no queremos ver más, pero a nuestro entorno siempre pueden regresar.",
  "En Bogotá producimos 7.500 toneladas de basura al día y la mayoría termina en el relleno sanitario doña Juana, afectando a la población de los barrios aledaños. ¿Cuántas personas son afectadas directamente por el relleno sanitario?",
  ["A) 500", "B) 907", "C) 2.765", "D) 3.665"],
  "D) 3.665",
  "El área de influencia directa del relleno sanitario Doña Juana abarca las veredas Mochuelo Alto y Bajo, barrios Paticos, Lagunitas, Barranquitos y La Esmeralda. Este complejo está localizado en la localidad Ciudad Bolívar y ocupa una extensión de 623 hectáreas, lo que equivale a unas 872 canchas de fútbol como El Campín."
);

export default data;
