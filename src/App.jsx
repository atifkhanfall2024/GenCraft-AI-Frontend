import './App.css'
import Login from './components/login';
import Signup from './components/signup'
import {BrowserRouter, Routes , Route, Navigate} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
function App() {
 
  return(
    <div>
      <BrowserRouter  basename='/'>
   
      <Routes>
     
         <Route path = '/signup' element={<Signup/>}  />
          <Route path = '/login' element={<Login/>}  />

      </Routes>


    <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </div>
  )

}

export default App
