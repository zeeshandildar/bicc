'use client';
import { useEffect, useState } from 'react';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';

/**
 * NewsBoard Component
 * -------------------
 * The live club noticeboard: matches, net sessions, and trip updates posted
 * by the committee through the BICC Announcement Google Form.
 * Data flows Sheet → /api/announcements (cached ~10 min) → here.
 * Renders nothing while loading, on error, or when the feed is empty/unconfigured.
 */

const TYPE_LABELS = {
  'match':       { en: 'Match',       es: 'Partido' },
  'net session': { en: 'Net Session', es: 'Entrenamiento' },
  'social':      { en: 'Social',      es: 'Social' },
  'tour':        { en: 'Tour',        es: 'Tour' },
  'news':        { en: 'News',        es: 'Noticias' },
};

const MAX_RECENT_ITEMS = 6;

function parseEventDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value || '') ? new Date(`${value}T00:00:00`) : null;
}

export default function NewsBoard() {
  const { language, t } = useLanguage();
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/announcements')
      .then((res) => (res.ok ? res.json() : { announcements: [] }))
      .then((data) => {
        if (!cancelled) setAnnouncements(data.announcements || []);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  if (!announcements.length) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = announcements
    .filter((item) => {
      const date = parseEventDate(item.date);
      return date && date >= today;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  const recent = announcements
    .filter((item) => !upcoming.includes(item))
    .slice(0, MAX_RECENT_ITEMS);

  const formatDate = (value) => {
    const date = parseEventDate(value);
    if (!date) return value;
    return date.toLocaleDateString(language === 'en' ? 'en-GB' : 'es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const renderCard = (item, i) => {
    const typeLabel = TYPE_LABELS[(item.type || '').toLowerCase()];
    return (
      <ScrollAnimation key={`${item.postedAt}-${i}`} delay={i * 100}>
        <div className="glass-panel" style={{ padding: '32px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--accent-red)', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
              {typeLabel ? t(typeLabel.en, typeLabel.es) : item.type}
            </span>
            {item.date && (
              <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: '600' }}>
                {formatDate(item.date)}{item.time ? ` · ${item.time}` : ''}
              </span>
            )}
          </div>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '12px', lineHeight: '1.2' }}>
            {t(item.title, item.titleEs || item.title)}
          </h3>
          {item.location && (
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '12px' }}>📍 {item.location}</p>
          )}
          {item.details && (
            <p style={{ color: 'var(--text-dim)', fontSize: '1rem', marginBottom: '20px', whiteSpace: 'pre-line' }}>
              {t(item.details, item.detailsEs || item.details)}
            </p>
          )}
          {(item.signupLink || item.albumLink) && (
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: 'auto' }}>
              {item.signupLink && (
                <a href={item.signupLink} target="_blank" rel="noopener noreferrer" className="btn-premium btn-red">
                  {t('Join / Sign Up', 'Únete / Apúntate')}
                </a>
              )}
              {item.albumLink && (
                <a href={item.albumLink} target="_blank" rel="noopener noreferrer" className="btn-premium btn-gold">
                  {t('View Photos', 'Ver Fotos')} 📸
                </a>
              )}
            </div>
          )}
        </div>
      </ScrollAnimation>
    );
  };

  const renderGroup = (heading, items) =>
    items.length > 0 && (
      <div style={{ marginBottom: '48px' }}>
        <ScrollAnimation>
          <h2 className="bebas" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{heading}</h2>
        </ScrollAnimation>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {items.map(renderCard)}
        </div>
      </div>
    );

  return (
    <section className="section-padding" style={{ paddingTop: 0 }}>
      <div className="container">
        <ScrollAnimation>
          <h2 className="bebas" style={{ fontSize: '3.5rem', marginBottom: '8px' }}>
            {t('Club', 'Tablón del')} <span className="gradient-red">{t('Noticeboard', 'Club')}</span>
          </h2>
          <div style={{ width: '80px', height: '3px', background: 'var(--accent-red)', marginBottom: '40px' }}></div>
        </ScrollAnimation>
        {renderGroup(t('Upcoming', 'Próximamente'), upcoming)}
        {renderGroup(t('Recent Updates', 'Actualizaciones Recientes'), recent)}
      </div>
    </section>
  );
}
