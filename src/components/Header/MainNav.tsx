import Image from 'next/image';
import React from 'react';

import { NavLinks } from '@/data/content';
import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import SwitchDarkMode from '@/shared/SwitchDarkMode/SwitchDarkMode';

import NavigationItem from '../NavItem';
import MenuBar from './MenuBar';

const MainNav = () => {
  return (
    <div className="container flex items-center justify-between lg:justify-normal">
      <div className="flex-1">
        <Image src="/logo/logo.png" width={120} height={40} alt="" />
      </div>
      <div className="hidden items-center justify-center lg:flex">
        {NavLinks.map((item) => (
          <NavigationItem menuItem={item} key={item.id} />
        ))}
      </div>
      <div className="hidden flex-1 items-center justify-end gap-5 lg:flex">
        {/* <SwitchDarkMode /> */}
        <ButtonPrimary href="" className="" sizeClass="px-7 py-4">
          Contact Us
        </ButtonPrimary>
      </div>
      <div className="flex items-center gap-5 lg:hidden">
        <SwitchDarkMode />
        <MenuBar />
      </div>
    </div>
  );
};

export default MainNav;
