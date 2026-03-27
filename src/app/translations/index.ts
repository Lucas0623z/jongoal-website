import { en } from './en';
import { zh } from './zh';
import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  en,
  zh,
};

export function useTranslation() {
  const { language } = useLanguage();
  return translations[language];
}

export { en, zh };
