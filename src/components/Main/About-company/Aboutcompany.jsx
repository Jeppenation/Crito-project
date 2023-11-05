import React from 'react'
import '../../CSS-SCSS/Main/About-company/Aboutcompany.css'
import Picture from '@images/lady-shirt.png'
import Buttons from '../../Generics/Buttons/Buttons'

const Aboutcompany = () => {
  return (
     <section className="about-company">
         <div className="container">
             <div className="img-box">
                 <img src={Picture} alt="lady with shirt holding a laptop, the founder of the company" />
                 <div className="overlay-box">
                     
                         <span className="name">Samantha Brown,</span>
                         <span className="position">Founder</span>
                         <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                     
                 </div>
             </div>
             <div className="about-company-text">
                 <div className="section-title">
                     <p>About Company</p>
                     <h2>We Are Business Consulting & Credit Repair Experts</h2>
                 </div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                 <div className="ac-buttons">
                     <Buttons url='/services' type='black' title='Learn more' />
                     <Buttons url='/' type='play'/>
                 </div>
             </div>
         </div>
     </section>
  )
}

export default Aboutcompany