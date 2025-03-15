import {React, useState,useEffect,useRef} from 'react'
import ProfilePix from "../accessride-images/profilePix.png"

function ProfileChange() {
    const [profilePic, setProfilePic] = useState(ProfilePix)
    const fileInputRef = useRef(null)

    useEffect(() => {
        const savedPic = localStorage.getItem("profilePic")
        if (savedPic) {
          setProfilePic(savedPic)
        }
      }, [])

    const handleImageUpload=(event)=>{
        if (!event.target.files || event.target.files.length === 0) {
            return
        }   
        const file = event.target.files[0]
            if (file) {
                const reader = new FileReader()
                reader.onloadend = () => {
                    setProfilePic(reader.result)
                    localStorage.setItem("profilePic", reader.result)
                }
                reader.readAsDataURL(file)
            }
        }
  return (
    <>
        <button onClick={() => fileInputRef.current.click()} className="border-2 border-accent rounded-full hover:bg-accent lg:w-[60px] lg:h-[60px] md:w-[50px] md:h-[50px] sm:w-[36px] sm:h-[36px]">
            <img src={profilePic} alt="myProfile" className="w-full h-full rounded-full" />
        </button>

        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
    </>
  )
}

export default ProfileChange