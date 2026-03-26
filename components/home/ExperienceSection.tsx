import type { PropsWithChildren } from 'react';

import { experienceRows } from 'data/home';

import ExperienceRow from './ExperienceRow';

export default function ExperienceSection() {
  return (
    <section className="mx-auto w-full max-w-5xl pb-24 sm:pb-28">
      <div className="overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/72 backdrop-blur dark:border-gray-800 dark:bg-[#111410]/72">
        <div className="px-6 py-5 sm:px-8 sm:py-6 lg:px-10">
          <SectionLabel>Professional experience</SectionLabel>
        </div>

        <div className="border-t border-gray-200/80 dark:border-gray-800" />

        <div className="px-6 sm:px-8 lg:px-10">
          {experienceRows.map((item, index) => (
            <ExperienceRow
              key={`${item.company}-${item.years}`}
              item={item}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: PropsWithChildren) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gray-500 dark:text-gray-400">
      {children}
    </p>
  );
}
