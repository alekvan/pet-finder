'use client';

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useWindowSize } from '../hooks/useWindowSize';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const width = useWindowSize().width;

  return (
    <>
      <button onClick={() => setIsOpen((prevState) => !prevState)}>
        {isOpen ? <GrClose size={23} /> : <GiHamburgerMenu size={23} />}
      </button>
      {isOpen &&
        (width < 640 ? (
          <div className='h-72 w-full absolute left-0 flex justify-around items-center text-lg flex-col top-16 border-2 border-orange-dark bg-orange-light p-2 z-10'>
            <a href='#'>Dogs</a>
            <a href='#'>Cats</a>
            <a href='#'>Other Pets</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Q&A</a>
          </div>
        ) : (
          <div className='h-36 w-64 absolute right-0 flex justify-around items-center text-lg flex-col top-16 border-2 border-orange-dark bg-orange-light p-2 z-10'>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Q&A</a>
            <a href='#'></a>
          </div>
        ))}
    </>
  );
};

export default DropdownMenu;
