import React from 'react'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import { Formik, useFormik } from 'formik'
import { Link } from 'react-router-dom'

function SignUp() {
  const inputStyles = "border-2 border-secondary p-2 mb-6 rounded-xl"

  const Formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      phoneNumber:"",
      emailAddress:"",
      passWord:"",
    },
    onSubmit:(values)=>{
      console.log(Formik.values)
    },
    
  })
  return (
    <>
      <div className='p-6 flex flex-col justify-center items-center m-auto w-full h-full'>
        <div > 
          <img src={Logo} alt="Logo" className='border-2 border-accent lg:w-[100px] lg:h-[100px] bg-white rounded-full md:w-[100px] md:h-[100px] sm:w-[60px] sm:h-[60px]'/>
        </div>
        <h3 className='font-medium text-2xl'>Create an account</h3>
        <form action="" className='flex flex-col w-1/2' onSubmit={Formik.handleSubmit}>
          <label htmlFor="firstName">First Name:<span>*</span></label>
            <input type="text" id='firstName' name='firstName' value={Formik.values.firstName} onChange={Formik.handleChange} placeholder='Enter your first name' className={inputStyles} autoComplete='given-name'/>
          <label htmlFor="lastName">Last Name:<span>*</span></label>
            <input type="text" id='lastName' name='lastName' value={Formik.values.lastName} onChange={Formik.handleChange} placeholder='Enter your last name'className={inputStyles} autoComplete='family-name'/>
          <label htmlFor="phoneNumber">Phone Number:<span>*</span></label>
            <input type="number" id='phoneNumber' name='phoneNumber' value={Formik.values.phoneNumber} onChange={Formik.handleChange} placeholder='Enter your phone number'className={inputStyles} autoComplete='tel'/>
          <label htmlFor="emailAddress">emailAddress:<span>*</span></label>
            <input type="email" id='emailAddress' name='emailAddress' value={Formik.values.emailAddress} onChange={Formik.handleChange} placeholder='Enter your email address'className={inputStyles} autoComplete='email'/>
          <label htmlFor="passWord">Password:<span>*</span></label>
            <input type="password" id='passWord' name='passWord' value={Formik.values.passWord} onChange={Formik.handleChange} placeholder='Enter your password'className={inputStyles} autoComplete='current-password'/>
          <button type='submit' className='w-full bg-primary border-2 border-accent rounded-xl p-2 mb-6'>Sign Up</button>
        </form>
        <h5>Already have an account? 
          <Link to="/Signin"><span className='text-primary'> SIGN IN</span></Link>
        </h5>
      </div>
    </>
  )
}

export default SignUp