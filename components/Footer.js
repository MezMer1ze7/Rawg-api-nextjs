import React from 'react';

const Footer = () => {
  return (
  <footer className="bg-[#383838] h-24 px-5 md:px-24 py-2 mt-10">
    <div className=" flex justify-between">
      <h1 className="text-xl">Sheesh Game</h1>
      <h1 className="text-[#7B7B7B]">Vairam - India</h1>
    </div>
    <div className='font-thin text-xs flex flex-col items-center md:items-baseline text-[#aaaaaa]'>
      <ul className="flex py-2 space-x-4">
        <li className='cursor-pointer'>Private Policy</li>
        <li className='cursor-pointer'>Manage my privacy</li>
        <li className='cursor-pointer'>Legal</li>
        <li className='cursor-pointer'>Contact</li>
      </ul>
      <div className="">
        <p>	&copy; 2022 Sheesh</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
