'use client';
import { members } from '../../data/members';
import { useLanguage } from '../../lib/LanguageContext';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import styles from './Leaderboard.module.css';
import Image from 'next/image';

// Get initials from a player name (e.g. "Sam Phillipps" -> "SP")
function getInitials(name) {
  return name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function LeaderboardPage() {
  const { t } = useLanguage();

  // Helper function to get top N members by a specific stat
  const getTopPlayers = (statName, limit = 10) => {
    return members
      .filter(m => m.stats && m.stats[statName] > 0)
      .sort((a, b) => b.stats[statName] - a.stats[statName])
      .slice(0, limit);
  };

  const topRunScorers = getTopPlayers('runs');
  const topWicketTakers = getTopPlayers('wickets');
  const mostMatches = getTopPlayers('matches');

  // Avatar component — shows image if available, otherwise styled initials
  const PlayerAvatar = ({ player }) => {
    if (player.profileImage) {
      return (
        <Image
          src={player.profileImage}
          alt={player.name}
          width={40}
          height={40}
          className={styles.avatar}
          unoptimized={true}
        />
      );
    }
    return (
      <div className={styles.avatarFallback}>
        {getInitials(player.name)}
      </div>
    );
  };

  // Reusable component for a leaderboard list
  const LeaderboardList = ({ title, players, statKey, statLabel }) => (
    <div className={`${styles.categoryCard} glass-panel`}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <div className={styles.list}>
        {players.map((player, index) => {
          const rankClass = index === 0 ? styles.rank1 : index === 1 ? styles.rank2 : index === 2 ? styles.rank3 : '';
          return (
            <div key={player.slug} className={styles.listItem}>
              <span className={`${styles.rank} ${rankClass}`}>
                #{index + 1}
              </span>
              <div className={styles.playerInfo}>
                <PlayerAvatar player={player} />
                <span className={styles.playerName}>{player.name}</span>
              </div>
              <span className={styles.statValue}>
                {player.stats[statKey]} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{statLabel}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <main className={styles.pageWrapper}>
      {/* Background decoration */}
      <div className={styles.bgElement1}></div>
      <div className={styles.bgElement2}></div>

      <div className="container section-padding">
        <ScrollAnimation>
          <div className={styles.header}>
            <h1 className={`${styles.title} bebas gradient-gold`}>
              {t('Club Leaderboard', 'Clasificación del Club')}
            </h1>
            <p className={styles.subtitle}>
              {t(
                'The top performers in the history of Barcelona International Cricket Club.',
                'Los mejores jugadores en la historia del Barcelona International Cricket Club.'
              )}
            </p>
          </div>
        </ScrollAnimation>

        <div className={styles.grid}>
          <ScrollAnimation delay={100}>
            <LeaderboardList 
              title={t('Top Run Scorers', 'Máximos Anotadores')}
              players={topRunScorers}
              statKey="runs"
              statLabel=""
            />
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <LeaderboardList 
              title={t('Top Wicket Takers', 'Máximos Tomadores de Wickets')}
              players={topWicketTakers}
              statKey="wickets"
              statLabel=""
            />
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <LeaderboardList 
              title={t('Most Matches Played', 'Más Partidos Jugados')}
              players={mostMatches}
              statKey="matches"
              statLabel=""
            />
          </ScrollAnimation>
        </div>
      </div>
    </main>
  );
}
