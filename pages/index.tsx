import { Suspense } from 'react';
import Image from 'next/image';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';

const links = [
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/timothytungnguyen'
  },
  {
    title: 'GitHub',
    link: 'https://github.com/tungnh91'
  },
  {
    title: 'Resume',
    link: 'https://docs.google.com/document/d/1uAT9FdEBqnd4Eil6w2MVxv2NrF6hjOeYRSZEO6y6Tw0/edit?usp=sharing'
  },
  {
    title: 'Email',
    link: 'mailto:tungnh91@gmail.com'
  },
  {
    title: 'Medium',
    link: 'https://medium.com/@9447'
  },
  {
    title: 'AngelList',
    link: 'https://angel.co/u/timnguyen'
  }
];

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <section className="mx-auto flex max-w-3xl flex-col gap-10 pb-20">
          <div className="rounded-[2rem] border border-gray-200 bg-white/80 p-8 shadow-[0_36px_120px_-72px_rgba(18,114,76,0.45)] backdrop-blur dark:border-gray-800 dark:bg-gray-800/70 dark:shadow-[0_36px_120px_-72px_rgba(62,207,142,0.3)] sm:p-10">
            <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-700 dark:text-brand-500">
                  Software Engineer
                </p>
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

          <div className="flex items-center">
            <span className="h-px w-full bg-gradient-to-r from-transparent via-brand-200 to-transparent dark:via-brand-800" />
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {links.map(({ title, link }) => (
              <BlogPostCard key={title} title={title} link={link} />
            ))}
          </div>
        </section>
      </Container>
    </Suspense>
  );
}
