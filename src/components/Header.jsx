import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import Base_Url from "../utils/constant"
import { useNavigate } from "react-router-dom"
import { RemoveUsers } from "../Redux/UserSlice"

const Header = ()=>{

    
    const user = useSelector(store=> store?.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //console.log(user);

    const HandleLogout = async()=>{

        try{

        const res = await axios.post(Base_Url+'/Auth/Logout' , {} , {withCredentials:true})  

        console.log(res?.data);
        dispatch(RemoveUsers(null))
        navigate('/login')

        }catch(e){
         console.log(e?.message);
        }

    }

    return(
      <header className="w-full bg-slate-900 text-white py-4 shadow-lg">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
    <h1 className="text-2xl font-bold tracking-wide">GENCRAT-AI</h1>

    <div className="flex items-center gap-4">
      <span className="text-lg font-medium">{user?.message?.fullName}</span>

      <img
        src={user?.message?.photoUrl}
        alt="User"
        className="w-10 h-10 rounded-full border-2 border-slate-300"
      />

      <button className="px-4 py-2 bg-red-800 hover:bg-slate-700 rounded-lg text-sm font-medium" onClick={HandleLogout} >
        Logout
      </button>
    </div>
  </div>
</header>

    )
}

export default Header