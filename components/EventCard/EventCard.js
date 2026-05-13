import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../lib/LanguageContext';
import styles from './EventCard.module.css';

export default function EventCard({ event }) {
  const { t, language } = useLanguage();
  const dateStr = t(event.date, event.dateEs);
  
  const typeMap = {
    tour: t('Tour', 'Tour'),
    match: t('Match', 'Partido'),
    social: t('Social', 'Social'),
    training: t('Training', 'Entrenamiento')
  };

  return (
    <Link href={`/events/${event.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image 
          src={event.images?.[0] || 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80'} 
          alt={event.title} 
          fill
          className={styles.image}
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={styles.overlay}></div>
        <span className={styles.typeBadge}>{typeMap[event.type] || event.type}</span>
        {event.location && (
          <span className={styles.locationBadge}>📍 {event.location}</span>
        )}
      </div>
      <div className={styles.body}>
        {dateStr && <div className={styles.date}>{dateStr}</div>}
        <h3 className={styles.title}>{event.title}</h3>
        <p className={styles.desc}>{event.description}</p>
      </div>
    </Link>
  );
}
