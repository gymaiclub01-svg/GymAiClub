import tr from './tr.json';
import en from './en.json';
import ru from './ru.json';
import es from './es.json';

export const languages = {
  tr: 'Türkçe',
  en: 'English',
  ru: 'Русский',
  es: 'Español'
} as const;

export const languageFlags = {
  tr: '🇹🇷',
  en: '🇬🇧',
  ru: '🇷🇺',
  es: '🇪🇸'
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'tr';

const dictionaries = { tr, en, ru, es } as const;

/** Dot-path getter into the translation dictionary, e.g. t('en', 'features.camera.title') */
export function t(lang: Lang, key: string): any {
  const dict = dictionaries[lang] ?? dictionaries[defaultLang];
  return key.split('.').reduce((acc: any, part) => acc?.[part], dict);
}

/** Path to this locale's homepage, respecting prefixDefaultLocale: false */
export function localePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
