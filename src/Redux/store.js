import { configureStore } from "@reduxjs/toolkit";
import Userslice from './UserSlice'
const AppStore = configureStore({

    reducer:{
        user:Userslice
    }
})


export default AppStore