'use client';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import styles from '../../../components/PlayerProfile/PlayerProfile.module.css';
import ScrollAnimation from '../../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../../lib/LanguageContext';
import { members as membersData } from '../../../data/members';

export default function PlayerProfilePage({ params }) {
  const { id } = use(params);
  const { t } = useLanguage();

  // Find base data from our central members.js file
  const baseData = membersData.find(m => m.slug === id);

  // Extra detail data (stories, reviews, etc.)
  const extraData = {
    'sam-phillipps': {
      debutStory: t(
        'Sam made his BICC debut in 2015 fresh from the UK. He quickly established himself as a leader, though his emails became more famous than his batting.',
        'Sam debutó en el BICC en 2015 recién llegado del Reino Unido. Rápidamente se estableció como un líder, aunque sus correos electrónicos se volvieron más famosos que su bateo.'
      ),
      peerReviews: [
        { author: 'Leandro Lyons', comment: t('Great president, even better email writer. Always there when the club needs a nudge.', 'Gran presidente, mejor escritor de correos. Siempre ahí cuando el club necesita un empujón.') }
      ]
    },
  };

  const getPlayerData = () => {
    if (!baseData) {
      return {
        name: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        nationality: t('🌍 International', '🌍 Internacional'), 
        role: t('all-rounder', 'todoterreno'), 
        bio: t('A valued member of the BICC family.', 'Un miembro valioso de la familia BICC.'),
        stats: { matches: 0, runs: 0, wickets: 0, catches: 0, highScore: 0, bestBowling: '-', average: 0 },
        debutStory: t('Details coming soon.', 'Detalles próximamente.'),
        peerReviews: [], careerHighlights: [], funnyMoments: [],
      };
    }

    const extra = extraData[id] || {};
    return {
      ...baseData,
      // Merge base stats with detail-only stats
      stats: {
        catches: 0,
        highScore: 0,
        bestBowling: '-',
        average: 0,
        ...baseData.stats
      },
      debutStory: extra.debutStory || t('Joined BICC in ' + (baseData.debut || 'the past') + '.', 'Se unió al BICC en ' + (baseData.debut || 'el pasado') + '.'),
      peerReviews: extra.peerReviews || [],
      careerHighlights: extra.careerHighlights || [],
      funnyMoments: extra.funnyMoments || [],
    };
  };

  const player = getPlayerData();

  return (
    <div className={styles.profile}>
      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <div className={styles.heroInner}>
          <div className={styles.avatarLargeContainer}>
            <Image 
              src={player.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=1a2238&color=c9a84c&size=400&font-size=0.35`} 
              alt={player.name} 
              width={300}
              height={300}
              className={styles.avatarLarge}
              priority
            />
          </div>
          <div className={styles.heroInfo}>
            <Link href="/members" className={styles.backLink}>← {t('Back to Members', 'Volver a Miembros')}</Link>
            <h1>{player.name} {player.squadNumber ? <span className={styles.squadNo}>#{player.squadNumber}</span> : ''}</h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>{player.bio}</p>
            <div className={styles.heroMeta}>
              <span className={styles.metaItem}>{player.nationality}</span>
              <span className={styles.metaItem}>🏏 {t(player.role, player.role)}</span>
              {player.ccId && <span className={styles.metaItem} style={{ opacity: 0.6 }}>ID: {player.ccId}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Debut */}
      {player.debutStory && (
        <div className={styles.contentSection}>
          <ScrollAnimation>
            <h2 className={styles.sectionTitle}>🎯 {t('Debut Story', 'Historia del Debut')}</h2>
            <div className={styles.reviewCard} style={{ maxWidth: '700px' }}>
              <p className={styles.reviewText} style={{ fontStyle: 'normal' }}>{player.debutStory}</p>
            </div>
          </ScrollAnimation>
        </div>
      )}

      {/* Career Highlights */}
      {player.careerHighlights?.length > 0 && (
        <div className={styles.contentSection} style={{ paddingTop: 0 }}>
          <ScrollAnimation>
            <h2 className={styles.sectionTitle}>🏆 {t('Career Highlights', 'Hitos de la Carrera')}</h2>
            <div className={styles.highlightsGrid}>
              {player.careerHighlights.map((h, i) => (
                <div key={i} className={styles.highlightCard}>
                  <div className={styles.highlightBody}>
                    <h4>{h.title}</h4>
                    <p>{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      )}

      {/* Peer Reviews */}
      {player.peerReviews?.length > 0 && (
        <div className={styles.contentSection} style={{ paddingTop: 0 }}>
          <ScrollAnimation>
            <h2 className={styles.sectionTitle}>💬 {t('Peer Reviews', 'Reseñas de Compañeros')}</h2>
            <div className={styles.reviewsGrid}>
              {player.peerReviews.map((r, i) => (
                <div key={i} className={styles.reviewCard}>
                  <p className={styles.reviewText}>{r.comment}</p>
                  <div className={styles.reviewAuthor}>— {r.author}</div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      )}

      {/* Funny Moments */}
      {player.funnyMoments?.length > 0 && (
        <div className={styles.contentSection} style={{ paddingTop: 0 }}>
          <ScrollAnimation>
            <h2 className={styles.sectionTitle}>😂 {t('Funny Moments', 'Momentos Divertidos')}</h2>
            <div className={styles.funGrid}>
              {player.funnyMoments.map((f, i) => (
                <div key={i} className={styles.funCard}>
                  <h4>{f.title}</h4>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      )}

      <div style={{ height: '60px' }}></div>
    </div>
  );
}
