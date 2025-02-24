import {React, useState} from 'react'
import CarSingle from './CarSingle'
import { FaArrowRight } from 'react-icons/fa'
import { ellipsis } from '../styles/MyStyles'
import carPicture from "../accessride-images/car.avif"
import vanPicture from "../accessride-images/van.avif"
import petCarPicture from "../accessride-images/pet car.avif"
import PaymentDiv from './PaymentDiv'

function CarsOptions({pickUp, dropOff}) {
    const [selectedCar, setSelectedCar] = useState(null)
    const stringPickUp = pickUp || "Select Pickup"
    const stringDropOff = dropOff || "Select Dropoff"

    const handleSelect =(title)=>{
        setSelectedCar(title)
    }

    const selectedClass = "shadow-xl border-2 border-orange-400"
  return (
    <>
        <div className='h-auto md:w-1/4 border-2 border-secondary rounded-xl px-4 pt-4 flex flex-col sm:w-full'>
            <h3 className='lg:text-xl font-bold mb-2 sm:text-lg'>Choose a Trip</h3>
            <div className='flex justify-between border-2 border-secondary rounded-xl p-2 items-center h-12 w-full'>
                <span className={ellipsis}>{stringPickUp}</span>
                <span><FaArrowRight  size={20}/></span>
                <span className={ellipsis}>{stringDropOff}</span>
            </div>
            <div className='overflow-y-auto scrollbar-hide'>
                <CarSingle className={selectedCar === "ARide X"? selectedClass:""} onClick={()=>handleSelect("ARide X")} carPicture={carPicture} title="ARide X" aboutCar="Affordable everyday trip" price="£10.50" noOfPerson="4"/>  
                <CarSingle className={selectedCar === "ARide XL"? selectedClass:""} onClick={()=>handleSelect("ARide XL")} carPicture={vanPicture} title="ARide XL" aboutCar="Affordable rides for groups up to 6" price="£16.00" noOfPerson="6"/>  
                <CarSingle className={selectedCar === "ARide Premium"? selectedClass:""} onClick={()=>handleSelect("ARide Premium")} carPicture={carPicture} title="ARide Premium" aboutCar="Ride with exclusive" price="£17.10" noOfPerson="2"/>  
                <CarSingle className={selectedCar === "ARide Pet"? selectedClass:""} onClick={()=>handleSelect("ARide Pet")} carPicture={petCarPicture} title="ARide Pet" aboutCar="Ride with your pet" price="£18.20" noOfPerson="3"/>  
            </div>
            <PaymentDiv/>
        </div>
    </>
  )
}

export default CarsOptions