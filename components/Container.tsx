import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const meta = {
    title: 'Tim Nguyen',
    description: 'Software Engineer',
    image: 'https://itstimn.com/avatar.jpeg',
    imageAlt: 'Portrait of Tim Nguyen',
    type: 'website',
    url: 'https://itstimn.com',
    ...customMeta
  };
  const themeColor = resolvedTheme === 'light' ? '#f5f8f5' : '#050706';

  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta name="theme-color" content={themeColor} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Tim Nguyen" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.imageAlt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:image:alt" content={meta.imageAlt} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <div className="px-6 sm:px-8">
        <nav className="mx-auto flex w-full max-w-3xl items-center justify-end gap-4 pb-10 pt-8 sm:pb-16">
          <a href="#skip" className="skip-nav">
            Skip to content
          </a>

          <button
            aria-label="Toggle dark mode"
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-700 shadow-sm backdrop-blur transition-all hover:border-brand-500/50 hover:bg-brand-50 hover:text-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200 dark:hover:border-brand-500/60 dark:hover:bg-brand-900/30 dark:hover:text-brand-400"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>

      <main
        id="skip"
        className="flex flex-col justify-center bg-gray-50 px-6 pb-8 dark:bg-gray-900 sm:px-8"
      >
        {children}
      </main>
    </div>
  );
}
