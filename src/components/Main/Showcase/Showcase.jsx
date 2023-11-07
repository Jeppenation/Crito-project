import React from 'react'
import img_backgroundlines from '@images/Rectangle607.png'
import img_showCase from '@images/showcase-img.svg'
import '../../CSS-SCSS/Main/Showcase/Showcase.css'
import Buttons from '../../Generics/Buttons/Buttons'
import 'bootstrap/dist/css/bootstrap.min.css';



const Showcase = () => {
  return (
  <section className="showcase">

      <img id="vector5" src={img_backgroundlines} alt="vector graphic" />

        <div className="container">
            <div className="content">
            <h1>We provide The Best business solutions</h1>
                <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                
                <Buttons url='/' type='yellow' title='Get consulting'/>
                <Buttons url='/services' title='Learn more' />
        
            </div>
            <img src={img_showCase} alt="showcase image of a man with a tablet" />
        </div>
</section>
  )
}

export default Showcase