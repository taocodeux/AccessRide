import React from 'react'
import { IoMdPerson } from 'react-icons/io'
import { carSingle } from '../styles/MyStyles'

function CarSingle({carPicture, title,aboutCar, price, noOfPerson, onClick, className}) {
  return (
    <>
        <div onClick={onClick} className={`${className} ${carSingle}`}>
            <img src={carPicture} alt={title} className='w-16 h-16'/>
            <div className='leading-snug text-sm'>
                <span className='font-medium flex items-center'>{title} <IoMdPerson className='ml-2'/>{noOfPerson}</span>
                <span>{aboutCar}</span>
            </div>
            <span className='font-medium'>{price}</span>
        </div>
    </>
  )
}

export default CarSingle