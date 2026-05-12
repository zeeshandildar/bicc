'use client';
import Link from 'next/link';
import { useLanguage } from '../../lib/LanguageContext';
import styles from './Footer.module.css';
import { siteConfig } from '../../data/siteConfig';

/**
 * Footer Component
 * ----------------
 * Site-wide footer with branding, navigation links, and social icons.
 * Social links and contact info are managed in data/siteConfig.js.
 */

const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="6" fill="url(#ig-grad)"/><path d="M12 7.5c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5zm0 7.422c-1.614 0-2.922-1.308-2.922-2.922 0-1.614 1.308-2.922 2.922-2.922 1.614 0 2.922 1.308 2.922 2.922 0 1.614-1.308 2.922-2.922 2.922z" fill="#fff"/><circle cx="17.5" cy="6.5" r="1.1" fill="#fff"/><path d="M17.5 3.406h-11A4.094 4.094 0 0 0 2.406 7.5v11A4.094 4.094 0 0 0 6.5 22.5h11a4.094 4.094 0 0 0 4.094-4.094v-11A4.094 4.094 0 0 0 17.5 3.406zm2.594 15.094a2.594 2.594 0 0 1-2.594 2.594h-11A2.594 2.594 0 0 1 3.906 18.5v-11a2.594 2.594 0 0 1 2.594-2.594h11a2.594 2.594 0 0 1 2.594 2.594v11z" fill="#fff"/><defs><linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse"><stop stopColor="#f09433"/><stop offset="0.25" stopColor="#e6683c"/><stop offset="0.5" stopColor="#dc2743"/><stop offset="0.75" stopColor="#cc2366"/><stop offset="1" stopColor="#bc1888"/></linearGradient></defs></svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#EA4335"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          <div className={styles.logoRow}>
            <div className={styles.logoIcon}>B</div>
            <span className={styles.logoText}>BICC</span>
          </div>
          <p>
            {t(
              `Barcelona International Cricket Club — uniting nations through the love of cricket since ${siteConfig.foundedYear}. The oldest cricket club in Catalonia.`,
              `Barcelona International Cricket Club — uniendo naciones a través del amor por el críquet desde ${siteConfig.foundedYear}. El club de críquet más antiguo de Cataluña.`
            )}
          </p>
        </div>
        <div>
          <h4 className={styles.colTitle}>{t('Club', 'Club')}</h4>
          <Link href="/story" className={styles.footerLink}>{t('Our Story', 'Nuestra Historia')}</Link>
          <Link href="/events" className={styles.footerLink}>{t('Events & Tours', 'Eventos y Tours')}</Link>
          <Link href="/members" className={styles.footerLink}>{t('Members', 'Miembros')}</Link>
        </div>
        <div>
          <h4 className={styles.colTitle}>{t('More', 'Más')}</h4>
          <Link href="/stories" className={styles.footerLink}>{t('News & Stories', 'Noticias e Historias')}</Link>
          <Link href="/contact" className={styles.footerLink}>{t('Contact Us', 'Contáctenos')}</Link>
          <Link href="/join" className={styles.footerLink}>{t('Join the Club', 'Unirse al Club')}</Link>
          <Link href="/yakkian" className={styles.footerLink}>{t('Yakkian', 'Yakkian')}</Link>
        </div>
        <div>
          <h4 className={styles.colTitle}>{t('Follow Us', 'Síguenos')}</h4>
          <div className={styles.socialRow}>
            {siteConfig.social.youtube && <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube"><YouTubeIcon /></a>}
            {siteConfig.social.facebook && <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook"><FacebookIcon /></a>}
            {siteConfig.social.instagram && <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram"><InstagramIcon /></a>}
            {siteConfig.social.twitter && <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X"><XIcon /></a>}
            <a href={`mailto:${siteConfig.email}`} className={styles.socialLink} aria-label="Email"><EmailIcon /></a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <span>© {new Date().getFullYear()} {t('Barcelona International Cricket Club. All rights reserved.', 'Barcelona International Cricket Club. Todos los derechos reservados.')}</span>
        <div className={styles.bottomLinks}>
          <a href="#" className={styles.bottomLink}>{t('Privacy Policy', 'Política de Privacidad')}</a>
          <a href="#" className={styles.bottomLink}>{t('Terms of Use', 'Términos de Uso')}</a>
        </div>
      </div>
    </footer>
  );
}
