import React from 'react'
import "./Topbar.scss"

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left-topbar">
        <div className="title">
            Dashboard
        </div>
      </div>
      <div className="right-topbar">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <img src="./search-icon.png" alt="search-icon" />
        </div>
        <div className='notification'>
          <img src="./bell.png" alt="bell-icon" />
        </div>
        <div className="avatar">
          <img src="./image.png" alt="avatar-person" />
        </div>
      </div>
    </div>
  )
}

export default Topbar