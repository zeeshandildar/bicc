'use client';
import MemberCard from '../../components/MemberCard/MemberCard';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { useLanguage } from '../../lib/LanguageContext';
// ✏️ TO ADD / EDIT MEMBERS: open data/members.js
import { members as membersData } from '../../data/members';

// Role translations: English role → Spanish display label
const roleTranslations = {
  'batsman':       'bateador',
  'bowler':        'lanzador',
  'all-rounder':   'todoterreno',
  'wicket-keeper': 'wicket-keeper',
};

export default function MembersPage() {
  const { t } = useLanguage();

  // Translate role and nationality for display
  const members = membersData.map((m) => ({
    ...m,
    role: t(m.role, roleTranslations[m.role] || m.role),
  }));

  // Split members into Board, current members, new members, and former members
  const boardMembers = members.filter(m => m.isBoardMember);
  const newMembers = members.filter(m => !m.isBoardMember && !m.isFormerMember && m.isNewMember);
  const currentMembers = members.filter(m => !m.isBoardMember && !m.isFormerMember && !m.isNewMember);
  const formerMembers = members.filter(m => !m.isBoardMember && m.isFormerMember);

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-height)' }}>
      <section style={{ padding: '80px 0 40px', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollAnimation>
            <div className="badge" style={{ marginBottom: '16px' }}>{t('🌍 20+ Nations', '🌍 20+ Naciones')}</div>
            <h1>{t('Our', 'Nuestros')} <span className="gradient-text">{t('Members', 'Miembros')}</span></h1>
            <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              {t('The heart and soul of BICC — players from around the world united by cricket.', 'El corazón y el alma del BICC: jugadores de todo el mundo unidos por el críquet.')}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 style={{ marginBottom: '40px', borderLeft: '4px solid var(--accent-gold)', paddingLeft: '16px' }}>
              {t('Board Members', 'Miembros de la Junta')}
            </h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {boardMembers.map((m) => (
              <MemberCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 style={{ marginBottom: '40px', borderLeft: '4px solid var(--text-muted)', paddingLeft: '16px' }}>
              {t('Members', 'Miembros')}
            </h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
            {currentMembers.map((m) => (
              <MemberCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* New Members Section */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 style={{ marginBottom: '40px', borderLeft: '4px solid var(--accent-gold)', paddingLeft: '16px' }}>
              {t('New Members', 'Nuevos Miembros')}
            </h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
            {newMembers.map((m) => (
              <MemberCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Former Members Section */}
      <section className="section" style={{ paddingTop: '20px' }}>
        <div className="container">
          <ScrollAnimation>
            <h2 style={{ marginBottom: '40px', borderLeft: '4px solid var(--text-muted)', paddingLeft: '16px' }}>
              {t('Former Members', 'Ex Miembros')}
            </h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
            {formerMembers.map((m) => (
              <MemberCard key={m.slug} member={m} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
