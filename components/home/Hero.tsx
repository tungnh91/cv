import { useRef, useState } from 'react';
import Image from 'next/image';

import GravityField from 'components/GravityField';
import ClickBurst from 'components/home/ClickBurst';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [avatarWiggling, setAvatarWiggling] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  function handleAvatarClick() {
    if (!avatarWiggling) setAvatarWiggling(true);
  }

  function handleEmailClick(e: React.MouseEvent) {
    e.stopPropagation();
    navigator.clipboard.writeText('tungnh91@gmail.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  }

  return (
    <div
      ref={heroRef}
      className="relative isolate overflow-hidden rounded-[2rem] border border-gray-200 shadow-[0_36px_120px_-72px_rgba(18,114,76,0.45)] dark:border-gray-800 dark:shadow-[0_36px_120px_-72px_rgba(62,207,142,0.3)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-white/80 backdrop-blur dark:bg-gray-800/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(186,117,23,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(239,166,46,0.12),transparent_38%)]" />
      <GravityField containerRef={heroRef} className="z-10" />
      <ClickBurst containerRef={heroRef} />

      <div className="relative z-20 flex flex-col items-center gap-8 px-8 py-12 text-center sm:px-16 sm:py-14">
        <button
          aria-label="Click me"
          className={`relative w-[108px] cursor-pointer sm:w-[140px] ${avatarWiggling ? 'avatar-wiggle' : ''}`}
          onClick={handleAvatarClick}
          onAnimationEnd={() => setAvatarWiggling(false)}
        >
          <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-2xl dark:bg-brand-500/25" />
          <div className="relative rounded-full border border-brand-200 bg-brand-50/70 p-1.5 shadow-lg shadow-brand-500/10 dark:border-brand-800 dark:bg-gray-900">
            <Image
              alt="Tim Nguyen"
              height={176}
              width={176}
              src="/avatar.jpeg"
              sizes="20vw"
              priority
              className="rounded-full border border-white/80"
            />
          </div>
        </button>

        <div className="max-w-lg">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Tim Nguyen
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400 sm:text-lg">
            I design and build highly scalable, performant, and reliable
            software products.
          </p>
          <button
            onClick={handleEmailClick}
            className="mt-5 text-sm font-medium text-brand-700 transition-colors hover:text-brand-500 dark:text-brand-400 dark:hover:text-brand-300"
          >
            {emailCopied ? '✓ copied!' : 'tungnh91 [at] gmail.com'}
          </button>
        </div>
      </div>
    </div>
  );
}
