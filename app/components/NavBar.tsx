'use client';
import React from 'react';
import DropdownMenu from './DropdownMenu';
import { useWindowSize } from '@uidotdev/usehooks';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavBar = () => {
  const windowSize = useWindowSize();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <nav className='flex lg:w-full sm:w-full justify-between px-4 lg:px-8 md:px-8 h-16 place-items-center text-blue-dark bg-orange-light text-lg'>
        <div className='flex justify-between w-52'>
          <Link href='/signin'>Логин</Link>
          <span className='text-lg font-bold'> | </span>
          <Link href='/signup'>Регистрација</Link>
        </div>
        <div className='flex justify-between float-right md:w-62 lg:w-64 sm:w-60'>
          {windowSize.width && windowSize.width > 639 && (
            <div className='flex w-52 justify-between'>
              <Link href='/cats'>Cats</Link>
              <Link href='/dogs'>Dogs</Link>
              <Link href='/other-pets'>Other Pets</Link>
            </div>
          )}
          {windowSize.width && <DropdownMenu />}
        </div>
      </nav>
    </motion.div>
  );
};

export default NavBar;
