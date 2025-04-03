import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

interface SocialCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const SocialCard: FC<SocialCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card space-y-5 rounded-xl border border-transparent px-5 py-10 shadow-md hover:border-primary">
      <div className="flex size-20 items-center justify-center rounded-2xl bg-primary text-white">
        {icon}
      </div>
      <h3 className="card-title text-2xl font-semibold">{title}</h3>
      <p className="text-neutral-500">{description}</p>
      <div className="relative inline-flex items-center">
        <Link href="/contact" className="card-link font-semibold text-primary">
          Follow Us
        </Link>
      </div>
    </div>
  );
};

export default SocialCard;
