import type { PropsWithChildren } from 'react';
import { Playfair_Display } from '@next/font/google';

import type { ExperienceItem } from 'data/home';

import ExperienceVisual from './ExperienceVisual';

const displayFont = Playfair_Display({
  subsets: ['latin'],
  weight: '400'
});

type ExperienceRowProps = {
  item: ExperienceItem;
  isFirst: boolean;
};

export default function ExperienceRow({
  item,
  isFirst
}: ExperienceRowProps) {
  return (
    <div
      className={`grid gap-6 py-8 md:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] md:gap-8 ${
        !isFirst ? 'border-t border-gray-200/80 dark:border-gray-800' : ''
      }`}
    >
      <div className="min-w-0 md:border-r md:border-gray-200/80 md:pr-8 dark:md:border-gray-800">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="min-w-0">
            <h3
              className={`${displayFont.className} text-3xl leading-none text-gray-900 dark:text-white sm:text-[2.1rem]`}
            >
              {item.company}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:ml-auto sm:justify-end">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">
              {item.role}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              {item.years}
            </span>
          </div>
        </div>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {item.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
      </div>

      <div className="flex items-center md:pl-2">
        <ExperienceVisual visualization={item.visualization} />
      </div>
    </div>
  );
}

function TagPill({ children }: PropsWithChildren) {
  return (
    <span className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 font-mono text-[11px] text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
      {children}
    </span>
  );
}
