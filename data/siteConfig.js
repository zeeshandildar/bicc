/**
 * BICC SITE CONFIGURATION
 * =======================
 * This is the central place for all club-wide information.
 * If the club email, training times, or social links change — update them HERE.
 * They will automatically update everywhere on the website.
 *
 * HOW TO UPDATE:
 * Just change the value next to the key you want and save the file.
 */

export const siteConfig = {
  // ── Club Identity ──────────────────────────────────────────────
  clubName: 'Barcelona International Cricket Club',
  clubShortName: 'BICC',
  foundedYear: 1982,
  tagline: "Catalonia's oldest cricket club since 1982. Uniting nations through the spirit of cricket.",

  // ── Contact ────────────────────────────────────────────────────
  email: 'bcninternationalcc@gmail.com',
  location: 'Barcelona, Catalonia, Spain',
  locationEs: 'Barcelona, Cataluña, España',

  // ── Training & Hours ──────────────────────────────────────────
  training: [
    { day: 'Monday',    dayEs: 'Lunes',     time: 'Closed' },
    { day: 'Tuesday',   dayEs: 'Martes',    time: 'Closed' },
    { day: 'Wednesday', dayEs: 'Miércoles', time: 'Closed' },
    { day: 'Thursday',  dayEs: 'Jueves',    time: 'Closed' },
    { day: 'Friday',    dayEs: 'Viernes',   time: 'Closed' },
    { day: 'Saturday',  dayEs: 'Sábado',    time: '9:00 AM – 7:00 PM' },
    { day: 'Sunday',    dayEs: 'Domingo',   time: '9:00 AM – 7:00 PM' },
  ],


  // ── Social Media Links ─────────────────────────────────────────
  // Set a URL to '' (empty string) to hide that icon
  social: {
    instagram: 'https://www.instagram.com/bicc_barcelona/',
    twitter:   'https://x.com/bicc_barcelona',
    facebook:  'https://www.facebook.com/barcelonainternationalcc',
    youtube:   'https://www.youtube.com/channel/UCpqPClwtlYmYgepdo4BjEmg',
    whatsapp:  '',
  },


  // ── SEO Metadata ───────────────────────────────────────────────
  seo: {
    title:       'BICC — Barcelona International Cricket Club',
    description: "Barcelona International Cricket Club — Catalonia's oldest cricket club since 1982. Uniting nations through the spirit of cricket.",
    keywords:    'Barcelona cricket, BICC, cricket club Spain, international cricket Barcelona, Catalonia cricket',
  },

  // ── Hero Stats (shown on the home page hero section) ──────────
  heroStats: [
    { value: '40+',  label: 'Years of Excellence', labelEs: 'Años de Excelencia' },
    { value: '20+',  label: 'Nations Represented', labelEs: 'Naciones Representadas' },
    { value: '2025', label: 'ECCL Champions',       labelEs: 'Campeones ECCL' },
  ],

  // ── News Ticker (scrolling marquee on the home page) ──────────
  // Add or remove ticker items here
  newsTicker: [
    { en: 'ECCL 40-OVER CHAMPIONS 2025 — CONGRATULATIONS BICC!',            es: 'CAMPEONES ECCL 40 OVERS 2025 — FELICITACIONES BICC!' },
    { en: 'JOIN BICC — NEW PLAYER ENQUIRIES: bcninternationalcc@gmail.com',   es: 'UNETE AL BICC — CONSULTAS: bcninternationalcc@gmail.com' },
    { en: 'ANDORRA TOUR 2024 — BICC FIRST EVER VISIT TO THE PRINCIPALITY',   es: 'TOUR A ANDORRA 2024 — PRIMERA VISITA DEL BICC AL PRINCIPADO' },
    { en: 'TRAINING: SATURDAYS AND SUNDAYS 9AM-7PM AT MONTJUIC',             es: 'ENTRENAMIENTO: SABADOS Y DOMINGOS 9AM-7PM EN MONTJUIC' },
    { en: 'FOUNDED 1982 — PLAYERS FROM 20 PLUS NATIONS UNITED BY CRICKET',   es: 'FUNDADO EN 1982 — JUGADORES DE 20 NACIONES UNIDOS POR EL CRICKET' },
  ],
};
