"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Nav = () => {

  const pathname = usePathname();


  return (
    <div className='w-full h-20 bg-white flex justify-between items-center px-6 fixed top-0'>
      <div className='text-black font-bold text-2xl'>🌎 Travel Guide</div>
      <div className='flex gap-5 justify-center items-center'>
        <Link href="/" className={pathname === "/" ? "text-blue-500" : ""}><h1 className='font-semibold text-lg'>Home</h1></Link>
        <Link href="/destination" className={pathname === "/destination" ? "text-blue-500" : ""}><h1 className='font-semibold text-lg'>Destination</h1></Link>
        <Link href="/contact" className={pathname === "/contact" ? "text-blue-500" : ""}><h1 className='font-semibold text-lg'>Contact</h1></Link>
      </div>
    </div>
  )
}

export default Nav