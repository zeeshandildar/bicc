'use client';
import Hero from '../components/Hero/Hero';
import ScrollAnimation from '../components/ScrollAnimation/ScrollAnimation';
import Link from 'next/link';
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
                img: '/images/events/menorca-6/menorca-6-team.png',
                badge: t('Est. 1982', 'Fund. 1982')
              },
              { 
                title: t('Events & Tours', 'Eventos y Tours'), 
                desc: t('From Menorca to Porto, our tours are legendary and our matches competitive.', 'Desde Menorca hasta Oporto, nuestros tours son legendarios y nuestros partidos competitivos.'),
                link: '/events',
                img: '/images/stories/2023-prize-ceremony-2_orig (1).jpg',
                badge: t('Upcoming', 'Próximamente')
              },
              { 
                title: t('Our Members', 'Nuestros Miembros'), 
                desc: t('Meet the diverse family of 20+ nations that makes BICC special.', 'Conozca a la diversa familia de más de 20 naciones que hace que el BICC sea especial.'),
                link: '/members',
                img: '/images/hero/487215879_1645331669739475_1076970078825232007_n.jpg',
                badge: t('20+ Nations', '20+ Naciones')
              }
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 150}>
                <Link href={item.link} style={{ textDecoration: 'none' }}>
                  <div className={styles.cardWrap}>
                    <div className={styles.imageContainer}>
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className={styles.zoomImage}
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
                  'We pride ourselves on our sportsmanship, our international community, and our commitment to growing the game in Spain. Whether you are a seasoned pro or a curious beginner, there is a place for you in our ranks.',
                  'Nos enorgullecemos de nuestra deportividad, nuestra comunidad internacional y nuestro compromiso con el crecimiento del juego en España. Ya seas un profesional experimentado o un principiante curioso, hay un lugar para ti en nuestras filas.'
                )}
              </p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Link href="/join" className="btn-premium btn-red">{t('Apply to Join', 'Solicitar Unirse')}</Link>
                <Link href="/contact" className="btn-premium btn-gold">{t('Contact Us', 'Contáctenos')}</Link>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className={styles.philImageContainer}>
                <div className={styles.imageDeco}></div>
                <img 
                  src="/images/events/menorca-6/menorca-6-field.png" 
                  alt="Cricket Spirit" 
                  className={styles.philImage}
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
