import React from 'react'
import Sider from '../cmp/Sidebar/Sider'
import "../styles/dashboard.css"
import TextContainer from "../cmp/TextContainer"
import plus from "../assets/add-square.svg"
import Graph from '../cmp/Graph'
import TableGrid from '../cmp/TableGrid'

const Dashboard = () => {
  return (
    <>
    <div className='dash-container'>
        
        
        <Sider/>  
        
        <div className='intern-container'>
        
        <div className='title-container'>
           <h2>Internships</h2>
           <button className='btn-top-right'> <img src={plus} className="space" alt=''/> Create New Internship</button>
        </div>

        <div className='another-cntnr'>
          <TextContainer  title="Internship Insight" description="In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic." />
          <Graph />         
        </div>
        <TableGrid />

        
        
        

        </div>
        
        

      




    </div>



    {/* <div className='footer-container'>
      <h2>Extra footer</h2>


    </div> */}


    </>
  )

}

export default Dashboard

