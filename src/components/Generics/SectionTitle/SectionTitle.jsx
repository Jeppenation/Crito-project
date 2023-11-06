import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({ title, header}) => {
  return (
    <div className="section-title">
      <p>{title}</p>
      <h2>{header}</h2>
    </div>
  )
}

export default SectionTitle