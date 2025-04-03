import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';
import { MdLocationPin, MdStar } from 'react-icons/md';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';

interface DestinationCardProps {
  coverImage: string | StaticImageData;
  country: string;
  description: string;
  price: number;
  rating: number;
  slug: string;
}

const DestinationCard: FC<DestinationCardProps> = ({
  coverImage,
  country,
  description,
  price,
  rating,
  slug,
}) => {
  return (
    <div className="card relative rounded-b-2xl rounded-t-md border border-transparent shadow-lg hover:border-primary dark:bg-primary/5">
      <div className="absolute right-3 top-5 z-10 inline-flex items-center gap-1 text-white">
        <MdLocationPin /> <span className="text-sm">{country}</span>
      </div>
      <div className="h-[45vh] overflow-hidden rounded-md md:h-[30vh] lg:h-[45vh] 2xl:h-[27vh]">
        <Link href={`/destination/${slug}`}>
          <Image
            src={coverImage}
            alt="scenery"
            width={1000}
            height={1000}
            className="h-full object-cover object-center"
          />
        </Link>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold">{country}</span>
          <div className="inline-flex items-center gap-1 text-yellow-400">
            <MdStar /> <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-base text-neutral-500">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">$ {price}</p>
          <ButtonPrimary
            href={`/destination/${slug}`}
            fontSize="text-sm"
            sizeClass="px-4 py-2.5"
          >
            Start Trip
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
