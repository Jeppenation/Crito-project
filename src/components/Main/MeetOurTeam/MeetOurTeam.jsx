import React from 'react'
import '../../CSS-SCSS/Main/MeetOurTeam/MeetOurTeam.css'

import SectionTitle from '../../Generics/SectionTitle/SectionTitle'
import Buttons from '../../Generics/Buttons/Buttons'

import Kristine from '@images/TeamimageKristine.png'
import Mark from '@images/teamimagemark.png'
import Kimberly from '@images/teamimagekimberly.png'
import Justin from '@images/justinimagewilloman.png'
import Casandra from '@images/ellipse1.png'
import Amanda from '@images/amandaimage.png'
import Jack from '@images/jackimage.png'
import Pagi from '../../Generics/Pagi/Pagi'



const MeetOurTeam = () => {
  return (
    
    <section className="team">
    <div className="container">
        
       
        <div className='section-title'>
        <SectionTitle title='Meet Our Team' header='Experience Team Members' />
        <Buttons url='/team' type='transparent' title='Browse Team' />
        </div>
        


        <div className="team-images">
            <div className="team-person kristine">
                <img src={Kristine} alt="a lady with white cardigan and black stripes, gold necklace" />
                <h3 className="team-occupation">Kristine Palmer</h3>
                <p className="team-possition">Chef Operation Officer</p>
            </div>
            <div className="team-person marka">
                <img src={Mark} alt="a man in suit, crossing his hands, Mark Aubri" />
                <h3 className="team-occupation">Mark Aubri</h3>
                <p className="team-possition">Senior Consultant</p>
            </div>
            <div className="team-person kimberly">
                <img src={Kimberly} alt="a lady a black dress. with a book on her knees sitting by a window, Kimberly Hansen" />
                <h3 className="team-occupation">Kimberly Hansen</h3>
                <p className="team-possition">Senior Consultant</p>
            </div>
            <div className="team-person justin">
                <img src={Justin} alt="a man in all black, smiling towards the camera. Justin" />
                <h3 className="team-occupation">Justin Willoman</h3>
                <p className="team-possition">Senior Tech Consultant</p>
            </div>
        </div>

        {/* <div className="pagi">
            <a href="#" className="pagi-item">
                <div className="pagi-dot"></div>
            </a>
            <a href="#" className="pagi-item active">
                <div className="pagi-dot"></div>
            </a>
            <a href="#" className="pagi-item">
                <div className="pagi-dot"></div>
            </a>
            <a href="#" className="pagi-item">
                <div className="pagi-dot"></div>
            </a>
            <a href="#" className="pagi-item">
                <div className="pagi-dot"></div>
            </a>
        </div> */}
        <Pagi/>

        <div className="what-our-client-say">

            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>

            <div className="testimonials">
                <div className="testimonial">
                    <div className="review-stars">
                        <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    
                    <div className="testimonial-footer">
                        <div>
                            <img src={Casandra} alt="round picture of a lady name Cassandra. Background is green with foliage" />
                        </div>
                        <div>
                            <h3>Cassandra Warren</h3>
                            <p className="position-company">Business Manager, Dorfus</p>
                         </div>
                    </div>

                </div>
                <div className="testimonial">
                    <div className="review-stars">
                        <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    
                    <div className="testimonial-footer">
                        <div>
                            <img src={Amanda} alt="round picture of a lady name amanda." />
                        </div>
                        <div>
                            <h3>Amanda Tulling</h3>
                            <p className="position-company">Senior Developer, Square</p>
                         </div>
                    </div>

                </div>
                <div className="testimonial">
                    <div className="review-stars">
                        <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    
                    <div className="testimonial-footer">
                        <div>
                            <img src={Jack} alt="round picture of a man named Jack." />
                        </div>
                        <div>
                            <h3>Jack McDogglas</h3>
                            <p className="position-company">Key Account Manager, Gobona</p>
                         </div>
                    </div>

                </div>

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