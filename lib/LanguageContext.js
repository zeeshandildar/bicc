'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Language Context
 * ----------------
 * This manages the bilingual (English/Spanish) support for the entire site.
 * 
 * HOW IT WORKS:
 * 1. It stores the current 'en' or 'es' state.
 * 2. It provides a `t(enText, esText)` function to components.
 * 3. It persists the user's choice in localStorage.
 */

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Load language from localStorage on mount so the user's choice is remembered
  useEffect(() => {
    const savedLang = localStorage.getItem('bicc-lang');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('bicc-lang', lang);
  };

  /**
   * The Translation Function
   * Usage: t('Hello', 'Hola')
   */
  const t = (en, es) => {
    return language === 'en' ? en : es;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
