import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <p className='logo'>Awesome-<span className='logo-span'>Blog</span></p>
        <div className='routes'>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='post-blogs'>Post Blogs</Link>
        </div>
    </div>
  )
}

export default NavBar