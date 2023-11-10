import React from 'react'
import '../../CSS-SCSS/Main/NewsArticles/NewsArticles.css'
import GirlInClassroom from '@images/girl-in-classroom.png'
import DesktopImg from '@images/picture-desktop.png'
import BookMobile from '@images/book-css-mobile.png'
import Pagi from '../../Generics/Pagi/Pagi'
import SectionTitle from '../../Generics/SectionTitle/SectionTitle'
import Buttons from '../../Generics/Buttons/Buttons'

const NewsArticles = () => {
  return (
    <section className="article-news">
    <div className="container">
        
        
            {/* <SectionTitle title='Article & News' header='Get Every Single Articles & News' />

            <div className='Section-title'>
            <Buttons  url='/' type= '' title='Browse Articles' />
            </div> */}
            
            
        
        

        <div className="section-title">
            <p>Article & News</p>
            <h2>Get Every Single Articles & News</h2>
            <a className="btn-transparent" href="#">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></a>
        </div>

        <div className="news-articles">

            <article className="news">
                <img src={GirlInClassroom} alt="girl-in-classNameroom" />
                <p className="news-title"> Business</p>
                <h3>How To Use Digitalization In The classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                <div className="date-box">
                    <h3>25</h3>
                    <p>Mar</p>
                </div>
            </article>

            <article className="news">
                <img src={DesktopImg} alt="picture on a computer screen" />
                <p className="news-title"> Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                <div className="date-box">
                    <h3>17</h3>
                    <p>Mar</p>
                </div>
            </article>

            <article className="news">
                <img src={BookMobile} alt="a pile of 2 books and a mobile ontop" />
                <p className="news-title"> Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                <div className="date-box">
                    <h3>13</h3>
                    <p>Mar</p>
                </div>
            </article>

        </div>


        <Pagi/>

    </div>
</section>
  )
}

export default NewsArticles