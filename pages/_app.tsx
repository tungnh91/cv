import 'styles/global.css';

import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/react';

import useGlassPointerEffect from 'hooks/useGlassPointerEffect';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const forcedTheme =
    typeof router.query.theme === 'string' &&
    (router.query.theme === 'light' || router.query.theme === 'dark')
      ? router.query.theme
      : undefined;

  useGlassPointerEffect();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme={forcedTheme}
    >
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </ThemeProvider>
  );
}
