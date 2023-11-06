import React from 'react'

import Header from '../components/Header/Header'
import Footer from '@components/Footer/Footer'
import Showcase from '../components/Main/Showcase/Showcase'
import Brands from '../components/Main/Brands/Brands'
import Features from '../components/Main/Features/Features'
import Aboutcompany from '../components/Main/About-company/Aboutcompany'
import Ourservices from '../components/Main/Our-services/Ourservices'
import WhyChooseUs from '../components/Main/WhyChooseUs/WhyChooseUs'
import ProjectCase from '../components/Main/ProjectCase/ProjectCase'
import MeetOurTeam from '../components/Main/MeetOurTeam/MeetOurTeam'
import NewsArticles from '../components/Main/NewsArticles/NewsArticles'
import Signup from '../components/Main/Signup/Signup'

const Home = () => {
  return (
    <div className='wrapper'>

        <Header/>
        <Showcase />
        <Brands />
        <Features />
        <Aboutcompany/>
        <Ourservices/>
        <WhyChooseUs/>
        <ProjectCase/>
        <MeetOurTeam/>
        <NewsArticles />
        <Signup/>
        <Footer/>
    </div>
  )
}

export default Home