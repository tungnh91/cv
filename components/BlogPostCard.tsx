export default function BlogPostCard({ title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-[0_20px_45px_-36px_rgba(18,114,76,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-[0_28px_65px_-36px_rgba(18,114,76,0.45)] dark:border-gray-700 dark:bg-gray-800/80 dark:shadow-[0_24px_60px_-42px_rgba(62,207,142,0.16)] dark:hover:border-brand-500/70 dark:hover:shadow-[0_32px_70px_-36px_rgba(62,207,142,0.3)]"
    >
      <div className="flex h-full items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-brand-700 transition-all duration-300 group-hover:border-brand-300 group-hover:bg-brand-100 group-hover:text-brand-800 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400 dark:group-hover:border-brand-700 dark:group-hover:bg-brand-900/70 dark:group-hover:text-brand-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M7 17L17 7"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M9 7h8v8"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
