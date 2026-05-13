/**
 * BICC YAKKIAN DATA
 * =================
 * The Yakkian is the club's humor section — quotes, jokes, legends, and observations.
 *
 * HOW TO ADD A NEW YAKKIAN ENTRY:
 * 1. Copy one of the objects below and paste at the top of the array
 * 2. Fill in the fields and save — the page updates automatically
 *
 * FIELDS:
 * - title     : Title of the entry (English)
 * - titleEs   : Title (Spanish)
 * - content   : The quote, joke, or story (English)
 * - contentEs : The content (Spanish)
 * - author    : Who said or wrote it
 * - authorEs  : Author name in Spanish (if different)
 * - type      : Short label shown above the card (e.g. 'Quote', 'Legend', 'Fact')
 * - typeEs    : Label in Spanish
 */

export const yakkian = [
  {
    title: 'The Oracle of Montjuïc',
    titleEs: 'El Oráculo de Montjuïc',
    content: '"I didn\'t drop the catch, I was just testing the gravitational pull of the ball."',
    contentEs: '"No se me escapó la pelota, solo estaba probando la fuerza de gravedad de la misma."',
    author: 'Anonymous BICC Legend',
    authorEs: 'Leyenda Anónima del BICC',
    type: 'Quote',
    typeEs: 'Cita',
  },
  {
    title: 'Selection Logic',
    titleEs: 'Lógica de Selección',
    content: 'Selection for the Menorca tour is strictly based on performance. Specifically, performance at the post-match BBQ.',
    contentEs: 'La selección para el tour de Menorca se basa estrictamente en el rendimiento. Específicamente, en el rendimiento en la barbacoa posterior al partido.',
    author: 'The Committee',
    authorEs: 'El Comité',
    type: 'Club Secret',
    typeEs: 'Secreto del Club',
  },
  {
    title: 'The Golden Bat',
    titleEs: 'El Bate de Oro',
    content: "Some say he hasn't scored a run since the 90s. Others say he's just waiting for the right ball. We call him 'The Anchor'.",
    contentEs: "Dicen que no ha anotado una carrera desde los años 90. Otros dicen que solo está esperando la bola adecuada. Lo llamamos 'El Ancla'.",
    author: 'Team Scribe',
    authorEs: 'El Escriba del Equipo',
    type: 'Legend',
    typeEs: 'Leyenda',
  },
  {
    title: 'Definition: Cricket',
    titleEs: 'Definición: Críquet',
    content: 'A game where 22 men in white spend 8 hours in the sun so they can justify spending 4 hours in the pub.',
    contentEs: 'Un juego donde 22 hombres vestidos de blanco pasan 8 horas al sol para poder justificar pasar 4 horas en el pub.',
    author: 'Wisdom',
    authorEs: 'Sabiduría',
    type: 'Fact',
    typeEs: 'Hecho',
  },
  {
    title: 'Match Reports',
    titleEs: 'Informes de Partidos',
    content: 'Every BICC match report follows the same structure: 1. We played well. 2. We lost. 3. The beer was cold.',
    contentEs: 'Cada informe de partido del BICC sigue la misma estructura: 1. Jugamos bien. 2. Perdimos. 3. La cerveza estaba fría.',
    author: 'BICC Media',
    authorEs: 'Medios del BICC',
    type: 'Truth',
    typeEs: 'Verdad',
  },
  {
    title: 'The All-Rounder',
    titleEs: 'El Todoterreno',
    content: "A player who can't bat, can't bowl, but has the most expensive kit in the club.",
    contentEs: 'Un jugador que no sabe batear ni lanzar, pero que tiene el equipo más caro del club.',
    author: 'Sarcastic Teammate',
    authorEs: 'Compañero Sarcástico',
    type: 'Observation',
    typeEs: 'Observación',
  },
];

export const awards = [
  {
    title: 'The Hangover Award',
    titleEs: 'Premio a la Resaca',
    winner: 'Fredrik (Stag Do 2024)',
    reason: 'Awarded for showing up to the match looking like a ghost after the legendary stag do. Somehow still fielded at slip without complaining.',
    reasonEs: 'Otorgado por presentarse al partido como un fantasma después de la legendaria despedida de soltero. De alguna manera todavía fildeó sin quejarse.',
    image: '/images/yakkian/fredrik-stag-do-27-04-24_orig.jpg',
  },
  {
    title: 'The Prestigious Wooden Spoon',
    titleEs: 'La Prestigiosa Cuchara de Madera',
    winner: '2023 Prize Ceremony',
    reason: 'Given to the player who tried the hardest with the least success. A true mark of character and resilience (and terrible batting averages).',
    reasonEs: 'Entregado al jugador que más se esforzó con el menor éxito. Una verdadera marca de carácter (y pésimos promedios de bateo).',
    image: '/images/yakkian/2023-prize-ceremony-2_orig.jpg',
  }
];

export const hallOfShame = [
  {
    caption: "What's the craic, lads?",
    captionEs: '¿Qué tal, chavales?',
    image: '/images/yakkian/init-brev.jpeg',
    rotation: '3deg'
  },
  {
    caption: 'Umi caught napping for #@%',
    captionEs: 'Umi pillado durmiendo para #@%',
    image: '/images/yakkian/sleeping-umi.jpeg',
    rotation: '-3deg'
  },
  {
    caption: 'Sweet Memories of Menorca',
    captionEs: 'Dulces Recuerdos de Menorca',
    image: '/images/yakkian/menorca-2024-random-1.jpeg',
    rotation: '2deg'
  },
  {
    caption: 'Wrong Island.',
    captionEs: 'Isla Equivocada.',
    image: '/images/yakkian/WhatsApp%20Image%202026-05-09%20at%2012.50.28%20PM.jpeg',
    rotation: '-3deg'
  },
  {
    caption: 'The Morning After...',
    captionEs: 'La Mañana Siguiente...',
    image: '/images/yakkian/fredrik-stag-do-27-04-24_orig.jpg',
    rotation: '4deg'
  },
  {
    caption: 'Accepting Defeat',
    captionEs: 'Aceptando la Derrota',
    image: '/images/yakkian/2023-prize-ceremony-2_orig.jpg',
    rotation: '-2deg'
  },
  {
    caption: 'Classic Tour Antics',
    captionEs: 'Travesuras Clásicas de Tour',
    image: '/images/yakkian/SaveClip.App_649506928_18071604311449389_3611453069986163251_n.jpg',
    rotation: '3deg'
  },
  {
    caption: 'Questionable Umpiring',
    captionEs: 'Arbitraje Cuestionable',
    image: '/images/yakkian/SaveClip.App_652837892_17974504694848352_5495325805947563432_n.jpg',
    rotation: '-4deg'
  },
  {
    caption: 'Post-Match Analysis',
    captionEs: 'Análisis Post-Partido',
    image: '/images/yakkian/SaveClip.App_660067105_18387040471087335_4917085057997855592_n.jpg',
    rotation: '2deg'
  },
  {
    caption: 'Missing in Action',
    captionEs: 'Desaparecido en Acción',
    image: '/images/yakkian/SaveClip.App_662503331_18370045246166650_8581610534650290657_n.jpg',
    rotation: '-3deg'
  },
  {
    caption: 'A Drop to Remember',
    captionEs: 'Una Caída para Recordar',
    image: '/images/yakkian/SaveClip.App_662871781_18080158010104593_3763945509850117565_n.jpg',
    rotation: '5deg'
  }
];
