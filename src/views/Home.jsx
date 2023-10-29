import React from 'react'
import Header from '../components/Header/Header'

import Footer from '@components/Footer/Footer'
import Showcase from '../components/Main/Showcase/Showcase'
import Brands from '../components/Main/Brands/Brands'

const Home = () => {
  return (
    <div className='wrapper'>

        <Header/>
        <Showcase />
        <Brands />
        <Footer/>
    </div>
  )
}

export default Home