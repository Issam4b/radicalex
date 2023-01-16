import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/dashboard.css'
import Cln from '../assets/calendar-2.svg'

const data = [
  {
    name: '100,000',
    uv:1500,
    pv: 200,
    amt: 100000,
  },
  {
    name: '6,500',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '850',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '375',
    uv: 2080,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '300',
    uv: 1090,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '150',
    uv: 90,
    pv: 3800,
    amt: 2500,
  },
  
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <div className='intern-container-btn'>
        <div className='another-cntnr-btn'>
        <div className='div-btn'>
        <button className='thisweek-btn'>This week</button>
        <button className='thismonth-btn'>This month</button> 
        </div>
        <button className='dates-btn'> <img src={Cln} className="calendar"/> Select dates</button>
             
        </div>
        
      <ResponsiveContainer width="100%" height="70%">
        <AreaChart
          width={500}
          height={4000}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

