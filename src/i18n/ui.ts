export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
  },
  en: {
    'nav.home': 'Home',
  },
} as const;

export const routes: Record<string, Record<string, string>> = {
  en: {
    'nosotros': 'about',
  },
};

export const showDefaultLang = false;