'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../../lib/LanguageContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('Home', 'Inicio'), path: '/' },
    { name: t('Club History', 'Historia del Club'), path: '/story' },
    { name: t('Events', 'Eventos'), path: '/events' },
    { name: t('Members', 'Miembros'), path: '/members' },
    { name: t('Yakkian', 'Yakkian'), path: '/yakkian' },
    { name: t('News', 'Noticias'), path: '/stories' },
    { name: t('Contact', 'Contacto'), path: '/contact' },
  ];

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/utility/bicclogo.png"
            alt="BICC logo"
            width={60}
            height={60}
            className={styles.logoImage}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={`${styles.navLink} ${pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher Dropdown */}
          <div className={styles.langDropdownContainer}>
            <button className={styles.langDropdownBtn}>
              {language === 'en' ? 'EN' : 'ES'}
              <span className={styles.dropdownArrow}>▾</span>
            </button>
            <div className={styles.langDropdownMenu}>
              <button 
                onClick={() => setLanguage('en')} 
                className={`${styles.langMenuItem} ${language === 'en' ? styles.langActive : ''}`}
              >
                English
              </button>
              <button 
                onClick={() => setLanguage('es')} 
                className={`${styles.langMenuItem} ${language === 'es' ? styles.langActive : ''}`}
              >
                Español
              </button>
            </div>
          </div>

          <Link href="/join" className={styles.ctaBtn}>
            {t('Join Club', 'Unirse')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.toggleActive : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={styles.menuLabel}>{mobileMenuOpen ? '' : 'MENU'}</span>
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.menuVisible : ''}`}>
          <div className={styles.mobileLangSwitcher}>
            <button 
              onClick={() => setLanguage('en')} 
              className={`${styles.langBtn} ${language === 'en' ? styles.langActive : ''}`}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('es')} 
              className={`${styles.langBtn} ${language === 'es' ? styles.langActive : ''}`}
            >
              Español
            </button>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/join" 
            className={styles.mobileCta}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t('Join BICC', 'Unirse al BICC')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
