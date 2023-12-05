// LanguageContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import useTranslationStore from "../stores/LanguageStore"

type LanguageContextType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  translations: Record<string, Record<string, string>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en')
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({});
  const { setTranslations: setTranslationsStore } = useTranslationStore()

  useEffect(() => {
    async function loadTranslations() {
      const enTranslations = await import('../translations/en.json');
      const arTranslations = await import('../translations/ar.json');
      
      setTranslations({
        en: enTranslations.default as Record<string, string>,   
        ar: arTranslations.default as Record<string, string>,
      });

      setTranslationsStore({
        en: enTranslations.default as Record<string, string>,   
        ar: arTranslations.default as Record<string, string>,
      
      })
    }
    
    loadTranslations();
  }, [language]);

  const contextValue = { language, setLanguage, translations };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}