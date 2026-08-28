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
    title: "La Manga Tour: Burhan's Six-For Seals the Sweep",
    titleEs: "Tour de La Manga: el 6 por 18 de Burhan sella la barrida",
    date: "August 23, 2026",
    publishedAt: "2026-08-23",
    excerpt: "Burhan Ejaz ripped through La Manga with 6 for 18 — with a little help from the scorers — and debutant Saurabh Sathyashankar smashed an unbeaten 59 as BICC completed a perfect tour weekend.",
    excerptEs: "Burhan Ejaz arrasó a La Manga con 6 por 18 —con un poco de ayuda de los anotadores— y el debutante Saurabh Sathyashankar golpeó 59 sin ser eliminado para completar un fin de semana de tour perfecto.",
    image: "/images/stories/la-manga-2026/team-photo-whites.jpeg",
    category: "Match Report",
    categoryEs: "Crónica de Partido",
    author: "BICC Committee",
    authorEs: "Comité del BICC",
    slug: "la-manga-tour-2026-sunday-40-over",
    featured: true,
    gallery: [
      "/images/stories/la-manga-2026/batters-in-whites.jpeg",
      "/images/stories/la-manga-2026/tour-group-day-out.jpeg",
      "/images/stories/la-manga-2026/la-manga-hills.jpeg",
    ],
    content: `After winning both the T20 games on Saturday, we returned to the La Manga Cricket and Golf Resort for Sunday's 40-over main event. La Manga won the toss and opted to bat first on their home deck, but our bowling attack was quickly up to the task.

Shriram Bhosale set a miserly tone early on (0/10 off 4), before Saurabh Sathyashankar and Zeeshan Dildar claimed initial breakthroughs. The rest of the innings, however, belonged entirely to Burhan Ejaz, along with a bit of controversy. Burhan ripped through the La Manga middle- and lower-order in a devastating spell, but in the heat of the action, the umpires and scorers miscalculated his tally of overs. With him one short of a 5fer, he asked the umpire how many overs he had bowled and was told seven. By the time the scorers realised the mistake, he had already claimed his fifth wicket before finishing with unbelievable figures of 6 for 18 off 8.4 overs. Despite the light-hearted boundary-line banter over his extended workload, the scorecard stood. Supported by a sharp direct-hit run-out from Ujjwal Anand to dismiss top-scorer R Nell (43), we bundled La Manga out for 146 in 37.4 overs.

Chasing 147, we made sure to keep the afternoon dramatic. Jayden Clark was caught short for 1 after some confusion whilst running, and after Ujjwal (24) fell caught-and-bowled to Tirth Singh, our middle order suffered a classic wobble. Anish Shindore, Umer Razi, James Bentley, and Damien McMullen were all back in the shed in quick succession as LMTCC's bowlers seized control, leaving us wobbling at 88/6. Step up debutant Saurabh Sathyashankar. Saurabh played a proper match-winning knock, smashing a brilliant 59 not out off 52 balls, decorated with eight boundaries and two maximums. He found the perfect partner in Burhan, who capped off his memorable day by chipping in with a cool 22 not out (hogging the strike to make sure he hit the winning runs). Their unbroken 59-run stand saw us saunter past the target to finish on 147/6 in 24.2 overs, wrapping up a 4-wicket victory and pocketing 19 out of the possible 20 points.

It was another fantastic day of cricket against a wonderfully hospitable host side. We stayed for a few drinks before heading back to Cartagena, though next time we might buy the umpires and scorers a clicker to keep Burhan's overs in check!`,
    contentEs: `Después de ganar los dos partidos T20 del sábado, regresamos al La Manga Cricket and Golf Resort para el evento principal del domingo a 40 overs. La Manga ganó el sorteo y optó por batear primero en su propio campo, pero nuestro ataque de lanzamiento estuvo rápidamente a la altura.

Shriram Bhosale marcó un tono avaro desde el principio (0/10 en 4), antes de que Saurabh Sathyashankar y Zeeshan Dildar lograran las primeras rupturas. El resto de la entrada, sin embargo, perteneció por completo a Burhan Ejaz, junto con un poco de polémica. Burhan arrasó el orden medio y bajo de La Manga en una racha devastadora, pero en el calor de la acción, los árbitros y anotadores calcularon mal su número de overs. Cuando le faltaba uno para su quinto wicket, preguntó al árbitro cuántos overs había lanzado y le dijeron que siete. Para cuando los anotadores se dieron cuenta del error, ya había conseguido su quinto wicket antes de terminar con unas increíbles cifras de 6 por 18 en 8.4 overs. A pesar de las bromas desde la línea de banda sobre su carga de trabajo extendida, el marcador se mantuvo. Con el apoyo de un certero run-out directo de Ujjwal Anand para eliminar al máximo anotador R Nell (43), despachamos a La Manga por 146 en 37.4 overs.

Persiguiendo 147, nos aseguramos de mantener la tarde dramática. Jayden Clark se quedó corto por 1 tras cierta confusión al correr, y después de que Ujjwal (24) cayera atrapado por el propio lanzador Tirth Singh, nuestro orden medio sufrió un bache clásico. Anish Shindore, Umer Razi, James Bentley y Damien McMullen volvieron al banquillo en rápida sucesión mientras los lanzadores de LMTCC tomaban el control, dejándonos tambaleándonos con 88/6. Paso al frente el debutante Saurabh Sathyashankar. Saurabh jugó una auténtica entrada ganadora, golpeando unas brillantes 59 carreras sin ser eliminado en 52 bolas, adornadas con ocho boundaries y dos sixes. Encontró al compañero perfecto en Burhan, que coronó su día memorable aportando 22 sin ser eliminado (acaparando el strike para asegurarse de golpear las carreras ganadoras). Su asociación intacta de 59 carreras nos llevó más allá del objetivo para terminar con 147/6 en 24.2 overs, cerrando una victoria por 4 wickets y embolsándonos 19 de los 20 puntos posibles.

Fue otro día fantástico de críquet contra un anfitrión maravillosamente hospitalario. Nos quedamos a tomar algo antes de volver a Cartagena, ¡aunque la próxima vez quizá les compremos un contador a los árbitros y anotadores para controlar los overs de Burhan!`
  },
  {
    id: 13,
    title: "La Manga Tour: Twin Fifties Complete the Saturday Sweep",
    titleEs: "Tour de La Manga: dobles cincuentas completan el pleno del sábado",
    date: "August 22, 2026",
    publishedAt: "2026-08-22",
    excerpt: "A new-ball masterclass from skipper Shriram and unbeaten half-centuries from Jayden Clark and Damien McMullen sealed an emphatic eight-wicket win and a two-from-two Saturday.",
    excerptEs: "Una clase magistral con la bola nueva del capitán Shriram y medios siglos sin ser eliminados de Jayden Clark y Damien McMullen sellaron una contundente victoria por ocho wickets y un sábado de pleno.",
    image: "/images/stories/la-manga-2026/batters-walking-out.jpeg",
    category: "Match Report",
    categoryEs: "Crónica de Partido",
    author: "BICC Committee",
    authorEs: "Comité del BICC",
    slug: "la-manga-tour-2026-saturday-t20-game-2",
    gallery: [
      "/images/stories/la-manga-2026/villa-bbq-2.jpeg",
      "/images/stories/la-manga-2026/villa-bbq-1.jpeg",
      "/images/stories/la-manga-2026/resort-views.jpeg",
    ],
    content: `After a quick lunch break, Game 2 got underway under the afternoon sun. With no way we could forfeit the toss again, skipper Shriram won the toss cleanly and promptly sent La Manga in to bat again.

The skipper set the tone immediately, delivering a masterclass with the new ball. He kicked off the innings with a wicket maiden, shattering Johnny Kinsella's stumps on the sixth ball after five wild swings. He was back at it in his second over to bowl Paul Harvey for a duck, before returning to clean up La Manga skipper Kieran Wood for 12. With outstanding figures of 3 for 14 from his four overs, Shriram had LMTCC reeling early. However, a resilient 70-run stand between Gopi Singh (44) and debutant Akshay (41*) helped steady their ship, dragging La Manga to a respectable total of 152/6 from their 20 overs.

Needing 153 to secure a Saturday sweep, our chase was made considerably easier as La Manga found themselves down to just nine fielders due to early departures. With massive gaps out on the spacious resort outfield, our top order didn't even need to clear the rope to keep the scoreboard ticking, happily running La Manga ragged with plenty of twos.

Zeeshan Dildar (5) fell early and Shriram chipped in with a seven-ball 22, but the chase belonged entirely to Jayden Clark and Damien McMullen. The pair produced a clinical, entertaining partnership, punishing anything loose and effortlessly finding the deep gaps. Both batters brought up brilliant unbeaten half-centuries with Jayden finishing on 54* off 42 balls and Damo blasting a rapid 54* off just 32.

We sauntered to 153/2 in the 16th over, sealing an emphatic eight-wicket victory with four full overs to spare. With two wins out of two locked in on Saturday, we headed off to our villa for a team barbecue, followed by a 2am trip to McDonald's!`,
    contentEs: `Tras una rápida pausa para comer, el segundo partido comenzó bajo el sol de la tarde. Sin posibilidad de volver a perder el sorteo por incomparecencia, el capitán Shriram ganó el sorteo limpiamente y envió de nuevo a La Manga a batear.

El capitán marcó el tono de inmediato, ofreciendo una clase magistral con la bola nueva. Abrió la entrada con un wicket maiden, destrozando los stumps de Johnny Kinsella en la sexta bola tras cinco intentos desesperados. Volvió a la carga en su segundo over para eliminar a Paul Harvey sin anotar, antes de regresar para acabar con el capitán de La Manga, Kieran Wood, por 12. Con unas cifras sobresalientes de 3 por 14 en sus cuatro overs, Shriram tenía a LMTCC contra las cuerdas desde el principio. Sin embargo, una resistente asociación de 70 carreras entre Gopi Singh (44) y el debutante Akshay (41*) ayudó a estabilizar su barco, arrastrando a La Manga hasta un total respetable de 152/6 en sus 20 overs.

Necesitando 153 para asegurar el pleno del sábado, nuestra persecución se hizo considerablemente más fácil cuando La Manga se quedó con solo nueve fildeadores debido a salidas anticipadas. Con enormes huecos en el espacioso campo del resort, nuestro orden alto ni siquiera necesitó superar la cuerda para mantener el marcador en movimiento, corriendo felizmente montones de dobles y agotando a La Manga.

Zeeshan Dildar (5) cayó pronto y Shriram aportó 22 en siete bolas, pero la persecución perteneció por completo a Jayden Clark y Damien McMullen. La pareja produjo una asociación clínica y entretenida, castigando cualquier bola suelta y encontrando sin esfuerzo los huecos profundos. Ambos bateadores lograron brillantes medios siglos sin ser eliminados: Jayden terminó con 54* en 42 bolas y Damo con unas rápidas 54* en solo 32.

Llegamos tranquilamente a 153/2 en el over 16, sellando una contundente victoria por ocho wickets con cuatro overs completos de sobra. Con dos victorias de dos aseguradas el sábado, nos fuimos a nuestra villa para una barbacoa de equipo, ¡seguida de una visita a McDonald's a las 2 de la madrugada!`
  },
  {
    id: 12,
    title: "La Manga Tour: Umer Stars in the Opener",
    titleEs: "Tour de La Manga: Umer brilla en el partido inaugural",
    date: "August 22, 2026",
    publishedAt: "2026-08-22",
    excerpt: "The summer break ended in style at the La Manga Cricket and Golf Resort, with Umer Razi's all-round heroics — three catches, 2 for 2, and an unbeaten 49 — sealing a seven-wicket win in the tour opener.",
    excerptEs: "La pausa veraniega terminó por todo lo alto en el La Manga Cricket and Golf Resort, con la actuación completa de Umer Razi —tres catches, 2 por 2 y 49 sin ser eliminado— sellando una victoria por siete wickets en el partido inaugural del tour.",
    image: "/images/stories/la-manga-2026/team-huddle.jpeg",
    category: "Match Report",
    categoryEs: "Crónica de Partido",
    author: "BICC Committee",
    authorEs: "Comité del BICC",
    slug: "la-manga-tour-2026-saturday-t20-game-1",
    gallery: [
      "/images/stories/la-manga-2026/batting-pair.jpeg",
      "/images/stories/la-manga-2026/on-field-banter.jpeg",
    ],
    content: `The summer break finally came to an end as we made our way down to the La Manga Cricket and Golf Resort for Saturday's T20 double-header. Things didn't start strictly to plan off the pitch — a slightly late arrival on our part meant we forfeited the toss by default, allowing La Manga skipper Kieran Wood to eagerly elect to bat first.

Once out in the middle, our bowling attack quickly found its groove, despite us starting with only 9 players. Burhan Ejaz and Shriram Bhosale set early traps before Zeeshan Dildar was too quick for them, taking 2 for 5 from his 4 overs. Umer Razi had a sensational morning in the field, holding onto three catches before taking the ball himself to post astonishing figures of 2 for 2 (including a maiden) in his 2 overs. Vishesh Gajjar (2/10) and Anish Shindore (1/11) kept the squeeze on, leaving La Manga's lineup in real trouble. However, our radar proved somewhat generous — a staggering 62 extras (including 48 wides) accounted for over half their total, helping them scrape together 121/9 from their 20 overs.

Chasing 122, our innings got off to a bumpy start. Rahul Maini removed both Jayden Clark (3) and Ujjwal Anand (8) to leave us wobbling at 21/2. Damien McMullen (17) stepped up to help rebuild, but the man of the match was undoubtedly Umer Razi. Carrying his fielding form into his batting, Umer anchored the chase with a brilliant, unbeaten 49 off 39 balls.

With 44 runs still needed late in the game, Umer and Burhan Ejaz (17* off 11) launched a counter-attack against La Manga's change bowlers, taking 44 runs off less than 4 overs. We sauntered past the target to finish on 124/3 in 17.5 overs, securing a comfortable 7-wicket victory. A slightly heartbreaking single run short of a half-century for Umer, but a brilliant start to the tour!`,
    contentEs: `La pausa veraniega llegó por fin a su fin cuando bajamos al La Manga Cricket and Golf Resort para la doble jornada de T20 del sábado. Las cosas no empezaron exactamente según lo previsto fuera del campo: una llegada ligeramente tardía por nuestra parte nos hizo perder el sorteo por incomparecencia, permitiendo al capitán de La Manga, Kieran Wood, elegir con entusiasmo batear primero.

Ya en el campo, nuestro ataque de lanzamiento encontró rápidamente su ritmo, a pesar de empezar con solo 9 jugadores. Burhan Ejaz y Shriram Bhosale tendieron las primeras trampas antes de que Zeeshan Dildar resultara demasiado rápido para ellos, logrando 2 por 5 en sus 4 overs. Umer Razi tuvo una mañana sensacional en el campo, atrapando tres catches antes de tomar la bola él mismo para firmar unas asombrosas cifras de 2 por 2 (incluido un maiden) en sus 2 overs. Vishesh Gajjar (2/10) y Anish Shindore (1/11) mantuvieron la presión, dejando a la alineación de La Manga en serios problemas. Sin embargo, nuestra puntería resultó algo generosa: unos asombrosos 62 extras (incluidos 48 wides) supusieron más de la mitad de su total, ayudándoles a arañar 121/9 en sus 20 overs.

Persiguiendo 122, nuestra entrada tuvo un comienzo accidentado. Rahul Maini eliminó tanto a Jayden Clark (3) como a Ujjwal Anand (8) para dejarnos tambaleándonos con 21/2. Damien McMullen (17) dio un paso al frente para ayudar a reconstruir, pero el hombre del partido fue sin duda Umer Razi. Trasladando su forma en el campo al bateo, Umer ancló la persecución con unas brillantes 49 carreras sin ser eliminado en 39 bolas.

Con 44 carreras aún necesarias al final del partido, Umer y Burhan Ejaz (17* en 11) lanzaron un contraataque contra los lanzadores de cambio de La Manga, sumando 44 carreras en menos de 4 overs. Superamos el objetivo con tranquilidad para terminar con 124/3 en 17.5 overs, asegurando una cómoda victoria por 7 wickets. Una sola carrera le faltó a Umer para su medio siglo —un poco desgarrador—, ¡pero un comienzo brillante del tour!`
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
