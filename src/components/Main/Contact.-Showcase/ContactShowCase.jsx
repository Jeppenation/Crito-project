import React from 'react'
import '../../CSS-SCSS/Main/Contact-ShowCase/ContactShowCase.css'
import Vector from '@images/Rectangle607.png'


const ContactShowCase = () => {
  return (

<>
            <section className="contact-showcase">
                <img id="vector5" src={Vector} alt="vector graphic" />

                <div className="container">

                    <div className="contact-text"> 
                        <div className="breadcrumbs">
                            <p className="home">Home</p>
                            <p className="contacts">Contacts</p>
                        </div>
                        <h1 className="Connect">Let's Connect</h1>
                    </div>
                </div>
              </section>

</>
    
  )
}

export default ContactShowCase