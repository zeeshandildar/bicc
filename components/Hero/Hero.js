'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../lib/LanguageContext';
import styles from './Hero.module.css';
import { siteConfig } from '../../data/siteConfig';

/**
 * Hero Component
 * --------------
 * This is the main banner on the home page.
 * It features:
 * 1. An auto-rotating background slideshow.
 * 2. Animated title and call-to-action buttons.
 * 3. A dynamic stats strip at the bottom.
 */

const HERO_IMAGES = [
  '/images/hero/487215879_1645331669739475_1076970078825232007_n.jpg',
  '/images/hero/a-cricket-bat-and-helmet-on-the-grass-photo.jpg',
  '/images/hero/photo-1540747913346-19e32dc3e97e.avif',
  '/images/hero/sagrada-familia-barcelona-spain-cathedral-83163693.webp'
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(-1);
  const contentRef = useRef(null);
  const { t } = useLanguage();

  // Background Slideshow Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero}>
      {/* Animated Background Layers */}
      <div className={styles.backgroundWrapper}>
        {HERO_IMAGES.map((img, idx) => {
          let className = styles.backgroundLayer;
          if (idx === currentImageIndex) className += ` ${styles.visible}`;
          if (idx === prevImageIndex) className += ` ${styles.prev}`;
          
          return (
            <div
              key={img}
              className={className}
              style={{ backgroundImage: `url(${img})` }}
            />
          );
        })}
      </div>


      <div className={styles.overlay}></div>
      <div className={styles.gridOverlay}></div>
      
      <div className={styles.heroInner} ref={contentRef}>
        <div className={styles.badgeWrap}>
          <span className={`${styles.badge} bebas`}>
            {t(`Barcelona's Finest — Est. ${siteConfig.foundedYear}`, `Los mejores de Barcelona — Fund. ${siteConfig.foundedYear}`)}
          </span>
        </div>
        
        <h1 className={styles.title}>
          <span className={styles.spanUpper}>Barcelona</span>
          <span className={styles.spanMain}>
            International <span className="gradient-red">Cricket</span> Club
          </span>
        </h1>
        
        <p className={styles.subtitle}>
          {t(
            'The soul of international cricket in the heart of Catalonia. Where tradition meets passion on the pitches of Barcelona.',
            'El alma del críquet internacional en el corazón de Cataluña. Donde la tradición se une a la pasión en los campos de Barcelona.'
          )}
        </p>


      </div>

      <div className={styles.statsStrip}>
        <div className="container">
          <div className={styles.statsGrid}>
            {siteConfig.heroStats.map((stat, i) => (
              <div className={styles.stat} key={i}>
                <span className={styles.statNum}>{stat.value}</span>
                <span className={styles.statLabel}>{t(stat.label, stat.labelEs)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      

    </section>
  );
}

