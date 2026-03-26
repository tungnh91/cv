import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

type Bubble = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  wobblePhase: number;
  wobbleSpeed: number;
  stretchPhase: number;
  stretchSpeed: number;
  highlightOffset: number;
};

type Palette = {
  primary: string;
  secondary: string;
  backdropPrimaryAlpha: number;
  backdropSecondaryAlpha: number;
  cursorAuraAlpha: number;
  glowAlpha: number;
  bodyAlpha: number;
  rimAlpha: number;
  highlightAlpha: number;
  sparkleAlpha: number;
};

const DARK_PALETTE: Palette = {
  primary: '62,207,142',
  secondary: '239,166,46',
  backdropPrimaryAlpha: 0.09,
  backdropSecondaryAlpha: 0.06,
  cursorAuraAlpha: 0.11,
  glowAlpha: 0.11,
  bodyAlpha: 0.04,
  rimAlpha: 0.1,
  highlightAlpha: 0.13,
  sparkleAlpha: 0.07
};

const LIGHT_PALETTE: Palette = {
  primary: '18,114,76',
  secondary: '186,117,23',
  backdropPrimaryAlpha: 0.06,
  backdropSecondaryAlpha: 0.045,
  cursorAuraAlpha: 0.075,
  glowAlpha: 0.08,
  bodyAlpha: 0.028,
  rimAlpha: 0.08,
  highlightAlpha: 0.11,
  sparkleAlpha: 0.05
};

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function rgba(rgb: string, alpha: number) {
  return `rgba(${rgb},${alpha})`;
}

