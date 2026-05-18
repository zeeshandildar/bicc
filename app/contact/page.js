'use client';
import Image from 'next/image';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';
import { siteConfig } from '../../data/siteConfig';

export default function ContactPage() {
  const { t } = useLanguage();
  const whatsappUrl = 'https://api.whatsapp.com/message/5M426ITSO6NCM1?autoload=1&app_absent=0';
  const whatsappQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(whatsappUrl)}`;

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      <section style={{ padding: '80px 0 40px', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimation>
            <h1>{t('Contact', 'Contáctanos')} <span className="gradient-text">{t('Us', ' ')}</span></h1>
            <div className="badge" style={{ marginTop: '16px' }}>{t('📬 Get In Touch', '📬 Ponte en Contacto')}</div>
            <p style={{ maxWidth: '600px', margin: '0px auto 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
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
            <div className="glass" style={{textAlign: 'center' }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                  padding: '10px 18px',
                  borderRadius: '999px',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  background: 'var(--bg-elevated)',
                  fontWeight: 600
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '22px',
                    height: '22px',
                    borderRadius: '999px',
                    background: '#25D366',
                    color: '#ffffff'
                  }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" role="img">
                    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.55 0 .23 5.3.22 11.83c0 2.09.55 4.13 1.58 5.93L0 24l6.42-1.68a11.86 11.86 0 0 0 5.66 1.44h.01c6.52 0 11.84-5.3 11.85-11.83a11.75 11.75 0 0 0-3.42-8.45zM12.09 21.7h-.01a9.78 9.78 0 0 1-4.99-1.37l-.36-.22-3.81 1 .99-3.72-.24-.38a9.77 9.77 0 0 1-1.51-5.18C2.17 6.4 6.58 2 12.07 2c2.61 0 5.06 1.02 6.91 2.87a9.7 9.7 0 0 1 2.86 6.92c0 5.43-4.4 9.84-9.75 9.91zm5.36-7.36c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.6-2.01-.17-.29-.02-.45.12-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.08-.15-.66-1.59-.9-2.18-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.52.08-.79.37-.27.29-1.04 1.02-1.04 2.49s1.06 2.89 1.2 3.09c.15.2 2.09 3.19 5.07 4.47.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.54-.34z" />
                  </svg>
                </span>
                {t('Connect with us on WhatsApp', 'Conéctate con nosotros en WhatsApp')}
              </a>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  src={whatsappQrUrl}
                  alt={t('WhatsApp QR code for BICC contact', 'Código QR de WhatsApp para contacto de BICC')}
                  width={220}
                  height={220}
                  style={{ borderRadius: '12px', border: '1px solid var(--border-subtle)', background: '#fff', padding: '10px' }}
                />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="glass" style={{ padding: '48px', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '8px', fontSize: '1.5rem' }}>{t('Find Us Online', 'Encuéntranos en Línea')}</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>{t('Follow us on social media or drop us an email.', 'Síguenos en las redes sociales o envíanos un correo electrónico.')}</p>
              <SocialIcons />
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={240}>
            <div className="glass" style={{ padding: '40px', textAlign: 'center' }}>
              <h3 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>📍 {t('Where We Play', 'Donde Jugamos')}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                {siteConfig.clubName}<br />
                {t(siteConfig.location, siteConfig.locationEs)}<br /><br />
                <span style={{ color: 'var(--accent-gold)' }}>{siteConfig.email}</span>
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <div className="glass" style={{ padding: '40px', marginBottom: '32px', textAlign: 'center' }}>
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
