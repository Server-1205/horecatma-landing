import { useState, useEffect, useCallback, memo } from 'react';
import type { Locale } from '../../i18n/index';

interface ScreenData {
  name: string;
  captionUz: string;
  captionRu: string;
}

interface Props {
  screens: ScreenData[];
  locale: Locale;
}

export default memo(function PhoneCarousel({ screens, locale }: Props) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % screens.length);
  }, [screens.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + screens.length) % screens.length);
  }, [screens.length]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const screen = screens[current];
  const caption = locale === 'ru' ? screen.captionRu : screen.captionUz;

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Phone frame */}
      <div className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-20" />
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          <img
            src={`/screenshots/${screen.name}.png`}
            alt={caption}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Caption */}
      <p className="text-lg text-gray-600 font-medium text-center min-h-[2rem] px-4">
        {caption}
      </p>

      {/* Controls */}
      <div className="flex items-center gap-6">
        {/* Prev arrow */}
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-brand-500 hover:border-brand-200 transition-colors shadow-sm"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {screens.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current
                  ? 'bg-brand-500 w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-brand-500 hover:border-brand-200 transition-colors shadow-sm"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
});
