import { create } from 'zustand';

type TranslationStoreState = {
  language: string;
  translations: Record<string, Record<string, string>>;
  setLanguage: (language: string) => void;
  setTranslations: (translations: Record<string, Record<string, string>>) => void;
  getTranslation: (key: string) => string;
};
const enTranslations = await import('../translations/en.json');
const arTranslations = await import('../translations/ar.json');

// Helper function to get language from local storage or default to 'ar'
const getInitialLanguage = (): string => {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage ? savedLanguage : 'ar';
};

const useTranslationStore = create<TranslationStoreState>((set) => ({
  language: getInitialLanguage(),
  translations: {
    en: enTranslations.default as Record<string, string>,   
    ar: arTranslations.default as Record<string, string>,
  },
  setLanguage: (language) => {
    localStorage.setItem('language', language);
    set({ language });
  },
  setTranslations: (translations) => set({ translations }),
  getTranslation: (key) => {
    const { language, translations } = useTranslationStore.getState();
    if (translations && translations[language]) {
      return translations[language][key] || key;
    } else {
      return key;
    }
  },
}));

export default useTranslationStore;