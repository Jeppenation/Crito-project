import React from 'react'
import '../../CSS-SCSS/Main/ContactMap/ContactMap.css'
import Map from '@images/Map-address.png'

const ContactMap = () => {
  return (
    <section className="contact-map">
        <img src={Map} alt="map with the location" />
     </section>
  )
}

export default ContactMap