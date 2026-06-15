import uz from './uz.json';
import ru from './ru.json';

export type Locale = 'uz' | 'ru';

const translations = { uz, ru } as const;

export function getTranslations(locale: Locale) {
  return translations[locale] ?? translations.uz;
}

export function t(obj: Record<string, any>, path: string): string {
  return path.split('.').reduce((acc, key) => acc?.[key], obj) ?? path;
}

export const localeNames: Record<Locale, string> = {
  uz: "O'zbekcha",
  ru: 'Русский',
};

export const defaultLocale: Locale = 'uz';
