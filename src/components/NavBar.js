import React, { useState, useEffect } from 'react'
import Logo from '../accessride-images/AccessRide-logo-removebg-preview.png'
import { IoMenuOutline } from 'react-icons/io5'

function NavBar() {
  const [isNavVisible, setisNavVisible] = useState(false)

  const toggleMenu = () => {
    setisNavVisible(!isNavVisible)
  }

  useEffect(() => {
    const handleResize = ()=>{
      if(window.innerWidth >= 768 && isNavVisible){
        setisNavVisible(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)

    }
  }, [isNavVisible])
  
  const sharedLinkStyles = "relative lg:inline-flex md:inline-flex group lg:text-base md:text-sm sm:hidden"
  const sharedLineStyles = "absolute left-0 bottom-0 w-0 h-1 bg-accent transition-all duration-300 ease-in-out group-hover:w-full"
  const sharedNavDivStyles = "flex lg:gap-10 lg:text-lg lg:font-medium items-center md:font-medium md:gap-6 sm:font-medium sm:gap-2"
  const sharedSidebarLinkStyles = "text-sm hover:text-accent transition-colors duration-300 overflow-y-auto"
  const sharedSidebarButtonStyles = "border-2 border-accent py-1 px-3 rounded-xl hover:bg-accent transition-colors duration-300"
  const sharedSidebarContainerStyles = "flex flex-col gap-3 items-start p-6" 

  return (
    <>
      <div className='shadow-lg fixed top-0 w-screen'>
          {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-1/2 bg-primary transition-transform duration-300 z-50 ${
            isNavVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className={sharedSidebarContainerStyles}>
            <img
              src={Logo}
              alt="Logo"
              className="border-2 border-accent w-[100px] h-[100px] bg-white rounded-full"
            />
            <a href="#" className={sharedSidebarLinkStyles}>
              Book a Ride
            </a>
            <a href="#" className={sharedSidebarLinkStyles}>
              Drive
            </a>
            <a href="#" className={sharedSidebarLinkStyles}>
              Delivery
            </a>
            <a href="#" className={sharedSidebarLinkStyles}>
              Rental
            </a>
            <a href="#" className={sharedSidebarLinkStyles}>
              Contact Us
            </a>
            <a href="#" className={sharedSidebarLinkStyles}>
              Sign Up
            </a>
            <button className={sharedSidebarButtonStyles}>Sign In</button>
          </div>
        </div>

        {/* Navbar */}
        <nav className="flex items-center bg-primary justify-between w-full lg:py-3 lg:px-10 md:px-8 md:py-2 sm:px-6 sm:py-3">
          {/* Left Section */}
          <div className={sharedNavDivStyles}>
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
          </div>

          {/* Right Section */}
          <div className={sharedNavDivStyles}>
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
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="lg:hidden md:hidden flex items-center justify-center cursor-pointer"
            onClick={toggleMenu}
          >
            <IoMenuOutline size={36} />
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
