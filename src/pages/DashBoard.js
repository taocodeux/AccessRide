import {React,useState} from 'react'
import NavBar from '../components/NavBar'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import { sharedLineStyles,sharedLinkStyles } from '../styles/MyStyles'
import ProfilePix from "../accessride-images/profilePix.png"
import BookingForm from '../components/BookingForm'
import Map from '../components/Map'


function DashBoard() {
  const [locations, setLocations] = useState({ pickUp: null, dropOff: null })
  return (
    <>
      <NavBar
              bgColor="bg-white"
              isDashboard={true}
              leftContent={
              <>
                <img
                  src={Logo}
                  alt="MyLogo"
                  className="border-2 border-accent lg:w-[60px] lg:h-[60px] bg-white rounded-full md:w-[50px] md:h-[50px] sm:w-[36px] sm:h-[36px]"
                />
                <span className={sharedLinkStyles}>
                  Your Trip
                  <span className={sharedLineStyles}></span>
                </span>
                <span className={sharedLinkStyles}>
                  Rent
                  <span className={sharedLineStyles}></span>
                </span>         
              </>}
              rightContent={
              <>
                <span className={sharedLinkStyles}>
                  Activity
                  <span className={sharedLineStyles}></span>
                </span>
                <button className="border-2 border-accent rounded-full hover:bg-accent lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] sm:w-[36px] sm:h-[36px]">
                  <img src={ProfilePix} alt="" />
                </button>
              </>}
      />
      <div className='gap-6 lg:pt-24 md:pt-24 sm:pt-24 md:h-screen flex justify-between w-full lg:py-8 lg:px-12 md:px-8 md:py-4 md:flex-row sm:px-6 sm:py-3 sm:flex-col'>
        <BookingForm onSetLocations={setLocations}/>
        <Map locations={locations}/>
      </div>
    </>
  )
}

export default DashBoard