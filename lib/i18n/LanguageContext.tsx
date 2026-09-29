'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, LanguageInfo } from '@/types/language';
import { DEFAULT_LANGUAGE, LANGUAGE_STORAGE_KEY, LANGUAGES } from './languages';
import { TRANSLATIONS, TranslationDictionary, getTranslation } from './translations';

interface LanguageContextType {
  language: LanguageCode;
  activeLanguage: LanguageInfo;
  setLanguage: (code: LanguageCode) => void;
  t: TranslationDictionary;
}

const defaultLanguageConfig = LANGUAGES.find(l => l.code === DEFAULT_LANGUAGE) || LANGUAGES[0];

const LanguageContext = createContext<LanguageContextType>({
  language: DEFAULT_LANGUAGE,
  activeLanguage: defaultLanguageConfig,
  setLanguage: () => {},
  t: TRANSLATIONS[DEFAULT_LANGUAGE],
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(DEFAULT_LANGUAGE);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY) as LanguageCode | null;
      if (saved && LANGUAGES.some(l => l.code === saved)) {
        setLanguageState(saved);
      }
    } catch {
      // ignore
    }

    const handleLanguageEvent = (e: Event) => {
      const customEvent = e as CustomEvent<LanguageCode>;
      if (customEvent.detail && LANGUAGES.some(l => l.code === customEvent.detail)) {
        setLanguageState(customEvent.detail);
      }
    };

    window.addEventListener('everyuci_language_changed', handleLanguageEvent);
    return () => window.removeEventListener('everyuci_language_changed', handleLanguageEvent);
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
      window.dispatchEvent(new CustomEvent('everyuci_language_changed', { detail: code }));
    } catch {
      // ignore
    }
  };

  const t = getTranslation(language);
  const activeLanguage = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ language, activeLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
