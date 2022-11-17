import cn from 'classnames';

export default function BlogPostCard({ title, link, gradient }) {
  return (
    <a
      href={link}
      target="_blank"
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1',
        gradient
      )}
    >
      <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4">
          <h3 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-800 dark:text-gray-400 tracking-tight">
            {title}
          </h3>
      </div>
    </a>
  );
}
