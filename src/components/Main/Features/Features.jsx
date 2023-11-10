import React from 'react'
import '../../CSS-SCSS/Main/Features/Features.css'
import Buttons from '../../Generics/Buttons/Buttons'
import FeaturesBox from './FeaturesBox'
import SectionTitle from '../../Generics/SectionTitle/SectionTitle'

const Features = () => {

    const featureBoxes = [
        {
            url: '/',
            icon: 'fa-regular fa-handshake',
            header: 'Business Advice'
        },
        {
            url: '/',
            icon: 'fa-regular fa-lightbulb-exclamation-on',
            header: 'Startup Business'
        },
        {
            url: '/',
            icon: 'fa-solid fa-chart-mixed',
            header: 'Financial Advice'
        },
        {
            url: '/',
            icon: 'fa-sharp fa-regular fa-cube',
            header: 'Risk Management'
        }

    ]


  return (
    <section className="features-parent">
        <div className="container">
            <div className="features-flex">

                <SectionTitle title='Features' header='Our Accounting is trusted by thousand of companies' />
                
                    <div className="center-content">
                        <Buttons url='/' type='yellow' title='Learn more'/>
                    </div>
                    
                
            </div>

            <div className="features-grid">
                
                {
                    featureBoxes.map((feature, index) => (
                        <FeaturesBox
                            key={index}
                            url={feature.url}
                            icon={feature.icon}
                            header={feature.header}
                            
                            />
                    ))
                }
                
             </div>
        </div>
    </section>
  )
}

export default Features