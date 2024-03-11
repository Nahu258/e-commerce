import Link from 'next/link'

function Header() {
  return (
    <header className='bg-gray-900'>
      <div className='max-w-[880px] mx-auto px-5'>
        <div className='flex justify-between py-5'>
          <Link href='/' className='block text-white text-xl md:text-base font-bold py-2'>Ecommerce</Link>
          <nav className='hidden md:flex flex-col md:flex-row gap-4'>
            <Link href='/' className='nav-link'>Home</Link>
            <Link href='/products' className='nav-link'>All Products</Link>
            <Link href='/categories' className='nav-link'>Categories</Link>
            <Link href='/cart' className='nav-link'>Cart (0)</Link>
          </nav>
          <button className='bg-transparent w-10 h-10 md:hidden text-white cursor-pointer'>
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
