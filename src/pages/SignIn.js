import { useState,React } from 'react'
import {Link, useNavigate,} from "react-router-dom"
import { useFormik} from 'formik'
import * as yup from "yup"
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import { inputStyles,errorStyles,signForm } from '../styles/MyStyles'


function SignIn() {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("")
  const handleInputChange =(e)=>{
    formik.handleChange(e)
    setErrorMessage("")
  }

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
        const restoredData = JSON.parse(localStorage.getItem("formValues")) || {}
        if (values.emailAddress === restoredData.emailAddress && values.passWord === restoredData.passWord){
            navigate("/dashboard")
        }else{
            setErrorMessage("Please input correct user details!")
        }
    }
  })
  return (
    <>
        <div className='p-6 flex flex-col justify-center items-center m-auto w-full h-full'>
            <div >
                <img src={Logo} alt="Logo" className='border-2 border-accent lg:w-[120px] lg:h-[120px] bg-white rounded-full md:w-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px]'/>
            </div>
            <h3 className='font-medium text-2xl'>Welcome back! Sign in</h3>
            <div>
                <span className='text-md text-red-600'>{errorMessage}</span>
            </div>
            <form className={signForm} onSubmit={formik.handleSubmit}>
                <label htmlFor="emailAddress">Email Address:</label>
                    <input type="email" name='emailAddress' value={formik.values.emailAddress} onChange={handleInputChange} onBlur={formik.handleBlur} placeholder='Enter your email address'className={inputStyles}/>
                    {formik.touched.emailAddress && formik.errors.emailAddress ?(<div className={errorStyles}>{formik.errors.emailAddress}</div>): null}
                <label htmlFor="passWord">Password:</label>
                    <input type="password" name='passWord' value={formik.values.passWord} onChange={handleInputChange} onBlur={formik.handleBlur} placeholder='Enter your password' className={inputStyles}/>
                    {formik.touched.passWord && formik.errors.passWord ?(<div className={errorStyles}>{formik.errors.passWord}</div>): null}
                <button type='submit' className='w-full bg-primary border-2 border-accent rounded-xl p-2 mb-6 hover:bg-accent transition-all duration-300'>Sign In</button>
            </form>
            <h5>Don't have an account? 
                <Link to="/Signup"><span className='text-primary'> SIGN UP</span></Link>
            </h5>
      </div>
    </>
  )
}

export default SignIn