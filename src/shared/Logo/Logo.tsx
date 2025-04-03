import Link from 'next/link';
import React from 'react';
import { SiPlanetscale } from 'react-icons/si';

const Logo: React.FC = () => {
  return (
    <Link
      className="flex cursor-pointer items-center gap-2 text-xl font-medium"
      href="/"
    >
      <SiPlanetscale className="text-4xl text-primary" />
      <span />
    </Link>
  );
};

export default Logo;
