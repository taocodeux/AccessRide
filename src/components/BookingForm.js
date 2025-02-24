import {React, useState, useCallback} from 'react'
import {errorStylesTwo, inputStyles } from '../styles/MyStyles'
import { MdMyLocation, MdLocationOn } from 'react-icons/md'
import axios from 'axios'
import {debounce}  from 'lodash'


function BookingForm({formik}) {
    const [pickUpSuggestions, setPickUpSuggestions] = useState([])
    const [dropOffSuggestions, setDropOffSuggestions] = useState([])


    const fetchSuggestions = useCallback(
        debounce(async (query, type) => {
            if (!query) 
                return
            try {
                const response = await axios.get("https://nominatim.openstreetmap.org/search", {
                    params: { q: query, format: "json", addressdetails: 1, limit: 5 }
                })
                const suggestions = response.data.map((place) => ({
                    place_id: place.place_id,
                    display_name: place.display_name,
                }))
                if (type === "pickUp") {
                    setPickUpSuggestions(suggestions)
                } else {
                    setDropOffSuggestions(suggestions)
                }
            } catch (error) {
                console.error("Error fetching suggestions:", error)
            }
        }, 500),[setPickUpSuggestions, setDropOffSuggestions]
    )

    const handlePickUpChange = (e) => {
        const value = e.target.value
        formik.setFieldValue("pickUp", value)
        fetchSuggestions(value, "pickUp")
    }
    
    const handleDropOffChange = (e) => {
        const value = e.target.value
        formik.setFieldValue("dropOff", value)
        fetchSuggestions(value, "dropOff")
    }

    const handleSuggestionClick = (suggestion, isPickUp) => {
        const address = suggestion.display_name
        if (isPickUp) {
            formik.setFieldValue("pickUp", address)
            setPickUpSuggestions([])
        } else {
            formik.setFieldValue("dropOff", address)
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
                    <input type="text" name='pickUp' value={formik.values.pickUp} onBlur={formik.handleBlur} onChange={handlePickUpChange} placeholder='Enter pickup location' className='w-full pl-2 outline-0'/>
                    {pickUpSuggestions.length > 0 && (
                        <ul className="absolute left-0 top-full bg-white border border-gray-300 w-full max-h-40 overflow-y-auto z-10 shadow-md">
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
                    <input type="text" name='dropOff' value={formik.values.dropOff} onBlur={formik.handleBlur} onChange={handleDropOffChange}  placeholder='Enter drop-off location' className='w-full pl-2 outline-0'/>
                    {dropOffSuggestions.length > 0 && (
                        <ul className="absolute left-0 top-full bg-white border border-gray-300 w-full max-h-40 overflow-y-auto z-10 shadow-md">
                            {dropOffSuggestions.map((suggestion) => (
                                <li
                                    key={suggestion.place_id}
                                    onClick={() => handleSuggestionClick(suggestion, false)}
                                    className="p-2 cursor-pointer hover:bg-gray-200">
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