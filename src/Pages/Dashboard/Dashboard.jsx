import React from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import FeaturedList from '../../Components/FeaturedList/FeaturedList'
import "./Dashboard.scss"

const Dashboard = () => {
  return (
      <div className="dashboard">
          <Topbar />
          <FeaturedList/>
    </div>
  )
}

export default Dashboard