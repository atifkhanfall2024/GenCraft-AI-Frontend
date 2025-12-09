import './App.css'
import Body from './components/Body';
import Signup from './components/signup'
import {BrowserRouter, Routes , Route, Navigate} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import OtpUI from './components/VerifyOtp';
import Login from './components/Login';
import Feed from './components/Feed';
import { Provider, useDispatch, useSelector } from 'react-redux'
import { RemoveUsers } from './Redux/UserSlice';
import Profile from './components/profile';
import UpdateProfile from './components/updateProfile';
import Community from './pages/community';
import Credits from './pages/credits';

function App() {
 
  // user data 
  const dispatch = useDispatch()

  const user = useSelector(store=>store?.user)

 

  return(
    <div>
    
      <BrowserRouter  basename='/'>
   
      <Routes>
     
        <Route path = '/signup' element={user ? <Navigate to={'/feed'} />: <Signup/>}  />
          <Route path = '/login' element={user ?  <Navigate to={'/feed'} />: <Login />}  />
              <Route path = '/verifyotp' element={user ?  <Navigate to={'/feed'} />:<OtpUI/>}  />
          <Route path = '/' element={<Body/>}>
           
           <Route path='/feed' element={<Feed/>}/>
           <Route path='/user/profile' element={<Profile/>} />
              <Route path='/update/profile' element={<UpdateProfile/>} />
                <Route path='/community' element={<Community/>} />
                  <Route path='/credits' element={<Credits/>} />
          
         
          </Route>  

      </Routes>


    <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </div>
  )

}

export default App
