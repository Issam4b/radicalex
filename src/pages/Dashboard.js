import React from 'react'
import Sider from '../cmp/Sidebar/Sider'
import "../styles/dashboard.css"
import plus from "../assets/add-square.svg"


const Dashboard = () => {
  return (
    <>
    <div className='dash-container'>
        
        
        <Sider/>  
        
        <div className='intern-container'>
        
        <div className='title-container'>
           <h2>Internships</h2>
           <button className='btn-top-right'> <img src={plus} className="space"/> Create New Internship</button>
        </div>
        </div>




    </div>



    {/* <div className='footer-container'>
      <h2>Extra footer</h2>


    </div> */}


    </>
  )

}

export default Dashboard

