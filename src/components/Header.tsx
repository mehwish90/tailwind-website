"use client";

import React, {useState} from 'react';
import Link from 'next/link'
import { FaShoppingCart } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
const Header = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const toggleMenu=() =>{
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu=() =>{
setIsMenuOpen(false);
  };
  return (
    <header className="bg-[rgb(219,68,126)] text-white p-5 flex justify-between items-center px-9 relative z-10">
    
    <h1 className="text-5xl font-bold ">
      Kidz World👩🏼‍🤝‍👩🏻
    </h1> 
      
      
    <nav className="hidden md:flex gap-10 text-[#f0f8ff] font-bold hover:underline  ">
      <Link href="/#" onClick={closeMenu} >Home</Link>
      <Link href="/About" onClick={closeMenu}>About</Link>
      <Link href="/Contact" onClick={closeMenu} >Contact</Link>
      <Link href="/Toys" onClick={closeMenu} >Toys</Link>
      <FaShoppingCart  className='text-[#f0f8ff]  text-xl'/>
    </nav>
    <div className='md:hidden flex item-center'>
    <HiMenuAlt1  className='text-[#f0f8ff] text-3xl cursor-pointer'onClick={toggleMenu}/>
    </div>
    <div className={`${
  isMenuOpen ? 'block' : 'hidden'
} absolute top-0 w-full h-full bg-[rgb(219,68,126)] p-8 md:hidden z-20`}>
  <div className='  flex justify-end  '>
    <HiX className='text-[#f0f8ff]  text-3xl cursor-pointer' onClick={toggleMenu}/>
  </div>
  <nav className="flex  flex-row items-center gap-3 text-[#f0f8ff] font-bold hover:underline  ">
      <Link href="/#" onClick={closeMenu} >Home</Link>
      <Link href="/About" onClick={closeMenu}>About</Link>
      <Link href="/Contact" onClick={closeMenu} >Contact</Link>
      <Link href="/Toys" onClick={closeMenu} >Toys</Link>
      <FaShoppingCart  className='text-[#f0f8ff]  text-xl'/>
    </nav>
</div>


    
    </header>
  )
}
export default Header