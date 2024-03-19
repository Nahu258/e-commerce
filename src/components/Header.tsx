'use client'
import Link from 'next/link'
import { useState } from 'react'

function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false)

  return (
    <header className='bg-[#222]'>
      <div className='max-w-[880px] mx-auto px-5'>
        <div className='flex justify-between py-5 px-0'>
          <Link href='/' className='text-white no-underline text-xl font-bold relative z-3'>Ecommerce</Link>
          <nav className={`${mobileNavActive ? 'block' : 'hidden'} gap-4 fixed top-0 bottom-0 left-0 right-0 py-[70px] px-[20px] pb-[20px] bg-[#222] md:flex md:static md:p-0`}>
            <Link href='/' className='nav-link'>Home</Link>
            <Link href='/products' className='nav-link'>All Products</Link>
            <Link href='/categories' className='nav-link'>Categories</Link>
            <Link href='/cart' className='nav-link'>Cart (0)</Link>
          </nav>
          <button className='bg-transparent w-8 h-8 border-0 text-white cursor-pointer relative z-3 md:hidden' onClick={() => setMobileNavActive(!mobileNavActive)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
