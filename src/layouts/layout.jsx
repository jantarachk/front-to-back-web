import React from 'react'
import { Outlet } from 'react-router'
import MainNav from '../components/MainNav'

function layout() {
  return (
    <div>
        <MainNav />
        <Outlet />
        <h1 className='text-center'> Footer </h1>
    </div>
  )
}

export default layout