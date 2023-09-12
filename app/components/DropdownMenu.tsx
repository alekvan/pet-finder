'use client';

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useWindowSize } from '@uidotdev/usehooks';
import Link from 'next/link';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const windowSize = useWindowSize();

  return (
    <>
      <button onClick={() => setIsOpen((prevState) => !prevState)}>
        {isOpen ? <GrClose size={23} /> : <GiHamburgerMenu size={23} />}
      </button>
      {isOpen &&
        (windowSize.width && windowSize.width < 640 ? (
          <div className='h-72 w-full absolute left-0 flex justify-around items-center text-lg flex-col top-16 border-2 border-orange-dark bg-orange-light p-2 z-10'>
            <Link href='/'>HOME</Link>
            <Link href='/dogs'>Dogs</Link>
            <Link href='/cats'>Cats</Link>
            <Link href='/other-pets'>Other Pets</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/questions'>Q&A</Link>
          </div>
        ) : (
          <div className='h-36 w-64 absolute right-0 flex justify-around items-center text-lg flex-col top-16 border-2 border-orange-dark bg-orange-light p-2 z-10'>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/questions'>Q&A</Link>
          </div>
        ))}
    </>
  );
};

export default DropdownMenu;
