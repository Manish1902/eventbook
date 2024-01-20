import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-section">
        <h3>About Us</h3>
        <p style={{color:'white'}}>Company's description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom " >
      <p style={{color:'white'}}>&copy; 2024 Your Website. All rights reserved.</p>
    </div>
  </footer>

  )
}

export default Footer