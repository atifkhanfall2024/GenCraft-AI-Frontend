import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Base_Url from "../utils/constant"
import { ClipLoader } from "react-spinners"

export default function Login(){

  const [isemail , setisemail] = useState('')
    const [Userpassword ,setpassword] = useState('')
    const [Loading , setLoading] = useState(false)
    const [Error , setError] = useState()
    const navigate = useNavigate()
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
                navigate('/feed')
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
        
        <h2 className="text-2xl font-bold text-center mb-6"> Login Account</h2>

        <form className="space-y-5">


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
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition" disabled={Loading}   onClick={ HandleLogin }
          >
            {Loading ? <ClipLoader size={30} color="white" /> :"Login Account"}
          </button>
          <p className="text-sm text-center mt-3">
  Donot have an account?<a  className="text-blue-600 hover:underline cursor-pointer"><Link to={'/signup'}> Signup</Link> </a>
</p>

        </form>
      </div>
    </div>
  );

}