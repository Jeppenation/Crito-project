import React from 'react'
import FiveStarReview from './FiveStarReview'

const Reviews = ({image, alt, name, possition}) => {
  return (

    <div className="testimonial">
        <FiveStarReview/>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>

        <div className="testimonial-footer">
            <div>
                <img src={image} alt={alt} />
            </div>
            <div>
                <h3>{name}</h3>
                <p className="position-company">{possition}</p>
            </div>
        </div>

    </div>

  )
}

export default Reviews