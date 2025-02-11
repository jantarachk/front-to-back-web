import React from 'react'
import Sidebar from '../components/admin/Sidebar'
import HeaderAdmin from '../components/admin/HeaderAdmin'
import { Outlet } from 'react-router'

function layoutAdmin() {
  return (
    <div className='flex h-screen'>
        <Sidebar />
        <div className='flex flex-col flex-1'>
        <HeaderAdmin />
        <div className=' border p-2 m-2 flex-1'>
            <Outlet />
        </div>
        </div>
    </div>
  )
}

export default layoutAdmin