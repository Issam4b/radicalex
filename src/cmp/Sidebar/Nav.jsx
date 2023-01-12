import React from 'react'
import "../../styles/nav.css"



const Nav = ({image, title, isActive}) => {
  return (

    
    <div className={isActive ? "active-link" : "nav-dsp"}>
      <img src={image} className='nav-space' />
      <p className='text-size'>{title}</p>
      
    
    </div>
  )
}

export default Nav
