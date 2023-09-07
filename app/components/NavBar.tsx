'use client';
import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { useWindowSize } from '@uidotdev/usehooks';

const NavBar = () => {
  const windowSize = useWindowSize();

  return (
    <nav className='flex lg:w-full sm:w-full justify-between px-4 lg:px-8 md:px-8 h-16 place-items-center text-blue-dark bg-orange-light text-lg'>
      <div className='flex justify-between w-52'>
        <a href='/signin'>Логин</a>
        <span className='text-lg font-bold'> | </span>
        <a href='/signup'>Регистрација</a>
      </div>
      <div className='flex justify-between float-right md:w-62 lg:w-60 sm:w-60'>
        {windowSize.width && windowSize.width > 639 && (
          <div className='flex w-48 justify-between'>
            <a href='/cats'>Cats</a>
            <a href='/dogs'>Dogs</a>
            <a href='/other'>Other Pets</a>
          </div>
        )}
        {windowSize.width && <DropdownMenu />}
      </div>
    </nav>
  );
};

export default NavBar;
