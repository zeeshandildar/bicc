/**
 * BICC STORIES/NEWS DATA
 * ----------------------
 * Each story is fully self-contained: the card on the News page AND the
 * full article page both read from this file.
 *
 * Fields:
 *  - title/titleEs, excerpt/excerptEs, category/categoryEs: card + article header
 *  - date: display date for the card (free text)
 *  - publishedAt: 'YYYY-MM-DD', used for the formatted date on the article page
 *  - image: cover photo (card and article hero)
 *  - author/authorEs: byline on the article page
 *  - content/contentEs: full article. Separate paragraphs with \n\n.
 *    A paragraph wrapped entirely in ** becomes a gold subheading.
 *  - featured: only ONE story should have featured: true (top banner)
 *
 * Add new stories at the TOP of the list so they appear first.
 */

export const stories = [
  {
    id: 14,
    title: "La Manga Tour: Three Games, Three Wins",
    titleEs: "Tour de La Manga: tres partidos, tres victorias",
    date: "August 23, 2026",
    publishedAt: "2026-08-23",
    excerpt: "A perfect weekend at the La Manga Cricket and Golf Resort: Umer Razi's all-round heroics, twin unbeaten fifties from Jayden Clark and Damien McMullen, and a stunning 6 for 18 from Burhan Ejaz. Read the full tour report.",
    excerptEs: "Un fin de semana perfecto en el La Manga Cricket and Golf Resort: la actuación completa de Umer Razi, dobles cincuentas sin ser eliminados de Jayden Clark y Damien McMullen, y un impresionante 6 por 18 de Burhan Ejaz. Lee el informe completo del tour.",
    image: "/images/events/la-manga-august-2026/team-photo-whites.jpeg",
    category: "Tour Report",
    categoryEs: "Informe de Tour",
    author: "BICC Committee",
    authorEs: "Comité del BICC",
    slug: "la-manga-tour-august-2026",
    // Links straight to the event page, where the full match reports live.
    link: "/events/la-manga-tour-august-2026",
    featured: true
  },
  {
    id: 11,
    title: "First BICC Women's Session!",
    titleEs: "¡Primera Sesión Femenina del BICC!",
    date: "April 10, 2022",
    publishedAt: "2022-04-10",
    excerpt: "Yesterday we ran the first BICC women's session, welcoming 12 women from all over the world to try out the game.",
    excerptEs: "Ayer realizamos la primera sesión femenina del BICC, dando la bienvenida a 12 mujeres de todo el mundo para probar el juego.",
    image: "/images/stories/women-s-day-9th-april-2022_orig.jpeg",
    category: "Club News",
    categoryEs: "Noticias del Club",
    author: "BICC Committee",
    authorEs: "Comité del BICC",
    slug: "first-bicc-womens-session",
    content: `Yesterday Sam, Burhan, Maroof, Shriram, Umer and Agni (with help from Men in Blue's Suraj) ran the first BICC women's session.

We welcomed 12 women from all over the world (with a very healthy Spanish/Catalan contingent) most of whom were new to the game and eager to try it out. Using tapeballs, we did some drills and exercises on batting, bowling and fielding, before finishing with a quick pairs game on the softball ground.

Everyone had a great time and many were keen for a next session, which we hope to be able to confirm very soon (and for it to come very soon too!).

If you're interested in joining us for it, or to know when any future sessions are coming up, contact us through our social media or at bcninternationalcc@gmail.com.`,
    contentEs: `Ayer Sam, Burhan, Maroof, Shriram, Umer y Agni (con la ayuda de Suraj de Men in Blue) dirigieron la primera sesión femenina del BICC.

Dimos la bienvenida a 12 mujeres de todo el mundo (con una representación española/catalana muy saludable), la mayoría de las cuales eran nuevas en el juego y estaban ansiosas por probarlo. Usando pelotas de cinta, hicimos algunos ejercicios de bateo, lanzamiento y fildeo, antes de terminar con un juego rápido de parejas en el campo de softbol.

Todos se lo pasaron genial y muchos estaban ansiosos por una próxima sesión, que esperamos poder confirmar muy pronto (¡y que también llegue muy pronto!).

Si estás interesada en unirte a nosotras o saber cuándo serán las próximas sesiones, contáctanos a través de nuestras redes sociales o en bcninternationalcc@gmail.com.`
  },
  {
    id: 10,
    title: "2023 Prizes",
    titleEs: "Premios 2023",
    date: "End of Season",
    publishedAt: "2023-12-01",
    excerpt: "After our two ECS games on Saturday, we held our 2023 prize ceremony to celebrate the year's top performers.",
    excerptEs: "Después de nuestros dos partidos de ECS el sábado, celebramos nuestra ceremonia de entrega de premios de 2023.",
    image: "/images/stories/2023-prize-ceremony-2_orig (1).jpg",
    category: "Club News",
    categoryEs: "Noticias del Club",
    author: "BICC Committee",
    authorEs: "Comité del BICC",
    slug: "2023-prizes",
    content: `After our two ECS games on Saturday, we held our 2023 prize ceremony. A couple of prizes had already been awarded at the AGM in December, but it was decided to wait until the end of that ECS before awarding the rest. In the end, we separated T10 cricket from our longer games (imagine calling mostly T20s "longer"!). President Sam Phillipps handed out the trophies, ably helped by treasurer Nathan Blyth with his generous offering of chocolate.

**Fielder of the year**
Shriram Bhosale (20 catches, 5 run outs, 1 stumping)

**T10 batter of the year**
Imran Fareed (218 runs at 24.22, SR 220)

**T10 bowler of the year**
Vishesh Gajjar (18 wickets at 24.44, SR 10.17)

**Batter of the year**
Umer Razi (716 runs at 31.13 - with an average over 50 excluding T10 cricket, four 50s [no 100s])

**Bowler of the year**
James Bentley (24 wickets at 30.92 - with an average of 24.71 excluding T10 cricket, SR 18.96)

**Player's player of the year**
Shriram Bhosale (20 wickets, 592 runs, 26 fielding dismissals, captaining the club to the Beach cricket tournament trophy)

**Clubman of the year**
Shriram Bhosale`,
    contentEs: `Después de nuestros dos juegos de ECS el sábado, celebramos nuestra ceremonia de entrega de premios de 2023. Ya se habían entregado un par de premios en la AGM de diciembre, pero se decidió esperar hasta el final de ese ECS antes de entregar el resto. Al final, separamos el críquet T10 de nuestros juegos más largos (¡imagínense llamar "más largos" a la mayoría de los T20!). El presidente Sam Phillipps entregó los trofeos, hábilmente ayudado por el tesorero Nathan Blyth con su generosa oferta de chocolate.

**Fildeador del año**
Shriram Bhosale (20 recepciones, 5 run outs, 1 stumping)

**Bateador T10 del año**
Imran Fareed (218 carreras a 24.22, SR 220)

**Lanzador T10 del año**
Vishesh Gajjar (18 wickets a 24.44, SR 10.17)

**Bateador del año**
Umer Razi (716 carreras a 31.13 - con un promedio de más de 50 excluyendo el críquet T10, cuatro 50s [sin 100s])

**Lanzador del año**
James Bentley (24 wickets a 30.92 - con un promedio de 24.71 excluyendo el críquet T10, SR 18.96)

**Jugador del jugador del año**
Shriram Bhosale (20 wickets, 592 carreras, 26 eliminaciones de campo, capitaneando el club al trofeo del torneo de críquet de playa)

**Hombre del club del año**
Shriram Bhosale`
  }
];
