import React from 'react';
import SearchForm from './SearchForm';
import {useRef, useEffect} from 'react'
import { XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import gsap from 'gsap'

const Navbar = () => {

  const burgerRef = useRef()
  
  const navbarTl = gsap.timeline({paused:true, reversed:true})

  useEffect(()=>{
    navbarTl.to(burgerRef.current, {opacity:1, y:0, duration:1, ease: 'Power2.easeOut'})
  },[navbarTl])

  return (
    <nav className="flex justify-between space-x-5 md:space-x-10 items-center px-5 md:px-24 py-5">
        <Link href="/" passHref>
          <h1 className="font-bold text-xs md:text-base cursor-pointer active:scale-90 duration-100">SHEESHGAME</h1>
        </Link>
        <SearchForm/>
        <ul className="hidden space-x-10 font-thin text-sm md:flex">
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Support</li>
            <li className="px-5 bg-[#55359A] rounded font-semibold cursor-pointer">Login</li>
        </ul>
        <div className="md:hidden active:scale-90">
          <button onClick={()=>navbarTl.play()}>
            <svg width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="15" height="2" fill="#C4C4C4"/>
                <rect y="12" width="15" height="2" fill="#C4C4C4"/>
                <rect y="4" width="15" height="2" fill="#C4C4C4"/>
                <rect x="7" width="15" height="2" fill="#C4C4C4"/>
            </svg>
          </button>
        </div>
        <div ref={burgerRef} className="md:hidden absolute top-0 right-0 w-full h-24 bg-black bg-opacity-50 backdrop-blur-sm  px-5 opacity-0 translate-y-[-50vh]">
        <ul className="flex justify-between space-x-5 font-thin text-xs items-center h-full ">
            <li className='cursor-pointer active:scale-90' onClick={()=>navbarTl.reverse()}><XIcon className="h-5"/></li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Pricing</li>
            <li className='cursor-pointer'>Support</li>
            <li className="px-5 bg-[#55359A] rounded font-semibold cursor-pointer">Login</li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;
