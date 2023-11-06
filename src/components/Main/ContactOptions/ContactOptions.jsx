import React from 'react'
import '../../CSS-SCSS/Main/ContactOptions/ContactOptions.css'

const ContactOptions = () => {
  return (
            
        <section className="contact-options">

        <div className="container">

            <div className="contact-box">
                <div className="contact-box-icon"><i className="fa-solid fa-location-dot"></i></div>
                
                <div className="contact-box-text">
                    <h2> Visit us</h2>
                    <p>Sveavägen 31</p>
                    <p>111 34 STOCKHOLM</p>
                </div>
            </div>

            <div className="contact-box">
                <div className="contact-box-icon"><i className="fa-solid fa-phone"></i></div>
                
                <div className="contact-box-text">
                    <h2> Call us</h2>
                    <p>+46 (8) 121 470 50</p>
                    <p>+46 (8) 121 470 51</p>
                </div>
            </div>

            <div className="contact-box">
                <div className="contact-box-icon"><i className="fa-solid fa-envelope"></i></div>
                
                <div className="contact-box-text">
                    <h2> Email us</h2>
                    <p>info@crito.com</p>
                    <p>support@crito.com</p>
                </div>
            </div>
        </div>


        </section>
  )
}

export default ContactOptions