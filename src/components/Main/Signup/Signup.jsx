import React from 'react'
import '../../CSS-SCSS/Main/Signup/Signup.css'
import Vector from '@images/Vectorelement3.png'
import Buttons from '../../Generics/Buttons/Buttons'

const Signup = () => {
  return (
<section className="signup-section">

    <img id="vector3" src={Vector} alt="vector graphic" />

    <div className="container">

        <div className="signup-title">
            <h2>Get News Updates By Signup </h2>
        </div>
        <div className="signup-box-class">
            <form className="signup-box">
                <i className="fa-regular fa-magnifying-glass"></i>
                <input type="text" placeholder="username@domain.com" />
            </form>
            <Buttons url='/' type='yellow' title='Subsribe' />
        </div>
    </div>
</section>
  )
}

export default Signup