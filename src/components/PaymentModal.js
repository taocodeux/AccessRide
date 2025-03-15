import {React, useState} from 'react'
import { FaPaypal } from 'react-icons/fa'
import { FaMoneyBillTransfer,FaRegCreditCard } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { MethodDiv } from '../styles/MyStyles'
import { closePaymentModal } from 'flutterwave-react-v3'
import Logo from "../accessride-images/AccessRide-logo-removebg-preview.png"
import { proceedBtn } from '../styles/MyStyles'


function PaymentModal({selectedCar, closeModalDiv,setStartRide}) {
    const selectedMethodClass = "shadow-xl border-2 border-accent"
    const [selectedMethod, setSelectedMethod] = useState(null)

    const handleSelect=(title)=>{
        setSelectedMethod(title)
    }

    const handlePayment =()=>{
        if (!selectedMethod){
            alert("Please select payment method")
            return
        }

        const paymentConfig = {
            public_key: "FLWPUBK_TEST-ce9061e9d7a77e76873b46f24875dd62-X",
            tx_ref: Date.now(), 
            amount: parseFloat(parseFloat(selectedCar.price.replace("£", "")).toFixed(6)), 
            currency: "NGN",
            payment_options: selectedMethod.toLowerCase(),
            customer: {
                email: "taofeekatb1@gmail.com",
                phone_number: "07436500346",
                name: "John Doe",
            },
            customizations: {
                title: "Taxi Payment",
                description: `Payment for ${selectedCar.title}`,
                logo: <img src={Logo} alt="Logo" />,
            },
            callback: (response) => {
                closePaymentModal()
                closeModalDiv()

                setTimeout(()=>{
                    setStartRide(true)
                }, 5000)
            },
            onClose: () => {
                alert("Payment cancelled!")
            },
        }

        window.FlutterwaveCheckout(paymentConfig)
    }
    
  return (
    <div className='w-full min-h-screen fixed inset-0 backdrop-blur-md bg-black/500 flex justify-center items-center z-[1000]'>
        <div className='sm:w-full md:w-1/2 h-auto justify-center items-center rounded-lg border-2 border-accent p-4'>
            <h1 className='flex justify-end text-right cursor-pointer' onClick={closeModalDiv}><IoClose size={36}/></h1>
            <h3 className='lg:text-xl font-bold mb-4 sm:text-lg'>Choose a Payment Method</h3>
            <div className='flex flex-col gap-3'>
                <span className={`${selectedMethod === "PayPal" ? selectedMethodClass:""} ${MethodDiv}`} onClick={()=>handleSelect("PayPal")}><FaPaypal/>Paypal</span>
                <span className={`${selectedMethod === "CreditCard" ? selectedMethodClass:""} ${MethodDiv}`} onClick={()=>handleSelect("CreditCard")}><FaRegCreditCard/>Credit or debit card</span>
                <span className={`${selectedMethod === "Transfer" ? selectedMethodClass:""} ${MethodDiv}`} onClick={()=>handleSelect("Transfer")}><FaMoneyBillTransfer/>Bank transfer</span>
            </div>
            <button onClick={handlePayment} className={`${proceedBtn}text-white rounded`} disabled={!selectedMethod}>
                Proceed
            </button>
        </div>
    </div>
  )
}

export default PaymentModal