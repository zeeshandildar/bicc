'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../lib/LanguageContext';
import styles from './Hero.module.css';
import { siteConfig } from '../../data/siteConfig';

/**
 * Hero Component
 * --------------
 * Optimized for performance using next/image.
 * Features an auto-rotating background slideshow.
 */

const HERO_IMAGES = [
  '/images/hero/default-hero-image.jpg',
  '/images/hero/hero-image-2.jpg',
  '/images/hero/hero-image-3.jpg',
  '/images/hero/hero-image-7.jpg'
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(-1);
  const contentRef = useRef(null);
  const { t } = useLanguage();

  // Background Slideshow Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => {
        setPrevImageIndex(prev);
        return (prev + 1) % HERO_IMAGES.length;
      });
    }, 6000); // Slightly slower transition for better feel

    return () => clearInterval(timer);
  }, []);

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
      {/* Optimized Background Layers */}
      <div className={styles.backgroundWrapper}>
        {HERO_IMAGES.map((img, idx) => {
          let className = styles.backgroundLayer;
          if (idx === currentImageIndex) className += ` ${styles.visible}`;
          if (idx === prevImageIndex) className += ` ${styles.prev}`;

          return (
            <div key={img} className={className}>
              <Image
                src={img}
                alt="BICC Hero Background"
                fill
                priority={idx === 0}
                quality={60}
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.overlay}></div>
      <div className={styles.gridOverlay}></div>

      <div className={styles.heroInner} ref={contentRef}>
        <h1 className={styles.title}>
          <span className={styles.spanMain}>Barcelona International</span>
          <span className={styles.spanUpper}>Cricket Club</span>
        </h1>

        <p className={styles.subtitle}>
          {t(
            'The soul of international cricket in the heart of Catalonia. Where tradition meets passion on the pitches of Barcelona.',
            'El alma del críquet internacional en el corazón de Cataluña. Donde la tradición se une a la pasión en los campos de Barcelona.'
          )}
        </p>

        <div className={styles.badgeWrap}>
          <span className={`${styles.badge} bebas`}>
            {t(`Est. ${siteConfig.foundedYear}`, `Fund. ${siteConfig.foundedYear}`)}
          </span>
        </div>
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

