import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import "./Home.scss"

const Home = () => {
  return (
      <div className="home">
          <Sidebar />
          <Dashboard/>
    </div>
  )
}

export default Home