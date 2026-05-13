'use client';
import JoinForm from '../../components/JoinForm/JoinForm';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';

export default function JoinPage() {
  const { t } = useLanguage();

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      <section style={{ padding: '80px 0 40px', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimation>
            <div style={{ marginBottom: '16px' }}>
              <img
                src="/images/utility/bicclogo.png"
                alt="BICC crest"
                style={{
                  width: '156px',
                  height: '156px',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </div>
            <h1>{t('Become a', 'Conviértete en')} <span className="gradient-text">{t('Member', 'Miembro')}</span></h1>
            <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              {t(
                'Ready to join Barcelona\'s most international cricket family? Fill out the form below and we\'ll be in touch.',
                '¿Listo para unirte a la familia de críquet más internacional de Barcelona? Completa el formulario a continuación y nos pondremos en contacto.'
              )}
            </p>
            <div
              style={{
                margin: '24px auto 0',
                maxWidth: '720px',
                padding: '16px 20px',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, rgba(143, 21, 56, 0.22), rgba(255, 215, 0, 0.12))'
              }}
            >
              <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 600, letterSpacing: '0.2px' }}>
                {t('Join BICC and represent a truly international cricket club in Barcelona.', 'Únete al BICC y representa a un club de críquet verdaderamente internacional en Barcelona.')}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits */}
      <section className="section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { icon: '🏏', text: t('Weekly Training & Matches', 'Entrenamientos y Partidos Semanales') },
              { icon: '✈️', text: t('Annual Tours Abroad', 'Tours Anuales al Extranjero') },
              { icon: '🎉', text: t('Social Events & BBQs', 'Eventos Sociales y Barbacoas') },
              { icon: '🌍', text: t('International Community', 'Comunidad Internacional') },
            ].map((b, i) => (
              <ScrollAnimation key={i} delay={i * 80}>
                <div className="glass" style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{b.icon}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>{b.text}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section" style={{ paddingTop: '16px' }}>
        <div className="container">
          <ScrollAnimation>
            <JoinForm />
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
