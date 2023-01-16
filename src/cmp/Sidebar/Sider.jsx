import React from 'react'
import Nav from './Nav'
import dashIcon from "../../assets/dashboard-3.svg"
import "../../styles/sider.css"
import logo from "../../assets/RadicallX-Black-Logo 1.svg"
import apprenIcon from "../../assets/medal-star.svg"
import internIcon from "../../assets/book.svg"
import jobIcon from "../../assets/briefcase.svg"
import settingIcon from "../../assets/setting-2.svg"
import Ic from "../../assets/icno.png"




// here is everything that's happening inside the sidebar

const Sider = () => {
  return (
    <div className='sider-container'>
      
      
      
      <img src={logo} className="nav-logo" alt="RadicalX"/>
           
      <Nav title="Dashboard" image={dashIcon} />
      <Nav title="Apprenticeships"  image={apprenIcon} />
      <Nav title="Internships" image={internIcon} isActive={true} />
      <Nav title="Jobs" image={jobIcon} />
      <Nav title="Settings" image={settingIcon} />
      
      <div className='nav-footer'>
        <Nav title="Adam Scott" image={Ic} />
      </div>






    </div>





  )
}

export default Sider
