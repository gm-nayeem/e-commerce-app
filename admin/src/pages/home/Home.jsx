import React from 'react'
import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import {userData} from '../../dummyData'

const Home = () => {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
    </div>
  )
}

export default Home;


