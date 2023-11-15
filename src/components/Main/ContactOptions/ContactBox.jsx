import React from 'react'

const ContactBox = ({icon, header, infoOne, infoTwo}) => {
  return (
    <div className="contact-box">
        <div className="contact-box-icon"><i className={icon}></i></div>
        
        <div className="contact-box-text">
            <h2>{header}</h2>
            <p>{infoOne}</p>
            <p>{infoTwo}</p>
        </div>
    </div>
  )
}

export default ContactBox