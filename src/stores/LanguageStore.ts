import {create} from 'zustand';


type TranslationStoreState = {
  language: string;
  translations: Record<string, Record<string, string>>;
  setLanguage: (language: string) => void;
  setTranslations: (translations: Record<string, Record<string, string>>) => void;
  getTranslation: (key: string) => string;
};

const useTranslationStore = create<TranslationStoreState>((set) => ({
  language: 'en',
  translations: {},
  setLanguage: (language) => set({ language }),
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
