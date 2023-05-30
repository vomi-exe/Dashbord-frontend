import React from 'react'
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-sidebar">

        <div className="logo">
          Board.
        </div>
        <div className="route first">
          <img src="dashboard_icon.png" alt="dashbord-icon" />
          <div className="focused">DashBord</div>
        </div>
        <div className="route">
        <img src="transaction.png" alt="dashbord-icon" />
          <div>Transactions</div>
        </div>
        <div className="route">
        <img src="schedule_icon.png" alt="dashbord-icon" />
          <div>Schedules</div>
        </div>
        <div className="route">
        <img src="user_icon.png" alt="dashbord-icon" />
          <div>Users</div>
        </div>
        <div className="route">
        <img src="setting_icon.png" alt="dashbord-icon" />
          <div>Settings</div>
        </div>
      </div>
      <div className="bottom-sidebar">
        <div>Help</div>
        <div className="contact">Contact Us</div>
      </div>
    </div>
  )
}

export default Sidebar