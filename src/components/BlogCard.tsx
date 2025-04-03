import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';

interface BlogCardProps {
  title: string;
  brief: string;
  date: string;
  coverImage: string | StaticImageData;
  tag: 'Travel' | 'Culture' | 'General';
  slug: string;
}

const BlogCard: FC<BlogCardProps> = ({
  title,
  brief,
  date,
  coverImage,
  tag,
  slug,
}) => {
  return (
    <div className="card relative h-[580px] space-y-5 overflow-hidden rounded-xl border border-transparent shadow-md hover:border-primary dark:bg-primary/5">
      <Link href={`/blog/${slug}`}>
        <div className="relative h-[220px] w-full overflow-hidden">
          <div className="absolute bottom-5 right-3">
            <ButtonPrimary sizeClass="px-3 py-2">{tag}</ButtonPrimary>
          </div>
          <Image
            src={coverImage}
            alt="blog cover"
            className="size-full object-cover object-center"
            width={1000}
            height={1000}
          />
        </div>
      </Link>

      <div className="p-5">
        <h3 className="card-title text-2xl font-semibold">{title}</h3>
        <p className="mt-5 text-neutral-500">{brief}</p>
        <div className="absolute bottom-0 left-0 mt-16 flex w-full items-center justify-between border-t border-neutral-300 p-5 dark:border-neutral-700">
          <span className="font-semibold">{date}</span>
          <div className="relative">
            <Link
              href={`/blog/${slug}`}
              className="card-link font-semibold text-primary"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
