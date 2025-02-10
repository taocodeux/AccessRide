import {React, useState} from 'react'
import {errorStylesTwo, inputStyles } from '../styles/MyStyles'
import { MdMyLocation, MdLocationOn } from 'react-icons/md'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'

function BookingForm({onSetLocations}) {
    const [pickUpCoord, setpickUpCoord] = useState(null)
    const [dropOffCoord, setdropOffCoord] = useState(null)
    const [pickUpSuggestions, setPickUpSuggestions] = useState([])
    const [dropOffSuggestions, setDropOffSuggestions] = useState([])


    const formik = useFormik({
        initialValues:{
            pickUp: "",
            dropOff:"",
            ridee:"",
            accessibility:"",
        },
        validationSchema:yup.object({
            pickUp:yup.string().required("please input your location"),
            dropOff:yup.string().required("please input your destination"),
            ridee:yup.string().required("please select the ridee"),
            accessibility:yup.string().required("please select accessibility needed"),
        }),
        onSubmit: async(values)=>{
            const pickUpCoords = await fetchCoordinates(values.pickUp)
            const dropOffCoords = await fetchCoordinates(values.dropOff)

            if (pickUpCoords && dropOffCoords) {
                setpickUpCoord(pickUpCoords)
                setdropOffCoord(dropOffCoords)
                onSetLocations({ pickUp: pickUpCoords, dropOff: dropOffCoords });
            }},
        })

    const fetchCoordinates = async(address) => {
        try{
            const response = await axios.get("https://nominatim.openstreetmap.org/search", {params: { q: address, format: "json", limit: 1 },})
            if (response.data.length > 0) {
                const { lat, lon } = response.data[0]
                return {lat, lon}}
            else{
                console.log("No coordinates found for :", address)
                return null}}
        catch(error) {
                console.error("Error fetching coordinates:", error)
                return null}}

                const fetchSuggestions = async (address, isPickUp) => {
                    try {
                      const response = await axios.get("https://nominatim.openstreetmap.org/search", {
                        params: { q: address, format: "json", limit: 5 },
                      })
                      if (isPickUp) {
                        setPickUpSuggestions(response.data)
                      } else {
                        setDropOffSuggestions(response.data)
                      }
                    } catch (error) {
                      console.error("Error fetching suggestions:", error)
                    }
                  }
                
                  const handlePickUpChange = (e) => {
                    formik.handleChange(e)
                    fetchSuggestions(e.target.value, true)
                  }
                
                  const handleDropOffChange = (e) => {
                    formik.handleChange(e)
                    fetchSuggestions(e.target.value, false)
                  }
                
                  const handleSuggestionClick = (suggestion, isPickUp) => {
                    if (isPickUp) {
                      formik.setFieldValue('pickUp', suggestion.display_name)
                      setPickUpSuggestions([])
                    } else {
                      formik.setFieldValue('dropOff', suggestion.display_name)
                      setDropOffSuggestions([])
                    }
                  }

  return (
    <>
        <div className='md:w-1/4 border-2 border-secondary rounded-xl p-4 flex flex-col sm:w-full'>
            <h3 className='lg:text-xl font-bold mb-2 sm:text-lg'>Book a Trip</h3>
            <form action="" className='flex flex-col gap-3' onSubmit={formik.handleSubmit}>
                <div className={`relative flex items-center gap-2 pl-3 ${inputStyles}`}>
                    <span><MdMyLocation size={18} className='text-secondary'/></span>
                    <input type="text" name='pickUp' value={formik.values.pickUp} onBlur={formik.handleBlur} onChange={formik.handleChange} placeholder='Enter pickup location' className='w-full'/>
                    {pickUpSuggestions.length > 0 && (
                        <ul className="absolute bg-white border border-gray-300 w-full max-h-40 overflow-y-auto mt-1">
                        {pickUpSuggestions.map((suggestion) => (
                        <li
                            key={suggestion.place_id}
                            onClick={() => handleSuggestionClick(suggestion, true)}
                            className="p-2 cursor-pointer hover:bg-gray-200">
                            {suggestion.display_name}
                        </li>
                    ))}
                    </ul>
                    )}
                </div>
                {formik.touched.pickUp && formik.errors.pickUp?<div className={errorStylesTwo}>{formik.errors.pickUp}</div>:null}
                
                <div className={`relative flex items-center gap-2 pl-3 ${inputStyles}`}>
                    <span><MdLocationOn size={18} className='text-secondary'/></span>
                    <input type="text" name='dropOff' value={formik.values.dropOff} onBlur={formik.handleBlur} onChange={handlePickUpChange}  placeholder='Enter drop-off location' className='w-full'/>
                    {dropOffSuggestions.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 w-full max-h-40 overflow-y-auto mt-1">
                        {dropOffSuggestions.map((suggestion) => (
                        <li
                            key={suggestion.place_id}
                            onClick={() => handleSuggestionClick(suggestion, false)}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                            {suggestion.display_name}
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
                {formik.touched.dropOff && formik.errors.dropOff?<div className={errorStylesTwo}>{formik.errors.dropOff}</div>:null}
                
                <div className='flex w-full gap-4'>
                    <select name='ridee' value={formik.values.ridee} onBlur={formik.handleBlur} onChange={formik.handleChange} className={`w-1/2 ${inputStyles}`}>
                        <option value="" className='font-medium'>Booking</option>
                        <option value="ForMe">For Me</option>
                        <option value="ForSomeoneElse">For someone else</option>
                    </select>
                    <select name="accessibility" value={formik.values.accessibility} onBlur={formik.handleBlur} onChange={formik.handleChange}  className={`w-1/2 ${inputStyles}`}>
                        <option value="" className='font-medium'>Select Accessibility Options</option>
                        <option value="WheelChair">Wheelchair accessible</option>
                        <option value="HeaRing">Hearing Impaired Friendly</option>
                        <option value="Support">Support Worker Needed</option>
                        <option value="AssisTance">Assistance Required</option>
                        <option value="GuideDog">Guide Dog Friendly</option>
                    </select>
                </div>
                {formik.touched.ridee && formik.errors.ridee?<div className={errorStylesTwo}>{formik.errors.ridee}</div>:null}
                {formik.touched.accessibility && formik.errors.accessibility?<div className={errorStylesTwo}>{formik.errors.accessibility}</div>:null}
                <button type='submit' className='w-full bg-primary border-2 border-accent hover:bg-accent rounded-xl p-2'>Search</button>
            </form>
        </div>
    </>
  )
}

export default BookingForm