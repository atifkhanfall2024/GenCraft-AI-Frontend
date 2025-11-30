import './App.css'
import Body from './components/Body';
import Signup from './components/signup'
import {BrowserRouter, Routes , Route, Navigate} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import OtpUI from './components/VerifyOtp';
function App() {
 
  return(
    <div>
      <BrowserRouter  basename='/'>
   
      <Routes>
     
         <Route path = '/signup' element={<Signup mode = 'signup'/>}  />
          <Route path = '/login' element={<Signup mode = 'login'/>}  />
              <Route path = '/verifyotp' element={<OtpUI/>}  />
          <Route path = '/' element={<Body/>}>

          </Route>  

      </Routes>


    <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </div>
  )

}

export default App
