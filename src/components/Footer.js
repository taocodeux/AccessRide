import React from 'react'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import facebook from "../accessride-images/facebook.png"
import instagram from "../accessride-images/instagram.png"
import X from "../accessride-images/X.png"

function Footer() {
    const copyright = "\u00A9"
  return (
    <>
        <div className='md:flex md:flex-row justify-between h-full w-full lg:py-20 lg:px-12  md:px-8 md:py-4 sm:px-6 sm:py-3 sm:flex-col'>
            <div className='flex flex-col lg:leading-[5] md:w-1/4 md:leading-relaxed sm:w-full'>
                <img src={Logo} alt="Logo" className="border-2 border-accent lg:w-[60px] lg:h-[60px] bg-white rounded-full mb-2 md:w-[50px] md:h-[50px] sm:w-[36px] sm:h-[36px]"/>
                <span className='font-medium'>{copyright}2025 AccessRide. All rights reserved.</span>
            </div>
            <div className='flex flex-col leading-[2.5] md:w-1/4 sm:w-full'>
                <span className='font-medium mb-2'>AccessRide</span>
                <span className='hover:text-accent'>Book</span>
                <span className='hover:text-accent'>Drive</span>
                <span className='hover:text-accent'>Delivery</span>
                <span className='hover:text-accent'>Rental</span>
            </div>
            <div className='flex flex-col leading-[2.5] md:w-1/4 sm:w-full'>
                <span className='font-medium mb-2'>Partner with us</span>
                <span className='hover:text-accent'>Register as a driver</span>
                <span className='hover:text-accent'>Register as a business owner</span>
                <span className='hover:text-accent'>Our branches</span>
            </div>
            <div className='flex flex-col leading-[2.5] md:w-1/4 sm:w-full'>
                <span className='font-medium mb-2'>Contact us on:</span>
                <span>07436500346</span>
                <span className='font-medium mb-2'>Reach out to us on:</span>
                <div className='flex gap-2'>
                    <div className='bg-primary rounded-full border-2 border-accent p-2 transform transition-transform duration-300 hover:translate-y-[3px] hover:translate-x-[3px]'>
                        <img src={facebook} alt="facebook" className='object-contain w-[15px] h-[15px]' />
                    </div>                    
                    <div className='bg-primary rounded-full border-2 border-accent p-2 transform transition-transform duration-300 hover:translate-y-[3px] hover:translate-x-[3px]'>
                        <img src={instagram} alt="instagram" className='object-contain w-[15px] h-[15px]'/>     
                    </div>
                    <div className='bg-primary rounded-full border-2 border-accent p-2 transform transition-transform duration-300 hover:translate-y-[3px] hover:translate-x-[3px]'>
                        <img src={X} alt="X" className='object-contain w-[15px] h-[15px]'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer