import {React } from 'react'
import { paymentDivBtn } from '../styles/MyStyles'

function PaymentDiv({setIsModalOpen, selectedCar}) {
  const openModalDiv=()=>{
    if(selectedCar){
      setIsModalOpen(true)
    }else{
      setIsModalOpen(false)
    }
  }
  
  return (
    <>
      <div className={paymentDivBtn}>
        <button onClick={openModalDiv}>Add Payment Method</button>
      </div>
    </>

  )
}

export default PaymentDiv