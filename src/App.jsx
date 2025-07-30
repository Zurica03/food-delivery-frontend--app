import React, { useState } from 'react'
import  Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';
import Footer from './components/Footer'
import AppDownload from './components/AppDownload';
import LoginPopUp from './components/LoginPopUp';

const App = () => {

  const [showlogin , setshowlogin] = useState(false);

  return (
    <>
    {showlogin?<LoginPopUp setshowlogin={setshowlogin}/>:<></>}
    <div>
      <Navbar setshowlogin={setshowlogin}/>
      <div className='App'>
       <Routes>
          <Route path = '/' element={<Home/>} />
          <Route path = '/cart' element={<Cart/>} />
          <Route path = '/placeorder' element={<PlaceOrder/>} />
       </Routes>
    </div>
      <AppDownload/>
      <Footer/>
    </div>
    </>
  )
}

export default App;