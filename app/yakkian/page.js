'use client';
import Image from 'next/image';
import { useLanguage } from '../../lib/LanguageContext';
import { yakkian as yakkianData, awards, hallOfShame } from '../../data/yakkian';
import styles from './Yakkian.module.css';

export default function YakkianPage() {
  const { t } = useLanguage();

  const yaks = yakkianData.map((y) => ({
    ...y,
    title:   t(y.title, y.titleEs),
    content: t(y.content, y.contentEs),
    author:  t(y.author, y.authorEs || y.author),
    type:    t(y.type, y.typeEs),
  }));

  const localizedAwards = awards.map((a) => ({
    ...a,
    title: t(a.title, a.titleEs),
    reason: t(a.reason, a.reasonEs),
  }));

  const localizedShame = hallOfShame.map((s) => ({
    ...s,
    caption: t(s.caption, s.captionEs),
  }));

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-h)' }}>
      <section className="section-padding" style={{ paddingTop: '48px', paddingBottom: '20px', background: 'linear-gradient(180deg, #0d121f 0%, #050810 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
<<<<<<< HEAD
          <ScrollAnimation>
            <h1 className="bebas" style={{ fontSize: '4.6rem', marginBottom: '8px' }}>
              {t('The', 'El')} <span className="gradient-red">{t('Yakkian', 'Yakkian')}</span>
            </h1>
            <div style={{ width: '100px', height: '4px', background: 'var(--accent-red)', margin: '0 auto 12px' }}></div>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-dim)', fontSize: '1.1rem' }}>
              {t('Club humor, legendary quotes, and the lighter side of life at BICC.', 'Humor del club, citas legendarias y el lado más divertido de la vida en el BICC.')}
            </p>
          </ScrollAnimation>
=======
          <h1 className="bebas" style={{ fontSize: '5rem', marginBottom: '16px' }}>
            {t('The', 'El')} <span className="gradient-red">{t('Yakkian', 'Yakkian')}</span>
          </h1>
          <div style={{ width: '100px', height: '4px', background: 'var(--accent-red)', margin: '0 auto 24px' }}></div>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-dim)', fontSize: '1.2rem' }}>
            {t('Club humor, legendary quotes, and the lighter side of life at BICC.', 'Humor del club, citas legendarias y el lado más divertido de la vida en el BICC.')}
          </p>
>>>>>>> 859e183 (.)
        </div>
      </section>

      {/* Hall of Shame */}
      <section className="section-padding" style={{ paddingTop: '16px', paddingBottom: '32px', background: '#0a0a0a' }}>
        <div className="container">
<<<<<<< HEAD
          <ScrollAnimation>
            <h2 className="bebas" style={{ fontSize: '2.6rem', textAlign: 'center', marginBottom: '8px', color: 'var(--accent-gold)' }}>
              {t('Hall of Shame', 'Salón de la Vergüenza')}
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-dim)', marginBottom: '20px' }}>
              {t('Moments we wish we could forget, immortalized forever.', 'Momentos que desearíamos olvidar, inmortalizados para siempre.')}
            </p>
          </ScrollAnimation>
          <div className={styles.polaroidGrid} style={{ paddingTop: '12px' }}>
=======
          <h2 className="bebas" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px', color: 'var(--accent-gold)' }}>
            {t('Hall of Shame', 'Salón de la Vergüenza')}
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-dim)', marginBottom: '40px' }}>
            {t('Moments we wish we could forget, immortalized forever.', 'Momentos que desearíamos olvidar, inmortalizados para siempre.')}
          </p>
          <div className={styles.polaroidGrid}>
>>>>>>> 859e183 (.)
            {localizedShame.map((item, i) => (
              <div key={i} className={styles.polaroid} style={{ transform: `rotate(${item.rotation})` }}>
                <div className={styles.polaroidImgContainer}>
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className={styles.polaroidImg}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className={styles.polaroidCaption}>{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Nobody Wants */}
      <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="bebas" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '16px' }}>
            {t('Awards Nobody Wants', 'Premios que Nadie Quiere')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', marginTop: '48px' }}>
            {localizedAwards.map((award, i) => (
              <div key={i} className={styles.awardCard}>
                <div className={styles.awardImageWrap}>
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className={styles.awardImage}
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className={styles.awardContent}>
                  <div className={styles.awardBadge}>★ {t('Prestigious Award', 'Premio Prestigioso')} ★</div>
                  <h3 className={styles.awardTitle}>{award.title}</h3>
                  <div className={styles.awardWinner}>{award.winner}</div>
                  <p className={styles.awardReason}>"{award.reason}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="section-padding">
        <div className="container">
          <ScrollAnimation>
            <h2 className="bebas" style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '40px' }}>
              {t('Out of Context', 'Fuera de Contexto')}
            </h2>
          </ScrollAnimation>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
            {yaks.map((yak, i) => (
              <div key={i} className="glass-panel" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.4s ease', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: 'var(--accent-gold)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
                  {yak.type}
                </div>
                <h3 style={{ marginBottom: '20px', fontSize: '1.4rem', color: 'white' }}>{yak.title}</h3>
                <p style={{
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  color: 'var(--text-main)',
                  lineHeight: '1.7',
                  marginBottom: '24px',
                  position: 'relative',
                  paddingLeft: '20px'
                }}>
                  <span style={{ position: 'absolute', left: 0, top: 0, color: 'var(--accent-red)', fontSize: '2rem', lineHeight: '1', fontFamily: 'serif' }}>&ldquo;</span>
                  {yak.content}
                </p>
                <div style={{ marginTop: 'auto', textAlign: 'right', color: 'var(--text-dim)', fontSize: '0.85rem', fontWeight: '600' }}>
                  — {yak.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .glass-panel:hover {
          transform: translateY(-8px);
          border-color: var(--accent-red);
          box-shadow: 0 15px 30px rgba(0,0,0,0.4);
        }
      `}</style>
    </div>
  );
}
