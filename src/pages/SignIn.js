import React from 'react'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import {Link} from "react-router-dom"
import { useFormik} from 'formik'

function SignIn() {
  const inputStyles = "border-2 border-secondary p-2 mb-6 rounded-xl"
  return (
    <>
        <div className='p-6 flex flex-col justify-center items-center m-auto w-full h-full'>
            <div >
                <img src={Logo} alt="Logo" className='border-2 border-accent lg:w-[100px] lg:h-[100px] bg-white rounded-full md:w-[100px] md:h-[100px] sm:w-[60px] sm:h-[60px]'/>
            </div>
            <h3 className='font-medium text-2xl'>Welcome back! Sign in</h3>
            <form action="" className='flex flex-col w-1/2'>
                <label htmlFor="EmailAddress">EmailAddress:<span>*</span></label>
                    <input type="email" id='EmailAddress' placeholder='Enter your email address'className={inputStyles}/>
                <label htmlFor="Password">Password:<span>*</span></label>
                    <input type="password" id='Password' placeholder='Enter your password'className={inputStyles}/>
                <button className='w-full bg-primary border-2 border-accent rounded-xl p-2 mb-6'>Sign In</button>
            </form>
            <h5>Don't have an account? 
                <Link to="/Signup"><span className='text-primary'> SIGN UP</span></Link>
            </h5>
      </div>
    </>
  )
}

export default SignIn