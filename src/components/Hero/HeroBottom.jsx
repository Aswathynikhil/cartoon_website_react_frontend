import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const HeroBottom = () => {
  return (
      <>
          {/* kathu text background  */}
      <div className='absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-0 w-full  '>
              <h1 className='text-6xl sm:text-[140px] md:text-[190px] font-bold text-center uppercase text-gray-300/25'>Kathu</h1>       
          </div>
          {/* bottom section */}
          <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="0"
              
              className='absolute bottom-0 left-0 w-full'>
              <div className='grid grid-cols-3 container'>
                  {/* first col */}
                  <div className="hidden sm:block">
                      <div className='font-semibold'>
                          <p className='text-gray-500'>Kerala</p>
                          <p className='text-sm text-primary'>India</p>
                      </div>
                      <div className="font-semibold">
                          <p className="text-gray-500">2 February 2024</p>
                      </div>
                  </div>
                  {/* second col */}

                  <div className="flex justify-center items-center">
                      <span className='hidden sm:block'>
                          <FaArrowDown className="" />
                   </span>
                  </div>
                  {/* third col */}
                  <div className='flex justify-center sm:justify-end mb-4 '>
                      <div className='flex flex-col sm:flex-col gap-5 '>
                          <div className="bg-white rounded-full p-2 shadow-md hover:scale-110 duration-200">
                            <IoIosArrowBack className="text-primary" />
                          </div>
                      
                      <div className=' bg-primary rounded-full p-2 shadow-md hover:scale-0 duration-200'>
                          <IoIosArrowForward className="text-white" />
                     </div>
                     </div>
                  </div>
                  

              </div>
          </div>
      </>
  )
}

export default HeroBottom