import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import DriversBenefitsSection from '../components/DriversBenefitsSection'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import { sharedLineStyles,sharedLinkStyles } from '../styles/MyStyles'

function HomePage() {
  return (
    <>
        <NavBar 
                bgColor="bg-primary"
                isDashboard={false}
                leftContent={
                <>
                  <img
                    src={Logo}
                    alt="MyLogo"
                    className="border-2 border-accent lg:w-[60px] lg:h-[60px] bg-white rounded-full md:w-[50px] md:h-[50px] sm:w-[36px] sm:h-[36px]"
                  />
                  <span className={sharedLinkStyles}>
                    Book a ride
                    <span className={sharedLineStyles}></span>
                  </span>
                  <span className={sharedLinkStyles}>
                    Drive
                    <span className={sharedLineStyles}></span>
                  </span>
                  <span className={sharedLinkStyles}>
                    Delivery
                    <span className={sharedLineStyles}></span>
                  </span>
                  <span className={sharedLinkStyles}>
                    Rental
                    <span className={sharedLineStyles}></span>
                  </span>         
                </>}
                rightContent={
                <>
                  <span className={sharedLinkStyles}>
                    Contact Us
                    <span className={sharedLineStyles}></span>
                  </span>
                  <span className={sharedLinkStyles}>
                    Sign Up
                    <span className={sharedLineStyles}></span>
                  </span>
                  <button className="border-2 border-accent lg:py-1 lg:px-5 rounded-xl lg:text-base bg-primary hover:bg-accent md:text-sm sm:text-xs md:py-1 md:px-3 sm:py-1 sm:px-2 hidden md:block">
                    Sign In
                  </button>                       
        </>}/>
        <HeroSection/>
        <ServicesSection/>
        <DriversBenefitsSection/>
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default HomePage