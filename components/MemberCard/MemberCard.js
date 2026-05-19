'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MemberCard.module.css';

export default function MemberCard({ member }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const boardRole = member.isBoardMember && member.bio
    ? member.bio.split('.')[0].trim()
    : null;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-15 to 15 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;
    
    // Calculate glare position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      '--glare-x': `${glareX}%`,
      '--glare-y': `${glareY}%`,
      '--glare-opacity': '1'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      '--glare-opacity': '0'
    });
  };

  const nationalityStr = member.nationality || '';
  const parts = nationalityStr.split(' ');
  const flagEmoji = parts[0];
  const countryName = parts.slice(1).join(' ');

  // Get ISO code for flagcdn (e.g. 🇬🇧 -> gb)
  const getFlagCode = (emoji) => {
    if (emoji === '🌍') return null;
    try {
      return [...emoji].map(c => {
        const cp = c.codePointAt(0);
        if (cp >= 0x1F1E6 && cp <= 0x1F1FF) {
          return String.fromCharCode(cp - 127397).toLowerCase();
        }
        return '';
      }).join('');
    } catch (e) { return null; }
  };

  const flagCode = getFlagCode(flagEmoji);
  const imageSrc = member.profileImage;
  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || '')
    .join('');

  return (
    <div 
      className={styles.cardContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <Link href={`/members/${member.slug}`} className={styles.card} style={style}>
        <div className={styles.glare}></div>
        <div className={styles.imageWrap}>
          {imageSrc ? (
            <Image 
              src={imageSrc}
              alt={member.name} 
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className={styles.image}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <div className={styles.initialsFallback} aria-label={`${member.name} initials`}>
              {initials}
            </div>
          )}
          <div className={styles.overlay}></div>
          <div className={styles.roleBadge}>{member.role}</div>
        </div>
        <div className={styles.info}>
          <div className={styles.nationality}>
            {countryName} 
            {flagCode ? (
              <img 
                src={`https://flagcdn.com/w40/${flagCode}.png`} 
                alt="" 
                className={styles.flagIcon}
              />
            ) : (
              <span className={styles.flagEmoji}>{flagEmoji}</span>
            )}
          </div>
          <h3 className={styles.name}>{member.name}</h3>
          {boardRole && (
            <div className={styles.boardRole}>{boardRole}</div>
          )}
        </div>
      </Link>
    </div>
  );
}
