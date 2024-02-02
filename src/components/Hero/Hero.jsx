import React from 'react'
import { FaYoutube } from 'react-icons/fa'

const Hero = () => {
  return (
      <>
      <div className='min-h-[700px] center relative'>
              <div className="container mt-12 sm:mt-0 pb-20 sm:pb-0">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 ">
                      {/* text content */}
                      <div className='space-y-3 md:space-y-7 flex flex-col justify-center text-center sm:text-left px-10 sm:px-0'>
                          <div data-aos="fade-up">
                              <h1 className='text-4xl md:text-6xl font-bold'>Watch Now in</h1>
                              <h1 className='text-6xl font-bold text-primary'>3D</h1>
                          </div>
                          <p className='text-gray-500 text-sm font-semibold'>
                              Kathu lives with her mother, father, and younger brother, Kittu. Her best friends are Appu, a squirrel, some grasshoppers, and a golden Oriole
                          </p>
                          <div className='mx-auto sm:mx-0'>
                              <button className='primary-btn flex items-center justify-center gap-3'>
                                  Play On
                                  <span className=''>
                                      <FaYoutube className="text-2xl" />
                                  </span>
                              </button>
                          </div>
                      </div>
                      {/* image content */}  
                      <div>
                          <img src={ HeroImg} alt=" " />
                       </div>
                      {/* review content */}
                      <div>
                          
                      </div>
                  </div>
              </div>
      </div>
      </>
  )
}

export default Hero