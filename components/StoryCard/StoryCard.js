import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../lib/LanguageContext';
import styles from './StoryCard.module.css';

export default function StoryCard({ story }) {
  const { t, language } = useLanguage();
  const dateStr = story.publishedAt ? new Date(story.publishedAt).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
  
  return (
    <Link href={`/stories/${story.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={story.coverImage || 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80'}
          alt={story.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay}></div>
        <span className={styles.categoryBadge}>{story.category?.replace('-', ' ')}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span>{dateStr}</span>
          {story.author && <span>• {story.author}</span>}
        </div>
        <h3 className={styles.title}>{story.title}</h3>
        <p className={styles.excerpt}>{story.excerpt}</p>
        <div className={styles.readMore}>{t('Read More →', 'Leer más →')}</div>
      </div>
    </Link>
  );
}
