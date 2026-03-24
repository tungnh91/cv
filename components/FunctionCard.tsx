import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from 'lib/sanity';

export default function FunctionCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) {
  return (
    <Link
      href={`/snippets/${slug}`}
      className="w-full rounded-2xl border border-gray-200 bg-white/90 p-4 transition-all hover:border-brand-500/50 dark:border-gray-700 dark:bg-gray-800/80 dark:hover:border-brand-500/60"
      {...rest}
    >
      <>
        <Image
          alt={title}
          height={32}
          width={32}
          src={urlForImage(logo).url()}
          className="rounded-full border border-gray-200 dark:border-gray-700"
        />
        <h3 className="mt-2 text-left text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-1 text-gray-600 dark:text-gray-300">{description}</p>
      </>
    </Link>
  );
}
