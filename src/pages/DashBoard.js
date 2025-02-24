import {React,useState} from 'react'
import NavBar from '../components/NavBar'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import { sharedLineStyles,sharedLinkStyles } from '../styles/MyStyles'
import ProfilePix from "../accessride-images/profilePix.png"
import BookingForm from '../components/BookingForm'
import Map from '../components/Map'
import CarsOptions from '../components/CarsOptions'
import { useFormik } from 'formik'
import * as yup from "yup"
import axios from 'axios'


function DashBoard() {
  const [locations, setLocations] = useState({ pickUp: null, dropOff: null })
  const [carsOptions, setCarsOptions] = useState(false)
  const [pickUpCoord, setpickUpCoord] = useState(null)
  const [dropOffCoord, setdropOffCoord] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  
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
        const pickUpCoord = await fetchCoordinates(values.pickUp)
        const dropOffCoord = await fetchCoordinates(values.dropOff)

        if (pickUpCoord && dropOffCoord) {
            setpickUpCoord(pickUpCoord)
            setdropOffCoord(dropOffCoord)
            setLocations({ pickUp: pickUpCoord, dropOff: dropOffCoord})
        }else {
            setErrorMessage("Failed to fetch valid locations. Please try again.")
        }
        setCarsOptions(true)

    }
  })

  const fetchCoordinates = async(address) => {
    try{
        const response = await axios.get("https://nominatim.openstreetmap.org/search", {params: { q: address, format: "json", limit: 1 },})
        if (response.data.length > 0) {
            const { lat, lon } = response.data[0]
            return {lat, lon}}
        else{
            setErrorMessage(`No coordinates found for ${address}`)
            return null
        }
    }
    catch(error) {
        setErrorMessage("Failed to fetch coordinates. Please try again.")
        console.error("Error fetching coordinates:", error)
        return null
    }
}
  return (
    <>
      <NavBar
              bgColor="bg-white"
              isDashboard={true}
              leftContent={
              <>
                <img
                  src={Logo}
                  alt="MyLogo"
                  className="border-2 border-accent lg:w-[60px] lg:h-[60px] bg-white rounded-full md:w-[50px] md:h-[50px] sm:w-[36px] sm:h-[36px]"
                />
                <span className={sharedLinkStyles}>
                  Your Trip
                  <span className={sharedLineStyles}></span>
                </span>
                <span className={sharedLinkStyles}>
                  Rent
                  <span className={sharedLineStyles}></span>
                </span>         
              </>}
              rightContent={
              <>
                <span className={sharedLinkStyles}>
                  Activity
                  <span className={sharedLineStyles}></span>
                </span>
                <button className="border-2 border-accent rounded-full hover:bg-accent lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] sm:w-[36px] sm:h-[36px]">
                  <img src={ProfilePix} alt="" />
                </button>
              </>}
      />
      <div className='gap-6 lg:pt-24 md:pt-24 sm:pt-24 md:h-screen flex justify-between w-full lg:py-8 lg:px-12 md:px-8 md:py-4 md:flex-row sm:px-6 sm:py-3 sm:flex-col'>
          {carsOptions ?
          <CarsOptions pickUp={formik.values.pickUp} dropOff={formik.values.dropOff} />
          :<BookingForm formik={formik}/>
          }
          <Map locations={locations}/>
      </div>
    </>
  )
}

export default DashBoard