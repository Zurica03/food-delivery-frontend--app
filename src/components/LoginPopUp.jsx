import React, { useState } from 'react'
import './LoginPopUp.css'
import data from '/src/assets/assets.js';

const image = data.assets;

const LoginPopUp = ({setshowlogin}) => {

    const [currstate , setcurrstate] = useState("signup")

  return (
    <div className='login-popup-overlay'>
        <form className='login-form-container'>
            <div className='login-form-title'>
                <h2>{currstate}</h2>
                <img onClick={() => setshowlogin(false)} src={image.cross_icon}/>
            </div>
            <div className='login-popup'>
                {currstate === "Login"?<></>:<input type='text' placeholder='Name' required/>}
                <input type='email' placeholder='email' required/>
                <input type='password' placeholder='password' required/>
            </div>
            <button>{currstate === "signup"?"Create Account":"Login"}</button>
            <div className='Login-Popup-condition'>
                <input type='checkbox' required/>
                <p>By continuing , I agree to the terms of use and privacy policy</p>
            </div>
            {currstate === 'Login'?<p>Create a new account?<span onClick={() => setcurrstate("signup")} >Click Here</span></p>:
                <p>Already have an account<span onClick={() => setcurrstate("Login")}>Login Here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopUp