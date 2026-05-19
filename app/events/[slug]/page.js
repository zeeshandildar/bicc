'use client';
import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ScrollAnimation from '../../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../../lib/LanguageContext';
import { events as eventsData } from '../../../data/events';

export default function EventDetailPage({ params }) {
  const { slug } = use(params);
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const extractTextContent = (value) => {
    if (typeof value === 'string' || typeof value === 'number') return String(value);
    if (Array.isArray(value)) return value.map(extractTextContent).join('');
    if (value && typeof value === 'object' && 'props' in value) return extractTextContent(value.props?.children);
    return '';
  };

  const toTitleCase = (value) =>
    value.replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Find event from central data source
  const rawEvent = eventsData.find(e => e.slug === slug);

  if (!rawEvent) {
    return (
      <div style={{ paddingTop: 'calc(var(--nav-height) + 80px)', textAlign: 'center', minHeight: '60vh' }}>
        <div className="container">
          <h1>{t('Event Not Found', 'Evento No Encontrado')}</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>{t('The event you\'re looking for doesn\'t exist.', 'El evento que estás buscando no existe.')}</p>
          <Link href="/events" className="btn btn-primary" style={{ marginTop: '24px' }}>{t('Back to Events', 'Volver a Eventos')}</Link>
        </div>
      </div>
    );
  }

  // Apply translations
  const event = {
    ...rawEvent,
    title: t(rawEvent.title, rawEvent.titleEs),
    description: t(rawEvent.description, rawEvent.descriptionEs),
    location: t(rawEvent.location, rawEvent.locationEs),
    details: rawEvent.details || rawEvent.description // Fallback to description if details not provided
  };

  const dateStr = t(event.date, event.dateEs);

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
        <Image 
          src={event.images?.[0]} 
          alt={event.title} 
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 20%, rgba(0,0,0,0.8) 100%)' }}></div>
        <div className="container" style={{ position: 'absolute', bottom: '60px', left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
          <ScrollAnimation>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', marginBottom: '16px' }}>{event.title}</h1>
            <div style={{ display: 'flex', gap: '24px', color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem' }}>
              <span>📅 {dateStr}</span>
              <span>📍 {event.location}</span>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px' }}>
            <ScrollAnimation>
              <h2 className="bebas" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{t('Event Overview', 'Descripción del Evento')}</h2>
              <div className="event-markdown">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => (
                      <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-main)', marginBottom: '20px' }}>
                        {children}
                      </p>
                    ),
                    a: ({ href, children }) => {
                      const rawLabel = extractTextContent(children).replace(/\s+/g, ' ').trim();
                      const isScorecardByText = /scorecard/i.test(rawLabel);
                      const isScorecardByHref = typeof href === 'string' && /(play-cricket\.com|fullscorecard\.do)/i.test(href);
                      const isScorecardLink = isScorecardByText || isScorecardByHref;

                      const buttonLabel = rawLabel ? toTitleCase(rawLabel) : t('View Scorecard', 'Ver Marcador');

                      if (isScorecardLink) {
                        return (
                          <span className="scorecard-link-wrap">
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="scorecard-button"
                            >
                              {buttonLabel || t('View Scorecard', 'Ver Marcador')}
                            </a>
                          </span>
                        );
                      }

                      return (
                        <a href={href} rel="noopener noreferrer">
                          {children}
                        </a>
                      );
                    },
                    ul: ({ children }) => (
                      <ul style={{ marginBottom: '20px', paddingLeft: '20px', color: 'var(--text-main)' }}>
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol style={{ marginBottom: '20px', paddingLeft: '20px', color: 'var(--text-main)' }}>
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li style={{ marginBottom: '8px', lineHeight: '1.8' }}>{children}</li>
                    ),
                  }}
                >
                  {event.description}
                </ReactMarkdown>
              </div>
              
              {/* Image Gallery */}
              {event.images && event.images.length > 1 && (
                <div style={{ marginTop: '40px' }}>
                  <h3 className="bebas" style={{ fontSize: '1.8rem', marginBottom: '20px' }}>{t('Tour Gallery', 'Galería del Tour')}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '16px' }}>
                    {event.images.map((img, idx) => (
                        <div 
                          key={idx} 
                          style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer', position: 'relative' }} 
                          className="gallery-item"
                          onClick={() => setSelectedImage(idx)}
                        >
                          <Image 
                            src={img} 
                            alt={`${event.title} ${idx + 1}`} 
                            fill
                            sizes="(max-width: 768px) 33vw, 200px"
                            style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                          />
                        </div>
                    ))}
                  </div>
                </div>
              )}
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="glass-panel" style={{ padding: '40px' }}>
                <h2 className="bebas" style={{ fontSize: '2rem', marginBottom: '24px' }}>{t('Want to Join?', '¿Quieres Unirte?')}</h2>
                <p style={{ color: 'var(--text-dim)', marginBottom: '32px' }}>
                  {t(
                    'Most of our events are open to members and guests. If you\'re interested in participating in this specific event, please get in touch with the committee.',
                    'La mayoría de nuestros eventos están abiertos a miembros e invitados. Si estás interesado en participar en este evento específico, por favor ponte en contacto con el comité.'
                  )}
                </p>
                <Link href="/contact" className="btn-premium btn-red" style={{ width: '100%', textAlign: 'center' }}>
                  {t('Inquire About Event', 'Consultar Sobre el Evento')}
                </Link>
                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                  <Link href="/events" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {t('← Back to All Events', '← Volver a Todos los Eventos')}
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <style jsx>{`
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        .event-markdown a {
          color: var(--accent-gold);
          text-decoration: underline;
          cursor: pointer;
          pointer-events: auto;
          position: relative;
          z-index: 2;
        }
        .event-markdown a:hover {
          color: var(--accent-gold-bright);
        }
        .event-markdown .scorecard-button {
          display: inline-block;
          padding: 10px 18px;
          border-radius: 999px;
          border: 1px solid var(--accent-gold);
          background: rgba(245, 179, 53, 0.12);
          color: var(--accent-gold);
          text-decoration: none;
          font-weight: 700;
          line-height: 1.2;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .event-markdown .scorecard-button:hover {
          background: var(--accent-gold);
          color: #111;
          transform: translateY(-1px);
        }
        .event-markdown .scorecard-link-wrap {
          display: block;
          width: fit-content;
          margin-bottom: 10px;
        }
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          cursor: pointer;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 4px;
          box-shadow: 0 0 40px rgba(0,0,0,0.5);
        }
        .lightbox-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img 
              src={event.images[selectedImage]} 
              alt={event.title} 
              className="lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}
