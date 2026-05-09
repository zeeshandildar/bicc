'use client';
import MemoryGallery from '../../components/MemoryGallery/MemoryGallery';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';
// ✏️ TO ADD / EDIT PHOTOS: open data/memories.js
import { memories as memoriesData } from '../../data/memories';

export default function MemoriesPage() {
  const { t } = useLanguage();

  // Apply translations from data file fields
  const memories = memoriesData.map((m) => ({
    ...m,
    title:   t(m.title, m.titleEs),
    caption: t(m.caption, m.captionEs),
  }));

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      <section style={{ position: 'relative', padding: '80px 0 40px', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimation>
            <div className="badge" style={{ marginBottom: '16px' }}>{t('📸 Gallery', '📸 Galería')}</div>
            <h1>{t('Memorable', 'Momentos')} <span className="gradient-text">{t('Moments', 'Inolvidables')}</span></h1>
            <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              {t('The images that capture the spirit of BICC — every match, every tour, every celebration.', 'Las imágenes que capturan el espíritu del BICC: cada partido, cada tour, cada celebración.')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <MemoryGallery memories={memories} />
        </div>
      </section>
    </div>
  );
}
