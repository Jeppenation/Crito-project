import React from 'react'

const FeaturesBox = ( {url, icon, header} ) => {
  return (

        <a href={url} className="features-box">
           <i className={icon}></i>
           <h3>{header}</h3>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </a>

  )
}

export default FeaturesBox