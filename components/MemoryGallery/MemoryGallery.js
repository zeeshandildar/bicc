'use client';
import { useState } from 'react';
import styles from './MemoryGallery.module.css';

export default function MemoryGallery({ memories }) {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i > 0 ? i - 1 : memories.length - 1));
  const next = () => setLightbox((i) => (i < memories.length - 1 ? i + 1 : 0));

  return (
    <>
      <div className={styles.gallery}>
        {memories.map((m, i) => (
          <div key={i} className={styles.item} onClick={() => openLightbox(i)}>
            <img src={m.image} alt={m.title} loading="lazy" />
            <div className={styles.captionOverlay}>
              <div className={styles.captionTitle}>{m.title}</div>
              <div className={styles.captionText}>{m.caption}</div>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox}>×</button>
            <button className={`${styles.lightboxNav} ${styles.prevBtn}`} onClick={prev}>‹</button>
            <img src={memories[lightbox].image} alt={memories[lightbox].title} />
            <div className={styles.lightboxCaption}>
              <strong>{memories[lightbox].title}</strong> — {memories[lightbox].caption}
            </div>
            <button className={`${styles.lightboxNav} ${styles.nextBtn}`} onClick={next}>›</button>
          </div>
        </div>
      )}
    </>
  );
}
