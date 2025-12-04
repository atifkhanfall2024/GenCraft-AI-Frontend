import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Base_Url from "../utils/constant"
import { ClipLoader } from "react-spinners"
import { auth , provider } from "../utils/Firebase"
import { signInWithPopup } from "firebase/auth"
import { useDispatch } from "react-redux"
import { AddUsers } from "../Redux/UserSlice"

export default function Login(){

  const [isemail , setisemail] = useState('')
    const [Userpassword ,setpassword] = useState('')
    const [Loading , setLoading] = useState(false)
    const [Error , setError] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
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

      // handle with google

      const HandleWithGoogle = async(e)=>{
               e.preventDefault()

               try{

setLoading(true)
              const response = await signInWithPopup(auth , provider)
                       if (!response?.user) {
              throw new Error("Google sign-in failed. No user returned.");
            }
               console.log(response);
            let user =  response?.user
            let fullName = user?.displayName
            let email = user?.email
            let photoUrl = user?.photoURL

         



            // calling google auth api

            const res = await axios.post(Base_Url+'/Signup/Google' , {
              fullName ,
              email ,
              photoUrl ,
              
            } , {withCredentials:true})
              
              toast.success('Login Success With Google')
                dispatch(AddUsers(res?.data))
               setLoading(false)
               navigate('/feed')
             
               }catch(e){
                  setLoading(false)
                console.log(e?.response?.data?.message || e?.message);
                setError(e?.response?.data?.message || e?.message)
                toast.error(e?.response?.data?.message || e?.message)
              
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
             <p className="text-center">or</p>
        <div class="flex justify-center">
  <button class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 -translate-y-[40%] rounded-lg shadow-sm hover:bg-gray-100"  disabled={Loading} onClick={HandleWithGoogle}>
    <img 
      src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
      alt="Google Logo"
      class="w-5 h-5"
    />
    <span class="text-gray-700 font-medium">{Loading?<ClipLoader size={30} color="black"/>:'Continue with Google'}</span>
  </button>
</div>

          <p className="text-sm text-center mt-3">
  Donot have an account?<a  className="text-blue-600 hover:underline cursor-pointer"><Link to={'/signup'}> Signup</Link> </a>
</p>


        </form>
      </div>
    </div>
  );

}