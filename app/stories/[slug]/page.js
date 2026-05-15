'use client';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../../lib/LanguageContext';

export default function StoryDetailPage({ params }) {
  const { slug } = use(params);
  const { t, language } = useLanguage();

  const storiesData = {
    'first-bicc-womens-session': { 
      title: t("First BICC Women's Session!", "¡Primera Sesión Femenina del BICC!"), 
      author: t('BICC Committee', 'Comité del BICC'), 
      category: t('club-news', 'noticias-del-club'), 
      coverImage: '/images/stories/women-s-day-9th-april-2022_orig.jpeg', 
      publishedAt: '2022-04-10', 
      content: t(
        `Yesterday Sam, Burhan, Maroof, Shriram, Umer and Agni (with help from Men in Blue's Suraj) ran the first BICC women's session.\n\nWe welcomed 12 women from all over the world (with a very healthy Spanish/Catalan contingent) most of whom were new to the game and eager to try it out. Using tapeballs, we did some drills and exercises on batting, bowling and fielding, before finishing with a quick pairs game on the softball ground.\n\nEveryone had a great time and many were keen for a next session, which we hope to be able to confirm very soon (and for it to come very soon too!).\n\nIf you're interested in joining us for it, or to know when any future sessions are coming up, contact us through out social media or at bcninternationalcc@gmail.com.`,
        `Ayer Sam, Burhan, Maroof, Shriram, Umer y Agni (con la ayuda de Suraj de Men in Blue) dirigieron la primera sesión femenina del BICC.\n\nDimos la bienvenida a 12 mujeres de todo el mundo (con una representación española/catalana muy saludable), la mayoría de las cuales eran nuevas en el juego y estaban ansiosas por probarlo. Usando pelotas de cinta, hicimos algunos ejercicios de bateo, lanzamiento y fildeo, antes de terminar con un juego rápido de parejas en el campo de softbol.\n\nTodos se lo pasaron genial y muchos estaban ansiosos por una próxima sesión, que esperamos poder confirmar muy pronto (¡y que también llegue muy pronto!).\n\nSi estás interesada en unirte a nosotras o saber cuándo serán las próximas sesiones, contáctanos a través de nuestras redes sociales o en bcninternationalcc@gmail.com.`
      ) 
    },
    '2023-prizes': { 
      title: t('2023 Prizes', 'Premios 2023'), 
      author: t('BICC Committee', 'Comité del BICC'), 
      category: t('club-news', 'noticias-del-club'), 
      coverImage: '/images/stories/2023-prize-ceremony-2_orig (1).jpg', 
      publishedAt: '2023-12-01', 
      content: t(
        `After our two ECS games on Saturday, we held our 2023 prize ceremony. A couple of prizes had already been awarded at the AGM in December, but it was decided to wait until the end of that ECS before awarding the rest. In the end, we separated T10 cricket from our longer games (imagine calling mostly T20s "longer"!). President Sam Phillipps handed out the trophies, ably helped by treasurer Nathan Blyth with his generous offering of chocolate.\n\n**Fielder of the year**\nShriram Bhosale (20 catches, 5 run outs, 1 stumping)\n\n**T10 batter of the year**\nImran Fareed (218 runs at 24.22, SR 220)\n\n**T10 bowler of the year**\nVishesh Gajjar (18 wickets at 24.44, SR 10.17)\n\n**Batter of the year**\nUmer Razi (716 runs at 31.13 - with an average over 50 excluding T10 cricket, four 50s [no 100s])\n\n**Bowler of the year**\nJames Bentley (24 wickets at 30.92 - with an average of 24.71 excluding T10 cricket, SR 18.96)\n\n**Player's player of the year**\nShriram Bhosale (20 wickets, 592 runs, 26 fielding dismissals, captaining the club to the Beach cricket tournament trophy)\n\n**Clubman of the year**\nShriram Bhosale`,
        `Después de nuestros dos juegos de ECS el sábado, celebramos nuestra ceremonia de entrega de premios de 2023. Ya se habían entregado un par de premios en la AGM de diciembre, pero se decidió esperar hasta el final de ese ECS antes de entregar el resto. Al final, separamos el críquet T10 de nuestros juegos más largos (¡imagínense llamar "más largos" a la mayoría de los T20!). El presidente Sam Phillipps entregó los trofeos, hábilmente ayudado por el tesorero Nathan Blyth con su generosa oferta de chocolate.\n\n**Fildeador del año**\nShriram Bhosale (20 recepciones, 5 run outs, 1 stumping)\n\n**Bateador T10 del año**\nImran Fareed (218 carreras a 24.22, SR 220)\n\n**Lanzador T10 del año**\nVishesh Gajjar (18 wickets a 24.44, SR 10.17)\n\n**Bateador del año**\nUmer Razi (716 carreras a 31.13 - con un promedio de más de 50 excluyendo el críquet T10, cuatro 50s [sin 100s])\n\n**Lanzador del año**\nJames Bentley (24 wickets a 30.92 - con un promedio de 24.71 excluyendo el críquet T10, SR 18.96)\n\n**Jugador del jugador del año**\nShriram Bhosale (20 wickets, 592 carreras, 26 eliminaciones de campo, capitaneando el club al trofeo del torneo de críquet de playa)\n\n**Hombre del club del año**\nShriram Bhosale`
      ) 
    },
    'league-title-2024': { 
      title: t('BICC Clinch League Title in Dramatic Final', 'El BICC se adjudica el título de liga en una final dramática'), 
      author: t('BICC Media', 'Medios del BICC'), 
      category: t('match-report', 'crónica-de-partido'), 
      coverImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&q=80', 
      publishedAt: '2024-10-15', 
      content: t(
        `In what will go down as one of the greatest matches in BICC history, the club clinched the Catalonia Cricket League title in the most dramatic fashion imaginable.\n\nChasing a daunting target of 187 runs set by fierce rivals Catalunya CC, BICC found themselves in deep trouble at 98-5 in the 28th over. The title dream was slipping away.\n\nEnter captain Raj Kumar. With the composure of a veteran and the audacity of a debutant, Kumar anchored the innings with a masterful 73 not out off 62 balls. His partnership with all-rounder James Mitchell (42 off 38) proved to be the turning point.\n\nWith 12 needed off the final over, Kumar smashed a boundary through mid-off and then drove the penultimate ball to the cover boundary to seal the win. The scenes that followed were of pure, unbridled joy.\n\n"This is what BICC is all about," said an emotional Kumar after the match. "When your backs are against the wall, this team finds a way. Every single player contributed to this title."\n\nThe victory caps off a remarkable season that saw BICC win 10 out of 14 league matches, with three players finishing in the top 10 run-scorers and two in the top 5 wicket-takers.\n\nThe celebrations continued well into the night at the club's traditional post-match venue, with the trophy making its rounds between tables, songs, and speeches.`,
        `En lo que pasará a la historia como uno de los mejores partidos del BICC, el club se adjudicó el título de la Liga de Críquet de Cataluña de la manera más dramática imaginable.\n\nPersiguiendo un desalentador objetivo de 187 carreras establecido por sus feroces rivales Catalunya CC, el BICC se encontró en serios problemas con 98-5 en el over 28. El sueño del título se escapaba.\n\nEntra el capitán Raj Kumar. Con la compostura de un veterano y la audacia de un debutante, Kumar ancló las entradas con unos magistrales 73 no out en 62 bolas. Su asociación con el todoterreno James Mitchell (42 de 38) resultó ser el punto de inflexión.\n\nCon 12 necesitadas en el último over, Kumar golpeó un límite por mid-off y luego llevó la penúltima bola al límite de cover para sellar la victoria. Las escenas que siguieron fueron de pura e infinita alegría.\n\n"Esto es de lo que se trata el BICC", dijo un emocionado Kumar después del partido. "Cuando estás contra las cuerdas, este equipo encuentra el camino. Cada jugador contribuyó a este título".\n\nLa victoria culmina una temporada notable en la que el BICC ganó 10 de 14 partidos de liga, con tres jugadores terminando en el top 10 de anotadores de carreras y dos en el top 5 de tomadores de wickets.\n\nLas celebraciones continuaron hasta bien entrada la noche en el lugar tradicional post-partido del club, con el trofeo dando vueltas entre mesas, canciones y discursos.`
      ) 
    },
    'menorca-tour-2024': { 
      title: t('Menorca Tour 2024: Sun, Cricket, and Stories', 'Tour de Menorca 2024: Sol, Críquet e Historias'), 
      author: t('Tour Committee', 'Comité del Tour'), 
      category: t('tour-diary', 'diario-de-tour'), 
      coverImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&q=80', 
      publishedAt: '2024-07-01', 
      content: t(
        `The annual Menorca tour is, without question, the highlight of the BICC calendar. And the 2024 edition did not disappoint.\n\nTwenty-two players and several brave partners made the trip to the beautiful Balearic island for four days of cricket, camaraderie, and Mediterranean bliss.\n\n**Day 1: Arrival & Warm-Up**\nThe squad descended on Menorca from various corners of Barcelona, with the usual debates about batting order starting before anyone had even unpacked. A light warm-up session at the ground was followed by the traditional welcome dinner.\n\n**Day 2: First Match**\nBICC vs Menorca XI. Batting first, BICC posted a competitive 165-7, with opener David Williams scoring a patient 58. In reply, the home side were bowled out for 142, with spinner Amit Shah taking 4-23. Victory by 23 runs.\n\n**Day 3: Second Match & Beach Cricket**\nA more relaxed affair saw BICC play a mixed team. The highlight was the afternoon beach cricket session, which quickly devolved into a gloriously chaotic game with rules being invented on the fly.\n\n**Day 4: Final Match & Farewell**\nThe touring party rose early for the final match — a T20 against a Menorca Select XI. BICC won by 5 wickets in a thrilling chase. The farewell dinner that evening was emotional, with tour awards handed out and promises made to return next year.\n\nAnother unforgettable chapter in the Menorca tour saga. See you in 2025.`,
        `El tour anual de Menorca es, sin duda, el punto culminante del calendario del BICC. Y la edición de 2024 no decepcionó.\n\nVeintidós jugadores y varios valientes acompañantes hicieron el viaje a la hermosa isla balear para cuatro días de críquet, camaradería y felicidad mediterránea.\n\n**Día 1: Llegada y Calentamiento**\nEl equipo aterrizó en Menorca desde varios rincones de Barcelona, con los debates habituales sobre el orden de bateo comenzando antes incluso de que nadie hubiera deshecho las maletas. Una ligera sesión de calentamiento en el campo fue seguida por la tradicional cena de bienvenida.\n\n**Día 2: Primer Partido**\nBICC vs Menorca XI. Bateando primero, el BICC anotó unos competitivos 165-7, con el abridor David Williams anotando 58 con paciencia. En respuesta, el equipo local fue eliminado por 142, con el lanzador Amit Shah tomando 4-23. Victoria por 23 carreras.\n\n**Día 3: Segundo Partido y Críquet de Playa**\nUn encuentro más relajado vio al BICC jugar contra un equipo mixto. Lo más destacado fue la sesión de críquet de playa por la tarde, que rápidamente derivó en un juego gloriosamente caótico con reglas inventadas sobre la marcha.\n\n**Día 4: Partido Final y Despedida**\nEl grupo del tour se levantó temprano para el partido final, un T20 contra un Menorca Select XI. El BICC ganó por 5 wickets en una persecución emocionante. La cena de despedida esa noche fue emotiva, con la entrega de premios del tour y promesas de regresar el próximo año.\n\nOtro capítulo inolvidable en la saga del tour de Menorca. Nos vemos en 2025.`
      ) 
    },
    'arjun-interview': { 
      title: t('From Mumbai to Barcelona: Arjun\'s Cricket Journey', 'De Mumbai a Barcelona: El viaje de críquet de Arjun'), 
      author: t('BICC Media', 'Medios del BICC'), 
      category: t('interview', 'entrevista'), 
      coverImage: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80', 
      publishedAt: '2024-05-20', 
      content: t(
        `When Arjun Patel moved from Mumbai to Barcelona in 2018, he thought he was leaving cricket behind. He couldn't have been more wrong.\n\n"I grew up playing cricket every day in Mumbai," says Arjun, nursing a coffee at a café near the Sagrada Familia. "When I got the job offer in Barcelona, my first thought was: great opportunity. My second thought was: but where will I play cricket?"\n\nA quick Google search led him to BICC, and within a week of arriving in the city, he was at training.\n\n"I remember walking up to the ground and hearing the sound of bat on ball. It felt like home immediately. The guys were so welcoming — it didn't matter where you were from or how good you were. If you loved cricket, you were in."\n\nSix years later, Arjun is one of BICC's most consistent performers, with over 2,000 runs and 50 wickets across all formats. But it's the friendships that he values most.\n\n"My best friends in Barcelona are all from BICC. We're from India, England, Australia, Pakistan, South Africa, the Caribbean — you name it. Cricket brought us together, but the bond goes way beyond the game."\n\nWhen asked about his favorite BICC memory, Arjun doesn't hesitate: "The 2022 Menorca tour. I scored my first century for the club, and that evening the whole team celebrated like I'd won the World Cup. That's what BICC is."`,
        `Cuando Arjun Patel se mudó de Mumbai a Barcelona en 2018, pensó que estaba dejando atrás el críquet. No podría haber estado más equivocado.\n\n"Crecí jugando al críquet todos los días en Mumbai", dice Arjun, mientras toma un café en una cafetería cerca de la Sagrada Familia. "Cuando recibí la oferta de trabajo en Barcelona, mi primer pensamiento fue: gran oportunidad. Mi segundo pensamiento fue: ¿pero dónde jugaré al críquet?"\n\nUna rápida búsqueda en Google lo llevó al BICC, y una semana después de llegar a la ciudad, ya estaba entrenando.\n\n"Recuerdo caminar hacia el campo y escuchar el sonido del bate golpeando la bola. Se sintió como en casa inmediatamente. Los chicos fueron muy acogedores; no importaba de dónde fueras o qué tan bueno fueras. Si amabas el críquet, estabas dentro."\n\nSeis años después, Arjun es uno de los jugadores más consistentes del BICC, con más de 2,000 carreras y 50 wickets en todos los formatos. Pero lo que más valora son las amistades.\n\n"Mis mejores amigos en Barcelona son todos del BICC. Somos de la India, Inglaterra, Australia, Pakistán, Sudáfrica, el Caribe... lo que quieras. El críquet nos unió, pero el vínculo va mucho más allá del juego."\n\nCuando se le pregunta por su recuerdo favorito del BICC, Arjun no lo duda: "El tour de Menorca de 2022. Anoté mi primer siglo para el club, y esa noche todo el equipo lo celebró como si hubiera ganado la Copa del Mundo. Eso es lo que es el BICC".`
      ) 
    },
    'season-preview-2024': { 
      title: t('New Season, New Ambitions: 2024 Preview', 'Nueva temporada, nuevas ambiciones: avance de 2024'), 
      author: t('Captain\'s Corner', 'El rincón del capitán'), 
      category: t('club-news', 'noticias-del-club'), 
      coverImage: 'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?w=1200&q=80', 
      publishedAt: '2024-02-28', 
      content: t(
        `As the Barcelona winter fades and the days get longer, BICC is gearing up for what promises to be an exciting 2024 season.\n\nWith the Catalonia Cricket League title to defend and several new tours on the horizon, the club enters the new campaign with renewed energy and ambition.\n\n**New Signings**\nThe club has welcomed eight new members during the off-season, including two experienced players from the UK and a promising young all-rounder from Sri Lanka.\n\n**Training Revamp**\nTraining sessions have been restructured to include dedicated skills clinics, fitness work, and match simulation exercises. "We want every player to improve, regardless of their level," says head coach Miguel Santos.\n\n**Tour Calendar**\nThe 2024 tour calendar is the most ambitious yet, with trips planned to Menorca (June), Valencia (April), and a potential first-ever tour to Mallorca in September.\n\n**League Ambitions**\n"Back-to-back titles is the goal," says captain Raj Kumar. "But more importantly, we want to play attractive, positive cricket that everyone enjoys."\n\nThe season kicks off on March 15th with a pre-season friendly. All members are encouraged to attend.`,
        `A medida que el invierno de Barcelona se desvanece y los días se alargan, el BICC se está preparando para lo que promete ser una emocionante temporada 2024.\n\nCon el título de la Liga de Críquet de Cataluña que defender y varios tours nuevos en el horizonte, el club entra en la nueva campaña con energía y ambición renovadas.\n\n**Nuevos fichajes**\nEl club ha dado la bienvenida a ocho nuevos miembros durante la pretemporada, incluidos dos jugadores experimentados del Reino Unido y un joven y prometedor todoterreno de Sri Lanka.\n\n**Renovación de los entrenamientos**\nLas sesiones de entrenamiento se han reestructurado para incluir clínicas de habilidades dedicadas, trabajo de fitness y ejercicios de simulación de partidos. "Queremos que cada jugador mejore, independientemente de su nivel", dice el entrenador principal Miguel Santos.\n\n**Calendario de tours**\nEl calendario de tours de 2024 es el más ambicioso hasta ahora, con viajes previstos a Menorca (junio), Valencia (abril) y un posible primer tour a Mallorca en septiembre.\n\n**Ambiciones de liga**\n"El objetivo es ganar títulos consecutivos", dice el capitán Raj Kumar. "Pero más importante aún, queremos jugar un críquet atractivo y positivo que todos disfruten".\n\nLa temporada comienza el 15 de marzo con un amistoso de pretemporada. Se anima a todos los miembros a asistir.`
      ) 
    },
    'porto-tour-2023': { 
      title: t('Porto Tour: Cricket, Port Wine, and Brotherhood', 'Tour de Oporto: Críquet, vino de Oporto y hermandad'), 
      author: t('Tour Committee', 'Comité del Tour'), 
      category: t('tour-diary', 'diario-de-tour'), 
      coverImage: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80', 
      publishedAt: '2023-09-25', 
      content: t(
        `BICC's first-ever tour to Porto, Portugal was everything we hoped for and more.\n\nEighteen players made the journey to Portugal's second city for three days of cricket, culture, and camaraderie.\n\nThe cricket was competitive, with two matches against a local Porto XI. BICC won the first match comfortably but were pushed hard in the second, eventually winning by just 3 runs in a tense finish.\n\nOff the field, the touring party explored Porto's stunning riverside, sampled the famous port wine cellars, and enjoyed some incredible Portuguese cuisine.\n\nThe tour dinner was held at a beautiful restaurant overlooking the Douro river, where tour awards were presented and speeches ranged from the heartfelt to the hilarious.\n\nPorto 2023 will go down as one of the great BICC tours. Plans are already underway for a return visit.`,
        `El primer tour del BICC a Oporto, Portugal, fue todo lo que esperábamos y más.\n\nDieciocho jugadores hicieron el viaje a la segunda ciudad de Portugal para tres días de críquet, cultura y camaradería.\n\nEl críquet fue competitivo, con dos partidos contra un XI local de Oporto. El BICC ganó el primer partido con comodidad pero fue presionado con fuerza en el segundo, ganando finalmente por solo 3 carreras en un final tenso.\n\nFuera del campo, el grupo del tour exploró la impresionante ribera de Oporto, probó las famosas bodegas de vino de Oporto y disfrutó de una increíble cocina portuguesa.\n\nLa cena del tour se celebró en un hermoso restaurante con vistas al río Duero, donde se entregaron los premios del tour y los discursos variaron de lo sincero a lo hilarante.\n\nOporto 2023 pasará a la historia como uno de los grandes tours del BICC. Ya están en marcha los planes para una visita de regreso.`
      ) 
    },
    'youth-program': { 
      title: t('Youth Program Launch: Building the Future', 'Lanzamiento del programa juvenil: Construyendo el futuro'), 
      author: t('BICC Committee', 'Comité del BICC'), 
      category: t('club-news', 'noticias-del-club'), 
      coverImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80', 
      publishedAt: '2023-11-10', 
      content: t(
        `BICC is proud to announce the launch of its youth cricket development program.\n\nThe program aims to introduce cricket to local Barcelona children aged 8-16, with weekly coaching sessions led by qualified BICC members.\n\n"Cricket has given us so much," says program coordinator Ana Torres. "It's time to give back to the community that hosts us. We want to show Barcelona's young people that cricket is an inclusive, fun, and exciting sport."\n\nSessions will be held every Saturday morning at the club's home ground, with equipment provided free of charge. The program is open to all children, regardless of previous experience.\n\nInterested parents can register their children through the club website or by contacting the committee directly.`,
        `El BICC se enorgullece de anunciar el lanzamiento de su programa de desarrollo de críquet juvenil.\n\nEl programa tiene como objetivo introducir el críquet a los niños locales de Barcelona de entre 8 y 16 años, con sesiones de entrenamiento semanales dirigidas por miembros calificados del BICC.\n\n"El críquet nos ha dado mucho", dice la coordinadora del programa Ana Torres. "Es hora de devolver algo a la comunidad que nos acoge. Queremos mostrar a los jóvenes de Barcelona que el críquet es un deporte inclusivo, divertido y emocionante".\n\nLas sesiones se llevarán a cabo todos los sábados por la mañana en el campo local del club, con equipo proporcionado de forma gratuita. El programa está abierto a todos los niños, independientemente de su experiencia previa.\n\nLos padres interesados pueden inscribir a sus hijos a través del sitio web del club o poniéndose en contacto directamente con el comité.`
      ) 
    },
  };

  const story = storiesData[slug];

  if (!story) {
    return (
      <div style={{ paddingTop: 'calc(var(--nav-height) + 80px)', textAlign: 'center', minHeight: '60vh' }}>
        <div className="container">
          <h1>{t('Story Not Found', 'Historia No Encontrada')}</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>{t('The article you\'re looking for doesn\'t exist.', 'El artículo que estás buscando no existe.')}</p>
          <Link href="/stories" className="btn btn-primary" style={{ marginTop: '24px' }}>{t('Back to Stories', 'Volver a Historias')}</Link>
        </div>
      </div>
    );
  }

  const dateStr = new Date(story.publishedAt).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero Image */}
      <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <Image 
          src={story.coverImage} 
          alt={story.title} 
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 30%, var(--bg-primary) 100%)' }}></div>
      </div>

      <section style={{ maxWidth: '800px', margin: '-80px auto 0', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        <Link href="/stories" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px', textDecoration: 'none' }}>
          ← {t('Back to Stories', 'Volver a Historias')}
        </Link>

        <div className="badge" style={{ marginBottom: '16px' }}>{story.category?.replace('-', ' ')}</div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '16px' }}>{story.title}</h1>

        <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '40px' }}>
          <span>{dateStr}</span>
          <span>•</span>
          <span>{story.author}</span>
        </div>

        <article style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
          {story.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={i} style={{ color: 'var(--accent-gold)', margin: '32px 0 16px', fontSize: '1.2rem' }}>{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            if (paragraph.startsWith('**')) {
              const parts = paragraph.split('**');
              return <p key={i} style={{ marginBottom: '20px' }}><strong style={{ color: 'var(--text-primary)' }}>{parts[1]}</strong>{parts[2]}</p>;
            }
            return <p key={i} style={{ marginBottom: '20px' }}>{paragraph}</p>;
          })}
        </article>

        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <Link href="/stories" className="btn btn-outline">← {t('More Stories', 'Más Historias')}</Link>
        </div>
      </section>

      <div style={{ height: '80px' }}></div>
    </div>
  );
}
