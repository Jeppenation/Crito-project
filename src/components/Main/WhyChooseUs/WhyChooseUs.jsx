import React from 'react'
import '../../CSS-SCSS/Main/WhyChooseUs/WhyChooseUs.css'
import Image from '@images/2-ladys-chatting.png'
import SectionTitle from '../../Generics/SectionTitle/SectionTitle'


const WhyChooseUs = () => {
  return (

    <section className="why-choose-us">
        <div className="container">
            <div className="wcu-overlaybox"></div>
            <div className="wcu-right">
                <div className="wcu-image">
                    {/* <!-- <div className="wcu-overlaybox"></div> --> */}
                    <img src={Image} alt="two ladys chatting in a conference room with a wall of redbricks behind them" />
                </div>
            </div>
            <div className="wcu-left">
                
                <SectionTitle title='Why Choose Us' header='Why Why We Are The Best Business Consulting Agency '/>
                    
                <div className="wcu-left-box">
                    <i className="fa-regular fa-thumbs-up"></i>
                    <h3>Process Excellence</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="wcu-left-box">
                    <i className="fa-regular fa-chess"></i>
                    <h3>Strategic Planning</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="wcu-left-box">
                    <i className="fa-regular fa-pen-nib"></i>
                    <h3>Experience Design</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
                <div className="wcu-left-box wcu-left-box-last">
                    <i className="fa-regular fa-head-side-gear"></i>
                    <h3>Artificial Inteligence</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs