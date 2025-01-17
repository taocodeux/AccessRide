import React from 'react'
import aboutUs from "../accessride-images/AboutUs.avif"

function AboutUs() {
  return (
    <>
      <div className='h-full justify-center w-full lg:py-8 lg:px-12 md:flex md:flex-row md:px-8 md:py-4 sm:px-6 sm:py-3 sm:flex-col'>
            <div className='md:w-1/2 sm:w-full'>
              <div className='relative'>
                <h1 className='lg:text-3xl font-bold mb-2 sm:text-2xl'>About us</h1>
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-accent transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </div>
              <ul className='list-decimal pl-4 marker:text-black marker:marker:border-2 marker:border-accent marker:rounded-lg'>
                <li className='text-lg font-bold leading-loose'>
                  Accessible for All
                  <span className='text-base font-normal block leading-loose'>We prioritize inclusivity by offering a transportation service tailored to meet the needs of everyone, especially individuals with disabilities.</span>
                </li>
                <li className='text-lg font-bold leading-loose'>
                  Expanding Horizons
                  <span className='text-base font-normal block leading-loose'>Operating in 10+ cities and growing, we connect thousands of riders daily to their destinations with ease and reliability.</span>
                </li>
                <li className='text-lg font-bold leading-loose'>
                  Trained Specialty Drivers
                  <span className='text-base font-normal block leading-loose'>ur drivers come with professional experience in care and support, ensuring they are equipped to assist passengers with disabilities while making every journey comfortable and reassuring.</span>
                </li>
              </ul>
            </div>
            <img src={aboutUs} alt="aboutUs" className='md:w-1/2 md:object-contain sm:w-full flex items-center justify-center'/>
        </div>
    </>
  )
}

export default AboutUs