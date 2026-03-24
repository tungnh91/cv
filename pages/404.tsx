import Link from 'next/link';

import Container from 'components/Container';

export default function NotFound() {
  return (
    <Container title="404">
      <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center rounded-[2rem] border border-gray-200 bg-white/80 px-8 py-12 text-center shadow-[0_30px_90px_-60px_rgba(18,114,76,0.35)] dark:border-gray-800 dark:bg-gray-800/70 dark:shadow-[0_30px_90px_-60px_rgba(62,207,142,0.24)]">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-brand-700 dark:text-brand-500">
          404
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl">
          Go home, you&apos;re drunk.
        </h1>
        <p className="mb-8 max-w-md text-gray-600 dark:text-gray-300">
          The page you were looking for wandered off. Let&apos;s get you back to
          familiar territory.
        </p>
        <Link
          href="/"
          className="rounded-full bg-brand-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-800 dark:bg-brand-500 dark:text-gray-900 dark:hover:bg-brand-400"
        >
          Back home
        </Link>
      </div>
    </Container>
  );
}
