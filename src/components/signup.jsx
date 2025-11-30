import { useState } from "react";
import axios from 'axios'
import Base_Url from "../utils/constant";
import {toast} from 'react-toastify'
import {ClipLoader} from 'react-spinners'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Signup({mode}) {

    const [isemail , setisemail] = useState('')
    const [Userpassword ,setpassword] = useState('')
    const [name , setname] = useState('')
    const [Loading , setLoading] = useState(false)
    const [Error , setError] = useState()
    const [Toggle ,  setToggle ] = useState(mode=='signup')
    const navigate = useNavigate()

//       useEffect(() => {
//     if (Toggle) navigate("/signup");
//     else navigate("/login");
//   }, [Toggle]);

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
   navigate('/verifyotp')
    setLoading(false)
    toast.success('Check Email And Verify Otp')
  
    }catch(err){
        setLoading(false)
        toast.error(err?.response?.data?.message)
       setError(err?.response?.data?.message || err.message)
        console.log(err?.response?.data?.message || err.message);
    }

    }

    const HandleLogin = async(e)=>{
        e.preventDefault()
        try{

            setLoading(true)
            const res = await axios.post(Base_Url+'/Auth/Login' , {
                email:isemail ,
                Userpassword
            } , {withCredentials:true})

            console.log(res?.data);
            toast.success('Login Success....')
            navigate('/')
            setLoading(false)

        }catch(e){
          setLoading(false)
          console.log(e?.response?.data?.message || e?.message);
          toast.error(e?.response?.data?.message || e?.message)
          setError(e?.response?.data?.message || e?.message)
        }
    }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-600">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-6">{!Toggle ? 'Login Account' :  'Create Account'}</h2>

        <form className="space-y-5">

          {Toggle &&<div>
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
          </div>}

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
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition" disabled={Loading}   onClick={Toggle ? HandleSignup : HandleLogin}
          >
            {Loading ? <ClipLoader size={30} color="white" /> : (Toggle? "Send Otp":'Login Account')}
          </button>
          <p className="text-sm text-center mt-3">
 {Toggle?' Already have an account?':'Donot have account?'} <a href={Toggle?"/signup":"/login"} className="text-blue-600 hover:underline cursor-pointer" onClick={()=>setToggle(prev=>!prev)}>{!Toggle ? 'Sign up ' : 'Login'}</a>
</p>

        </form>
      </div>
    </div>
  );
}
