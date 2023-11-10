import React from 'react'

const TeamBoxes = ({ image, alt, name, possition  }) => {
  return (
   
    <div className="team-person">
         <img src={image} alt={alt} />
         <h3 className="team-occupation">{name}</h3>
         <p className="team-possition">{possition}</p>
    </div>

  )
}

export default TeamBoxes