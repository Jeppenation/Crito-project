import React from 'react'
import Header from '../components/Header/Header'

import Footer from '@components/Footer/Footer'
import Showcase from '../components/Main/Showcase/Showcase'
import Brands from '../components/Main/Brands/Brands'
import Features from '../components/Main/Features/Features'
import Aboutcompany from '../components/Main/About-company/Aboutcompany'
import Ourservices from '../components/Main/Our-services/Ourservices'

const Home = () => {
  return (
    <div className='wrapper'>

        <Header/>
        <Showcase />
        <Brands />
        <Features />
        <Aboutcompany/>
        {/* <Ourservices/> */}

        <Footer/>
    </div>
  )
}

export default Home