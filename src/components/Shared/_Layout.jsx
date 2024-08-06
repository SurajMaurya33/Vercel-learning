import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Aside from './Aside'

const _Layout = () => {
  return (
    <div>
      <Header/>
      
      <Outlet />
    </div>
  )
}

export default _Layout
