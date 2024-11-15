/* Author: Tobias Spilleman */

import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="flex justify-between h-[80px] px-[7vw] py-3 items-center">
      <div className="">
        <a href='https://www.tobiasspilleman.com' className="text-xl md:text-3xl font-extrabold">Tobias Spilleman</a>
      </div>
      <div className='flex justify-between items-center font-bold md:text-lg'>
        <a href="mailto:hello@tobiasspilleman.com" className='ml-5'>Contact</a>
      </div>
    </nav>
  );
}

export default NavbarComponent;