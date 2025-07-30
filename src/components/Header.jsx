import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
        <div className='header-content'>
            <h2>Delicious Food, Delivered Fast!</h2>
            <p>Craving something tasty? QuickBites brings your favorite meals to your doorstep in minutes — hot, fresh, and hassle-free.</p>
            <button><a href="#explore-menu">View Menu</a></button>
        </div>

    </div>
  )
}

export default Header;