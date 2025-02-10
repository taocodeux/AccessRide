import React from 'react'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import { useFormik } from 'formik'
import * as yup from "yup"
import { Link, useNavigate } from 'react-router-dom'
import { inputStyles,errorStyles } from '../styles/MyStyles'

function SignUp() {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      phoneNumber:"",
      emailAddress:"",
      passWord:"",
    },
    onSubmit:(values)=>{
      localStorage.setItem("formValues", JSON.stringify(values))
      navigate("/signin")
    },
    validationSchema:yup.object({
      firstName:yup.string().required("compulsory*"),
      lastName:yup.string().required("compulsory*"),
      phoneNumber:yup.string().required("compulsory*"),
      emailAddress:yup.string().email("please enter a valid email").required("compulsory*"),
      passWord:yup.string().min(10, "password must be at least 10 characters").required("compulsory*"),
    })   
  })
  return (
    <>
      <div className='p-6 flex flex-col justify-center items-center m-auto w-full h-full'>
        <div > 
          <img src={Logo} alt="Logo" className='border-2 border-accent lg:w-[100px] lg:h-[100px] bg-white rounded-full md:w-[100px] md:h-[100px] sm:w-[60px] sm:h-[60px]'/>
        </div>
        <h3 className='font-medium text-2xl'>Create an account</h3>
        <form className='flex flex-col w-1/2' onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
            <input type="text" id='firstName' name='firstName' value={formik.values.firstName} onChange={formik.handleChange} placeholder='Enter your first name' onBlur={formik.handleBlur} className={inputStyles} autoComplete='given-name'/>
            {formik.touched.firstName && formik.errors.firstName ?(<div className={errorStyles}>{formik.errors.firstName}</div>): null}
          <label htmlFor="lastName">Last Name:</label>
            <input type="text" id='lastName' name='lastName' value={formik.values.lastName} onChange={formik.handleChange} placeholder='Enter your last name' onBlur={formik.handleBlur} className={inputStyles} autoComplete='family-name'/>
            {formik.touched.lastName && formik.errors.lastName ?(<div className={errorStyles}>{formik.errors.lastName}</div>): null}
          <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="number" id='phoneNumber' name='phoneNumber' value={formik.values.phoneNumber} onChange={formik.handleChange} placeholder='Enter your phone number' onBlur={formik.handleBlur} className={inputStyles} autoComplete='tel'/>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ?(<div className={errorStyles}>{formik.errors.phoneNumber}</div>): null}
          <label htmlFor="emailAddress">emailAddress:</label>
            <input type="email" id='emailAddress' name='emailAddress' value={formik.values.emailAddress} onChange={formik.handleChange} placeholder='Enter your email address' onBlur={formik.handleBlur} className={inputStyles} autoComplete='email'/>
            {formik.touched.emailAddress && formik.errors.emailAddress ?(<div className={errorStyles}>{formik.errors.emailAddress}</div>): null}
          <label htmlFor="passWord">Password:</label>
            <input type="password" id='passWord' name='passWord' value={formik.values.passWord} onChange={formik.handleChange} placeholder='Enter your password' onBlur={formik.handleBlur} className={inputStyles} autoComplete='current-password'/>
            {formik.touched.passWord && formik.errors.passWord ?(<div className={errorStyles}>{formik.errors.passWord}</div>): null}
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