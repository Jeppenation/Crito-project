import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import logotype from '@images/Logo.svg'
import '../CSS-SCSS/Header/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <header>
      <div className="container">
          <button className="btn-menubars"><i className="fa-solid fa-bars-staggered"></i></button>
          <div className="logotype "><Link to='/'><img src={logotype} alt="logotype" /></Link> </div>
          <div className="contact-information-bar">
              <div className="content-box"> 
                  <i className="fa-solid fa-phone-volume"></i>
                  +46 (8) 121 470 50
              </div>
              <div className="content-box"> 
                  <i className="fa-regular fa-envelope"></i>
                  info@crito.com
              </div>
              <div className="content-box last"> 
                  <i className="fa-solid fa-location-dot"></i>
                  Sveavägen 31, 111 34 STOCKHOLM
              </div>
          </div>
          <div className="socialmedia ">
              <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
          </div>

          <div className="menu">
              <nav>
                  <NavLink to='/'>Home</NavLink> 
                  <NavLink to='/service'>Service</NavLink> 
                  <NavLink to='/news'>News</NavLink> 
                  <NavLink to='/contact'>Contact</NavLink> 
              </nav>
              <a className="btn-theme btn-login" href="login.html">Login<i className="fa-regular fa-arrow-up-right"></i></a>
          </div>
      </div>

</header>
  )
}

export default Header