export default function BlogPostCard({ title, link, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="glass-button group w-full justify-between whitespace-nowrap text-left"
    >
      <span className="flex items-center gap-3 pr-3">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center opacity-80">
          <LeadingIcon icon={icon} />
        </span>
        <span>{title}</span>
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-[18px] w-[18px] shrink-0 opacity-70 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.9}
          d="m9 6 6 6-6 6"
        />
      </svg>
    </a>
  );
}

function LeadingIcon({ icon }) {
  switch (icon) {
    case 'profile':
      return (
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
            strokeWidth={1.85}
            d="M15 8a3 3 0 11-6 0 3 3 0 016 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.85}
            d="M5.5 18a6.5 6.5 0 0 1 13 0"
          />
        </svg>
      );
    case 'doc':
      return (
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
            strokeWidth={1.85}
            d="M8 3.75h5.25L18 8.5v11.75a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-15.5a1 1 0 0 1 1-1Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.85}
            d="M13 3.75V8.5h4.75"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.85}
            d="M9.5 12.5h5M9.5 16h5"
          />
        </svg>
      );
    case 'code':
    default:
      return (
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
            strokeWidth={1.85}
            d="m9 7-5 5 5 5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.85}
            d="m15 7 5 5-5 5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.85}
            d="m13.5 5-3 14"
          />
        </svg>
      );
  }
}
