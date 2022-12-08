import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/nav-bar/NavBar'

const Main = () => {
  return (
    <div className='container'>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default Main