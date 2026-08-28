'use client';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { useLanguage } from '../../../lib/LanguageContext';
// ✏️ TO ADD / EDIT STORIES & NEWS: open data/stories.js
import { stories } from '../../../data/stories';

export default function StoryDetailPage({ params }) {
  const { slug } = use(params);
  const { t, language } = useLanguage();

  const data = stories.find((s) => s.slug === slug);

  if (!data) {
    return (
      <div style={{ paddingTop: 'calc(var(--nav-height) + 80px)', textAlign: 'center', minHeight: '60vh' }}>
        <div className="container">
          <h1>{t('Story Not Found', 'Historia No Encontrada')}</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>{t('The article you\'re looking for doesn\'t exist.', 'El artículo que estás buscando no existe.')}</p>
          <Link href="/stories" className="btn btn-primary" style={{ marginTop: '24px' }}>{t('Back to Stories', 'Volver a Historias')}</Link>
        </div>
      </div>
    );
  }

  // Apply translations from the data file fields
  const story = {
    title: t(data.title, data.titleEs || data.title),
    author: t(data.author, data.authorEs || data.author),
    category: t(data.category, data.categoryEs || data.category),
    coverImage: data.image,
    publishedAt: data.publishedAt,
    content: t(data.content, data.contentEs || data.content) || t(data.excerpt, data.excerptEs || data.excerpt) || '',
  };

  const dateStr = story.publishedAt
    ? new Date(story.publishedAt).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : data.date;

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero Image */}
      <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 30%, var(--bg-primary) 100%)' }}></div>
      </div>

      <section style={{ maxWidth: '800px', margin: '-80px auto 0', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        <Link href="/stories" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '24px', textDecoration: 'none' }}>
          ← {t('Back to Stories', 'Volver a Historias')}
        </Link>

        <div className="badge" style={{ marginBottom: '16px' }}>{story.category}</div>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '16px' }}>{story.title}</h1>

        <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '40px' }}>
          <span>{dateStr}</span>
          <span>•</span>
          <span>{story.author}</span>
        </div>

        <article style={{ fontSize: '1.05rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
          {story.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={i} style={{ color: 'var(--accent-gold)', margin: '32px 0 16px', fontSize: '1.2rem' }}>{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            if (paragraph.startsWith('**')) {
              const parts = paragraph.split('**');
              return <p key={i} style={{ marginBottom: '20px' }}><strong style={{ color: 'var(--text-primary)' }}>{parts[1]}</strong>{parts[2]}</p>;
            }
            return <p key={i} style={{ marginBottom: '20px' }}>{paragraph}</p>;
          })}
        </article>

        {/* Optional photo gallery: set `gallery: [...]` on the story in data/stories.js */}
        {Array.isArray(data.gallery) && data.gallery.length > 0 && (
          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
            {data.gallery.map((src, i) => (
              <div key={src} style={{ position: 'relative', height: '220px', borderRadius: '12px', overflow: 'hidden' }}>
                <Image
                  src={src}
                  alt={`${story.title} — ${t('photo', 'foto')} ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <Link href="/stories" className="btn btn-outline">← {t('More Stories', 'Más Historias')}</Link>
        </div>
      </section>

      <div style={{ height: '80px' }}></div>
    </div>
  );
}
