import React from 'react'
import '../../CSS-SCSS/Main/ContactForm/ContactForm.css'

const ContactForm = () => {
  return (
    <section className="message-form-class">
        <div className="container">
            <h2>Leave us a message for any information.</h2>

            <form id="messageform" method="post" >

                {/* <!-- Tabindex = If a user wants to navigate the site through tab, lower number equals first tab -->
                <!-- autocomplete = Lets the user choose to autocomplete a previous input --> */}
                
                <div className="mb-3 mt-4">
                    <input className="form-input" type="text" name="name" id="name" title="Name" placeholder="Name" tabindex="1" autocomplete="name" />
                </div>

                <div className="mb-3">
                    <input className="form-input" type="text" name="email" id="email" title="Email" placeholder="Email" tabindex="2" autocomplete="email" />
                </div>

                <div className="mb-5">
                    <textarea className="form-input" type="text" name="message" id="message" title="Message" placeholder="Message" tabindex="3" autocomplete="message" ></textarea>
                </div>

                <div className="d-grid">
                    <a className="btn-theme" type="submit">Send Message<i className="fa-regular fa-arrow-up-right"></i></a>
                </div>

            </form>

        </div>
    </section>
  )
}

export default ContactForm