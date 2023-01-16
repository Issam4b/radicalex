import React from 'react'
import "../styles/dashboard.css"


const TextContainer = ({title, description}) => {
  return (
    <div className='text-container'>
        <h3 className='spaceh3'>{title}</h3>
        <p className='spaceh6'>{description}</p>
      
    </div>
  )
}

export default TextContainer
