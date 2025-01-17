import React from 'react'
import happyDriver from "../accessride-images/happy driver.avif"

function DriversBenefitsSection() {
  return (
    <>
        <div className='h-full justify-center w-full lg:py-8 lg:px-12 md:flex md:flex-row md:px-8 md:py-4 sm:px-6 sm:py-3 sm:flex-col'>
            <div className='md:w-1/2 sm:w-full'>
              <div className='relative'>
                <h1 className='lg:text-3xl font-bold mb-2 sm:text-2xl'>Our Driver's benefit</h1>
                <span className='absolute left-0 bottom-0 w-0 h-1 bg-accent transition-all duration-300 ease-in-out group-hover:w-full'></span>
              </div>
              <ul className='list-decimal pl-4 marker:text-black marker:marker:border-2 marker:border-accent marker:rounded-lg'>
                <li className='text-lg font-bold leading-loose'>
                  Drive more, earn more
                  <span className='text-base font-normal block leading-loose'>The more rides you complete, the higher your earnings. Maximize your income with increased trips.</span>
                </li>
                <li className='text-lg font-bold leading-loose'>
                  Set your schedule
                  <span className='text-base font-normal block leading-loose'>Work on your own time, choose the hours that suit you best, whether part-time or full-time.</span>
                </li>
                <li className='text-lg font-bold leading-loose'>
                  Get paid weekly
                  <span className='text-base font-normal block leading-loose'>Enjoy the convenience of weekly payouts for the work you've done, providing regular and reliable income.</span>
                </li>
              </ul>
            </div>
            <img src={happyDriver} alt="HappyDriver" className='md:w-1/2 md:object-contain sm:w-full flex items-center justify-center'/>
        </div>
    </>
  )
}

export default DriversBenefitsSection