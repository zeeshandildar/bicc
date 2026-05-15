'use client';
import { useState } from 'react';
import EventCard from '../../components/EventCard/EventCard';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';
// ✏️ TO ADD / EDIT EVENTS: open data/events.js
import { events as eventsData } from '../../data/events';

export default function EventsPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const getEventTimestamp = (event) => {
    if (event.sortDate) {
      const sortTs = Date.parse(event.sortDate);
      if (!Number.isNaN(sortTs)) return sortTs;
    }

    const dateStr = typeof event.date === 'string' ? event.date : '';
    const normalizedDate = dateStr.replace(/(\d{1,2})-(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/, '$1 $3 $4');
    const parsedTs = Date.parse(normalizedDate || dateStr);
    return Number.isNaN(parsedTs) ? 0 : parsedTs;
  };

  // Apply translations from data file fields
  const events = eventsData.map((e) => ({
    ...e,
    title:       t(e.title, e.titleEs),
    description: t(e.description, e.descriptionEs),
    location:    t(e.location, e.locationEs),
  }));

  const sortedEvents = [...events].sort((a, b) => getEventTimestamp(b) - getEventTimestamp(a));

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTs = today.getTime();

  const visibleEvents = sortedEvents.filter((event) => {
    const eventTs = getEventTimestamp(event);
    if (filter === 'upcoming') return eventTs >= todayTs;
    if (filter === 'past') return eventTs < todayTs;
    return true;
  });

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
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '28px', flexWrap: 'wrap' }}>
            {[
              { key: 'all', label: t('All Events', 'Todos los Eventos') },
              { key: 'upcoming', label: t('Upcoming Events', 'Próximos Eventos') },
              { key: 'past', label: t('Past Events', 'Eventos Pasados') },
            ].map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setFilter(option.key)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '999px',
                  border: filter === option.key ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                  background: filter === option.key ? 'rgba(255, 215, 0, 0.12)' : 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }} className="stagger-children">
            {visibleEvents.map((event, i) => (
              <EventCard key={event.slug} event={event} priority={i < 4} />
            ))}
          </div>

          {visibleEvents.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: '24px' }}>
              {t('No events found for this filter.', 'No se encontraron eventos para este filtro.')}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
