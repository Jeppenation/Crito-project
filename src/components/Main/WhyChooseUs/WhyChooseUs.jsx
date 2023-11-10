import React from 'react'
import '../../CSS-SCSS/Main/WhyChooseUs/WhyChooseUs.css'
import Image from '@images/2-ladys-chatting.png'
import SectionTitle from '../../Generics/SectionTitle/SectionTitle'
import WhyChooseUsLeft from './WhyChooseUsLeft'


const WhyChooseUs = () => {

    const leftBoxes = [
        {
        classN: 'wcu-left-box',
        icon: 'fa-regular fa-thumbs-up',
        title: 'Process Excellence'
        },
        {
          classN: 'wcu-left-box',
          icon: 'fa-regular fa-chess',
          title: 'Strategic Planning'
        },
        {
          classN: 'wcu-left-box',
          icon: 'fa-regular fa-pen-nib',
          title: 'Experience Design'
        },
        {
          classN: 'wcu-left-box wcu-left-box-last',
          icon: 'fa-regular fa-head-side-gear',
          title: 'Artificial Inteligence'
        },
        
    ]

  return (

    <section className="why-choose-us">
        <div className="container">
            <div className="wcu-overlaybox"></div>
            <div className="wcu-right">
                <div className="wcu-image">

                    <img src={Image} alt="two ladys chatting in a conference room with a wall of redbricks behind them" />
                </div>
            </div>
            <div className="wcu-left">
                
                <SectionTitle title='Why Choose Us' header='Why Why We Are The Best Business Consulting Agency '/>

                {
                    leftBoxes.map((left, index) => (
                        <WhyChooseUsLeft 
                            key={index}
                            classN={left.classN}
                            icon={left.icon}
                            title={left.title}

                        />
                    )) 
                    
                }
                    
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs