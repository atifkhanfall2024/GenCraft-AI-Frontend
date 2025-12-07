import { useSelector } from "react-redux"
import { FaArrowLeft } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Profile = ()=>{



    const user = useSelector(store=>store?.user)
    const [profile , setProfile] = useState(user?.message)
    const navigate = useNavigate()

      useEffect(() => {
    setProfile(user?.message);
  }, [user]);

    const HandleUpdate = (e)=>{
            e.preventDefault()
            navigate('/update/profile')

    }

    return(
       <div className="w-full flex justify-center px-4 py-[4%]">
      
  <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm flex flex-col items-center">
  <Link to={'/feed'}><FaArrowLeft className="-translate-x-[580%] text-2xl" /></Link>

    {/* Profile Image */}
    <img
      src={profile && profile?.photoUrl}
      alt="User"     // bg-slate-900
      className="w-28 h-28 rounded-full object-cover border-4 border-slate-800 shadow-md"
    />

    {/* Name */}
    <h2 className="mt-4 text-xl font-bold text-gray-800">
    {profile && profile?.fullName}
    </h2>

     <label className="text-gray-700 font-medium"> {profile && profile?.description}</label>

    {/* Email (Not Editable) */}
    <p className="mt-1 text-gray-500 text-sm">
      {profile && profile?.email}
    </p>

    {/* Other Info */}
    <div className="mt-4 w-full space-y-3">

  

   <div className="flex justify-between text-gray-700 font-medium">
  <span>Phone:</span>
  <span>{ profile && profile?.phoneNumber}</span>
</div>


    </div>

    {/* Update Button */}
    <button
      className="mt-6 w-full py-2 bg-slate-900 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition" onClick={HandleUpdate}
    >
      Edit Profile
    </button>

  </div>
</div>

    )
}

export default Profile