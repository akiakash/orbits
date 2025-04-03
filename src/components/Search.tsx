'use client';

import React, { useState } from 'react';
import { BiCalendarWeek, BiUser } from 'react-icons/bi';
import { MdLocationPin, MdSearch } from 'react-icons/md';

import { theme } from '@/data/content';
import ButtonCircle from '@/shared/Button/ButtonCircle';
import DatePicker from '@/shared/DatePicker/DatePicker';
import Input from '@/shared/Input/Input';

import FormItem from './FormItem';

const tabs = ['Villa', 'Hotel', 'Apartment', 'Home'];

const Search = () => {
  const [activeTab, setActiveTab] = useState('Villa');

  return (
    <div className="glassmorphism2 space-y-8 rounded-2xl px-6 pb-16 pt-10 shadow-lg md:shadow-none">
      <div className="flex items-center gap-8 border-b border-neutral-300 dark:border-neutral-600">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`-mb-0.5 py-5 text-sm font-semibold md:text-base ${
              activeTab === tab
                ? 'border-b-2 border-neutral-700 dark:border-white'
                : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        <FormItem desc="Where are you going?">
          <div className="flex items-center gap-1.5">
            <MdLocationPin className="text-2xl" />
            <Input
              placeholder="Location"
              sizeClass="px-0"
              type="text"
              rounded="rounded-lg"
              className="border-transparent bg-transparent text-2xl font-bold placeholder:text-3xl placeholder:font-bold placeholder:text-black dark:placeholder:text-neutral-100"
            />
          </div>
        </FormItem>

        <FormItem desc="Add date">
          <div className="flex items-center gap-1.5">
            <BiCalendarWeek className="text-2xl" />
            <DatePicker placeholder="Check In" theme={theme} />
          </div>
        </FormItem>

        <FormItem desc="Add date">
          <div className="flex items-center gap-1.5">
            <BiCalendarWeek className="text-2xl" />
            <DatePicker placeholder="Check Out" theme={theme} />
          </div>
        </FormItem>

        <div className="flex items-center gap-5">
          <FormItem desc="Add guests" className="basis-[67%]">
            <div className="flex items-center gap-1.5">
              <BiUser className="text-2xl" />
              <Input
                placeholder="Guests"
                sizeClass="px-0"
                type="text"
                rounded="rounded-lg"
                className="border-transparent bg-transparent text-2xl  font-bold placeholder:text-3xl placeholder:font-bold placeholder:text-black dark:placeholder:text-neutral-100"
              />
            </div>
          </FormItem>

          <ButtonCircle size="w-20 h-20">
            <MdSearch className="text-5xl text-white" />
          </ButtonCircle>
        </div>
      </div>
    </div>
  );
};

export default Search;
