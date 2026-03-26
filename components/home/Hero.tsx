import { useRef } from 'react';
import Image from 'next/image';

import GravityField from 'components/GravityField';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={heroRef}
      className="relative isolate overflow-hidden rounded-[2rem] border border-gray-200 shadow-[0_36px_120px_-72px_rgba(18,114,76,0.45)] dark:border-gray-800 dark:shadow-[0_36px_120px_-72px_rgba(62,207,142,0.3)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-white/80 backdrop-blur dark:bg-gray-800/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(186,117,23,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(239,166,46,0.12),transparent_38%)]" />
      <GravityField containerRef={heroRef} className="z-10" />

      <div className="relative z-20 p-8 sm:p-10">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Tim Nguyen
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I design and build highly scalable, performant, and reliable
              software products.
            </p>
          </div>

          <div className="relative w-[104px] sm:w-[176px]">
            <div className="absolute inset-0 rounded-full bg-brand-500/20 blur-2xl dark:bg-brand-500/25" />
            <div className="relative rounded-full border border-brand-200 bg-brand-50/70 p-1.5 shadow-lg shadow-brand-500/10 dark:border-brand-800 dark:bg-gray-900">
              <Image
                alt="Tim Nguyen"
                height={176}
                width={176}
                src="/avatar.jpeg"
                sizes="30vw"
                priority
                className="rounded-full border border-white/80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
