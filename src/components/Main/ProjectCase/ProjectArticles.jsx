import React from 'react'


const ProjectArticles = ({url, image, alt, text}) => {
  return (
    
    <a href={url} className="project">
       <img src={image} alt={alt} />
       <h3>{text}</h3>
       <div className="readmore">
         Read More <i className="fa-regular fa-arrow-up-right"></i>
       </div>
     </a>

  )
}

export default ProjectArticles


