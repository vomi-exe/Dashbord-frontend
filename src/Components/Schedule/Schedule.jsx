import React from 'react'
import './Schedule.scss'

const Schedule = () => {
  return (
      <div className="schedule">
          <div className="top">
              <div className="top-left">
                  Today's Schedule
              </div>
              <top className="top-right">
                  See All <img src="./open-right.png" alt="open-all-schedule-icon" />
              </top>
          </div>
          <div className="bottom">
              <div className="schedule-item1 item">
                  <div className="schedule-color"></div>
                  <div className="schedule-details">
                      <div className="schedule-name">Meeting with suppliers from Kuta Bali</div>
                      <div className="schedule-time">14.00-15.00</div>
                      <div className="schedule-venue">at Sunset Road, Kuta, Bali</div>
                  </div>
              </div>
              <div className="schedule-item2 item">
                  <div className="schedule-color"></div>
                  <div className="schedule-details">
                      <div className="schedule-name">Meeting with suppliers from Kuta Bali</div>
                      <div className="schedule-time">14.00-15.00</div>
                      <div className="schedule-venue">at Sunset Road, Kuta, Bali</div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Schedule