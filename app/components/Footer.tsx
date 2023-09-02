import Link from 'next/link';
import React from 'react';
import {
  SlSocialGithub,
  SlSocialLinkedin,
  SlSocialInstagram,
} from 'react-icons/sl';

const Footer = () => {
  return (
    <div className='flex flex-col justify-between bg-orange-dark text-blue-dark lg:px-56 py-12 px-8 h-fit'>
      <section className='flex items-center flex-col lg:flex-row w-full lg:justify-evenly'>
        <ul className='flex flex-col justify-between items-center'>
          <li className='font-bold'>Header Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
        <ul className='flex flex-col justify-between items-center mt-4 lg:mt-0'>
          <li className='font-bold'>Header Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </section>

      <div className='flex justify-center w-full mt-10 text-3xl'>
        <Link target='_blank' href='https://github.com/alekvan'>
          <SlSocialGithub />
        </Link>
        <Link href='#' className='mx-12'>
          <SlSocialInstagram />
        </Link>
        <Link href='#'>
          <SlSocialLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
