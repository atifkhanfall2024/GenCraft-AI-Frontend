import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    initialState:'null',
    name:'user',


    reducers:{
        AddUsers:(state , action)=>{
            return action.payload
        },
        RemoveUsers:(state , action)=>{
            return null
        }
    }

})

export default UserSlice.reducer
export const {AddUsers ,RemoveUsers} = UserSlice.actions