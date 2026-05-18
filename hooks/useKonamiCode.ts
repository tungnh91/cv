import { useEffect } from 'react';

const SEQUENCE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export function useKonamiCode(onActivate: () => void) {
  useEffect(() => {
    let index = 0;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === SEQUENCE[index]) {
        index++;
        if (index === SEQUENCE.length) {
          index = 0;
          onActivate();
        }
      } else {
        index = e.key === SEQUENCE[0] ? 1 : 0;
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onActivate]);
}
