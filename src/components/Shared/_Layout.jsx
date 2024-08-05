import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Aside from './Aside'

const _Layout = () => {
  return (
    <div>
      <Header/>
      
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default _Layout
