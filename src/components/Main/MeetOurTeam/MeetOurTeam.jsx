import React from 'react'
import '../../CSS-SCSS/Main/MeetOurTeam/MeetOurTeam.css'

import SectionTitle from '../../Generics/SectionTitle/SectionTitle'
import Buttons from '../../Generics/Buttons/Buttons'
import Pagi from '../../Generics/Pagi/Pagi'
import TeamBoxes from './TeamBoxes'
import FiveStarReview from './FiveStarReview'

import Kristine from '@images/TeamimageKristine.png'
import Mark from '@images/teamimagemark.png'
import Kimberly from '@images/teamimagekimberly.png'
import Justin from '@images/justinimagewilloman.png'
import Casandra from '@images/ellipse1.png'
import Amanda from '@images/amandaimage.png'
import Jack from '@images/jackimage.png'
import Reviews from './Reviews'



const MeetOurTeam = () => {

    const personnel = [
        {
            image: Kristine,
            alt: "a lady with white cardigan and black stripes, gold necklace",
            name: 'Kristine Palme',
            possition: 'Chef Operation Officer'
        },
        {
            image: Mark,
            alt: "a man in suit, crossing his hands, Mark Aubri",
            name: 'Mark Aubri',
            possition: 'Senior Consultant'
        },
        {
            image: Kimberly,
            alt: "a lady a black dress. with a book on her knees sitting by a window, Kimberly Hansen",
            name: 'Kimberly Hansen',
            possition: 'Senior Consultant'
        },
        {
            image: Justin,
            alt: "a man in all black, smiling towards the camera. Justin",
            name: 'Justin Willoman',
            possition: 'Senior Tech Consultant'
        },
    ]

    const review = [
        {
            image: Casandra,
            alt: 'round picture of a lady name Cassandra. Background is green with foliage',
            name: 'Cassandra Warren',
            possition: 'Business Manager, Dorfus'
        },
        {
            image: Amanda,
            alt: 'round picture of a lady name Amanda.',
            name: 'Amanda Tulling',
            possition: 'Senior Developer, Square'
        },
        {
            image: Jack,
            alt: 'round picture of a man named Jack.',
            name: 'Jack McDogglas',
            possition: 'Key Account Manager, Gobona'
        },
    ]

  return (
    
    <section className="team">
    <div className="container">
        
       
        <div className='section-title'>
        <SectionTitle title='Meet Our Team' header='Experience Team Members' />
        <Buttons url='/team' type='transparent' title='Browse Team' />
        </div>
        


        <div className="team-images">

            {
                personnel.map((person, index) => (
                    <TeamBoxes 
                        key={index}
                        image={person.image}
                        alt={person.alt}
                        name={person.name}
                        possition={person.possition}
                    />
                ))
            }


        </div>

   
        <Pagi/>

        <div className="what-our-client-say">

            <SectionTitle title='Testimonial' header='What Our Client Says' />

            <div className="testimonials">

                {
                    review.map((reviews, index) => (
                        <Reviews 
                            key={index}
                            image={reviews.image}
                            alt={reviews.alt}
                            name={reviews.name}
                            possition={reviews.possition}
                        />
                    ))
                }

            </div>
            <div className="center-content">
                <Buttons url='/reviews' type='black' title='All Reviews' />
            </div>

       </div>

        <div className="bord"></div>

       {/* <!-- section end div --> */}
    </div> 

        


</section>



  )
}

export default MeetOurTeam