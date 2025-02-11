import React from 'react'
import Logout from '../Logout'

function HeaderAdmin() {
  return (
    <div className='bg-slate-800 text-amber-300 flex items-center justify-end px-4'>
        <Logout />
    </div>
  )
}

export default HeaderAdmin