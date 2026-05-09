'use client';
import EventCard from '../../components/EventCard/EventCard';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';
// ✏️ TO ADD / EDIT EVENTS: open data/events.js
import { events as eventsData } from '../../data/events';

export default function EventsPage() {
  const { t } = useLanguage();

  // Apply translations from data file fields
  const events = eventsData.map((e) => ({
    ...e,
    title:       t(e.title, e.titleEs),
    description: t(e.description, e.descriptionEs),
    location:    t(e.location, e.locationEs),
  }));

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      <section style={{ position: 'relative', padding: '80px 0 40px', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimation>
            <div className="badge" style={{ marginBottom: '16px' }}>{t('🏏 Matches, Tours & Social', '🏏 Partidos, Tours y Eventos Sociales')}</div>
            <h1>{t('Events &', 'Eventos y')} <span className="gradient-text">{t('Tours', 'Tours')}</span></h1>
            <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              {t('From legendary tours across Europe to fierce league battles and unforgettable social nights.', 'Desde legendarios tours por toda Europa hasta feroces batallas de liga y noches sociales inolvidables.')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }} className="stagger-children">
            {events.map((event, i) => (
              <ScrollAnimation key={event.slug} delay={i * 60}>
                <EventCard event={event} />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
