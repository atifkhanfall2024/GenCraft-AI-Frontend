import './App.css'
import Body from './components/Body';
import Signup from './components/signup'
import {BrowserRouter, Routes , Route, Navigate} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import OtpUI from './components/VerifyOtp';
import Login from './components/Login';
import Feed from './components/Feed';
function App() {
 
  return(
    <div>
      <BrowserRouter  basename='/'>
   
      <Routes>
     
        <Route path = '/signup' element={<Signup/>}  />
          <Route path = '/login' element={<Login />}  />
              <Route path = '/verifyotp' element={<OtpUI/>}  />
          <Route path = '/' element={<Body/>}>
             
           <Route path='/feed' element={<Feed/>}/>
         
          </Route>  

      </Routes>


    <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </div>
  )

}

export default App
