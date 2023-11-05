import React from 'react'
import '../../CSS-SCSS/Main/Features/Features.css'
import Buttons from '../../Generics/Buttons/Buttons'

const Features = () => {
  return (
    <section class="features-parent">
        <div class="container">
            <div class="features-flex">
                <div class="section-title">
                    <p>Features</p>
                    <h2>Our Accounting is trusted by thousand of companies</h2>
                    
                </div>
                    <div class="center-content">
                        <Buttons url='/' type='yellow' title='Learn more'/>
                    </div>
                    
                
            </div>

            <div class="features-grid">
                <a href="#" class="features-box">
                    <i class="fa-regular fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </a>
                <a href="#" class="features-box">
                    <i class="fa-regular fa-lightbulb-exclamation-on"></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </a>
                <a href="#" class="features-box">
                    <i class="fa-solid fa-chart-mixed"></i>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </a>
                <a href="#" class="features-box">
                    <i class="fa-sharp fa-regular fa-cube"></i>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </a>
                </div>
        </div>
    </section>
  )
}

export default Features