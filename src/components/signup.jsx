import { useState } from "react";
import axios from 'axios'
import Base_Url from "../utils/constant";
import {toast} from 'react-toastify'
import {ClipLoader} from 'react-spinners'
import { useNavigate } from "react-router-dom";
export default function Signup() {

    const [isemail , setisemail] = useState('')
    const [Userpassword ,setpassword] = useState('')
    const [name , setname] = useState('')
    const [Loading , setLoading] = useState(false)
    const [Error , setError] = useState()
    const navigate = useNavigate()

    const HandleSignup = async(e)=>{
         
        e.preventDefault()
    try{
        setLoading(true)
    const res = await axios.post(Base_Url+'/Auth/Signup' , {
        fullName:name,
        email:isemail ,
        Userpassword
    } , {withCredentials:true})

    console.log(res?.data);
   navigate('/Login')
    setLoading(false)
    toast.success('Check Email And Verify Otp')
  
    }catch(err){
        setLoading(false)
        toast.error(err?.response?.data?.message)
       setError(err?.response?.data?.message || err.message)
        console.log(err?.response?.data?.message || err.message);
    }

    }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-600">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e)=> setname(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
                  value={isemail}
              onChange={(e)=> setisemail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
                  value={Userpassword}
              onChange={(e)=> setpassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
           <p className="text-red-400" >{Error}</p>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition" disabled={Loading}   onClick={HandleSignup}
          >
            {Loading ? <ClipLoader size={30} color="white" /> : "Send Otp"}
          </button>

        </form>
      </div>
    </div>
  );
}
