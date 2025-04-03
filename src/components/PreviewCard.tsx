import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { pathOr } from 'ramda';
import type { FC } from 'react';
import React from 'react';

interface PreviewCardProps {
  isDarkMode: boolean;
  previewData: {
    darkCoverImage: StaticImageData;
    whiteCoverImage: StaticImageData;
    pageName: string;
    href: string;
  };
}

const PreviewCard: FC<PreviewCardProps> = ({ isDarkMode, previewData }) => {
  return (
    <Link
      href={previewData.href}
      className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg"
    >
      <div className="w-full overflow-hidden">
        <Image
          src={pathOr(
            '',
            [isDarkMode ? 'darkCoverImage' : 'whiteCoverImage'],
            previewData,
          )}
          alt="cover-image"
          className="w-full object-cover object-top"
        />
      </div>
      <div className="flex w-full items-center justify-center border-t border-neutral-300 bg-primary/5 py-6 text-xl font-semibold dark:border-neutral-700">
        {previewData.pageName}
      </div>
    </Link>
  );
};

export default PreviewCard;
