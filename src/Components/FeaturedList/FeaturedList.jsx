import React from 'react'
import FeaturedInfo from '../FeaturedInfo/FeaturedInfo'
import "./FeaturedList.scss";


const arr = [{
  id: 1,
  icon: "./revenue.png",
  title: "Total Revenue",
  amount: "$2,129,436",
  iconName: "revenue-image",
  color: "#DDEFE0"
},
{
  id: 2,
  icon: "./transaction-big.png",
  title: "Total Transactions",
  amount: "1,520",
  iconName: "transaction-img",
  color: "#DDEFE0"
  },
  {
    id: 3,
    icon: "./likes.png",
    title: "Total Likes",
    amount: "9,721",
    iconName: "Likes-image",
    color: "#EFDADA"
  },
  {
    id: 4,
    icon: "./total_users.png",
    title: "Total Users",
    amount: "892",
    iconName: "total-users-image",
    color: "#DEE0EF"
  }]


const FeaturedList = () => {
  return (
      <div className="featured-list">
      {arr.map((item) => {
        return (
          <FeaturedInfo item={item} />
          )
        })}
      </div>
  )
}

export default FeaturedList