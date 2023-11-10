import React from 'react'

const Articles = ({ image, alt, category, title, day, month }) => {
  return (

    <article className="news">
        <img src={image} alt={alt} />
        <p className="news-title"> {category}</p>
        <h3>{title}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
        <div className="date-box">
            <h3>{day}</h3>
            <p>{month}</p>
        </div>
    </article>

  )
}

export default Articles