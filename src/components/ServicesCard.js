import React from 'react'

function ServicesCard({title, description, image}) {
  return (
    <>
        <div className='md:w-[calc(50%-0.6rem)] h-auto md:px-8 py-4 flex flex-col border-2 border-primary transform transition-transform duration-300 hover:translate-y-[3px] hover:translate-x-[3px] sm:w-full sm:p-4'>
            <span className='flex justify-center items-center text-2xl font-medium mb-2'>{title}</span>
            <span className='text-lg'>{description}</span>
            <div className='flex justify-end items-end mt-auto'>
              <img src={image} alt={title} className=' w-1/2 object-contain' />
            </div>
        </div>
    </>
  )
}

export default ServicesCard