import React from 'react'
import '../CSS-SCSS/Footer/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img_vector from '@images/Rectangle 116.png'
import img_logo_dark from '@images/Logo-dark.png'

const Footer = () => {
  return (
    <footer>

        <img id="vector4" src={img_vector} alt="vector graphic" />

        <div className="container">
            <div className="footer-sections">
                <div className="footer-section logo-text">
                    <img src={img_logo_dark} alt="Logotype of crito" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>

                <div className="footer-section company-links">
                    <h3>Company</h3>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>

                <div className="footer-section help-links">
                    <h3>Help</h3>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>

                <div className="footer-section resources">
                    <h3>Resources</h3> 
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>

                <div className="footer-section link">
                    <h3>Link</h3> 
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How to - Blog</a>
                    <a href="#">Youtube Playlist</a>
                </div>
            </div>
        </div>
        <div className="line"></div>
        
        
        <div className="container">
            
            <p>2023 Crito - Consulting Company Inc. All Rights Reserved.</p>

            <div className="socialmedia ">
                <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>

        </div>
    </footer>
  )
}

export default Footer