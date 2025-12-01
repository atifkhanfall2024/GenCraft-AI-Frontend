import axios from "axios"
import Base_Url from "../utils/constant"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Feed from "./Feed"
import { useDispatch } from "react-redux"
import { AddUsers, RemoveUsers } from "../Redux/UserSlice"

const Body = ()=>{


    const navigate = useNavigate()
    const dispatch = useDispatch()

    // calling an get user api

    const UserData = async()=>{

       try{
         const res = await axios.get(Base_Url+'/get/user/data' , {withCredentials:true})

         console.log( 'Body User' ,res?.data);
         dispatch(AddUsers(res?.data))
        navigate('/feed')

       }catch(err){
        console.log(err?.response?.data?.message);
        dispatch(RemoveUsers(null))
        navigate('/login')
       }

    }

    useEffect(()=>{
        UserData()
    } ,[])

    return(
      <Feed/>
    )
}

export default Body