export default function LiquidBubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const palette =
      resolvedTheme === 'light' ? LIGHT_PALETTE : DARK_PALETTE;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let resizeTimer: number | undefined;
    let reducedMotion = false;
    let bubbles: Bubble[] = [];
    let lastPointerMove = 0;

    const pointer = {
      x: 0,
      y: 0,
      active: false
    };

    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion = motionMedia.matches;

    function bubbleCount() {
      return Math.round(
        Math.min(18, Math.max(10, (width * height) / 120000))
      );
    }

    function initBubbles() {
      const minDimension = Math.min(width, height) || 1;

      bubbles = Array.from({ length: bubbleCount() }, () => {
        const radius = random(minDimension * 0.06, minDimension * 0.16);

        return {
          x: random(radius * 0.4, width - radius * 0.4),
          y: random(radius * 0.35, height - radius * 0.35),
          vx: random(-0.08, 0.08),
          vy: random(-0.06, 0.06),
          radius,
          wobblePhase: random(0, Math.PI * 2),
          wobbleSpeed: random(0.00022, 0.00055),
          stretchPhase: random(0, Math.PI * 2),
          stretchSpeed: random(0.00038, 0.0009),
          highlightOffset: random(0.18, 0.3)
        };
      });
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const nextWidth = Math.round(rect.width);
      const nextHeight = Math.round(rect.height);

      width = nextWidth;
      height = nextHeight;

      if (!width || !height) {
        bubbles = [];
        return;
      }

      const dpr = window.devicePixelRatio || 1;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;

      initBubbles();
    }

    function onResize() {
      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      }

      resizeTimer = window.setTimeout(resize, 100);
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType === 'touch') {
        return;
      }

      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      lastPointerMove = performance.now();
    }

    function clearPointer() {
      pointer.active = false;
    }

    function onMotionPreferenceChange() {
      reducedMotion = motionMedia.matches;
    }

    function drawBackdrop() {
      const primaryGlow = ctx.createRadialGradient(
        width * 0.88,
        height * 0.12,
        0,
        width * 0.88,
        height * 0.12,
        Math.max(width, height) * 0.46
      );
      primaryGlow.addColorStop(
        0,
        rgba(palette.primary, palette.backdropPrimaryAlpha)
      );
      primaryGlow.addColorStop(1, rgba(palette.primary, 0));

      ctx.fillStyle = primaryGlow;
      ctx.fillRect(0, 0, width, height);

      const secondaryGlow = ctx.createRadialGradient(
        width * 0.16,
        height * 0.8,
        0,
        width * 0.16,
        height * 0.8,
        Math.max(width, height) * 0.52
      );
      secondaryGlow.addColorStop(
        0,
        rgba(palette.secondary, palette.backdropSecondaryAlpha)
      );
      secondaryGlow.addColorStop(1, rgba(palette.secondary, 0));

      ctx.fillStyle = secondaryGlow;
      ctx.fillRect(0, 0, width, height);

      if (!pointer.active) {
        return;
      }

      const aura = ctx.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        240
      );
      aura.addColorStop(0, rgba(palette.primary, palette.cursorAuraAlpha));
      aura.addColorStop(0.48, rgba(palette.secondary, palette.cursorAuraAlpha * 0.32));
      aura.addColorStop(1, rgba(palette.primary, 0));

      ctx.fillStyle = aura;
      ctx.fillRect(0, 0, width, height);
    }

    function drawBubble(bubble: Bubble, proximity: number, now: number) {
      const stretch = Math.sin(now * bubble.stretchSpeed + bubble.stretchPhase);
      const squashX = 1 + stretch * 0.045 + proximity * 0.04;
      const squashY = 1 - stretch * 0.035 + proximity * 0.055;
      const angle = Math.sin(now * bubble.stretchSpeed * 0.4 + bubble.stretchPhase) * 0.16;
      const glowRadius = bubble.radius * (1.28 + proximity * 0.08);
      const rimAlpha = palette.rimAlpha + proximity * 0.08;
      const bodyAlpha = palette.bodyAlpha + proximity * 0.03;
      const highlightAlpha = palette.highlightAlpha + proximity * 0.08;
      const sparkleAlpha = palette.sparkleAlpha + proximity * 0.05;
      const highlightX = -bubble.radius * bubble.highlightOffset;
      const highlightY = -bubble.radius * (bubble.highlightOffset + 0.08);

      ctx.save();
      ctx.translate(bubble.x, bubble.y);
      ctx.rotate(angle);
      ctx.scale(squashX, squashY);

      const outerGlow = ctx.createRadialGradient(
        0,
        0,
        bubble.radius * 0.1,
        0,
        0,
        glowRadius
      );
      outerGlow.addColorStop(0, rgba(palette.primary, palette.glowAlpha + proximity * 0.06));
      outerGlow.addColorStop(0.46, rgba(palette.secondary, palette.glowAlpha * 0.5 + proximity * 0.04));
      outerGlow.addColorStop(1, rgba(palette.primary, 0));

      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      const body = ctx.createRadialGradient(
        highlightX,
        highlightY,
        bubble.radius * 0.06,
        0,
        0,
        bubble.radius
      );
      body.addColorStop(0, rgba('255,255,255', bodyAlpha + 0.06 + proximity * 0.02));
      body.addColorStop(0.24, rgba('255,255,255', bodyAlpha + 0.03));
      body.addColorStop(0.72, rgba(palette.primary, bodyAlpha));
      body.addColorStop(1, rgba(palette.secondary, bodyAlpha * 0.55));

      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(0, 0, bubble.radius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = rgba('255,255,255', rimAlpha);
      ctx.lineWidth = Math.max(1.2, bubble.radius * 0.012);
      ctx.beginPath();
      ctx.arc(0, 0, bubble.radius * 0.985, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = rgba('255,255,255', highlightAlpha);
      ctx.lineWidth = Math.max(1, bubble.radius * 0.03);
      ctx.beginPath();
      ctx.arc(
        -bubble.radius * 0.08,
        -bubble.radius * 0.08,
        bubble.radius * 0.68,
        Math.PI * 1.05,
        Math.PI * 1.56
      );
      ctx.stroke();

      ctx.fillStyle = rgba('255,255,255', sparkleAlpha);
      ctx.beginPath();
      ctx.arc(
        -bubble.radius * 0.33,
        -bubble.radius * 0.38,
        bubble.radius * 0.085,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.restore();
    }

    function animate(now: number) {
      if (pointer.active && now - lastPointerMove > 1800) {
        pointer.active = false;
      }

      ctx.clearRect(0, 0, width, height);
      drawBackdrop();

      for (const bubble of bubbles) {
        let proximity = 0;

        if (!reducedMotion) {
          bubble.vx += Math.sin(now * bubble.wobbleSpeed + bubble.wobblePhase) * 0.0016;
          bubble.vy +=
            Math.cos(now * bubble.wobbleSpeed * 0.85 + bubble.wobblePhase) *
            0.0013;
        }

        if (pointer.active) {
          const dx = bubble.x - pointer.x;
          const dy = bubble.y - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy) || 1;
          const influenceRadius = bubble.radius * 1.8 + 120;

          if (distance < influenceRadius) {
            proximity = 1 - distance / influenceRadius;
            const force = proximity * proximity * (reducedMotion ? 0.03 : 0.075);

            bubble.vx += (dx / distance) * force;
            bubble.vy += (dy / distance) * force;
          }
        }

        bubble.vx = clamp(bubble.vx, -0.34, 0.34);
        bubble.vy = clamp(bubble.vy, -0.28, 0.28);

        if (!reducedMotion) {
          bubble.x += bubble.vx;
          bubble.y += bubble.vy;
        }

        bubble.vx *= reducedMotion ? 0.9 : 0.992;
        bubble.vy *= reducedMotion ? 0.9 : 0.992;

        const xBoundary = bubble.radius * 0.4;
        const yBoundary = bubble.radius * 0.35;

        if (bubble.x < xBoundary) {
          bubble.x = xBoundary;
          bubble.vx = Math.abs(bubble.vx) * 0.82;
        } else if (bubble.x > width - xBoundary) {
          bubble.x = width - xBoundary;
          bubble.vx = -Math.abs(bubble.vx) * 0.82;
        }

        if (bubble.y < yBoundary) {
          bubble.y = yBoundary;
          bubble.vy = Math.abs(bubble.vy) * 0.82;
        } else if (bubble.y > height - yBoundary) {
          bubble.y = height - yBoundary;
          bubble.vy = -Math.abs(bubble.vy) * 0.82;
        }

        drawBubble(bubble, proximity, now);
      }

      animationFrame = window.requestAnimationFrame(animate);
    }

    if (typeof motionMedia.addEventListener === 'function') {
      motionMedia.addEventListener('change', onMotionPreferenceChange);
    } else {
      motionMedia.addListener(onMotionPreferenceChange);
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('blur', clearPointer);
    document.addEventListener('visibilitychange', clearPointer);
    window.addEventListener('resize', onResize);

    resize();
    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('blur', clearPointer);
      document.removeEventListener('visibilitychange', clearPointer);
      window.removeEventListener('resize', onResize);

      if (typeof motionMedia.removeEventListener === 'function') {
        motionMedia.removeEventListener('change', onMotionPreferenceChange);
      } else {
        motionMedia.removeListener(onMotionPreferenceChange);
      }

      if (resizeTimer) {
        window.clearTimeout(resizeTimer);
      }
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
