import React from 'react'
import image from "../accessride-images/herosectionpix.png"
import google from "../accessride-images/google.png"
import appStore from "../accessride-images/app store.png"

function HeroSection() {
  return (
    <>
      <div className='mb-4 md:h-full flex justify-between w-full lg:py-8 lg:px-12 md:px-8 md:py-4 md:flex-row sm:px-6 sm:py-3 sm:flex-col'>
        <div className='flex flex-col flex-grow md:w-1/2 sm:w-full pt-24'>
          <h1 className='lg:text-6xl font-semibold lg:w-3/4 leading-tight sm:text-[35px] sm:w-full'>Moving with Comfort</h1>
          <span className='lg:text-lg leading-relaxed lg:pt-6 md:text-md md:pt-4 sm:text-sm sm:pt-2'>AccessRide is your trusted partner for accessible and reliable transportation. Designed with your needs in mind, our app ensures convenience, comfort, and safety, making every journey stress-free and enjoyable.</span>
          <div className='flex gap-3 lg:pt-6 md:pt-4 sm:pt-2'>
            <button>
              <img src={google} alt="" className='w-[150px]'/>
            </button>
            <button>
              <img src={appStore} alt="" className='w-[150px]'/>
            </button>
          </div>
        </div>
        <div className='flex-grow md:w-1/2 lg:w-1/2 flex items-center justify-center sm:w-full'>
          <img src={image} alt="herosectionimage" className='lg:w-3/4 sm:m-auto md:object-contain'/>
        </div>
      </div>
    </>
    
  )
}

export default HeroSection