import Link from 'next/link'
import React from 'react'
import scl from '../public/leg.jpg'
import Image from 'next/image'

const Blog2 = () => {
  return (
    <div className='grid grid-cols-12 gap-4 items-center text-gray-800'>
        <Link href='/' className='col-span-4 rounded-2xl overflow-hidden'>

        <Image  src={scl}
                    alt='img'
                   
                   width="1/2"
                    className='aspect-square w-full h-full object-cover object-center ' />



        </Link>
        <div className='col-span-8 w-full p-5 pr-10'>
          <span className='uppercase text-gray-900 font-semibold text-sm'> Mercury is </span>
          <Link href='/' className='inline-block my-1'>
            <h2 className='font-semibold text-lg'>
              <span className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, quam atque minima saepe consequatur ullam.</span>
            </h2>
          </Link>

        </div>




    </div>
  )
}

export default Blog2