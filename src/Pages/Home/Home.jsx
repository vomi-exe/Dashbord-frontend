import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import Login from '../Login/Login'
import "./Home.scss"

const Home = () => {
  
  const [user, setUser] = useState(false); 

  const settingUser = () => {
    setUser(true);
  }
  
  return (
    <>
    { user
        ?
        (<div className = "home" >
          <Sidebar />
          <Dashboard/>
      </div>   
      ) : (
        <Login setUserAuth={settingUser}/>
      )

    }
  </>
  )
}

export default Home