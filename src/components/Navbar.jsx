import React, { useState } from "react";
import './Navbar.css';
import search_icon from "../assets/search_icon.png";
import basket_icon from "../assets/basket_icon.png";
import { Link } from "react-router-dom";

const Navbar = ({setshowlogin}) => {
    const [menu , setmenu] = useState('home')

  return (
    <div className="Navbar">
      <h1 className="quickbites-heading">
        <Link to={'/'}>
          <span className="quick">Quick</span>
          <span className="bites">Bites</span>
        </Link>
      </h1>
      <ul className="navbar-menu">
        <Link to={'/'}><li onClick={() => setmenu("home")} className={menu === "home"? "active" :""}>Home</li></Link>
        <li onClick={() => setmenu("menu")} className={menu ==="menu"? "active" :""}>
          <a href="#explore-menu">Menu</a>
        </li>
        <li onClick={() => setmenu("mobile app")} className={menu === "mobile app"? "active" :""}>
          <a href="#app-download">Mobile App</a>
        </li>
        <li onClick={() => setmenu("contact us")} className={menu === "contact us"? "active" :""}>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
      <div className="Navbar-right">
        <img src={search_icon} alt="search"/>
        <div className="Navbar-search-icon">
            <Link to={'/cart'}><img src={basket_icon}/>
            <div className="dot"></div></Link>
        </div>
        <button onClick={() => setshowlogin(true)} className="signin-btn ">Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
