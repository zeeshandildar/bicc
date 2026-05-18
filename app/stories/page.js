'use client';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../lib/LanguageContext';
// ✏️ TO ADD / EDIT STORIES & NEWS: open data/stories.js
import { stories as storiesData } from '../../data/stories';

export default function StoriesPage() {
  const { t } = useLanguage();

  // Apply translations from data file fields
  const stories = storiesData.map((s) => ({
    ...s,
    title:    t(s.title, s.titleEs),
    excerpt:  t(s.excerpt, s.excerptEs),
    author:   t(s.author, s.authorEs || s.author),
    category: t(s.category, s.categoryEs),
  }));


  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-h)' }}>
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #0d121f 0%, #050810 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimation>
            <h1 className="bebas" style={{ fontSize: '5rem', marginBottom: '16px' }}>
              {t('Latest', 'Últimas')} <span className="gradient-red">{t('News', 'Noticias')}</span>
            </h1>
            <div style={{ width: '100px', height: '4px', background: 'var(--accent-red)', margin: '0 auto 24px' }}></div>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-dim)', fontSize: '1.2rem' }}>
              {t('Match reports, tour diaries, and the latest updates from the club.', 'Informes de partidos, diarios de tours y las últimas actualizaciones del club.')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Story List */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {stories.map((story, i) => (
            <ScrollAnimation key={story.slug} delay={i * 100}>
              <Link href={`/stories/${story.slug}`} style={{ textDecoration: 'none' }}>
                <div className="glass-panel" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', overflow: 'hidden', transition: 'all 0.5s ease', cursor: 'pointer' }}>
                  <div style={{ height: '400px', overflow: 'hidden', position: 'relative' }}>
                    <Image 
                      src={story.image} 
                      alt={story.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="hover-zoom"
                      style={{ objectFit: 'cover', transition: 'transform 3s ease' }} 
                    />
                  </div>
                  <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ color: 'var(--accent-red)', fontWeight: '800', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
                      {story.category}
                    </div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', lineHeight: '1.2' }}>{story.title}</h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', marginBottom: '32px' }}>{story.excerpt}</p>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{story.date}</span>
                      <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>{t('READ NEWS →', 'LEER NOTICIA →')}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      <style jsx>{`
        .glass-panel:hover {
          transform: translateY(-8px);
          border-color: var(--accent-gold);
          box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(201, 168, 76, 0.2);
        }
        .glass-panel:hover .hover-zoom {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
