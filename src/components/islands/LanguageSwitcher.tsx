import { useState, useEffect } from 'react';
import type { Locale } from '../../i18n/index';
import { localeNames } from '../../i18n/index';

interface Props {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>(currentLocale);

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && saved !== locale) {
      setLocale(saved);
    }
  }, []);

  const switchLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    const path = window.location.pathname;
    if (newLocale === 'uz') {
      window.location.href = path.replace(/^\/ru\//, '/') || '/';
    } else {
      if (!path.startsWith('/ru/')) {
        window.location.href = `/ru${path}`;
      }
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        {localeNames[locale]}
        <svg className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
            {(Object.keys(localeNames) as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2 transition-colors ${
                  l === locale
                    ? 'text-brand-600 bg-brand-50 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {l === 'uz' ? '🇺🇿' : '🇷🇺'} {localeNames[l]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
