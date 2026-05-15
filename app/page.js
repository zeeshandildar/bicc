'use client';
import Hero from '../components/Hero/Hero';
import ScrollAnimation from '../components/ScrollAnimation/ScrollAnimation';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../lib/LanguageContext';
import styles from './Home.module.css';
import { siteConfig } from '../data/siteConfig';

export default function HomePage() {
  const { t } = useLanguage();

  const newsItems = siteConfig.newsTicker.map(item => t(item.en, item.es));


  return (
    <div className="homepage">
      <Hero />

      {/* Discovery Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <ScrollAnimation>
              <h2 className="bebas" style={{ fontSize: '4rem', marginBottom: '16px' }}>
                {t('Discover', 'Descubre')} <span className="gradient-red">BICC</span>
              </h2>
              <div style={{ width: '80px', height: '3px', background: 'var(--accent-red)', margin: '0 auto 24px' }}></div>
              <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-dim)', fontSize: '1.1rem' }}>
                {t(
                  'Since 1982, Barcelona International Cricket Club has been a home for cricketers from every corner of the globe.',
                  'Desde 1982, el Barcelona International Cricket Club ha sido un hogar para jugadores de críquet de todos los rincones del mundo.'
                )}
              </p>
            </ScrollAnimation>
          </div>

          <div className={styles.discoveryGrid}>
            {[
              {
                title: t('Our Story', 'Nuestra Historia'),
                desc: t('A rich history spanning over four decades in the heart of Catalonia.', 'Una rica historia que abarca más de cuatro décadas en el corazón de Cataluña.'),
                link: '/story',
                img: '/images/utility/bicclogo.png',
                badge: t('Est. 1982', 'Fund. 1982')
              },
              {
                title: t('Events & Tours', 'Eventos y Tours'),
                desc: t('From Menorca to Porto, our tours are legendary and our matches competitive.', 'Desde Menorca hasta Oporto, nuestros tours son legendarios y nuestros partidos competitivos.'),
                link: '/events',
                img: '/images/yakkian/AGM-2025.jpeg',
                badge: t('Upcoming', 'Próximamente')
              },
              {
                title: t('Our Members', 'Nuestros Miembros'),
                desc: t('Meet the diverse family of 20+ nations that makes BICC special.', 'Conozca a la diversa familia de más de 20 naciones que hace que el BICC sea especial.'),
                link: '/members',
                img: '/images/hero/hero-image-2.jpg',
                badge: t('20+ Nations', '20+ Naciones')
              }
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 150}>
                <Link href={item.link} style={{ textDecoration: 'none' }}>
                  <div className={styles.cardWrap}>
                    <div className={styles.imageContainer}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.zoomImage}
                        style={{ objectFit: 'cover' }}
                      />
                      <span className={styles.badge}>
                        {item.badge}
                      </span>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.cardDesc}>{item.desc}</p>
                      <div className={styles.cardLink}>
                        {t('EXPLORE →', 'EXPLORAR →')}
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding" style={{ background: '#080c18' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <ScrollAnimation>
              <h2 className="bebas" style={{ fontSize: '3.5rem', lineHeight: '1', marginBottom: '24px' }}>
                {t('More Than Just', 'Más que solo')} <br /> <span className="gradient-gold">{t('A Cricket Club', 'un club de críquet')}</span>
              </h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '32px', fontSize: '1.1rem' }}>
                {t(
                  "What I love about being a part of this club is its diversity. We have people from all walks of life, different nationalities, abilities, and interests who all come together for the same reason. The love of the game. And win or lose we choose to spend time together after the match discussing the highlights amongst other things. There's a real sense of camaraderie in the team.",
                  'Lo que más me gusta de formar parte de este club es su diversidad. Tenemos gente de todos los ámbitos de la vida, de diferentes nacionalidades, con diversas habilidades e intereses, que nos unimos por la misma razón: la pasión por el fútbol. Y ganemos o perdamos, después del partido nos reunimos para comentar los mejores momentos, entre otras cosas. Hay un verdadero espíritu de compañerismo en el equipo.'
                )}
                <span style={{ display: 'block', textAlign: 'right', marginTop: '10px' }}>
                   Damien McMullen, Former Club President (Australia)
                </span>
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/join" className="btn-premium btn-red">{t('Apply to Join', 'Solicitar Unirse')}</Link>
                <Link href="/contact" className="btn-premium btn-gold">{t('Contact Us', 'Contáctenos')}</Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className={styles.philImageContainer}>
                <div className={styles.imageDeco}></div>
                <Image
                  src="/images/yakkian/IMG-20220827-WA0011.jpg"
                  alt="BICC 2026 Champions"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.philImage}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding" style={{ textAlign: 'center' }}>
        <div className="container">
          <ScrollAnimation>
            <div className={`glass-panel ${styles.ctaPanel}`}>
              <h2 className="bebas" style={{ fontSize: '4.5rem', marginBottom: '16px' }}>{t('Ready to', '¿Listo para')} <span className="gradient-red">{t('Play?', 'jugar?')}</span></h2>
              <p style={{ color: 'var(--text-dim)', maxWidth: '500px', margin: '0 auto 40px' }}>
                {t(
                  'Join the largest international cricket community in Barcelona. Weekly matches, annual tours, and legendary socials.',
                  'Únete a la comunidad internacional de críquet más grande de Barcelona. Partidos semanales, tours anuales y eventos sociales legendarios.'
                )}
              </p>
              <Link href="/join" className="btn-premium btn-red" style={{ padding: '20px 48px', fontSize: '1.1rem' }}>
                {t('Start Your Application', 'Comience su solicitud')}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
