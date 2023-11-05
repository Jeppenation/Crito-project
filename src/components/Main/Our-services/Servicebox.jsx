import React from 'react'


const Servicebox = ({ title, url }) => {
  return (
    <a href={url} className="os-box">
      <h3>{title}</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in
        nam possimus.
      </p>
      <div className="arrow-btn">
        <i className="fa-regular fa-arrow-right"></i>
      </div>
    </a>
  )
}

export default Servicebox