import React from 'react'
import ReactStars from 'react-stars'
import { proceedBtn } from '../styles/MyStyles'

function RateDriver({resetDashboard}) {
    const ratingChanged =(newRating)=>{
        console.log(newRating)
    }
  return (
    <>
        <div className='z-[1000] flex flex-col items-center bg-white shadow-xl w-80 border-2 border-accent p-4 rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <h2 className='font-medium'>Rate Your Driver</h2>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={30}
                color2={"#ff9900"}
            />
            <button type="submit" className={proceedBtn} onClick={resetDashboard}>Submit</button>
        </div>
    </>
  )
}

export default RateDriver