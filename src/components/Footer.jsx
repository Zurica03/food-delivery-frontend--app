import React from 'react'
import './Footer.css'
import data from '/src/assets/assets.js';

const image = data.assets;

const Footer = () => {
  return (
    <footer className="footer" id='#footer'>
      <div className="footer-section">
        <h3>About Quick Bites</h3>
        <p>
          Quick Bites brings delicious meals from your favorite local restaurants
          directly to your door. Fast delivery, a wide variety of options, and
          a smooth ordering experience — your cravings just got simpler.
        </p>
      </div>

      <div className="footer-section">
        <h3>Useful Links</h3>
        <a href="#">Home</a>
        <a href="#">Explore Menu</a>
        <a href="#">About Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>📍 123 Street, Your City, India</p>
        <p>📞 +91 98765 43210</p>
        <p>📧 support@quickbites.com</p>

        <div className="social-icons">
          <img src={image.facebook_icon} alt="Facebook" />
          <img src={image.twitter_icon} alt="Twitter" />
          <img src={image.linkedin_icon} alt="LinkedIn" />
        </div>
      </div>

      <div className="footer-section">
        <h3>Get Our App</h3>
        <img src={image.app_store} alt="App Store" className="store-badge" />
        <img src={image.play_store} alt="Play Store" className="store-badge" />
      </div>
    </footer>
  )
}

export default Footer