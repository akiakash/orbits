import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';
import { MdEmail, MdOutlineCall } from 'react-icons/md';

import ButtonCircle from '@/shared/Button/ButtonCircle';

interface StaffCardProps {
  profile: StaticImageData | string;
  name: string;
  position: string;
}

const StaffCard: FC<StaffCardProps> = ({ profile, name, position }) => {
  return (
    <div className="space-y-10">
      <div className="h-[40vh] w-full overflow-hidden rounded-2xl md:h-[30vh] lg:h-[40vh] 2xl:h-[25vh]">
        <Image
          src={profile}
          alt="profile image"
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <h4 className="text-2xl font-semibold">{name}</h4>
        <p className="text-neutral-500">{position}</p>
        <div className="flex items-center justify-center gap-5">
          <ButtonCircle size="w-10 h-10">
            <MdEmail className="text-2xl text-white" />
          </ButtonCircle>
          <ButtonCircle size="w-10 h-10">
            <MdOutlineCall className="text-2xl text-white" />
          </ButtonCircle>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
