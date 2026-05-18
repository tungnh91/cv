import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

type Spark = {
  x: number; y: number;
  vx: number; vy: number;
  life: number; decay: number;
  r: number; rgb: string;
};

type Props = {
  containerRef: React.RefObject<HTMLElement | null>;
};

const COLORS_DARK = ['239,166,46', '62,207,142', '255,255,255', '160,180,255'];
const COLORS_LIGHT = ['186,117,23', '18,114,76', '80,60,130', '200,90,50'];

function makeSpark(x: number, y: number, angle: number, speed: number, colors: string[]): Spark {
  return {
    x, y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    life: 1,
    decay: 0.013 + Math.random() * 0.012,
    r: 1.5 + Math.random() * 3,
    rgb: colors[Math.floor(Math.random() * colors.length)],
  };
}

export default function ClickBurst({ containerRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animRef = useRef(0);
  const runningRef = useRef(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }

    function startLoop() {
      if (runningRef.current) return;
      runningRef.current = true;
      function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        sparksRef.current = sparksRef.current.filter(s => s.life > 0.02);
        for (const s of sparksRef.current) {
          s.x += s.vx;
          s.y += s.vy;
          s.vy += 0.14;
          s.vx *= 0.97;
          s.vy *= 0.98;
          s.life -= s.decay;
          ctx.beginPath();
          ctx.arc(s.x, s.y, Math.max(0.4, s.r * s.life), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.rgb},${Math.max(0, s.life)})`;
          ctx.fill();
        }
        if (sparksRef.current.length > 0) {
          animRef.current = requestAnimationFrame(loop);
        } else {
          runningRef.current = false;
        }
      }
      animRef.current = requestAnimationFrame(loop);
    }

    function spawn(x: number, y: number) {
      const colors = resolvedTheme === 'dark' ? COLORS_DARK : COLORS_LIGHT;
      for (let i = 0; i < 32; i++) {
        const angle = (Math.PI * 2 * i) / 32 + (Math.random() - 0.5) * 0.5;
        const speed = 1.5 + Math.random() * 5.5;
        sparksRef.current.push(makeSpark(x, y, angle, speed, colors));
      }
      startLoop();
    }

    function onClick(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      spawn(e.clientX - rect.left, e.clientY - rect.top);
    }

    resize();
    container.addEventListener('click', onClick);
    const obs = new ResizeObserver(resize);
    obs.observe(container);

    return () => {
      cancelAnimationFrame(animRef.current);
      runningRef.current = false;
      container.removeEventListener('click', onClick);
      obs.disconnect();
    };
  }, [containerRef, resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 30 }}
    />
  );
}
