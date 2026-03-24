import 'styles/global.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Inter } from '@next/font/google';

const interVariable = Inter();

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  const router = useRouter();
  const forcedTheme =
    typeof router.query.theme === 'string' &&
    (router.query.theme === 'light' || router.query.theme === 'dark')
      ? router.query.theme
      : undefined;

  useEffect(() => {
    const selector = '.glass-button, .glass-icon-button';
    let activeButton: HTMLElement | null = null;
    let frameId: number | null = null;
    let clientX = 0;
    let clientY = 0;

    const clearButtonState = (button: HTMLElement | null) => {
      if (!button) return;

      button.dataset.glassActive = 'false';
      button.style.removeProperty('--glass-x');
      button.style.removeProperty('--glass-y');
      button.style.removeProperty('--glass-bubble-size');
      button.style.removeProperty('--glass-bubble-opacity');
      button.style.removeProperty('--glass-sheen-opacity');
    };

    const setActiveButton = (button: HTMLElement | null) => {
      if (activeButton === button) return;

      clearButtonState(activeButton);
      activeButton = button;

      if (activeButton) {
        activeButton.dataset.glassActive = 'true';
      }
    };

    const syncBubblePosition = () => {
      frameId = null;

      const hoveredElement = document.elementFromPoint(clientX, clientY);
      const hoveredButton = hoveredElement?.closest(selector);

      if (!(hoveredButton instanceof HTMLElement)) {
        setActiveButton(null);
        return;
      }

      setActiveButton(hoveredButton);

      const rect = hoveredButton.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const y = Math.max(0, Math.min(clientY - rect.top, rect.height));
      const bubbleSize = hoveredButton.classList.contains('glass-icon-button')
        ? Math.max(rect.width, rect.height) * 1.75
        : Math.min(Math.max(rect.height * 3, 120), rect.width * 0.8);

      hoveredButton.style.setProperty('--glass-x', `${x}px`);
      hoveredButton.style.setProperty('--glass-y', `${y}px`);
      hoveredButton.style.setProperty('--glass-bubble-size', `${bubbleSize}px`);
      hoveredButton.style.setProperty('--glass-bubble-opacity', '1');
      hoveredButton.style.setProperty('--glass-sheen-opacity', '1');
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      clientX = event.clientX;
      clientY = event.clientY;

      if (frameId === null) {
        frameId = window.requestAnimationFrame(syncBubblePosition);
      }
    };

    const handlePointerDown = () => {
      if (!activeButton) return;
      activeButton.style.setProperty('--glass-bubble-opacity', '0.74');
      activeButton.style.setProperty('--glass-sheen-opacity', '0.92');
    };

    const handlePointerUp = () => {
      if (!activeButton) return;
      activeButton.style.setProperty('--glass-bubble-opacity', '1');
      activeButton.style.setProperty('--glass-sheen-opacity', '1');
    };

    const clearActiveState = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }

      setActiveButton(null);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearActiveState();
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    window.addEventListener('blur', clearActiveState);
    document.addEventListener('pointerleave', clearActiveState);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('blur', clearActiveState);
      document.removeEventListener('pointerleave', clearActiveState);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearActiveState();
    };
  }, []);

  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        forcedTheme={forcedTheme}
      >
        <main className={interVariable.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </SessionProvider>
  );
}
