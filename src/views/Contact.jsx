import React from 'react'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ContactShowCase from '../components/Main/Contact.-Showcase/ContactShowCase'
import ContactOptions from '../components/Main/ContactOptions/ContactOptions'
import ContactMap from '../components/Main/ContactMap/ContactMap'
import ContactForm from '../components/Main/ContactForm/ContactForm'

const Contact = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <ContactShowCase/>
      <ContactOptions/>
      <ContactForm/>
      <ContactMap/>
      <Footer/>
    </div>
    
  )
}

export default Contact