import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import DriversBenefitsSection from '../components/DriversBenefitsSection'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
        <NavBar/>
        <HeroSection/>
        <ServicesSection/>
        <DriversBenefitsSection/>
        <AboutUs/>
        <Footer/>
    </>
  )
}

export default HomePage