import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import FeaturedList from '../../Components/FeaturedList/FeaturedList'
import "./Dashboard.scss"
import Chart from '../../Components/Chart/Chart'
import Schedule from '../../Components/Schedule/Schedule'
import TopProducts from '../../Components/Topproducts/TopProducts'

const Dashboard = () => {
  return (
      <div className="dashboard">
          <Topbar />
      <FeaturedList />
      <Chart />
      <div className="dashboard-last">
        <TopProducts />
        <Schedule />
      </div>
    </div>
  )
}

export default Dashboard