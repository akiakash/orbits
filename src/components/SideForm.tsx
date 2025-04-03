import React from 'react';
import { MdEmail } from 'react-icons/md';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import Heading from '@/shared/Heading/Heading';
import Input from '@/shared/Input/Input';

const SideForm = () => {
  return (
    <div className="space-y-5 rounded-2xl border border-primary/30 px-5 py-10 shadow-lg">
      <div className="flex size-20 items-center justify-center rounded-md bg-primary/10 p-3">
        <MdEmail className="text-4xl text-primary" />
      </div>

      <Heading desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.">
        Get in touch
      </Heading>

      <div className="grid gap-3">
        <Input
          placeholder="Full name"
          sizeClass="h-14 px-4 py-5"
          type="text"
          rounded="rounded-lg"
          className="bg-transparent placeholder:text-neutral-500"
        />

        <Input
          placeholder="example@email.com"
          sizeClass="h-14 px-4 py-5"
          type="email"
          rounded="rounded-lg"
          className="bg-transparent placeholder:text-neutral-500"
        />

        <Input
          placeholder="(123) 456-7890"
          sizeClass="h-14 px-4 py-5"
          type="text"
          rounded="rounded-lg"
          className="bg-transparent placeholder:text-neutral-500"
        />

        <Input
          placeholder="Ex. Hiker"
          sizeClass="h-14 px-4 py-5"
          type="text"
          rounded="rounded-lg"
          className="bg-transparent placeholder:text-neutral-500"
        />

        <ButtonPrimary className="w-full self-center" sizeClass="py-4 px-6">
          Get in touch
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default SideForm;
