import tr from './tr.json';
import en from './en.json';
import ru from './ru.json';
import es from './es.json';

export const languages = {
  en: 'English',
  tr: 'Türkçe',
  ru: 'Русский',
  es: 'Español'
} as const;

export const languageFlags = {
  en: '🇬🇧',
  tr: '🇹🇷',
  ru: '🇷🇺',
  es: '🇪🇸'
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

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

/** Path to a locale's static page (e.g. "privacy", "contact"), respecting prefixDefaultLocale: false */
export function localizedPath(lang: Lang, slug: string): string {
  return lang === defaultLang ? `/${slug}/` : `/${lang}/${slug}/`;
}
