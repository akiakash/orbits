'use client';

import type { DatepickerProps } from 'flowbite-react';
import { Datepicker, Flowbite } from 'flowbite-react';
import type { FC } from 'react';
import React from 'react';

const DatePicker: FC<DatepickerProps> = ({ ...args }) => {
  return (
    <div className="relative">
      <Flowbite
        theme={{
          theme: {
            textInput: {
              field: {
                icon: {
                  base: 'hidden',
                  svg: 'hidden',
                },
                rightIcon: {
                  base: 'hidden',
                  svg: 'hidden',
                },
                input: {
                  base: 'bg-transparent focus:border-transparent px-0',
                  sizes: {
                    lg: 'text-2xl font-bold',
                  },
                },
              },
            },
          },
        }}
      >
        <Datepicker
          sizing="lg"
          style={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            width: '100%',
          }}
          {...args}
        />
      </Flowbite>
    </div>
  );
};

export default DatePicker;
