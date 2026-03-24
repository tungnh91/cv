import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

type GravityFieldProps = {
  className?: string;
  containerRef?: { current: HTMLElement | null };
  particleCount?: number;
};

const GRAVITY_CONST = 300;
const MAX_FORCE = 2.0;
const DAMPING = 0.92;
const GLOW_RADIUS = 120;
const LIGHT_RGB = '186,117,23';
const DARK_RGB = '239,166,46';

export default function GravityField({
  className,
  containerRef,
  particleCount = 60
}: GravityFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const interactionTarget = containerRef?.current ?? canvas;
    const shouldCaptureTouches = !containerRef;

    if (!canvas || !interactionTarget) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const rgb = resolvedTheme === 'dark' ? DARK_RGB : LIGHT_RGB;

    let width = 0;
    let height = 0;
    let mx = -1;
    let my = -1;
    let mouseIn = false;
    let animationFrame = 0;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let particles: Particle[] = [];

    function initParticles() {
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.random() - 0.5,
        vy: Math.random() - 0.5,
        r: 1.5 + Math.random() * 2
      }));
    }

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;

      if (!width || !height) {
        particles = [];
        return;
      }

      initParticles();
    }

    function updatePointer(clientX: number, clientY: number) {
      const rect = interactionTarget.getBoundingClientRect();
      mx = clientX - rect.left;
      my = clientY - rect.top;
      mouseIn =
        mx >= 0 &&
        mx <= rect.width &&
        my >= 0 &&
        my <= rect.height;
    }

    function onMouseMove(event: MouseEvent) {
      updatePointer(event.clientX, event.clientY);
    }

    function onMouseLeave() {
      mouseIn = false;
    }

    function onTouchMove(event: TouchEvent) {
      if (!event.touches.length) {
        return;
      }

      if (shouldCaptureTouches && event.cancelable) {
        event.preventDefault();
      }

      updatePointer(event.touches[0].clientX, event.touches[0].clientY);
    }

    function onTouchEnd() {
      mouseIn = false;
    }

    function onResize() {
      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      }

      resizeTimer = window.setTimeout(resize, 100);
    }

    function loop() {
      ctx.clearRect(0, 0, width, height);

      for (const particle of particles) {
        if (mouseIn) {
          const dx = mx - particle.x;
          const dy = my - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = Math.min(
            GRAVITY_CONST / (distance * distance),
            MAX_FORCE
          );

          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
        }

        particle.vx *= DAMPING;
        particle.vy *= DAMPING;
        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.x = ((particle.x % width) + width) % width;
        particle.y = ((particle.y % height) + height) % height;

        const dx = mx - particle.x;
        const dy = my - particle.y;
        const distance = mouseIn ? Math.sqrt(dx * dx + dy * dy) : 999;
        const glow = Math.max(0, 1 - distance / GLOW_RADIUS);
        const alpha = 0.4 + glow * 0.6;
        const radius = particle.r + glow * 2;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${alpha})`;
        ctx.fill();
      }

      animationFrame = window.requestAnimationFrame(loop);
    }

    interactionTarget.addEventListener('mousemove', onMouseMove);
    interactionTarget.addEventListener('mouseleave', onMouseLeave);
    interactionTarget.addEventListener('touchmove', onTouchMove, {
      passive: false
    });
    interactionTarget.addEventListener('touchend', onTouchEnd);
    interactionTarget.addEventListener('touchcancel', onTouchEnd);
    window.addEventListener('resize', onResize);

    resize();
    loop();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', onResize);
      interactionTarget.removeEventListener('mousemove', onMouseMove);
      interactionTarget.removeEventListener('mouseleave', onMouseLeave);
      interactionTarget.removeEventListener('touchmove', onTouchMove);
      interactionTarget.removeEventListener('touchend', onTouchEnd);
      interactionTarget.removeEventListener('touchcancel', onTouchEnd);

      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      }
    };
  }, [containerRef, particleCount, resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: containerRef ? 'none' : 'auto'
      }}
    />
  );
}
