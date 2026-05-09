'use client';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';
import { siteConfig } from '../../data/siteConfig';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      <section style={{ padding: '80px 0 40px', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimation>
            <div className="badge" style={{ marginBottom: '16px' }}>{t('📬 Get In Touch', '📬 Ponte en Contacto')}</div>
            <h1>{t('Contact', 'Contáctanos')} <span className="gradient-text">{t('Us', ' ')}</span></h1>
            <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              {t(
                'Have a question, want to join, or just want to say hello? Reach out through any of our channels.',
                '¿Tienes alguna pregunta, quieres unirte o simplemente quieres decir hola? Contáctanos a través de cualquiera de nuestros canales.'
              )}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <ScrollAnimation>
            <div className="glass" style={{ padding: '48px', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '8px', fontSize: '1.5rem' }}>{t('Find Us Online', 'Encuéntranos en Línea')}</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>{t('Follow us on social media or drop us an email.', 'Síguenos en las redes sociales o envíanos un correo electrónico.')}</p>
              <SocialIcons />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <div className="glass" style={{ padding: '40px', marginTop: '32px', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>📍 {t('Where We Play', 'Donde Jugamos')}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {siteConfig.clubName}<br />
                {t(siteConfig.location, siteConfig.locationEs)}<br /><br />
                <span style={{ color: 'var(--accent-gold)' }}>{siteConfig.email}</span>
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="glass" style={{ padding: '40px', marginTop: '32px', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>🏏 {t('Training Schedule', 'Horario de Entrenamiento')}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {siteConfig.training.map((item, index) => (
                  <span key={index}>
                    <strong style={{ color: 'var(--text-primary)' }}>{t(item.day, item.dayEs)}</strong> — {item.time}<br />
                  </span>
                ))}
                <br />
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t('All skill levels welcome. Just turn up!', 'Todos los niveles son bienvenidos. ¡Simplemente ven!')}</span>
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
