import axios from "axios";
import { useState } from "react";
import Base_Url from "../utils/constant";
import { useNavigate } from "react-router-dom";

export default function OtpUI() {
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [d3, setD3] = useState("");
  const [d4, setD4] = useState("");
  const [d5, setD5] = useState("");
  const [d6, setD6] = useState("");
  const navigate = useNavigate()


  const HandleVerify = async(e)=>{
       e.preventDefault()



       try{
        const otp = d1+d2+d3+d4+d5+d6
      const res = await axios.post(Base_Url+'/otp/verify' ,{
  otp
      }  , {withCredentials:true}
       
      )

      console.log(res?.data);
      navigate('/signup')
      
    }
      catch(e){
           console.log(e?.message);
       }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
      <h1 className="text-xl font-bold mb-4">Enter OTP</h1>

      <div className="flex gap-2 mb-4">
        <input value={d1} onChange={(e) => setD1(e.target.value)} maxLength={1} className="w-12 h-12 text-center border rounded" />
        <input value={d2} onChange={(e) => setD2(e.target.value)} maxLength={1} className="w-12 h-12 text-center border rounded" />
        <input value={d3} onChange={(e) => setD3(e.target.value)} maxLength={1} className="w-12 h-12 text-center border rounded" />
        <input value={d4} onChange={(e) => setD4(e.target.value)} maxLength={1} className="w-12 h-12 text-center border rounded" />
        <input value={d5} onChange={(e) => setD5(e.target.value)} maxLength={1} className="w-12 h-12 text-center border rounded" />
        <input value={d6} onChange={(e) => setD6(e.target.value)} maxLength={1} className="w-12 h-12 text-center border rounded" />
      </div>

      <button className="px-6 py-2 bg-blue-600 text-white rounded" onClick={HandleVerify}>Verify</button>
    </div>
  );
}

