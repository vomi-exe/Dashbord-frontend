import React from 'react'
import "./FeaturedInfo.scss"

const FeaturedInfo = ({item}) => {
  return (
    <div style={{backgroundColor: item.color}} className="featured-info">
      <div className="icon-top">
        <img src={item.icon} alt={item.iconName} />
      </div>
      <div className="title">
        {item.title}
      </div>
      <div className="amount">
        {item.amount}        
      </div>
    </div>
  )
}

export default FeaturedInfo