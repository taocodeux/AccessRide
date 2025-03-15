import React, { useState, useEffect } from 'react'
import { IoMenuOutline } from 'react-icons/io5'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import { Link } from 'react-router-dom'
import { sharedNavDivStyles, sharedSidebarButtonStyles,sharedSidebarContainerStyles,sharedSidebarLinkStyles} from '../styles/MyStyles'

function NavBar({bgColor,leftContent, rightContent,isDashboard}) {
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

  return (
    <>
      <div className='shadow-lg fixed top-0 w-screen z-[1000]'>
          {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-1/2 bg-primary transition-transform duration-300 z-50 ${
            isNavVisible ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className={sharedSidebarContainerStyles}>
            <img
              src={Logo}
              alt="Logo"
              className="border-2 border-accent w-[100px] h-[100px] bg-white rounded-full"
            />
            <Link to="/signin" className={sharedSidebarLinkStyles}>
              Book a Ride
            </Link>
            <Link to="" className={sharedSidebarLinkStyles}>
              Drive
            </Link>
            <Link to="" className={sharedSidebarLinkStyles}>
              Delivery
            </Link>
            <Link to="" className={sharedSidebarLinkStyles}>
              Rental
            </Link>
            <Link to="" className={sharedSidebarLinkStyles}>
              Contact Us
            </Link>
            <Link to="/signup" className={sharedSidebarLinkStyles}>
              Sign Up
            </Link>
            <Link to="/signin">
              <button className={sharedSidebarButtonStyles}>Sign In</button>
            </Link>
          </div>
        </div>

        {/* Navbar */}
        <nav className={`flex items-center ${isDashboard? "bg-white" :"bg-primary"} justify-between w-full lg:px-12 md:px-8 md:py-2 sm:px-6 sm:py-3 z-50`}>
          {/* Left Section */}        
          <div className={sharedNavDivStyles}>
            {leftContent}
          </div>

          {/* Right Section */}
          <div className={sharedNavDivStyles}>
            {rightContent}
          </div>

          {/* Mobile Menu Icon */}
          {!isDashboard && (
            <div className="lg:hidden md:hidden flex items-center justify-center cursor-pointer" onClick={toggleMenu}>
              <IoMenuOutline size={36} />
            </div>
          )}
        </nav>
      </div>
    </>
  )
}

export default NavBar
