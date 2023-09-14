import React from 'react'
import cat from '../public/cat.jpg'
import Image from 'next/image'

const Blogss = () => {
  return (

    <>

  <section className="text-gray-600 body-font overflow-hidden">
    
   
    <div className="container mt-10 px-5 py-24  mx-auto">
      <div className="-my-8 divide-y-2 divide-gray-100">
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 px-10  md:mb-0 mb-6 flex-shrink-0 justify-center flex flex-col">
            <div className='flex  w-4/5 items-center justify-center text-center object-center'>
            <Image src={cat} width={450} height={200}  className=' rounded-2xl justify-center flex object-center items-center'/>

            </div>
          </div>
          <div className=" md:mt-10 d:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
              Bitters hashtag waistcoat fashion axe chia unicorn
            </h2>
            <p className="leading-relaxed">
              Glossier echo park pug, church-key sartorial biodiesel
              vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
              party messenger bag selfies, poke vaporware kombucha lumbersexual
              pork belly polaroid hoodie portland craft beer.
            </p>
            <a className="text-indigo-500 inline-flex items-center mt-4">
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      
      </div>
    </div>
    
  </section>
</>

  )
}

export default Blogss