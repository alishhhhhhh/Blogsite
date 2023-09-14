import React from 'react'
import { CiSearch } from 'react-icons/Ci'
const Search = () => {
  return (
     
    <div className='outline-0 flex items-center lg:px-40 p-5 lg:mt-10 mt-3 justify-center gap-2 w-full  py-3 '>
    <div className='flex items-center space-x-2 bg-white shadow-xl rounded-full  outline outline-1 outline-green-400 px-6 py-4 border-0 flex-1'>
        <CiSearch className='h-5 w-5 text-gray-600 md:max-w-5xl' />
        <input type="text" name='searchTerm' placeholder='search...' className='   flex justify-center items-centeroutline-none flex-1' />
    </div>
    </div>
  )
}

export default Search