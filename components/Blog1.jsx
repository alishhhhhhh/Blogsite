import Image from 'next/image'
import React from 'react'
import scl from '../public/scl.jpg'
import Link from 'next/link'

const Blog1 = () => {
    return (
        <div className='px-16 pl-28 inline-block overflow-hidden rounded-xl '>
            <div className=' p top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-black/90 
rounded-3xl z-0 '>

                <Image src={scl}
                    alt='img'
                    height={550}
                    width={550}
                    className='overflow-hidden w-70% h-40% object-cover rounded-3xl ' />


            </div>

         


        </div>
    )
}

export default Blog1