import React from 'react'
import '../../CSS-SCSS/Main/ContactOptions/ContactOptions.css'
import ContactBox from './ContactBox'

const ContactOptions = () => {

    const boxes = [
        {
            icon: "fa-solid fa-location-dot",
            header: 'Visit us',
            infoOne: 'Sveavägen 31',
            infoTwo: '111 34 STOCKHOLM'
        },

        {
            icon: 'fa-solid fa-phone',
            header: 'Call us',
            infoOne: '+46 (8) 121 470 50',
            infoTwo: '+46 (8) 121 470 51'
        },

        {
            icon: 'fa-solid fa-envelope',
            header: 'Email us',
            infoOne: 'info@crito.com',
            infoTwo: 'support@crito.com'
        }
    ]

  return (
            
        <section className="contact-options">

        <div className="container">

            {
                boxes.map((box, index) => (
                    <ContactBox
                        key={index}
                        icon={box.icon}
                        header={box.header}
                        infoOne={box.infoOne}
                        infoTwo={box.infoTwo}
                        />
                ))
            }


        </div>


        </section>
  )
}

export default ContactOptions