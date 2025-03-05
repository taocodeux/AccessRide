import React from 'react'
import ServicesCard from './ServicesCard'
import bookImage from "../accessride-images/book services.avif"
import driveImage from "../accessride-images/driver taxi.avif"
import deliveryImage from "../accessride-images/delivery.avif"
import rentImage from "../accessride-images/car rentt.avif"
import { useNavigate } from 'react-router-dom'

function ServicesSection() {
  const navigate = useNavigate()
  return (
    <>
      <div className='lg:py-8 lg:px-12 w-full md:px-8 md:py-4 sm:px-6 sm:py-3'>
        <div className='relative'>
          <h1 className='lg:text-3xl font-bold mb-2 sm:text-2xl'>Our Services</h1>
        </div>
        <div className='flex w-full mt-4 flex-wrap gap-y-4 justify-between'>
          <ServicesCard title = "Book a ride" 
                        description="Easily book a ride on your phone for a seamless, stressfree journey to your destination."
                        image={bookImage}
                        onClick={()=>navigate("/signin")}
          />
          <ServicesCard title = "Drive for us" 
                        description="Join our community of drivers and earn by providing safe, reliable rides to customers."
                        image={driveImage}
          />
          <ServicesCard title = "Delivery" 
                        description="Need something delivered? We offer reliable delivery services for parcel, groceries and more."
                        image={deliveryImage}
          />
          <ServicesCard title = "Rental" 
                        description="Rent a car with us for flexible, convenient transportation options tailored to your needs."
                        image={rentImage}
          />
        </div>
      </div>
    </>
  )
}

export default ServicesSection