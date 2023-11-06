import React from 'react'
import '../../CSS-SCSS/Main/Our-services/Ourservices.css'
import ServiceBox from './Servicebox';
import SectionTitle from '../../Generics/SectionTitle/SectionTitle';
import Buttons from '../../Generics/Buttons/Buttons';
import Vector1 from '@images/Vectorvector1.png'
import Vector2 from '@images/Vectorvector2.png'

const Ourservices = () => {

    const services = [
        {
          title: "Business Advice",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
          url: "/services/businessadvice",
        },
        {
          title: "Startup Business",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
          url: "/services/startupbusiness",
        },
        {
          title: "Financial Advice",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
          url: "/services/financialadvice",
        },
        {
          title: "Risk Management",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.",
          url: "/services/riskmanagement",
        },
      ];


  return (
    <section className="our-services">
        <img id="vector1" src={Vector1} alt="vector graphic" />
        <img id="vector2" src={Vector2} alt="vector graphic" />

        <div className="container">
        <SectionTitle
            title="Our Services"
            header="We Provide The Best Service For Consulting"
        />

        <div className="os-boxes">
            {services.map((service, index) => (
            <ServiceBox
                key={index}
                title={service.title}
                description={service.description}
                url={service.url}
            />
            ))}
        </div>

        <div className="center-content">
            <Buttons type="browse" url="/services" title="Browse Services" />
        </div>
        </div>
    </section>
  )
}

export default Ourservices