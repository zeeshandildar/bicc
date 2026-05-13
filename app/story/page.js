'use client';
import Timeline from '../../components/Timeline/Timeline';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';
import { history } from '../../data/history';

export default function StoryPage() {
  const { t } = useLanguage();

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '80px 0 40px', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimation>
            <div className="badge" style={{ marginBottom: '16px' }}>{t('Est. 1982', 'Fund. 1982')}</div>
            <h1>{t('The BICC', 'La Historia del')} <span className="gradient-text">{t('Story', 'BICC')}</span></h1>
            <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              {t(history.intro, history.intro)}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Eras */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {history.eras.map((era, i) => (
              <ScrollAnimation key={i} delay={i * 100}>
                <div className="glass" style={{ padding: '32px', height: '100%' }}>
                  <h3 style={{ marginBottom: '16px', color: 'var(--accent-gold)' }}>{t(era.title, era.title)}</h3>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-dim)' }}>
                    {t(era.content, era.content)}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollAnimation>
              <h2 className="bebas" style={{ fontSize: '3rem', marginBottom: '24px' }}>
                {t('Our', 'Nuestra')} <span className="gradient-red">{t('Culture', 'Cultura')}</span>
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '32px' }}>
                {t(history.culture, history.culture)}
              </p>
              <div style={{ padding: '24px', border: '1px solid var(--border-subtle)', borderRadius: '12px' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--accent-gold)' }}>
                  {t(history.tours, history.tours)}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Full Narrative Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ fontSize: '1.5rem', textAlign: 'center', margin: '30px' }}>
            <h2>{t('The Full', 'Toda la')} <span className="gradient-text">{t('Story', 'Historia')}</span></h2>
          </div>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {history.fullStory.map((paragraph, i) => (
              <ScrollAnimation key={i} delay={i * 50}>
                <p style={{ 
                  fontSize: '1.05rem', 
                  lineHeight: '1.9', 
                  marginBottom: '24px', 
                  color: 'var(--text-secondary)',
                  textAlign: 'justify' 
                }}>
                  {t(paragraph, paragraph)}
                </p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ fontSize: '1.5rem', textAlign: 'center', marginTop: '60px' }}>
            <h2>{t('Key', 'Hitos')} <span className="gradient-text">{t('Milestones', 'Clave')}</span></h2>
          </div>
          <Timeline milestones={history.milestones} />
        </div>
      </section>
    </div>
  );
}
