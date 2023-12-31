import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (

<header className="text-gray-600 body-font h-20 p-3">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <span className="ml-3 text-xl">Mercury</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href='/' className="mr-5 hover:text-gray-900">Home</Link>
      <Link  href='/' className="mr-5 hover:text-gray-900">Catagories</Link>
      <Link  href='/' className="mr-5 hover:text-gray-900">Favourites</Link>
   
    </nav>
    <button className="  mx-4 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
     sign in
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>


  )
}

export default Navbar