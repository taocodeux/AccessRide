import React from 'react'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import {Link} from "react-router-dom"
import { useFormik} from 'formik'
import * as yup from "yup"

function SignIn() {
  const inputStyles = "border-2 border-secondary p-2 rounded-xl"
  const errorStyles = "text-red-600 text-sm mb-4" 

  const formik = useFormik({
    initialValues:{
        emailAddress:"",
        passWord:"",
    },
    validationSchema:yup.object({
        emailAddress:yup.string().email("please enter a valid email").required("compulsory*"),
        passWord:yup.string().required("compulsory*")
    }),
    onSubmit:(values)=>{
        
    }
  })
  return (
    <>
        <div className='p-6 flex flex-col justify-center items-center m-auto w-full h-full'>
            <div >
                <img src={Logo} alt="Logo" className='border-2 border-accent lg:w-[100px] lg:h-[100px] bg-white rounded-full md:w-[100px] md:h-[100px] sm:w-[60px] sm:h-[60px]'/>
            </div>
            <h3 className='font-medium text-2xl'>Welcome back! Sign in</h3>
            <form action="" className='flex flex-col w-1/2' onSubmit={formik.handleSubmit}>
                <label htmlFor="EmailAddress">EmailAddress:<span>*</span></label>
                    <input type="email" id='EmailAddress' name='emailAddress' value={formik.values.emailAddress} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your email address'className={inputStyles}/>
                    {formik.touched.emailAddress && formik.errors.emailAddress ?(<div className={errorStyles}>{formik.errors.emailAddress}</div>): null}
                <label htmlFor="Password">Password:<span>*</span></label>
                    <input type="password" id='Password' name='passWord' value={formik.values.passWord} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your password' className={inputStyles}/>
                    {formik.touched.passWord && formik.errors.passWord ?(<div className={errorStyles}>{formik.errors.passWord}</div>): null}
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