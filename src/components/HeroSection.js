import React from 'react'
import image from "../accessride-images/herosectionpix.png"
import google from "../accessride-images/image-removebg-preview.png"
import appStore from "../accessride-images/Download_on_the_App_Store_Badge.svg.png"

function HeroSection() {
  return (
    <>
      <div className='md:h-screen flex justify-between w-full lg:py-8 lg:px-10 border-b-2 border-primary md:px-8 md:py-4 md:flex-row sm:px-6 sm:py-3 sm:flex-col'>
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
          <img src={image} alt="herosectionimage" className='lg:w-3/4 sm:m-auto'/>
        </div>
      </div>
    </>
    
  )
}

export default HeroSection