'use client';
import { useEffect, useState, useRef } from 'react';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';
import styles from './Timeline.module.css';

export default function Timeline({ milestones }) {
  const { t } = useLanguage();
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height + windowHeight;
      const currentScroll = windowHeight - rect.top;
      
      let progress = currentScroll / totalHeight;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineData = milestones
    ? milestones.map(m => ({
        year: m.year.toString(),
        title: t(m.event, m.event),
        description: ''
      }))
    : [
        { year: '1982', title: t('The Beginning', 'El Comienzo'), description: '' }
      ];

  return (
    <div className={styles.timelineWrapper} ref={timelineRef} style={{ '--scroll-progress': scrollProgress }}>
      {/* Decorative Parallax Backgrounds */}
      <div className={styles.parallaxBg1} style={{ transform: `translateY(${scrollProgress * 300}px)` }}>1982</div>
      <div className={styles.parallaxBg2} style={{ transform: `translateY(${scrollProgress * -200}px)` }}>BICC</div>
      
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <ScrollAnimation key={index} animation={index % 2 === 0 ? 'slide-right' : 'slide-left'} delay={index * 80}>
            <div className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div className={styles.card}>
                <span className={styles.year}>{item.year}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                {item.description && <p className={styles.cardDesc}>{item.description}</p>}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
}
