import { Suspense } from 'react';
import Image from 'next/image';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Link from 'next/link';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Tim Nguyen
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Software Engineer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                I design and build highly scalable, performant, and reliable software products.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Link href="hi">
                <Image
                  alt="Tim Nguyen"
                  height={176}
                  width={176}
                  src="/avatar.jpeg"
                  sizes="30vw"
                  priority
                  className="rounded-full filter"
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-10 flex-col md:flex-row">
            <BlogPostCard
              title="LinkedIn"
              link="https://linkedin.com/in/timothytungnguyen"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="AngelList"
              link="https://angel.co/u/timnguyen"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="Github"
              link="https://github.com/tungnh91"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>

          <div className="mx-auto"> hi </div>

          <div className="flex gap-10 flex-col md:flex-row">
            <BlogPostCard
              title="Email"
              link="mailto:tungnh91@gmail.com"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
            <BlogPostCard
              title="Resume"
              link="https://docs.google.com/document/d/1uAT9FdEBqnd4Eil6w2MVxv2NrF6hjOeYRSZEO6y6Tw0/edit?usp=sharing"
              gradient="from-[#9333EA] via-[#3B82F6] to-[#6EE7B7]"
            />
            <BlogPostCard
              title="Medium"
              link="https://medium.com/@9447"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
          </div>
        </div>
      </Container>
    </Suspense>
  );
}
