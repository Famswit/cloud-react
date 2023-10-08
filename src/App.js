import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/NavBar";
import Data from "./components/data/Data";
import Cloud from "./components/cloud/Cloud";
import Footer from "./components/footer/Footer";

import CloudPage from './routes/CloudPage';
import ContactPage from './routes/ContactPage';
import RecoveryPage from './routes/RecoveryPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './routes/LoginPage';
import Signup from './components/signup/Signup';
import {useAuthContext} from './context/authContext';

function Page () {
  return  (
    <div>
      <Navbar />
      <Hero /> 
      <Data />
      <Cloud />
      <Footer />
    </div>
  )
}


function App() {
  const {isLoggedIn} = useAuthContext()

  const authenticatedRoutes = (
    <Routes>
      <Route path='/home' element={<Page />} />
      <Route path='/' element={<Page />} />
      <Route path='/recovery' element={<RecoveryPage />} />
      <Route path='/cloud' element={<CloudPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='*' element={<Page />} />
    </Routes>
  )

  const unauthenticatedRoutes = (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='*' element={<Login />} />
    </Routes>
  )
  return isLoggedIn ? authenticatedRoutes : unauthenticatedRoutes
}

export default App;
